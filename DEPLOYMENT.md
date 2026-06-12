# Keramion Deployment Guide

## Overview
This is a Next.js 16 website for Keramion luxury carbon ceramic business cards. The site includes a hero landing page, product gallery, about section, pricing, and lead capture forms.

## Project Structure
- **Framework:** Next.js 16 with TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer for form submissions
- **Components:**
  - Hero: Landing section with CTA buttons
  - Gallery: Product showcase (6 designs)
  - About: Company story and stats
  - Pricing: Three-tier pricing model
  - Contact: Contact form (lead capture)
  - ConsultationModal: Booking modal for consultations

## Build & Testing Locally

```bash
# Install dependencies
npm install

# Create .env.local with email configuration
cp .env.example .env.local
# Edit .env.local with your SMTP credentials

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see the site.

## Hostinger Deployment

### Option 1: Using Hostinger's Node.js Hosting (Recommended)

1. **Connect GitHub Repository:**
   - Go to Hostinger Control Panel → Web Hosting
   - Navigate to GitHub Integration or App Installer
   - Connect your GitHub account
   - Select `ingomeinelt/keramion` repository
   - Choose `main` branch

2. **Configure Environment:**
   - In Hostinger, set up environment variables:
     - `SMTP_HOST` - Your email provider's SMTP host
     - `SMTP_PORT` - Usually 587
     - `SMTP_USER` - Your email address
     - `SMTP_PASSWORD` - Your email password
     - `SMTP_FROM` - Sender email (noreply@keramion.com)
   
   - For Hostinger Mail: Use your Hostinger email details

3. **Build Settings:**
   - Build Command: `npm run build`
   - Start Command: `npm start` or `node .next/standalone/server.js`
   - Node Version: 20.x or higher

4. **Deploy:**
   - Hostinger will automatically build and deploy on git push
   - Check deployment logs in Hostinger dashboard

### Option 2: Manual Deployment via FTP

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Compress the project:**
   ```bash
   # Include these directories/files:
   # - .next (build output)
   # - node_modules (or run npm ci on server)
   # - app/
   # - components/
   # - public/
   # - package.json
   # - package-lock.json
   # - next.config.ts
   # - tsconfig.json
   # - .env.local (with real credentials)
   ```

3. **Upload via FTP:**
   - Connect to Hostinger FTP
   - Upload files to public_html or your app directory
   - Run `npm ci` on the server if node_modules not included

4. **Configure Web Server:**
   - Point domain to the Node.js application
   - Ensure port forwarding is configured

### Configuration

#### Email Setup (Required for Forms)

For **Hostinger Mail**:
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-hostinger-email@yourdomain.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM=noreply@keramion.com
```

For **Gmail**:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password (not regular password)
SMTP_FROM=noreply@keramion.com
```

For **Other Providers**:
- Check your email provider's SMTP settings
- Update accordingly in Hostinger environment variables

## Post-Deployment

1. **Test Forms:**
   - Submit a contact form and verify email arrives at ingo@keramion.com
   - Book a consultation and verify confirmation emails work

2. **SEO & Analytics:**
   - Add Google Analytics ID (in next.config.ts or create script)
   - Submit sitemap to Google Search Console
   - Configure robots.txt

3. **SSL Certificate:**
   - Hostinger provides free SSL by default
   - Ensure HTTPS is enforced

4. **Custom Domain:**
   - Point your domain DNS to Hostinger
   - Update email settings if using custom domain mail

## Performance Optimization

The site includes:
- Static site generation (SSG) for faster loads
- Image optimization through Next.js
- Tailwind CSS purging (only includes used styles)
- Responsive design (mobile-first)

## Monitoring

- Check Hostinger logs for errors
- Monitor email delivery (forms must have valid SMTP config)
- Use Hostinger's uptime monitoring

## Troubleshooting

**Forms not sending emails:**
- Verify .env variables are set correctly
- Check SMTP credentials with your email provider
- Review Hostinger logs for detailed error messages

**Site not loading:**
- Ensure Node.js version is compatible (20.x+)
- Check build logs in Hostinger dashboard
- Verify port configuration

**Performance issues:**
- Clear Hostinger cache (if available)
- Check memory and CPU limits
- Review Next.js build analysis

## Next Steps

1. ✅ Build complete
2. ⏳ Deploy to Hostinger (use GitHub integration)
3. ⏳ Configure SMTP for email forms
4. ⏳ Test all forms and CTAs
5. ⏳ Add real product images to gallery
6. ⏳ Set up analytics
7. ⏳ Configure custom domain and SSL

## Support

For Hostinger-specific help:
- Check Hostinger Knowledge Base
- Contact Hostinger Support
- Review Next.js documentation: https://nextjs.org/docs
