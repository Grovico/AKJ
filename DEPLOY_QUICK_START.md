# Quick Start - Deploy to Render

## 🚀 Fast Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Render deployment"
git push
```

### 2. Deploy on Render

1. Go to [render.com](https://render.com) → Sign up/Login
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub → Select your repository
4. Configure:
   - **Name**: `aggregate-hub`
   - **Build Command**: `npm install --include=dev && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: Free

5. Add Environment Variables:
   ```
   NODE_ENV = production
   PORT = 10000
   EMAIL_USER = akjeyamtraders6@gmail.com
   EMAIL_PASSWORD = your_gmail_app_password
   ```

6. Click **"Create Web Service"**

### 3. Wait for Deployment
- Build takes 5-10 minutes
- Your app will be live at: `https://aggregate-hub.onrender.com`

### 4. Test
- Visit your URL
- Test the contact form
- Check that emails are sent

## ✅ Done!

Your app is now live on Render's free tier.

**Note**: Free tier spins down after 15 min inactivity. First request may take ~30 seconds.

---

For detailed instructions, see [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)

