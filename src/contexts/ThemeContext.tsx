import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  const [isClient, setIsClient] = useState(false);

  // Set client flag and load theme from localStorage after component mounts
  useEffect(() => {
    setIsClient(true);
    try {
      const saved = localStorage.getItem('theme');
      if (saved) {
        setIsDark(saved === 'dark');
      }
    } catch (error) {
      console.warn('Failed to load theme from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (!isClient) return; // Don't run on server

    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
  }, [isDark, isClient]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};