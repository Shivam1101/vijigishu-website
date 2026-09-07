# 🌍 Vijigishu Educational Travel — Web Platform Documentation

> **Official Website Platform** for Vijigishu Education Private Limited (VEPL)  
> **Production URL:** [https://vijigishu.co.in](https://vijigishu.co.in)  
> **Staging / Pre-Production URL:** [https://pre-prod.vijigishu.co.in](https://pre-prod.vijigishu.co.in)  
> **Repository:** `Shivam1101/vijigishu-website`

---

## 📖 1. About the Platform

The **Vijigishu Web Platform** is an institutional academic portal and global mobility showcase. It is designed to present international immersion programs, specialized study tours, faculty development initiatives, and global internship opportunities for universities, colleges, educators, and students.

The platform emphasizes visual storytelling, structured academic itineraries, seamless institutional inquiry routing, and a lightweight, high-performance architecture.

---

## 🏛️ 2. Platform Architecture & Technology Stack

The platform is built on a **modern vanilla stack**, prioritizing ultra-fast load speeds, zero framework bloat, high SEO visibility, and universal browser compatibility.

```
                              ┌─────────────────────────────────────────────────────────┐
                              │                 Client Browser Layer                    │
                              │  • Modern HTML5 Semantic Markup                         │
                              │  • Custom Design System (Vanilla CSS3 Tokens)           │
                              │  • Modular JavaScript (ES6+ Vanilla Components)         │
                              └────────────────────────────┬────────────────────────────┘
                                                           │
                                ┌──────────────────────────┴───────────────────────────┐
                                │                                                      │
                                ▼                                                      ▼
             ┌────────────────────────────────────┐                 ┌────────────────────────────────────┐
             │       Web Hosting & CDN Layer      │                 │     Inquiry & Automation Engine    │
             │  • Hostinger High-Speed NVMe Web   │                 │  • Google Apps Script Webhook API  │
             │  • Browser Cache & HTTP/2 Support  │                 │  • Real-Time Google Sheet Logging  │
             │  • Optimized WebP Media Assets     │                 │  • Dual-Email Dispatch (Gmail)     │
             └────────────────────────────────────┘                 └────────────────────────────────────┘
```

### Core Technologies:
| Layer | Technology | Purpose |
|---|---|---|
| **Structure** | HTML5 Semantic Elements | High accessibility (a11y), clean DOM structure, and rich SEO markup |
| **Styling** | Vanilla CSS3 (Custom Tokens) | Zero-dependency design system, responsive Flexbox/CSS Grid layouts, hardware-accelerated animations |
| **Interactivity** | Vanilla JavaScript (ES6+) | Global mega-menu, mobile accordions, interactive lightbox gallery, dynamic testimonials |
| **Automations** | Google Apps Script (Serverless) | Contact form processing, Google Sheet integration, dual-branded email delivery |
| **Media Delivery** | WebP Images & SVGs | High-compression, crisp vector icons, and fast Largest Contentful Paint (LCP) |

---

## 🗺️ 3. Information Architecture & Sitemap

```
vijigishu-website/
│
├── 🏠 Core Pages
│   ├── index.html                      # Homepage: Brand positioning, QS partnerships, testimonials, FAQs
│   ├── about.html                      # About Us: Mission, Cornell Maha 60 partnership, executive leadership
│   ├── gallery.html                    # Media Gallery: Interactive masonry grid with country filters & lightbox
│   ├── contact.html                    # Inquiry Hub: Multi-channel contact points, responsive inquiry form
│   ├── login.html                      # Administrative authentication portal
│   └── cancellation-and-refund-policy.html # Official Terms & Cancellation Policy: Interactive TOC, Slabs & Payment Security
│
├── 🎓 Academic & Destination Programs (/our-programs/)
│   ├── index.html                      # Programs Explorer: 3-column discovery hub and modal overviews
│   ├── europe.html                     # Europe Immersion: West Europe (8D) & East Europe (11D) itineraries
│   ├── uae.html                        # UAE & Dubai Immersion: 6D / 5N itinerary
│   ├── malaysia-singapore.html         # Malaysia & Singapore: 7D / 6N itinerary
│   ├── singapore-indonesia.html        # Singapore & Indonesia: 5D / 4N itinerary
│   ├── japan.html                      # Japan Immersion: Tokyo, Kyoto, Osaka technology & culture
│   ├── south-korea.html                # South Korea Immersion: Seoul innovation & academic exposure
│   ├── engineering.html                # Engineering Discipline: Industrial plants, robotics, automation
│   ├── management.html                 # Management Discipline: Business hubs, corporate visits, finance
│   ├── architecture-design.html        # Architecture Discipline: Urban planning, sustainable design
│   ├── school-programs.html            # K-12 School Immersion: Youth leadership, science, cultural tours
│   ├── internship-malaysia.html        # 3-Month International Internship Malaysia
│   ├── internship-thailand.html        # International Internship Thailand
│   ├── fdp.html                        # Faculty Development Program (FDP)
│   └── international-conference.html   # Special Learning Tours & Global Academic Conferences
│
├── ⚙️ Administrative Suite
│   ├── admin-dashboard.html            # Central metrics, system overview, and quick-action links
│   ├── admin-gallery.html              # Media asset manager and country tagging console
│   ├── admin-testimonials.html         # Review management console (ratings, quotes, photos)
│   ├── admin-blog.html                 # Article editor and draft/publish workspace
│   └── admin-facilitators.html         # Team directory and leadership profile editor
│
├── 🎨 Design & Shared Assets
│   ├── css/global-components.css       # Universal header, mega-menu, footer, and utility styles
│   ├── js/global-components.js        # Global navigation logic, mobile drawers, dynamic year, alerts
│   └── images/                         # Optimized photography, logos, and UI assets
│
└── 📄 Architectural Documentation
    ├── admin-implementation.md         # Planned Hostinger Centralized Backend & Storage Blueprint
    └── README.md                       # Master platform documentation
```

---

## 🎨 4. Design System & Styling Philosophy

The platform utilizes a custom CSS custom property (Design Tokens) system defined across all pages:

### Color Palette:
- **Primary Navy:** `#2B5495` — Core brand identity, headings, primary buttons, major structural sections.
- **Accent Gold:** `#D4A840` — Highlights, badges, sub-headers, dividers, ratings.
- **Dark Slate:** `#0F172A` — Primary text, deep contrast containers, high-emphasis copy.
- **Soft Off-White / Cream:** `#F6F7F2` / `#FFFFFF` — Background surfaces, cards, and reading containers.
- **Muted Slate Gray:** `#7B7B8F` — Captions, timestamps, secondary labels, helper text.

### Typography Hierarchy:
- **Display Headings:** `'Playfair Display', serif` — Elegant editorial styling for section headers.
- **Body & UI Elements:** `'Plus Jakarta Sans', sans-serif` — Modern, high-legibility geometric sans-serif.

### Layout Principles:
- **Fluid Typography:** CSS `clamp()` scaling for seamless transitions from mobile screens (360px) to ultra-wide displays (4K).
- **Responsive Grids:** Mobile-first collapse into 1-column layouts; expanding to 2-, 3-, and 4-column desktop grids.
- **Micro-Interactions:** Hardware-accelerated hover elevations (`transform: translateY(-2px)`), smooth bezier transitions (`cubic-bezier(.25,.46,.45,.94)`), and native IntersectionObserver scroll reveals.

---

## 📬 5. Inquiry & Automation Architecture

The contact and inquiry infrastructure connects directly to Google Apps Script webhooks for real-time institutional lead management:

```
[ Visitor Submits Form on contact.html ]
                   │
                   ▼ (POST via no-cors)
┌──────────────────────────────────────────────────┐
│         Google Apps Script Webhook API           │
│   • Validates submission parameters              │
│   • Traps automated spam via Honeypot fields     │
└─────────┬──────────────────────────────┬─────────┘
          │                              │
          ▼                              ▼
┌────────────────────────┐    ┌────────────────────────────────────────┐
│ Google Spreadsheet     │    │ MailApp Automated Dispatch             │
│ (Real-time Lead Log)   │    │ 1. Internal Alert (info@vijigishu.co.in)│
│                        │    │ 2. Branded Inquirer Auto-Reply (HTML)  │
└────────────────────────┘    └────────────────────────────────────────┘
```

- **Security & Spam Protection:** Two invisible honeypot fields (`botcheck` and `_hp_val`) intercept and silently drop bot submissions without triggering emails or populating the spreadsheet.
- **Reliability:** Built-in Google DDoS mitigation and CORS-resilient submission mode.

---

## 💻 6. Local Development & Deployment

### Running Locally:
```bash
# Clone the repository
git clone https://github.com/Shivam1101/vijigishu-website.git
cd vijigishu-website

# Start local server on port 4040
npx http-server -p 4040 -c-1

# Open in browser
http://localhost:4040
```

### Deployment Pipeline:
- **Main Branch (`main`):** Source of truth. Pushes to `main` automatically deploy to the staging environment (`pre-prod.vijigishu.co.in`).
- **Production (`vijigishu.co.in`):** Production releases are deployed from verified stable main releases.

---

## 🔒 7. Security & Privacy Safeguards

- **No Secrets in Source:** All sensitive credentials, tokens, and local configuration files (`.env*`, `*.local*`, `credentials.local.json`, `secrets/`) are strictly ignored via `.gitignore`.
- **Static Integrity:** Public pages do not expose database connection strings or administrative private keys.

---

## 📸 8. Media & Asset Management Standards

To maintain high visual quality without degrading page loading speed, all media assets adhere to the following standards:

### Standard Dimensions & Formats:
| Asset Type | Aspect Ratio | Dimensions | Max File Size | Format |
|---|---|---|---|---|
| **Hero Banners** | 16:9 / Contained | `1920 × 1080px` or `1440 × 600px` | `< 250 KB` | `.webp` |
| **Program Cards** | 4:3 | `800 × 600px` | `< 120 KB` | `.webp` |
| **Gallery Images** | 3:2 / 4:3 | `1200 × 800px` | `< 150 KB` | `.webp` |
| **Testimonial Avatars** | 1:1 | `200 × 200px` (Square) | `< 40 KB` | `.webp` |
| **Partner & QS Logos** | Scaled Vector | Original Aspect Ratio | `< 30 KB` | `.png` (Alpha) / `.svg` |

### Image Optimization Rules:
- **Format:** Always prefer `.webp` over `.jpg` or `.png` for photographs.
- **Priority Loading:** High-priority hero images must include `fetchpriority="high"`. Below-the-fold content images should include `loading="lazy"`.
- **Naming Conventions:** All lowercase with hyphen delimiters (e.g. `banner-contact.webp`, `gallery-singapore-01.webp`, `testi-dr-vijaya.webp`).

---

## 🔍 9. SEO & Social Graph Architecture

Every public page contains comprehensive Open Graph, Twitter Card, and Canonical metadata for institutional sharing and discoverability:

### Standard Social Metadata Template:
```html
<!-- Primary Meta Tags -->
<title>Destination / Program Title – Vijigishu Educational Travel</title>
<meta name="description" content="Structured academic immersion programs curated for universities and colleges." />
<link rel="canonical" href="https://vijigishu.co.in/our-programs/destination.html" />

<!-- Open Graph / Facebook / LinkedIn / WhatsApp -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Vijigishu Educational Travel" />
<meta property="og:url" content="https://vijigishu.co.in/our-programs/destination.html" />
<meta property="og:title" content="Destination Title – Vijigishu Educational Travel" />
<meta property="og:description" content="Structured academic immersion programs curated for universities and colleges." />
<meta property="og:image" content="https://vijigishu.co.in/images/banner-destination.webp" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Destination Title – Vijigishu Educational Travel" />
<meta name="twitter:image" content="https://vijigishu.co.in/images/banner-destination.webp" />
```

---

## ♿ 10. Accessibility (a11y) & Performance Guidelines

The platform is designed to comply with **WCAG 2.1 Level AA** accessibility and Core Web Vitals (CWV) thresholds:

1. **Semantic Heading Structure:** Exactly one `<h1>` per page, followed by strictly descending `<h2>` and `<h3>` tags.
2. **Touch Targets:** All interactive links, buttons, and form inputs meet the minimum touch target requirement of `44 × 44px` on mobile screens.
3. **Color Contrast:** All body text meets or exceeds a `4.5:1` contrast ratio against backgrounds; large headers meet `3:1`.
4. **Interactive Focus States:** Buttons and inputs retain clear `:focus-visible` outline rings for keyboard navigation.
5. **Screen Reader Visibility:** Icons without visible text labels must include `aria-label` or `aria-hidden="true"`.

---

## 🤝 11. Contributor & Content Extension Workflow

When adding a new destination, academic discipline, or program page:

### Step 1 — Copy a Base Template
- For destination itineraries: copy `our-programs/uae.html` or `our-programs/europe.html`.
- For academic disciplines: copy `our-programs/management.html` or `our-programs/engineering.html`.

### Step 2 — Standardize Page Sections
Ensure every new program includes the mandatory standardized sections:
1. **Hero Banner & Title Header** (Title Case, never ALL-CAPS).
2. **Standardized 8-Point Inclusions Grid** (Flights, Accommodation, Meals, Industry and Academic visit, Coach, Sightseeing, Tour Leader, Insurance).
3. **Day-by-Day Indicative Itinerary** (Bold highlights, route transition tags).
4. **Discipline Academic Pillars / Learning Outcomes**.
5. **Interactive FAQ Accordion & Floating CTA Desk**.

### Step 3 — Update Navigation & Mega Menu
Update the desktop mega-menu and mobile drawer links in:
- `css/global-components.css`
- `js/global-components.js`

### Step 4 — Commit Message Standards
Follow Conventional Commits:
- `feat(programs): add new South Africa immersion program`
- `fix(gallery): resolve responsive grid spacing on mobile`
- `docs(readme): update deployment and backup procedures`

---

## 🛡️ 12. Backup, Hosting & Disaster Recovery

### Hostinger Web Hosting Management:
- **Server Platform:** Hostinger Business Web Hosting running PHP 8.x with NVMe SSD storage.
- **Automated Backups:** Hostinger generates automatic daily/weekly snapshots of `public_html`.
- **Manual Backups:** Administrators can generate a full ZIP snapshot anytime via **hPanel → Backups → Generate New Backup**.

### Disaster Recovery & Rollback:
- **Instant Git Rollback:** In the event of a breaking change, roll back instantly using:
  ```bash
  git revert <commit-hash>
  git push origin main
  ```
- **Inquiry Data Backup:** All form submissions are permanently stored in the linked Google Spreadsheet independent of web hosting servers.
