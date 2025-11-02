# Mana Product2Brand - Creative Studio Website

Professional, responsive, static front-end website for Mana Product2Brand, a creative studio specializing in video editing and graphic design for Telugu-speaking creators and businesses.

## 🌟 Features

- **Modern Design**: Cinematic dark theme with vibrant orange (#FF7A00) and teal (#0C4B4A) accents
- **Smooth Animations**: Powered by Framer Motion for professional polish
- **Fully Responsive**: Mobile-first design that works on all devices
- **Bilingual**: English and Telugu (తెలుగు) support
- **Interactive Portfolio**: Grid layout with modal previews
- **Contact Forms**: Client-side validation with WhatsApp integration
- **SEO Optimized**: Meta tags, semantic HTML, and Open Graph support

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Poppins, Noto Sans Telugu)
- **Type Safety**: TypeScript

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky navigation with blur effect
│   ├── Hero.tsx            # Full-screen hero with animated gradient
│   ├── Services.tsx        # 4 service cards with pricing
│   ├── Packages.tsx        # 3-tier pricing packages
│   ├── Portfolio.tsx       # Portfolio grid with category filter
│   ├── VideoCard.tsx       # Reusable portfolio item card
│   ├── Testimonials.tsx    # Client testimonials (bilingual)
│   ├── Contact.tsx         # Contact form with Chandu's profile
│   └── Footer.tsx          # Footer with links and contact info
├── pages/
│   ├── Index.tsx           # Main landing page composition
│   └── NotFound.tsx        # 404 error page
├── App.tsx                 # App routing configuration
├── main.tsx                # Application entry point
└── index.css               # Design system & custom styles
```

## 🎨 Design System

The design system is fully customizable via:
- `src/index.css` - Color tokens, gradients, shadows, animations
- `tailwind.config.ts` - Extended Tailwind theme configuration

### Color Palette

- **Primary**: #FF7A00 (Orange) - Brand accent, CTAs
- **Secondary**: #0C4B4A (Teal) - Complementary accent
- **Background**: #0b0b0b (Dark) - Main background
- **Foreground**: #e6e6e6 (Light) - Text color

## 🔧 Configuration

### Contact Information

Update contact details in `src/components/Contact.tsx`:
```typescript
const whatsappNumber = '918639347722';
```

### Social Media Links

Update social links in `src/components/Contact.tsx` and `src/components/Footer.tsx`

### Portfolio Items

Add or modify portfolio items in `src/components/Portfolio.tsx`:
```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Category',
    thumbnail: 'image-url',
    type: 'video' // or 'image'
  },
  // ... more items
];
```

## 🚀 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy with default settings

## 📝 Customization Guide

### Adding New Services

Edit `src/components/Services.tsx`:
```typescript
const services = [
  {
    icon: YourIcon,
    title: 'Service Name',
    description: 'Service description',
    price: 'Starting ₹X',
    delivery: 'Delivery X days',
    features: ['Feature 1', 'Feature 2'],
    gradient: 'from-primary/20 to-secondary/5'
  }
];
```

### Modifying Packages

Edit `src/components/Packages.tsx` to adjust pricing tiers, features, or add new packages.

### Changing Animations

All animations use Framer Motion. Adjust timing and effects in respective component files:
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## 🔌 Backend Integration (Future)

The contact form currently uses client-side validation. To add backend functionality:

1. **Email Service**: Integrate with SendGrid, Mailgun, or EmailJS
2. **Database**: Connect form submissions to a database
3. **Payment Gateway**: Add Stripe/Razorpay for package purchases
4. **File Uploads**: Implement file upload functionality for briefs

Example integration points are marked with comments:
```typescript
// TODO: Backend integration for form submission
```

## 🌐 SEO Optimization

- Meta tags configured in `index.html`
- Semantic HTML structure throughout
- Open Graph tags for social sharing
- Lazy loading for images
- robots.txt included

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 🤝 Support

For support, contact:
- **Phone**: 8639347722
- **Email**: contact@manaproduct2brand.com
- **WhatsApp**: [Click to chat](https://wa.me/918639347722)

## 📄 License

© 2025 Mana Product2Brand. All rights reserved.

---

**Built with ❤️ for Telugu Creators**
