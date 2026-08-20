/**
 * Vijigishu Educational Travel - Central Global Components Scheme
 * Dynamically injects Header Navbar and Footer across all website pages.
 */
(function () {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(page) {
    if (page === 'index.html' && (currentPath === '' || currentPath === 'index.html')) return 'active';
    if (currentPath.includes(page)) return 'active';
    return '';
  }

  // 1. Render Header Navbar HTML
  const headerHTML = `
  <nav id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="logo-wrap">
        <img src="images/logo-of-vijigishu_2-1.webp" alt="Vijigishu Educational Travel" style="height: 48px; width: auto; object-fit: contain;" />
      </a>
      <div class="nav-links">
        <a href="index.html" class="${isActive('index.html')}">Home</a>
        <a href="about.html" class="${isActive('about.html')}">About Us</a>
        <a href="immersion-programs.html" class="${isActive('immersion-programs.html')}">Immersion Programs</a>
        <a href="leadership-walk.html" class="${isActive('leadership-walk.html')}">Leadership Walk</a>
        <a href="gallery.html" class="${isActive('gallery.html')}">Gallery</a>
        <a href="contact.html" class="nav-cta ${isActive('contact.html')}">Contact Us</a>
      </div>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html" class="${isActive('index.html')}">Home</a>
    <a href="about.html" class="${isActive('about.html')}">About Us</a>
    <a href="immersion-programs.html" class="${isActive('immersion-programs.html')}">Immersion Programs</a>
    <a href="leadership-walk.html" class="${isActive('leadership-walk.html')}">Leadership Walk</a>
    <a href="gallery.html" class="${isActive('gallery.html')}">Gallery</a>
    <a href="contact.html" class="${isActive('contact.html')}">Contact Us</a>
  </div>
  `;

  // 2. Render Footer HTML & Bottom Bar
  const footerHTML = `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-grid">
        
        <!-- COLUMN 1: BRAND & SOCIALS -->
        <div class="footer-brand">
          <div class="footer-logo">
            <a href="index.html" style="text-decoration: none; display: inline-block;">
              <img src="images/logo-of-vijigishu_2-white-01-scaled.webp" alt="Vijigishu Educational Travel" style="height: 65px; width: auto; object-fit: contain;" />
            </a>
          </div>
          <div class="footer-socials">
            <a class="social-btn" href="https://www.facebook.com/share/17EA8VpoFP/" target="_blank" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a class="social-btn" href="https://www.instagram.com/vijigishu_official?igsh=cWc1ejBqdmZ3djRv" target="_blank" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
            </a>
            <a class="social-btn" href="https://youtube.com/@vijigishueducation?si=LATkWNQpwHbw_ppp" target="_blank" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/></svg>
            </a>
            <a class="social-btn" href="https://www.linkedin.com/company/vijigishu-education-private-limited/" target="_blank" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- COLUMN 2: QUICK LINKS -->
        <div>
          <div class="footer-col-title">Quick Links</div>
          <div class="footer-links">
            <a href="immersion-programs.html">Programs</a>
            <a href="leadership-walk.html">Leadership walk</a>
            <a href="gallery.html">Gallery</a>
            <a href="contact.html">Cancellation &amp; Refund process</a>
          </div>
        </div>

        <!-- COLUMN 3: DESTINATIONS -->
        <div>
          <div class="footer-col-title">Destinations</div>
          <div class="footer-links">
            <a href="singapore-indonesia.html">Singapore</a>
            <a href="japan.html">Japan</a>
            <a href="south-korea.html">South Korea</a>
            <a href="europe.html">Europe</a>
            <a href="malaysia-singapore.html">Malaysia</a>
            <a href="uae.html">UAE / Dubai</a>
          </div>
        </div>

        <!-- COLUMN 4: CONTACT INFO -->
        <div>
          <div class="footer-col-title">Contact</div>
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; align-items:flex-start; gap:12px; color:rgba(255,255,255,.75); font-size:.9rem;">
              <div class="social-btn" style="width:36px; height:36px; flex-shrink:0; pointer-events:none; margin:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div style="line-height:1.5; padding-top:6px;">
                <a href="tel:02079626639" style="color:inherit; text-decoration:none;">020 7962 6639</a> , <a href="tel:7588522386" style="color:inherit; text-decoration:none;">7588522386</a>
              </div>
            </div>

            <div style="display:flex; align-items:flex-start; gap:12px; color:rgba(255,255,255,.75); font-size:.9rem;">
              <div class="social-btn" style="width:36px; height:36px; flex-shrink:0; pointer-events:none; margin:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div style="line-height:1.5; padding-top:6px;">
                <a href="mailto:info@vijigishu.co.in" style="color:inherit; text-decoration:none;">info@vijigishu.co.in</a>
              </div>
            </div>

            <div style="display:flex; align-items:flex-start; gap:12px; color:rgba(255,255,255,.75); font-size:.88rem; line-height:1.55;">
              <div class="social-btn" style="width:36px; height:36px; flex-shrink:0; pointer-events:none; margin:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div style="padding-top:4px;">
                A9- 3rd floor, Mark Park building, Pandurang Colony, Near Dr. Kalmadi Shamrao Jr. College, Erandwane, Pune 411038
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
  <div class="footer-bottom-bar">
    © 2026 Vijigishu Education Pvt. Ltd. All rights reserved.
  </div>
  `;

  // 3. Auto-Inject into DOM
  function injectComponents() {
    // Inject Header
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
      headerContainer.outerHTML = `<header id="global-header">${headerHTML}</header>`;
    } else {
      const existingNav = document.getElementById('navbar');
      if (existingNav) {
        const existingMobileMenu = document.getElementById('mobileMenu');
        existingNav.outerHTML = headerHTML;
        if (existingMobileMenu) existingMobileMenu.remove();
      } else if (document.body) {
        document.body.insertAdjacentHTML('afterbegin', `<header id="global-header">${headerHTML}</header>`);
      }
    }

    // Inject Footer
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) {
      const existingBottomBar = document.querySelector('.footer-bottom-bar');
      footerContainer.outerHTML = footerHTML;
      if (existingBottomBar && existingBottomBar.parentNode) {
        existingBottomBar.remove();
      }
    } else if (document.body) {
      document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // Initialize Event Listeners
    initHeaderEvents();
    initRevealObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }

  function initHeaderEvents() {
    // Navbar scroll background effect
    const nav = document.getElementById('navbar');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });
    }

    // Hamburger Mobile Menu toggle
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileMenu.classList.toggle('open');
      });
      mobileMenu.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          mobileMenu.classList.remove('open');
        });
      });
      document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
          mobileMenu.classList.remove('open');
        }
      });
    }
  }

  function initRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });

      reveals.forEach(el => {
        // If already in viewport on load, immediately show
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    } else {
      reveals.forEach(el => el.classList.add('visible'));
    }
  }

})();
