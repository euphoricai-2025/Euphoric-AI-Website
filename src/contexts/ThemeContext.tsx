import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

// Theme state interface
interface ThemeState {
  isDark: boolean;
  isClient: boolean;
  isInitialized: boolean;
}

// Theme actions
type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_THEME'; payload: boolean }
  | { type: 'SET_CLIENT'; payload: boolean }
  | { type: 'INITIALIZE'; payload: boolean };

// Theme context interface
interface ThemeContextType {
  isDark: boolean;
  isClient: boolean;
  isInitialized: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

// Initial state
const initialState: ThemeState = {
  isDark: true, // Default to dark theme
  isClient: false,
  isInitialized: false,
};

// Theme reducer - more predictable than multiple useState calls
function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDark: !state.isDark,
      };
    case 'SET_THEME':
      return {
        ...state,
        isDark: action.payload,
      };
    case 'SET_CLIENT':
      return {
        ...state,
        isClient: action.payload,
      };
    case 'INITIALIZE':
      return {
        ...state,
        isDark: action.payload,
        isInitialized: true,
      };
    default:
      return state;
  }
}

// Safe localStorage operations
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return typeof window !== 'undefined' ? localStorage.getItem(key) : null;
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
      }
    } catch {
      // Silently fail - localStorage might be disabled
    }
  },
};

// Create context with default value
const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  isClient: false,
  isInitialized: false,
  toggleTheme: () => {},
  setTheme: () => {},
});

// Hook to use theme context
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  // This should never happen if provider is correctly set up
  if (!context) {
    // Fallback to prevent crashes in development
    console.error('useTheme must be used within a ThemeProvider');
    return {
      isDark: true,
      isClient: false,
      isInitialized: false,
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }

  return context;
}

// Theme provider component - using useReducer for better state management
export function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // Toggle theme function
  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE_THEME' });
  }, []);

  // Set specific theme function
  const setTheme = useCallback((isDark: boolean) => {
    dispatch({ type: 'SET_THEME', payload: isDark });
  }, []);

  // Client-side initialization effect
  useEffect(() => {
    // Mark as client-side
    dispatch({ type: 'SET_CLIENT', payload: true });

    // Load theme from localStorage after component mounts
    const savedTheme = safeLocalStorage.getItem('euphoric-theme');
    const initialTheme = savedTheme === 'light' ? false : true; // Default to dark

    dispatch({ type: 'INITIALIZE', payload: initialTheme });
  }, []);

  // Theme persistence and DOM manipulation effect
  useEffect(() => {
    // Only run on client-side after initialization
    if (!state.isClient || !state.isInitialized) return;

    // Save to localStorage
    safeLocalStorage.setItem('euphoric-theme', state.isDark ? 'dark' : 'light');

    // Apply theme to document
    try {
      const root = document.documentElement;
      if (state.isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } catch {
      // Silently fail if DOM manipulation fails
    }
  }, [state.isDark, state.isClient, state.isInitialized]);

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = React.useMemo(() => ({
    isDark: state.isDark,
    isClient: state.isClient,
    isInitialized: state.isInitialized,
    toggleTheme,
    setTheme,
  }), [state.isDark, state.isClient, state.isInitialized, toggleTheme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Export context for advanced usage
export { ThemeContext };

// Default export for convenience
export default ThemeProvider;