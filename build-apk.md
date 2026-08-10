# How to Install & Build APK for Phone 📱

This app is configured as a Progressive Web App (PWA) with native system push notifications, background sync, and offline support.

---

## Option 1: 1-Tap PWA Phone Installation (Recommended)

Installing as a PWA gives you native app performance, launcher icon, full-screen display, and system notifications without needing to compile code.

### On Android (Chrome / Edge / Firefox):
1. Open the website URL on your mobile phone browser.
2. Tap the **"📱 Install App on Phone"** button in the app card, OR open the browser menu (`⋮`) and tap **"Install App"** or **"Add to Home Screen"**.
3. Confirm installation. The app icon will be added directly to your phone's app drawer and home screen.
4. Open the app from your home screen and tap **"Enable Phone Notifications"**.

### On iPhone / iOS (Safari):
1. Open the website URL in Safari on your iPhone.
2. Tap the **Share** icon (bottom bar).
3. Scroll down and tap **"Add to Home Screen"**.
4. Open the app from your iPhone home screen to grant notification permissions.

---

## Option 2: Generate a Native Android `.apk` Package

If you want an installable `.apk` file (for side-loading onto Android devices or publishing to Google Play Store):

### Method A: Using PWABuilder (Online - 1 Minute)
1. Deploy your timetable app to Netlify / Vercel / GitHub Pages (or run local HTTPS tunnel via `npx localtunnel --port 5500`).
2. Go to [PWABuilder.com](https://www.pwabuilder.com).
3. Enter your web app URL and click **Build My PWA**.
4. Click **Android** -> **Download APK / Package**.
5. Transfer the `.apk` file to your Android phone and install it!

### Method B: Using Bubblewrap CLI (Local Node.js Command Line)
Run the following commands in your terminal to build a Trusted Web Activity (TWA) Android APK:

```bash
# 1. Install Bubblewrap CLI globally
npm install -g @bubblewrap/cli

# 2. Initialize Android Project from manifest
bubblewrap init --manifest=https://your-domain.com/manifest.json

# 3. Build the APK package
bubblewrap build
```

This generates `app-release-signed.apk` in your project folder!
