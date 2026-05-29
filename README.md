# DALAN Builders Real Estate Website

A premium real estate marketing website built with **Next.js 14** + **Tailwind CSS** + **Framer Motion**.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Pages Included

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Stats, Projects, Testimonials, CTA |
| About | `/about` | Story, Mission/Vision, Team |
| Projects | `/projects` | All projects with filter tabs |
| Project Detail | `/projects/[id]` | Project info + enquiry form |
| Blog | `/blog` | Blog listing page |
| Contact | `/contact` | Contact form + map |
| Legal | `/legal` | Privacy, Terms, Disclaimer |

---

## 🎨 Colors

| Color | Hex |
|-------|-----|
| Primary Orange | `#F26522` |
| Dark Background | `#111111` |
| Card Background | `#1A1A1A` |

---

## 📧 Setting Up Contact Form (EmailJS - FREE)

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. Create an Email Service (connect your Gmail)
3. Create an Email Template
4. Install EmailJS: `npm install @emailjs/browser`
5. In `app/contact/page.tsx`, replace the simulation with:

```typescript
import emailjs from '@emailjs/browser'

// Inside handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',    // from EmailJS dashboard
  'YOUR_TEMPLATE_ID',   // from EmailJS dashboard
  form,
  'YOUR_PUBLIC_KEY'     // from EmailJS dashboard
)
```

---

## 🌐 Deploy to Vercel (FREE)

1. Push code to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click "New Project" → Import your GitHub repo
4. Click Deploy — done in 2 minutes!

Your site will be live at: `https://dalanbuilders.vercel.app`

---

## 🔧 Customization

### Change Company Info
- **Name/Logo**: `components/Navbar.tsx` and `components/Footer.tsx`
- **Contact Details**: `components/Footer.tsx` and `app/contact/page.tsx`
- **Projects**: `app/projects/page.tsx` → update `projects` array
- **Team**: `app/about/page.tsx` → update `team` array

### Replace Placeholder Images
- All images use Unsplash placeholders
- Replace `src` in `<Image>` components with your actual image paths
- Put your images in `/public/images/`

### Add Your Logo
- Place logo file in `/public/images/logo.png`
- Update `components/Navbar.tsx` to use `<Image src="/images/logo.png" />`

---

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: CSS + Intersection Observer
- **Icons**: Lucide React
- **Images**: Next.js Image (optimized)
- **Contact Form**: EmailJS (no backend needed)
- **Hosting**: Vercel (free)

---

## 💰 Running Cost

| Service | Cost |
|---------|------|
| Vercel Hosting | FREE |
| EmailJS (200 emails/month) | FREE |
| Domain (.in) | ~₹600/year |
| Domain (.com) | ~₹900/year |

**Total: ~₹600-900/year** (just the domain!)
