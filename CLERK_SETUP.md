# Clerk Authentication Setup

This quiz app now uses **Clerk** for authentication instead of Supabase Auth.

## 🔑 Setup Steps

### 1. Create a Clerk Account

1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application
3. Get your API keys from the Clerk dashboard

### 2. Configure Environment Variables

Add these to your `.env.local`:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
CLERK_WEBHOOK_SECRET=whsec_xxxxx

# Supabase (Database Only - NOT for Auth)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxx
```

### 3. Configure Clerk Webhooks

1. In Clerk Dashboard, go to **Webhooks**
2. Click **Add Endpoint**
3. Set URL: `https://your-domain.com/api/webhooks/clerk`
   - For development: Use ngrok or similar to expose localhost
4. Subscribe to events:
   - `user.created`
   - `user.updated`
   - `user.deleted`
5. Copy the webhook secret to `CLERK_WEBHOOK_SECRET`

### 4. Set Up User Metadata

In Clerk, configure public metadata for roles:

1. Go to **Users** in Clerk Dashboard
2. For each user, add public metadata:
```json
{
  "role": "admin"
}
```
or
```json
{
  "role": "intern"
}
```

**Default role is `intern` if not specified.**

### 5. Update Database

Run the new schema to update your Supabase database:

```bash
# Connect to your Supabase project
psql <your-supabase-connection-string>

# Or use the Supabase SQL Editor
# Copy/paste the contents of supabase/schema.sql
```

## 🎨 Built-in Clerk Components

The app uses Clerk's pre-built components:

- **Sign In**: `/sign-in` (automatic)
- **Sign Up**: `/sign-up` (automatic) 
- **User Button**: Dropdown menu in Navbar

## 🔒 Route Protection

Routes are protected by Clerk middleware:

| Route | Unauthenticated | Intern | Admin |
|-------|----------------|--------|-------|
| `/sign-in` | ✅ | Redirect to `/dashboard` | Redirect to `/dashboard` |
| `/sign-up` | ✅ | Redirect to `/dashboard` | Redirect to `/dashboard` |
| `/dashboard` | Redirect to `/sign-in` | ✅ | ✅ |
| `/admin/*` | Redirect to `/sign-in` | Redirect to `/dashboard` | ✅ |
| `/quiz/*` | Redirect to `/sign-in` | ✅ | ✅ |

## 👤 User Management

- **Profile Sync**: Webhook automatically creates/updates profiles in Supabase
- **Role Management**: Set roles via Clerk public metadata
- **Email**: Managed through Clerk
- **Password**: Managed through Clerk

## 🧪 Testing

### Test Admin Flow
1. Sign up at `/sign-up`
2. In Clerk Dashboard → Users → Select user → Public metadata
3. Add: `{"role": "admin"}`
4. Refresh app → Admin badge appears in navbar
5. Access `/admin/quizzes`

### Test Intern Flow
1. Sign up (default role is intern)
2. Try accessing `/admin/quizzes` → redirects to `/dashboard`
3. Can access quizzes and take them

## 🔄 Migration from Supabase Auth

> [!WARNING]
> Existing users will need to re-register via Clerk

The database now uses `clerk_user_id` instead of Supabase auth IDs.

## 📚 Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Next.js + Clerk Guide](https://clerk.com/docs/quickstarts/nextjs)
- [Webhooks](https://clerk.com/docs/integrations/webhooks)
