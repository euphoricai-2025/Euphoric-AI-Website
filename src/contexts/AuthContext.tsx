import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);

      // Handle OAuth sign in success - redirect to Calendly for new registrations
      if (event === 'SIGNED_IN' && session?.user) {
        // Check if this is a new user registration (created_at is recent)
        const userCreatedAt = new Date(session.user.created_at);
        const now = new Date();
        const timeDifference = now.getTime() - userCreatedAt.getTime();
        const isNewUser = timeDifference < 60000; // Less than 1 minute ago

        if (isNewUser) {
          // Store session data
          localStorage.setItem('supabase.auth.token', JSON.stringify(session));
          // Redirect to Calendly for new registrations
          window.location.href = 'https://calendly.com/euphoricai-aivoiceagents-demo/30min';
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.user && data.session) {
        // Store session data for dashboard access
        localStorage.setItem('supabase.auth.token', JSON.stringify(data.session));
        
        // Redirect to dashboard with session
        window.location.href = 'https://app.euphoricai.io/';
      }
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Sign in failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      if (data.user && data.session) {
        // Store session data for dashboard access
        localStorage.setItem('supabase.auth.token', JSON.stringify(data.session));
        
        // Redirect to Calendly for onboarding
        window.location.href = 'https://calendly.com/euphoricai-aivoiceagents-demo/30min';
      }
    } catch (error) {
      if (error instanceof Error && error.message === 'User already registered') {
        throw new Error('An account with this email already exists. Please sign in or reset your password.');
      }
      throw new Error(error instanceof Error ? error.message : 'Sign up failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) throw error;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Google sign in failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Sign out failed');
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};