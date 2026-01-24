# Deploy to Render - Step by Step Guide

This guide will help you deploy your Aggregate Hub application to Render's free tier.

## Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Render Account** - Sign up at [render.com](https://render.com) (free)
3. **Gmail App Password** - For email functionality (already set up)

---

## Step 1: Push Your Code to GitHub

If your code isn't already on GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

---

## Step 2: Sign Up / Login to Render

1. Go to [render.com](https://render.com)
2. Click **"Get Started for Free"** or **"Sign In"**
3. Sign up with your GitHub account (recommended for easy deployment)

---

## Step 3: Create a New Web Service

1. In your Render dashboard, click **"New +"** button
2. Select **"Web Service"**
3. Connect your GitHub account if not already connected
4. Select your repository: **Aggregate-Hub** (or your repo name)

---

## Step 4: Configure Your Service

Fill in the following settings:

### Basic Settings:
- **Name**: `aggregate-hub` (or any name you prefer)
- **Region**: Choose closest to your users (e.g., `Singapore` for India)
- **Branch**: `main` (or your default branch)
- **Root Directory**: Leave empty (root of repo)
- **Runtime**: `Node`
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm run start`

### Environment Variables:
Click **"Add Environment Variable"** and add:

1. **NODE_ENV**
   - Key: `NODE_ENV`
   - Value: `production`

2. **PORT** (Render sets this automatically, but you can add it)
   - Key: `PORT`
   - Value: `10000` (Render uses port 10000)

3. **EMAIL_USER**
   - Key: `EMAIL_USER`
   - Value: `akjeyamtraders6@gmail.com`

4. **EMAIL_PASSWORD**
   - Key: `EMAIL_PASSWORD`
   - Value: `your_gmail_app_password_here` (paste your 16-character app password)

### Plan:
- Select **"Free"** plan

---

## Step 5: Deploy

1. Click **"Create Web Service"**
2. Render will start building your application
3. You'll see build logs in real-time
4. Deployment takes 5-10 minutes

---

## Step 6: Access Your Application

Once deployed:
- Your app will be available at: `https://aggregate-hub.onrender.com` (or your custom name)
- Render provides a free HTTPS certificate automatically
- The URL will be: `https://YOUR_SERVICE_NAME.onrender.com`

---

## Important Notes

### Free Tier Limitations:
- **Spins down after 15 minutes of inactivity**
  - First request after spin-down takes ~30 seconds
  - Subsequent requests are fast
- **750 hours/month free** (enough for 24/7 if you stay under limits)
- **512MB RAM** - Should be enough for your app

### Environment Variables:
- Never commit `.env` file to GitHub (already in `.gitignore`)
- Always set sensitive values in Render dashboard
- Update `EMAIL_PASSWORD` in Render if you change it

### Custom Domain (Optional):
1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain
4. Update DNS records as instructed

---

## Troubleshooting

### Build Fails:
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Render uses Node 20 by default)

### App Not Starting:
- Check start command: `npm run start`
- Verify `dist/index.cjs` exists after build
- Check logs for error messages

### Emails Not Sending:
- Verify `EMAIL_USER` and `EMAIL_PASSWORD` are set correctly
- Check Render logs for email errors
- Ensure Gmail App Password is correct (no spaces)

### App Spins Down:
- This is normal on free tier
- First request after 15 min inactivity will be slow (~30 sec)
- Consider upgrading to paid plan for always-on service

---

## Updating Your App

1. Push changes to GitHub
2. Render automatically detects changes
3. Triggers new deployment
4. Your app updates automatically

---

## Monitoring

- View logs in real-time from Render dashboard
- Set up email alerts for deployment failures
- Monitor service health

---

## Cost

**Free Tier Includes:**
- ✅ Web service hosting
- ✅ Automatic SSL/HTTPS
- ✅ Auto-deploy from GitHub
- ✅ 750 hours/month
- ✅ 512MB RAM
- ✅ 100GB bandwidth/month

**After Free Tier:**
- $7/month for always-on service (no spin-down)
- More resources available

---

## Next Steps

1. Test your contact form after deployment
2. Verify emails are being sent
3. Set up a custom domain (optional)
4. Monitor your application

Your app is now live! 🎉

