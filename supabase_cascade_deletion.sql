-- Supabase Cascade Deletion Setup
-- This SQL script sets up automatic deletion between auth.users and profiles table

-- OPTION 1: Forward Cascade (Recommended)
-- When auth.users is deleted, profiles is automatically deleted
-- This is likely already set up if you used Supabase templates

-- First, check if foreign key constraint exists
ALTER TABLE public.profiles
DROP CONSTRAINT IF EXISTS profiles_id_fkey;

-- Add foreign key with CASCADE DELETE
ALTER TABLE public.profiles
ADD CONSTRAINT profiles_id_fkey 
FOREIGN KEY (id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;

-- OPTION 2: Reverse Cascade with Trigger
-- When profiles is deleted, auth.users is also deleted
-- WARNING: This gives database-level users ability to delete auth records

-- Create a function to delete auth user when profile is deleted
CREATE OR REPLACE FUNCTION public.handle_profile_deleted()
RETURNS TRIGGER AS $$
BEGIN
  -- Delete the corresponding auth user
  DELETE FROM auth.users WHERE id = OLD.id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger that fires BEFORE profile deletion
DROP TRIGGER IF EXISTS on_profile_deleted ON public.profiles;
CREATE TRIGGER on_profile_deleted
  BEFORE DELETE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_profile_deleted();

-- OPTION 3: Safer Admin Function Approach (RECOMMENDED)
-- Create a function that can only be called by authenticated users or admins

CREATE OR REPLACE FUNCTION public.delete_user_completely(user_email text)
RETURNS void AS $$
DECLARE
  user_id uuid;
BEGIN
  -- Get user ID from email
  SELECT id INTO user_id FROM auth.users WHERE email = user_email;
  
  IF user_id IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;
  
  -- Delete from profiles first (in case no cascade is set)
  DELETE FROM public.profiles WHERE id = user_id;
  
  -- Delete from auth.users
  DELETE FROM auth.users WHERE id = user_id;
  
  -- You can add deletion from other tables here
  -- DELETE FROM public.subscriptions WHERE user_id = user_id;
  -- DELETE FROM public.contact_submissions WHERE email = user_email;
  
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users (optional)
-- GRANT EXECUTE ON FUNCTION public.delete_user_completely(text) TO authenticated;

-- OPTION 4: Admin Dashboard Function with RLS
-- This is the safest approach for production

CREATE OR REPLACE FUNCTION public.admin_delete_user(target_user_id uuid)
RETURNS jsonb AS $$
DECLARE
  result jsonb;
BEGIN
  -- Check if current user is admin (you need to implement your admin check logic)
  -- For example, check if user has admin role in profiles table
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() 
    AND role = 'admin'  -- Assuming you have a role column
  ) THEN
    RAISE EXCEPTION 'Unauthorized: Admin access required';
  END IF;
  
  -- Perform deletion
  DELETE FROM auth.users WHERE id = target_user_id;
  
  result := jsonb_build_object(
    'success', true,
    'message', 'User deleted successfully',
    'deleted_user_id', target_user_id
  );
  
  RETURN result;
EXCEPTION
  WHEN OTHERS THEN
    result := jsonb_build_object(
      'success', false,
      'message', SQLERRM
    );
    RETURN result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Test the cascade deletion
-- To test if cascade is working:
-- 1. Create a test user
-- 2. Check both auth.users and public.profiles have the user
-- 3. Delete from auth.users
-- 4. Verify profiles entry is also gone

-- Example test queries:
/*
-- Check user exists in both tables
SELECT 'auth.users' as table_name, id, email FROM auth.users WHERE email = 'test@example.com'
UNION ALL
SELECT 'profiles' as table_name, id, email FROM public.profiles WHERE email = 'test@example.com';

-- Delete user (choose one method)
-- Method 1: Direct auth deletion (if cascade is set up)
DELETE FROM auth.users WHERE email = 'test@example.com';

-- Method 2: Using the complete deletion function
SELECT public.delete_user_completely('test@example.com');

-- Method 3: Admin function with user ID
SELECT public.admin_delete_user('user-uuid-here');

-- Verify deletion
SELECT 'auth.users' as table_name, COUNT(*) as count FROM auth.users WHERE email = 'test@example.com'
UNION ALL
SELECT 'profiles' as table_name, COUNT(*) as count FROM public.profiles WHERE email = 'test@example.com';
*/

-- IMPORTANT NOTES:
-- 1. OPTION 1 (Forward Cascade) is standard and recommended
-- 2. OPTION 2 (Reverse Trigger) can be dangerous as it allows profile deletion to affect auth
-- 3. OPTION 3 (Function) provides controlled deletion with proper permissions
-- 4. OPTION 4 (Admin Function) is best for production with role-based access
-- 5. Always test in development first before applying to production