# CogniTwin Landing Page

Modern, sleek landing page for CogniTwin - a multi-industry Digital Business Twin Platform with AI-powered forecasting, anomaly detection, cognitive agents, and operational optimization.

## Features

### 🎨 Design Highlights
- **Modern Dark Theme** - Sleek gradient backgrounds with glass-morphism effects
- **Smooth Animations** - Framer Motion animations throughout
- **Responsive Design** - Mobile-first, looks great on all devices
- **Professional Typography** - Clear hierarchy and readability

### 🚀 Key Sections

1. **Hero Section**
   - Clear value proposition with 4 core features
   - Trust indicators (SOC 2, Multi-tenant, Real-time)
   - Key metrics (85-90% accuracy, <10s speed, 6 AI agents, 99.9% uptime)

2. **How It Works**
   - 5-step visual flow
   - Connect → Generate → Forecast → Simulate → Insights

3. **Animated Data Flow Diagram** ⭐
   - Custom-built visualization showing data flowing through the platform
   - Animated connections between components
   - Real-time particle effects
   - Shows: Data → Digital Twin → ML Forecasting → AI Council → Insights

4. **4 Core Features**
   - AI Forecasting (Prophet + LSTM)
   - Anomaly Detection (Isolation Forest + Industry thresholds)
   - Cognitive Agents (6 expert AI agents)
   - Optimization (Industry playbooks)

5. **Competitive Moat**
   - Multi-agent orchestration (1,500+ LOC)
   - Industry playbooks (300+ rules)
   - Integrated intelligence workflow

6. **6 Industry Modules**
   - E-commerce, Restaurants, Agencies, Clinics, Logistics, SaaS

7. **Pricing Tiers**
   - Starter: $299/mo
   - Professional: $799/mo (Most Popular)
   - Enterprise: $2,999/mo

8. **AI Council Section**
   - 6 specialized agents explained
   - Multi-perspective analysis

## Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set
- **Radix UI** - Accessible component primitives

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The dev server will run at `http://localhost:5173`

```bash
npm run dev
```

## Project Structure

```
cognitwin_web/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.jsx          # Reusable button component
│   │   └── DataFlowDiagram.jsx     # Animated data flow visualization
│   ├── pages/
│   │   └── Landing.jsx              # Main landing page
│   ├── lib/
│   │   └── utils.js                 # Utility functions
│   ├── main.jsx                     # App entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind configuration
└── package.json                     # Dependencies
```

## Key Components

### DataFlowDiagram Component

The animated data flow diagram is the centerpiece of the landing page. It shows:

- **5 Nodes**: Data Source, Digital Twin, ML Forecasting, AI Council, Insights
- **Animated Connections**: SVG paths with gradient strokes
- **Flow Particles**: Moving dots along the paths
- **Performance Metrics**: Load time, sync speed, uptime

Features:
- Pulsing glow effects
- Smooth entrance animations
- Responsive layout
- Glass-morphism cards

### Landing Page Sections

All sections use:
- `whileInView` animations for scroll-triggered effects
- Staggered children animations
- Gradient accents
- Hover effects

## Customization

### Colors

The site uses a dark theme with accent gradients:
- Primary: Blue to Purple (`from-blue-500 to-purple-600`)
- Secondary: Purple to Pink (`from-purple-500 to-pink-500`)
- Success: Green to Emerald (`from-green-500 to-emerald-500`)
- Warning: Orange to Red (`from-orange-500 to-red-500`)

### Typography

- Headers: Bold with gradient text effects
- Body: Slate-300/400 for good contrast
- Accents: White for emphasis

### Animations

Framer Motion variants:
- `fadeInUp`: Fade in from bottom
- `stagger`: Stagger children animations
- `pulse`: Continuous pulsing effect

## Production Build

```bash
# Build optimized production bundle
npm run build

# Output: dist/ folder
# - Minified JS
# - Optimized CSS
# - Compressed assets
```

The build is optimized and ready for deployment to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

## Performance

- **Bundle Size**: ~321 KB JS (99 KB gzipped)
- **CSS Size**: ~26 KB (5.3 KB gzipped)
- **Load Time**: <2s on 3G
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Updates Made

### Version 2.0 (Latest)

✅ Added animated data flow diagram with particle effects
✅ Updated hero section with 4 core features
✅ Added competitive moat section
✅ Added enterprise-ready section
✅ Integrated pricing tiers ($299, $799, $2,999)
✅ Enhanced stats with gradient text
✅ Added trust indicators (SOC 2, Multi-tenant, Real-time)
✅ Restructured features to highlight AI capabilities
✅ Modern investor-friendly design

### Previous Version

- Basic landing page with features and industries
- Static content
- Simple animations

## License

Proprietary - Copyright © 2026 CogniTwin

## Contact

For questions or support:
- Email: support@cognitwin.com
- Website: https://cognitwin.com
