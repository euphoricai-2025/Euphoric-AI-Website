# User Deletion Guide for Euphoric AI

## Quick Setup (Run Once in Supabase SQL Editor)

For automatic deletion when removing from profiles table, run this SQL:

```sql
-- This creates a trigger that deletes auth user when profile is deleted
CREATE OR REPLACE FUNCTION public.handle_profile_deleted()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM auth.users WHERE id = OLD.id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_profile_deleted
  BEFORE DELETE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_profile_deleted();
```

## How It Works

After setting up the trigger above:
- When you `DELETE FROM profiles WHERE email = 'user@example.com'`
- It automatically deletes from `auth.users` too
- No more "user already exists" errors!

## Alternative: Safe Delete Function

For more control, create this function instead:

```sql
CREATE OR REPLACE FUNCTION public.delete_user_completely(user_email text)
RETURNS void AS $$
DECLARE
  user_id uuid;
BEGIN
  SELECT id INTO user_id FROM auth.users WHERE email = user_email;
  
  IF user_id IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;
  
  -- Delete from all tables
  DELETE FROM public.profiles WHERE id = user_id;
  DELETE FROM public.subscriptions WHERE user_id = user_id;
  DELETE FROM auth.users WHERE id = user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

Then use it like:
```sql
SELECT delete_user_completely('user@example.com');
```

## Testing the Setup

1. Create a test user (sign up with a test email)
2. Delete them using one of these methods:
   ```sql
   -- Method 1: Delete from profiles (if trigger is set up)
   DELETE FROM profiles WHERE email = 'test@example.com';
   
   -- Method 2: Use the function (if function is set up)
   SELECT delete_user_completely('test@example.com');
   ```
3. Try to sign up with the same email - it should work!

## Important Notes

⚠️ **Warning**: These methods permanently delete users. There's no undo!

✅ **Best Practice**: Always delete users at the database level, not from your app, unless you've implemented proper admin controls.

🔒 **Security**: The trigger runs with SECURITY DEFINER, meaning it has elevated permissions to delete from auth.users.

## Checking If Setup Is Active

Run this to see if the trigger exists:
```sql
SELECT trigger_name 
FROM information_schema.triggers 
WHERE trigger_name = 'on_profile_deleted';
```

If it returns a row, the auto-deletion is active!