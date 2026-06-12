# Hostinger Deployment Quick Start

## 5-Minute Setup

### Step 1: GitHub Integration (Recommended)
1. Log in to [Hostinger Control Panel](https://hpanel.hostinger.com)
2. Go to **Web Hosting** → Your domain
3. Find **GitHub Apps** or **Git Integration** in the left menu
4. Click **Connect to GitHub**
5. Authorize Hostinger to access your GitHub account
6. Select `ingomeinelt/keramion` repository
7. Choose `main` branch

### Step 2: Configure Node.js
1. In Hostinger, go to **Node.js** section (usually under App Management)
2. Set these values:
   - **Node Version:** 20.x or higher
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
   - **NPM Commands:** `npm ci`

### Step 3: Set Environment Variables
In Hostinger Control Panel under **Environment Variables**, add:

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=<your-hostinger-email>
SMTP_PASSWORD=<your-app-specific-password>
SMTP_FROM=noreply@keramion.com
```

**Getting your Hostinger email app password:**
1. In Hostinger hPanel, go to **Email** → **Mailboxes**
2. Click your email account
3. Find **App Passwords** section
4. Create a new app password for "Node.js App"
5. Copy the generated password to `SMTP_PASSWORD`

### Step 4: Deploy
1. Click **Deploy** or wait for auto-deployment
2. Hostinger will automatically:
   - Pull the code from GitHub
   - Install dependencies (`npm ci`)
   - Build the project (`npm run build`)
   - Start the application

3. Check **Deployment Logs** to see progress
4. Your site will be live at your domain within 2-5 minutes

## Verify Deployment

✅ **Checklist:**

1. **Site loads:** Visit your domain in browser
2. **Contact form works:** Fill out form, check if email arrives at ingo@keramion.com
3. **Consultation booking:** Click "Book Consultation", submit form
4. **Email configuration:** Both forms should trigger confirmation emails
5. **Performance:** Page should load in < 2 seconds

## If Forms Aren't Sending Emails

### Troubleshoot Email Configuration:

1. **Verify SMTP credentials:**
   - Go to Hostinger Email section
   - Confirm email address matches `SMTP_USER`
   - Confirm app password is correct (not your mail login password)

2. **Check environment variables:**
   - Go to Hostinger Control Panel
   - Verify all SMTP variables are set (no typos)
   - Redeploy after changing variables

3. **Review application logs:**
   - In Hostinger, check **Deployment Logs** or **Application Logs**
   - Look for SMTP connection errors
   - Common error: "Invalid credentials" → wrong app password

4. **Test with different email:**
   - Modify contact form temporarily to send to a test email
   - Helps isolate whether issue is SMTP config or recipient email

### Alternative Email Providers:

**If you want to use Gmail instead:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-character-app-password
SMTP_FROM=noreply@keramion.com
```
[Create Gmail App Password →](https://support.google.com/accounts/answer/185833)

## Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| **404 Not Found** | Check Node.js version is 20+ in Hostinger settings |
| **Port already in use** | Hostinger handles port assignment - check deployment logs |
| **Forms return 500 error** | Check SMTP variables are all set correctly |
| **Website times out** | Increase Node.js memory limit in Hostinger settings |
| **Code not updating** | Wait 2-5 min for auto-deployment, or manually trigger in panel |

## Next: Custom Domain

1. In Hostinger, go to **Domains**
2. Point your domain's nameservers to Hostinger
3. Or update DNS records if using another registrar
4. Enable SSL certificate (Hostinger provides free Let's Encrypt)
5. Enforce HTTPS in Hostinger panel

## Next: Email Setup (Optional)

Set up custom email addresses at your domain:

1. In Hostinger, go to **Email**
2. Create mailboxes (e.g., `info@keramion.com`, `support@keramion.com`)
3. Use those email addresses for contact form recipients
4. Update `SMTP_FROM` and recipient email in code as needed

## Monitoring & Maintenance

**Check these regularly:**
- ✅ Application logs for errors
- ✅ Email delivery (test contact forms monthly)
- ✅ Uptime monitoring (Hostinger provides this)
- ✅ Performance metrics

## Rolling Back

If something breaks:

1. Go to GitHub and revert the commit
2. Push to `main` branch
3. Hostinger will auto-redeploy the previous version
4. Takes ~2-5 minutes

Or manually deploy a specific commit:
1. In Hostinger, find **Deployment History**
2. Select the working deployment
3. Click **Redeploy**

## Support Resources

- **Hostinger Docs:** https://support.hostinger.com/en/articles/
- **Next.js Docs:** https://nextjs.org/docs
- **Node.js on Hostinger:** Check Hostinger Knowledge Base
- **Email Issues:** Hostinger Support → Email/SMTP section

---

**Deployed and working? Great! Next steps:**
1. Test all forms thoroughly
2. Add real product images to gallery
3. Set up analytics (Google Analytics, etc.)
4. Monitor email delivery
5. Gather customer feedback

Good luck! 🚀
