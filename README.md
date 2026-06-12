# Keramion - Luxury Carbon Ceramic Business Cards

Premium business card website built with Next.js, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Landing Page**
- Hero section with dual CTA buttons (Book Consultation / View Gallery)
- Dark, luxe aesthetic with amber accents
- Smooth scrolling navigation

📸 **Product Gallery**
- 6 product showcase cards
- Color-coded designs (Classic, Executive, Burnished, Pearl, Charcoal, Composite)
- Hover animations for interactivity

📖 **About Section**
- Brand story
- Key statistics (500+ clients, 10K+ cards, 99% satisfaction)
- Premium messaging

💰 **Pricing Page**
- Three-tier pricing model (Starter, Professional, Executive)
- Feature comparison
- Clear call-to-action buttons

📧 **Lead Capture**
- Contact form with email validation
- Consultation booking modal
- Automatic email notifications to ingo@keramion.com
- Confirmation emails to users

🎨 **Design**
- Fully responsive (mobile-first)
- Dark mode optimized
- Tailwind CSS for styling
- TypeScript for type safety
- Accessibility built-in

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer
- **Version Control:** Git + GitHub

## Getting Started

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/ingomeinelt/keramion.git
cd keramion

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local with your email configuration
# See DEPLOYMENT.md for email setup instructions

# Run development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production

```bash
# Create optimized build
npm run build

# Test production build locally
npm start
```

## Project Structure

```
keramion/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form endpoint
│   │   └── consultation/route.ts # Booking endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── Hero.tsx                  # Landing section
│   ├── Gallery.tsx               # Product showcase
│   ├── About.tsx                 # Brand story
│   ├── Pricing.tsx               # Pricing tiers
│   ├── Contact.tsx               # Contact form
│   └── ConsultationModal.tsx     # Booking modal
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── DEPLOYMENT.md                 # Deployment guide
└── package.json                  # Dependencies
```

## Configuration

### Email Setup

Set these environment variables in `.env.local`:

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yourdomain.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@keramion.com
```

**Note:** For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833). For Hostinger, create an App Password in your mail settings.

### Customization

**Colors:** Edit Tailwind classes in components (currently using `amber-600` for accent)

**Content:** Update text directly in components - all copy is hardcoded for easy editing

**Email Recipients:** Change `ingo@keramion.com` in `/app/api/contact/route.ts` and `/app/api/consultation/route.ts`

## Pages & Sections

### Home (`/`)
- Full-page scrollable site
- All sections on single page
- Smooth scroll links

### API Routes
- `POST /api/contact` - Contact form submissions
- `POST /api/consultation` - Consultation bookings

## Performance

- ⚡ Static generation where possible
- 🖼️ Image optimization
- 📦 Code splitting
- 🎯 SEO-friendly structure
- 📱 Mobile-optimized

## SEO

- Meta tags for OG (Open Graph)
- Semantic HTML structure
- Mobile responsive design
- Schema.org structured data ready

**Next Steps:**
- Add real product images to `/public`
- Configure Google Analytics
- Create sitemap.xml
- Add robots.txt

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions on deploying to:
- Hostinger (recommended)
- Vercel
- Other Node.js hosting

## Development

### Format Code
```bash
npx eslint . --fix
```

### Type Check
```bash
npx tsc --noEmit
```

### Build Analysis
```bash
ANALYZE=true npm run build
```

## License

Proprietary - Keramion GmbH

## Support

For technical issues:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md) troubleshooting section
- Review Next.js docs: https://nextjs.org/docs
- Contact: ingo@keramion.com

---

**Built with ❤️ for Keramion**
