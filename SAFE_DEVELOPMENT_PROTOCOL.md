# 🌐 Universal Web Development & Regression Prevention Protocol

> **Purpose:** A universal blueprint for building, refactoring, and maintaining web projects with **zero unintended breakages, zero cascade collisions, and zero silent failures**.

---

## 1. 🧱 CSS Architecture & The Anti-Cascade Law

### The Problem:
Modifying a global stylesheet to fix one page often silently destroys layouts on other pages through specificity conflicts and rogue `!important` tags.

### The Standard:
1. **Strict Load Order:** Always load base/framework stylesheets **first**, and page-specific styles **last**.
   ```html
   <!-- 1. Global framework / shared components -->
   <link rel="stylesheet" href="/css/global-components.css" />
   <!-- 2. Page-specific stylesheet / inline styles (highest priority) -->
   <link rel="stylesheet" href="page-custom.css" />
   ```
2. **Component Scoping:** 
   * **Global CSS (`global.css`)**: Strictly for design tokens (colors, fonts, resets), Navigation, and Footers.
   * **Page CSS (`page.css` or `<style>`)**: Strictly for page-unique grids, cards, banners, and timelines.
3. **No Blanket `!important`:** Never use `!important` on layout dimensions (e.g. `grid-template-columns`, `width`, `padding`) inside shared global files.

---

## 2. 📂 Bulletproof Pathing & Subfolder Strategy

### The Problem:
Pages inside subfolders (`/programs/index.html`) fail to load assets when referenced with ambiguous relative paths.

### The Standard:
1. **Root-Relative Primary with Fallback:**
   ```html
   <!-- CSS with automatic fallback -->
   <link rel="stylesheet" href="/css/global.css" onerror="this.onerror=null;this.href='../css/global.css';" />
   <!-- JS with automatic fallback -->
   <script src="/js/app.js" onerror="this.onerror=null;this.src='../js/app.js';"></script>
   ```
2. **Images in Subfolders:** Always reference shared assets from subfolder pages using the one-level-up relative path (`../images/asset.webp`).

---

## 3. 🛡️ Crash-Proof JavaScript Execution

### The Problem:
A single `ReferenceError` (e.g., an undefined variable or missing icon object) halts the entire JavaScript thread, preventing downstream features (WhatsApp buttons, analytics, modals, dark mode) from executing.

### The Standard:
1. **Top-Level Variable Declaration:** All lookup objects, dictionary constants, and configurations must be declared at the top of the script before any DOM manipulation function runs.
2. **Defensive Component Injection:** Wrap independent feature initializers in separate `try/catch` blocks or conditional checks so one feature failing never blocks others:
   ```javascript
   function safeInit(fn) {
     try { fn(); } catch (err) { console.warn('Feature init skipped:', err); }
   }
   safeInit(initHeader);
   safeInit(initFabMenu);
   safeInit(initWhatsApp);
   ```

---

## 4. 📱 Mobile Specificity Symmetry

### The Problem:
Desktop styles written with compound classes (e.g., `.item.left`) fail to collapse on mobile because mobile queries use single classes (e.g., `.item`), leaving desktop paddings and widths active.

### The Standard:
1. **Match Desktop Selector Specificity:** If desktop uses `.card.left`, the mobile query **must** target `.card.left, .card.right`:
   ```css
   /* Desktop */
   .card.left { padding-right: 50%; justify-content: flex-end; }
   .card.right { padding-left: 50%; justify-content: flex-start; }

   /* Mobile: Must explicitly match both selectors */
   @media (max-width: 768px) {
     .card, .card.left, .card.right {
       width: 100% !important;
       padding: 16px !important;
       justify-content: flex-start !important;
     }
   }
   ```

---

## 5. ⚡ Pre-Flight Verification Toolkit (The 10-Second Test)

Before deploying or committing any changes, run these 3 sanity checks:

| Step | What It Checks | What It Prevents |
| :--- | :--- | :--- |
| **1. Syntax Audit** | Bracket/brace balance `{}` in CSS and JS | Prevents entire stylesheets from being silently dropped by the browser. |
| **2. Asset Resolution** | 404 check on all `src` and `href` links on disk | Prevents missing images, broken icons, and 404 font errors. |
| **3. Cache-Bust Tagging** | Fresh `?v=timestamp` on external CSS/JS | Prevents stale browser caching from showing outdated builds to users. |

---

## 6. 🧪 The Incognito Testing Mandate

* **Never verify live changes in standard browser tabs:** Chrome and Edge aggressively cache stylesheets on `localhost`.
* **Always verify in Incognito / Private Window (`Ctrl + Shift + N`):** This forces an un-cached, fresh HTTP request and guarantees you are evaluating what a first-time visitor actually sees.
