# Implementation Kickstart Guide - Premium Light Edition

## Project Overview

An elite, high-converting, frontend-only landing page prototype for a modern real estate agency targeting "Sarah, The Hesitant Upsizer" - a 38-year-old professional who needs more family space but is paralyzed by transaction timing and double moving.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 with custom design variables
- **UI Components**: shadcn/ui (Accordion, Button, Card, Carousel, Input, Sheet)
- **Animations**: Framer Motion (floating blobs, fade-ins, modal scale effects)
- **Typography**: Geist Sans (mandatory font style)

---

## Design System & Theme

### Color Palette

| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Alabaster / Off-White` | `#f8f9fa` | Page body background |
| `Deep Emerald Green` | `#0f2e1e` | Typography hierarchy headings, contrast sections |
| `Metallic Gold` | `#d4af37` | Core CTA buttons, highlights, brand accents |
| `Deep Charcoal` | `#1a1a1a` | Primary readability paragraph text |

### Custom CSS Visual Styles

1. **Watermark Grid (`.grid-watermark`)**: A repeating 48px grid pattern with gold opacity (`rgba(212, 175, 55, 0.04)`) to break flat empty spaces.
2. **CSS Marble Texture (`.marble-texture`)**: Custom background texture rendering gold and gray veins to give lead modals a premium, off-white marble backdrop.
3. **Glassmorphism (`.glass`, `.glass-card`)**: Light background blurs (`backdrop-blur-md`) with gold borders at low opacity (`rgba(212, 175, 55, 0.2)`).

---

## Component Architecture

```
components/
├── landing/
│   ├── header.tsx        # Fixed navigation with brand favicon and gold CTA button
│   ├── hero.tsx          # Split Hero with clean layout (no metrics) & luxury villa image
│   ├── stats-section.tsx # Scroll-triggered animated counters wrapped in a single floating glassmorphic card
│   ├── features.tsx      # 3-column light glassmorphism card grid
│   ├── pricing.tsx       # 3-tier pricing table + interactive proceeds bar visualizer
│   ├── testimonials.tsx  # Testimonials carousel + Before vs After conversion highlight
│   ├── case-study.tsx    # Drag-to-reveal Before/After text slider with watermarks
│   ├── faq.tsx           # Accordions addressing timing and staging objections
│   ├── contact-form.tsx  # In-page lead capture with success roadmap
│   └── footer.tsx        # Deep emerald footer with realtor board compliance text
└── modals/
    ├── contact-modal.tsx # Primary modal (capture form -> 3-step roadmap success view)
    └── learn-more-modal.tsx # Secondary modal (learn more features with gold bullet points)
```

---

## Interaction Flows & State Management

### 1. Primary Modal Flow
Clicking "Join Program" or "Get a Free Property Consultation" triggers the `ContactModal`:
- Shows a form with Name, Email, and Property Address fields (required native validation).
- On submit, switches instantly to the **3-Step Roadmap success roadmap**:
  1. **10-Min Discovery Call**
  2. **Custom Equity Report**
  3. **Coffee Consultation**

### 2. Secondary Modal Flow
Clicking "Learn More" in feature cards triggers the `LearnMoreModal`:
- Displays styled bullet points in Metallic Gold explaining timing security and staging equity.

### 3. Contact Scroll & Focus
Clicking the "Contact" link in the footer smoothly scrolls the viewport to the top and opens the `ContactModal` so that users don't get stuck at the bottom of the page.

---

## SEO & Accessibility

- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<footer>`).
- Linked favicon configurations in the `layout.tsx` metadata.
- Contrast ratios optimized (Deep Charcoal on Alabaster background).
- Clear heading structure from h1 to h3.

---

## Development & Build Commands

```bash
# Install dependencies
pnpm install

# Start local server
pnpm dev

# Perform production build check
pnpm build
```
