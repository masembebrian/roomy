# Roomy App Setup Guide

## Prerequisites
- Node.js 18+ installed
- A Supabase account (free tier works)
- Git installed

## Setup Instructions

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd roomy
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
# or
pnpm install
# or
yarn install
\`\`\`

### 3. Set Up Supabase

#### Create a Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be created (takes ~2 minutes)

#### Get Your API Keys
1. In your Supabase dashboard, go to Settings > API
2. Copy the "Project URL" and "anon public" key

#### Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Edit `.env.local` and add your Supabase credentials:
   \`\`\`env
   NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   \`\`\`

### 4. Set Up Database Tables

1. In your Supabase dashboard, go to the SQL Editor
2. Run the SQL scripts in this order:
   - `scripts/01-create-tables.sql`
   - `scripts/02-create-functions.sql`
   - `scripts/03-seed-data.sql`

### 5. Configure Authentication (Optional)

#### Enable Email Authentication
1. Go to Authentication > Providers
2. Email is enabled by default

#### Enable Google OAuth (Optional)
1. Go to Authentication > Providers > Google
2. Enable Google provider
3. Add your Google OAuth credentials
4. Add authorized redirect URLs:
   - `http://localhost:3000/auth/callback` (for development)
   - `https://your-domain.com/auth/callback` (for production)

### 6. Run the Development Server

\`\`\`bash
npm run dev
# or
pnpm dev
# or
yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Deploy to Vercel

#### Option 1: Using Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

#### Option 2: Using Vercel CLI
\`\`\`bash
npm i -g vercel
vercel login
vercel
\`\`\`

Follow the prompts and add your environment variables when asked.

## Features

### ✅ Authentication
- Email/password sign up and sign in
- Google OAuth
- Phone number authentication
- Secure session management

### ✅ Booking System
- Create and manage bookings
- Automatic confirmation codes
- Real-time notifications
- Status tracking

### ✅ Notifications
- Automatic booking notifications
- Real-time updates
- Email notifications (configure in Supabase)

### ✅ User Profiles
- Customizable profiles
- Verification system
- Profile images

## Troubleshooting

### "supabaseUrl is required" Error
- Make sure `.env.local` exists and contains valid Supabase credentials
- Restart your development server after adding environment variables
- In Vercel, ensure environment variables are added in Project Settings > Environment Variables

### Build Errors
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check that all environment variables are set

### Database Errors
- Ensure all SQL scripts ran successfully
- Check Row Level Security policies in Supabase
- Verify user is authenticated before making database calls

## Support

For issues and questions:
- Check the [GitHub Issues](your-repo-url/issues)
- Review the [Supabase Docs](https://supabase.com/docs)
- Visit the [Next.js Docs](https://nextjs.org/docs)

## License

MIT
