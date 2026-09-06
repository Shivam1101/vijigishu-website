# 🌐 Vijigishu Educational Travel — Official Website

> **Repository:** `Shivam1101/vijigishu-website`  
> **Live Staging / Pre-Prod:** [https://pre-prod.vijigishu.co.in](https://pre-prod.vijigishu.co.in)  
> **Production:** [https://vijigishu.co.in](https://vijigishu.co.in)  
> **Tech Stack:** HTML5, Modern Vanilla CSS3 (Custom Design System), JavaScript (ES6+), Google Apps Script API, PHP 8.x / Hostinger Storage Ready.

---

## 📌 1. Project Overview

**Vijigishu Education Private Limited (VEPL)** is an experiential educational travel and global mobility organization based in Pune, Maharashtra. The website showcases institutional academic immersion programs, university partnerships, faculty development programs, international internships, and student travel journeys across Europe, UAE/Dubai, Japan, South Korea, Singapore, Malaysia, Indonesia, and Thailand.

---

## 📂 2. Repository & Directory Structure

```
vijigishu-website/
├── 📄 index.html                      # Homepage (Hero, Why Vijigishu, QS Univs, Featured, Testimonials, FAQ)
├── 📄 about.html                      # About Us (Mission, Leadership, Cornell Maha 60, Core Values)
├── 📄 gallery.html                    # Public Dynamic Gallery (Masonry Grid, Lightbox, Country Filter)
├── 📄 contact.html                    # Contact Hub (Direct Channels, Responsive Inquiry Form, Popups)
├── 📄 login.html                      # Admin & Portal Authentication
├── 📄 admin-dashboard.html            # Central Admin CMS Hub & Metrics
├── 📄 admin-gallery.html              # Gallery Management Console
├── 📄 admin-testimonials.html          # Testimonials Management Console
├── 📄 admin-blog.html                 # Blog & Article Editor
├── 📄 admin-facilitators.html          # Team & Leadership Manager
│
├── 📁 our-programs/                   # Program Destinations & Disciplines
│   ├── 📄 index.html                  # Programs Hub (3-Column Mega Menu, Filter Bar, Modals)
│   ├── 📄 europe.html                 # Europe (West Europe 8D & East Europe 11D Itineraries)
│   ├── 📄 uae.html                    # UAE & Dubai Immersion (6D / 5N Itinerary)
│   ├── 📄 malaysia-singapore.html      # Malaysia & Singapore (7D / 6N Itinerary)
│   ├── 📄 singapore-indonesia.html     # Singapore & Indonesia (5D / 4N Itinerary)
│   ├── 📄 japan.html                  # Japan Immersion (Tokyo, Kyoto, Osaka)
│   ├── 📄 south-korea.html            # South Korea Immersion
│   ├── 📄 engineering.html            # Engineering Discipline
│   ├── 📄 management.html             # Management Discipline
│   ├── 📄 architecture-design.html    # Architecture & Design Discipline
│   ├── 📄 school-programs.html        # K-12 School Programs
│   ├── 📄 internship-malaysia.html    # 3-Month International Internship Malaysia
│   ├── 📄 internship-thailand.html    # International Internship Thailand
│   ├── 📄 fdp.html                    # Faculty Development Program
│   └── 📄 international-conference.html # Special Learning Tours - Conferences
│
├── 📁 css/
│   └── 📄 global-components.css       # Shared Navigation, Mega Menu, Footers, Modals
├── 📁 js/
│   └── 📄 global-components.js        # Global Nav, Mobile Accordions, Dynamic Year, Toast Alerts
├── 📁 images/                         # WebP optimized photography, logos, and UI icons
│
├── 📄 task.md                         # Master 13-page revision audit and completed checklist
├── 📄 admin-implementation.md         # Planned Hostinger Centralized Backend & Storage Architecture
└── 📄 README.md                       # Project Documentation
```

---

## ✨ 3. Key Implemented Features

### A. Global Navigation & 3-Column Mega Menu
- Interactive mega-menu on desktop categorizing programs by **Academic Disciplines**, **Specialized Programs**, and **Global Destinations**.
- Full mobile drawer with smooth nested sub-accordions.

### B. Standardized 8-Point Inclusions (Website-Wide)
Every destination and academic program page features the standardized 8 inclusions in a responsive 4-column desktop grid:
1. **Flights (Roundtrip)**
2. **Accommodation**
3. **Meals**
4. **Industry/Academic visit**
5. **Transportation (Comfortable AC coach)**
6. **Sightseeing**
7. **Experienced VPL Tour leader**
8. **Visa and Travel Insurance**

### C. Detailed Indicative Itineraries with Exact Bold Highlights
- **Europe (`europe.html`):** West Europe (8 Days) and East Europe (11 Days) with SVG route transition arrows (`Paris → Brussels`, `Prague → Vienna`, etc.).
- **Malaysia & Singapore (`malaysia-singapore.html`):** 7 Days / 6 Nights.
- **Singapore & Indonesia (`singapore-indonesia.html`):** 5 Days / 4 Nights.
- **UAE / Dubai (`uae.html`):** 6 Days / 5 Nights.
- All day titles formatted strictly in **Title Case** (never ALL-CAPS).

### D. Contact Form & Google Apps Script Automation
- **Dual-Email Dispatch:**
  1. **Internal Notification (to `info@vijigishu.co.in`):** Real-time email with submission table and direct button to Google Sheet.
  2. **Instant Auto-Reply (to Inquirer):** Branded email with Vijigishu logo, confirmation checkmark, inquiry summary, program links, and contact numbers.
- **Anti-Spam Defenses:**
  - Strict frontend validation (10-digit phone, regex email, alphabetic name, min-length message).
  - Embedded invisible **Honeypot fields** (`botcheck` & `_hp_val`) to automatically trap and drop bots.
  - Native Google Cloud **DDoS & bot flood protection**.
- **Cross-Origin & Staging Compatibility:** Uses `mode: 'no-cors'` for reliable submissions on `localhost`, `pre-prod`, and production.

### E. Responsive Mobile Optimization
- Fixed mobile layout distortion across the contact cards, inquiry forms, modal dialogs, and top social banner.
- Clean 1-column responsive collapse on mobile devices (`<= 768px` and `<= 480px`).

---

## 🛠️ 4. Admin Panel & Planned Backend Architecture

> Full technical specifications are documented in [**`admin-implementation.md`**](admin-implementation.md).

### Modules Ready for Backend Connection:
- **`admin-gallery.html` ↔ `gallery.html`:** Dynamic image upload and deletion with server-side media cleanup.
- **`admin-testimonials.html` ↔ 5 Public Pages:** Live review syncing across Homepage, Management, Engineering, Architecture, and School pages.
- **`admin-blog.html` ↔ Blog Pages:** Article drafts, featured images, and publishing.
- **`admin-facilitators.html` ↔ `about.html`:** Team bios and profile photo updates.
- **`login.html` ↔ `/api/auth.php`:** Session and token-protected administration.

---

## 🚀 5. Local Development Setup

To run and preview the website locally:

```bash
# 1. Clone repository
git clone https://github.com/Shivam1101/vijigishu-website.git
cd vijigishu-website

# 2. Start local static development server
npx http-server -p 4040 -c-1
# OR
python -m http.server 4040

# 3. Open in browser
http://localhost:4040
```

---

## 🔒 6. Security & Credentials Policy

- **Git Ignored Files:** `.env*`, `*.local*`, `credentials.local.json`, and `secrets/` are strictly excluded in `.gitignore` and must never be committed to public repositories.
- **Static Assets:** All public website assets are optimized as `.webp` or compressed `.png`.
