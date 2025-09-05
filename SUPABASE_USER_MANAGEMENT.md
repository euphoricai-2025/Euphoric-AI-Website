# Supabase User Management Guide

## Understanding the Two-Layer System

Supabase uses two separate systems for user management:

1. **Supabase Auth** - Handles authentication (login credentials)
2. **Database Tables** (e.g., profiles) - Stores additional user data

## How to Properly Delete a User

### Option 1: Delete from Supabase Dashboard (Recommended)

1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **Users**
3. Find the user by email
4. Click the three dots menu → **Delete user**
5. This will remove the user from both Auth and trigger cascade deletion in profiles table (if configured)

### Option 2: Using Supabase Admin API

```javascript
// Server-side only (requires service_role key)
const { data, error } = await supabase.auth.admin.deleteUser(userId)
```

### Option 3: Manual SQL (Database Console)

If you need to clean up orphaned auth records:

```sql
-- First, check if user exists in auth.users
SELECT * FROM auth.users WHERE email = 'user@example.com';

-- Delete from auth.users (this cascades to profiles if foreign keys are set up)
DELETE FROM auth.users WHERE email = 'user@example.com';
```

## Common Issues and Solutions

### Issue: "User already registered" error after deleting from profiles table

**Cause:** User was only deleted from the profiles table, not from Supabase Auth.

**Solution:**
1. Go to Supabase Dashboard → Authentication → Users
2. Delete the user from there
3. Or use the admin API to delete the user programmatically

### Setting Up Proper Cascade Deletion

To automatically delete profile records when auth users are deleted:

```sql
-- Add foreign key constraint with cascade delete
ALTER TABLE public.profiles
ADD CONSTRAINT profiles_id_fkey 
FOREIGN KEY (id) 
REFERENCES auth.users(id) 
ON DELETE CASCADE;
```

## Best Practices

1. **Always delete users through Supabase Auth** first, not just from database tables
2. **Set up cascade deletion** to maintain data integrity
3. **Use RLS policies** to prevent unauthorized deletions
4. **Implement soft deletes** for audit trails if needed

## Testing User Registration

After properly deleting a user:

1. Clear browser cache and cookies
2. Try registering with the same email
3. The registration should now work successfully

## Troubleshooting Commands

```sql
-- Check if email exists in auth system
SELECT id, email, created_at FROM auth.users WHERE email = 'your-email@example.com';

-- Check if profile exists
SELECT * FROM public.profiles WHERE email = 'your-email@example.com';

-- Clean up orphaned profiles (if any)
DELETE FROM public.profiles 
WHERE id NOT IN (SELECT id FROM auth.users);
```

## Important Notes

- Deleting from profiles table alone does NOT remove authentication credentials
- Supabase Auth is the source of truth for user existence
- Always handle user deletion at the Auth level for complete removal