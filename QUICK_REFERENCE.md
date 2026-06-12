# Keramion Quick Reference

## Repository
- **URL:** https://github.com/ingomeinelt/keramion
- **Branch:** main
- **Status:** ✅ Ready for deployment

## Local Development

```bash
# Clone and setup
git clone https://github.com/ingomeinelt/keramion.git
cd keramion
npm install

# Configuration
cp .env.example .env.local
# Edit .env.local with your SMTP details

# Development
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Check code quality
```

## Deployment Paths

### 🟢 Recommended: Hostinger GitHub Integration

```bash
1. Log in to Hostinger Control Panel
2. Go to Web Hosting → GitHub Integration
3. Connect repository: ingomeinelt/keramion
4. Set Node.js version: 20+
5. Add environment variables (SMTP_*)
6. Click Deploy
```

See `HOSTINGER_QUICKSTART.md` for detailed steps.

### 🔵 Alternative: Vercel

```bash
npm install -g vercel
vercel
# Follow prompts, add .env variables in dashboard
```

### 🟡 Manual Deployment

```bash
npm run build
# Upload .next, node_modules, app, components, public
# Run: npm start
```

## Configuration

### Email Setup (Required for Forms)

**Hostinger Mail:**
```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASSWORD=app-specific-password
SMTP_FROM=noreply@keramion.com
```

**Gmail:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=16-char-app-password
SMTP_FROM=noreply@keramion.com
```

## File Locations (What to Customize)

| File | Purpose |
|------|---------|
| `components/Hero.tsx` | Hero section, CTA text |
| `components/Pricing.tsx` | Pricing tiers, features |
| `components/About.tsx` | Company story, stats |
| `components/Gallery.tsx` | Product showcase |
| `app/api/contact/route.ts` | Contact form recipient email |
| `app/api/consultation/route.ts` | Consultation form recipient |
| `.env.local` | SMTP configuration (DO NOT COMMIT) |

## Common Customizations

### Change accent color
Search/replace `amber-600` → your color (e.g., `blue-600`, `red-600`)

### Update email recipient
Replace `ingo@keramion.com` with your email in:
- `app/api/contact/route.ts` (line ~31)
- `app/api/consultation/route.ts` (line ~32)

### Change pricing
Edit `components/Pricing.tsx` → `tiers` array

### Add product images
1. Save images to `public/products/`
2. Update `components/Gallery.tsx` to use `<Image>` from `next/image`

### Update company info
Edit `components/Contact.tsx` → contact details section

## Testing Forms Locally

```bash
npm run dev

# 1. Visit http://localhost:3000
# 2. Fill out contact form
# 3. Check console for errors (Ctrl+Shift+J)
# 4. If SMTP not configured: will see "Connection refused" error
#    → This is normal, set up email before deploying
```

## Deployment Checklist

- [ ] .env.local configured with SMTP details
- [ ] npm run build completes successfully
- [ ] Repository pushed to GitHub
- [ ] Hostinger (or other host) connected
- [ ] Environment variables set on host
- [ ] Site loads in browser
- [ ] Contact form submits
- [ ] Confirmation email received
- [ ] Consultation booking works
- [ ] Mobile view responsive

## Monitoring

```bash
# Check build errors
npm run build

# Check code quality
npm run lint

# TypeScript check
npx tsc --noEmit
```

## Emergency: Rollback

```bash
git log --oneline           # See commits
git reset --hard <commit>   # Go back to that commit
git push -f origin main     # Force push (be careful!)
# Hostinger will auto-redeploy
```

## API Endpoints

```
POST /api/contact
  Body: { name, email, company?, message }
  Response: { message: "Email sent successfully" }

POST /api/consultation
  Body: { name, email, phone, date, time, topic }
  Response: { message: "Consultation booked successfully" }
```

## Performance Commands

```bash
# Analyze build size
ANALYZE=true npm run build

# Check what's being built
npx tsc --listFiles

# Profile production build
npm run build && npm run start
```

## Troubleshooting

**Build fails:** Check Node.js version (need 20+)
```bash
node --version
```

**Forms return 500:** Check .env variables
```bash
cat .env.local | grep SMTP
```

**Site not loading:** Check logs
```bash
npm run build   # See if build passes
npm start       # See if server starts
```

**Email not sending:** 
1. Verify SMTP credentials
2. Check .env file exists
3. Review API route logs
4. Test with simpler email provider

## Useful Links

- **Repository:** https://github.com/ingomeinelt/keramion
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind:** https://tailwindcss.com
- **Nodemailer:** https://nodemailer.com/
- **Hostinger Support:** https://support.hostinger.com

## Git Commands

```bash
# See recent changes
git log --oneline -5

# See what changed
git status

# Commit and push
git add .
git commit -m "Your message"
git push origin main

# See branches
git branch -a
```

## Environment Variables

These MUST be set before deployment:

```env
SMTP_HOST=          # Email provider SMTP server
SMTP_PORT=          # Usually 587
SMTP_USER=          # Email address
SMTP_PASSWORD=      # Email password or app password
SMTP_FROM=          # Sender email address
```

**⚠️ IMPORTANT:** Never commit .env.local to Git. Use .env.example as template.

## Version Info

- **Next.js:** 16.2.9
- **React:** 19.2.4
- **TypeScript:** 5.9.3
- **Tailwind:** 4.3.0
- **Node:** 20.x or higher (on Hostinger)

---

**Need help?** Check README.md, DEPLOYMENT.md, or HOSTINGER_QUICKSTART.md

Last updated: 2026-06-12
