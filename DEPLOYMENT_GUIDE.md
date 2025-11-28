# Roomy - Deployment Guide

## Prerequisites
- GitHub account with your repository
- Vercel account (vercel.com)
- Google Play Developer account (for Android)
- Apple Developer account (for iOS)

## Step 1: Deploy to Vercel (Production)

### 1.1 Connect Repository
1. Go to vercel.com and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository (roomy)
4. Select the repository

### 1.2 Configure Environment Variables
In Vercel dashboard, go to Settings → Environment Variables and add:

\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_key
NEXT_PUBLIC_SITE_URL=https://roomy.ug
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
\`\`\`

### 1.3 Deploy
- Click "Deploy"
- Wait for build to complete
- Your app is now live at your Vercel URL

## Step 2: PWA Installation (No App Store Required)

Users can install your app directly from the browser:

### iOS
1. Open Roomy in Safari
2. Tap Share → Add to Home Screen
3. Name it "Roomy"
4. Tap Add

### Android
1. Open Roomy in Chrome
2. Tap menu (⋮) → Install app
3. Tap Install
4. Tap Open to launch

## Step 3: Native App Deployment (Capacitor)

### 3.1 Setup Capacitor
\`\`\`bash
npm install @capacitor/core @capacitor/cli
npx cap init roomy com.roomy.app
npm install @capacitor/ios @capacitor/android
\`\`\`

### 3.2 Build for Production
\`\`\`bash
npm run build
npx cap add ios
npx cap add android
npx cap copy
\`\`\`

### 3.3 iOS Deployment

#### Build for iOS
\`\`\`bash
npx cap open ios
\`\`\`

#### In Xcode:
1. Select target "Roomy"
2. Go to Signing & Capabilities
3. Add your Apple Developer Team
4. Change Bundle Identifier to com.roomy.app
5. Product → Archive
6. Upload to App Store Connect

#### In App Store Connect:
1. Create new app
2. Fill in app details:
   - App Name: Roomy
   - Primary Language: English
   - Bundle ID: com.roomy.app
   - SKU: roomy-uganda
   - User access: Full Access
3. Add app icon, screenshots, description
4. Set pricing
5. Submit for review

### 3.4 Android Deployment

#### Generate Signing Key
\`\`\`bash
keytool -genkey -v -keystore roomy.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias roomy
\`\`\`

#### Build Release APK
\`\`\`bash
npx cap open android
\`\`\`

#### In Android Studio:
1. Build → Generate Signed Bundle / APK
2. Select APK
3. Select keystore (roomy.keystore)
4. Fill in keystore password and key details
5. Select release variant
6. Build

#### In Google Play Console:
1. Create new app
2. Fill in app details:
   - App name: Roomy
   - Default language: English
   - App type: Applications
3. Go to Release → Production
4. Upload APK
5. Add app description, screenshots, icon
6. Set content rating
7. Set price (Free)
8. Submit for review

## Step 4: Monitoring & Analytics

### Enable Performance Monitoring
Your app automatically sends metrics to /api/metrics endpoint.

### Monitor in Vercel Dashboard
- Analytics tab shows traffic, performance
- Deployments tab shows deployment history
- Settings → Monitoring for logs

## Step 5: Updates & Maintenance

### Update Web App
1. Commit changes to main branch
2. Vercel automatically deploys
3. Users get updates next time they load

### Update Native App
1. Build and upload new version to app stores
2. Increment version number in app.json
3. Submit for review (typically 1-3 days approval time)

## Troubleshooting

### App not installing
- Ensure manifest.json is valid
- Check that app icons exist in public/images/

### Build errors
- Clear node_modules: \`rm -rf node_modules && npm install\`
- Check environment variables are set
- Verify all required files exist

### Slow performance
- Check Performance tab in DevTools
- Review Vercel Analytics
- Optimize images and lazy load components

## Support
For issues, contact support at roomy@example.com or create an issue on GitHub.
\`\`\`
