/**
 * Vijigishu Educational Travel - Central Global Components Scheme
 * Dynamically injects Header Navbar and Footer across all website pages.
 */
(function () {
  const pathname = window.location.pathname.toLowerCase();
  const isSubFolder = pathname.includes('/our-programs');
  const isFileProtocol = window.location.protocol === 'file:';
  const hasHtmlExt = pathname.endsWith('.html') || pathname.includes('.html') || isFileProtocol;
  
  const rawPath = window.location.pathname.split('/').pop() || 'index';
  const currentPath = rawPath.replace(/\.html$/, '') || 'index';

  const assetBase = isSubFolder ? '../' : './';
  
    // 1. Permanent Bulletproof Clean URL Mapper
  let urlHome = isFileProtocol ? (isSubFolder ? '../index.html' : 'index.html') : (isSubFolder ? '../' : '/');
  let urlAbout, urlImmersion, urlLeadership, urlGallery, urlContact;
  let urlDestSingapore, urlDestJapan, urlDestKorea, urlDestEurope, urlDestMalaysia, urlDestUAE;

  if (isFileProtocol) {
    if (isSubFolder) {
      urlHome = '../index.html';
      urlAbout = '../about.html';
      urlImmersion = '../our-programs/index.html';
      urlLeadership = '../leadership-walk.html';
      urlGallery = '../gallery.html';
      urlContact = '../contact.html';

      urlDestSingapore = 'singapore-indonesia.html';
      urlDestJapan = 'japan.html';
      urlDestKorea = 'south-korea.html';
      urlDestEurope = 'europe.html';
      urlDestMalaysia = 'malaysia-singapore.html';
      urlDestUAE = 'uae.html';
    } else {
      urlHome = 'index.html';
      urlAbout = 'about.html';
      urlImmersion = 'our-programs/index.html';
      urlLeadership = 'leadership-walk.html';
      urlGallery = 'gallery.html';
      urlContact = 'contact.html';

      urlDestSingapore = 'our-programs/singapore-indonesia.html';
      urlDestJapan = 'our-programs/japan.html';
      urlDestKorea = 'our-programs/south-korea.html';
      urlDestEurope = 'our-programs/europe.html';
      urlDestMalaysia = 'our-programs/malaysia-singapore.html';
      urlDestUAE = 'our-programs/uae.html';
    }
  } else {
    // 100% Clean Extensionless URLs for Web Server & Localhost Server
    urlHome = isSubFolder ? '../' : '/';
    urlAbout = isSubFolder ? '../about' : '/about';
    urlImmersion = isSubFolder ? '../our-programs/' : '/our-programs/';
    urlLeadership = isSubFolder ? '../leadership-walk' : '/leadership-walk';
    urlGallery = isSubFolder ? '../gallery' : '/gallery';
    urlContact = isSubFolder ? '../contact' : '/contact';

    urlDestSingapore = isSubFolder ? 'singapore-indonesia' : '/our-programs/singapore-indonesia';
    urlDestJapan = isSubFolder ? 'japan' : '/our-programs/japan';
    urlDestKorea = isSubFolder ? 'south-korea' : '/our-programs/south-korea';
    urlDestEurope = isSubFolder ? 'europe' : '/our-programs/europe';
    urlDestMalaysia = isSubFolder ? 'malaysia-singapore' : '/our-programs/malaysia-singapore';
    urlDestUAE = isSubFolder ? 'uae' : '/our-programs/uae';
  }



  function isActive(page) {
    const clean = page.replace(/\.html$/, '').replace(/^\//, '') || 'index';
    if (pathname.includes('our-programs')) {
      return clean === 'our-programs' ? 'active' : '';
    }
    if (clean === 'index' && (currentPath === '' || currentPath === 'index')) return 'active';
    if (currentPath === clean) return 'active';
    return '';
  }

  // 2. Render Header Navbar HTML
  const headerHTML = `
  <nav id="navbar">
    <div class="nav-inner">
      <a href="${urlHome}" class="logo-wrap" id="siteLogoLink" onclick="window.location.href='${urlHome}'; return false;" aria-label="Vijigishu Home">
        <img 
          src="/images/logo-of-vijigishu_2-1.webp" 
          onerror="
            if (!this.dataset.step) { this.dataset.step='1'; this.src='${assetBase}images/logo-of-vijigishu_2-1.webp'; }
            else if (this.dataset.step==='1') { this.dataset.step='2'; this.src='/images/logo-of-vijigishu_2-1.png'; }
            else if (this.dataset.step==='2') { this.dataset.step='3'; this.src='${assetBase}images/logo-of-vijigishu_2-1.png'; }
            else if (this.dataset.step==='3') { this.dataset.step='4'; this.src='https://staging.vijigishu.co.in/wp-content/uploads/2022/08/logo-of-vijigishu_2-1.png'; }
          " 
          alt="Vijigishu Educational Travel" 
          style="height: 46px; max-height: 46px; width: auto; max-width: 190px; object-fit: contain; display: block;" 
        />
      </a>
      <div class="nav-links">
        <a href="${urlHome}" class="${isActive('index')}">Home</a>
        <a href="${urlAbout}" class="${isActive('about')}">About Us</a>
        <a href="${urlImmersion}" class="${isActive('our-programs')}">Our Programs</a>
        <a href="${urlGallery}" class="${isActive('gallery')}">Gallery</a>
        <a href="${urlContact}" class="nav-cta ${isActive('contact')}">Contact Us</a>
      </div>
      <div class="hamburger" id="hamburger" aria-label="Toggle Navigation Menu">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    <a href="${urlHome}" class="${isActive('index')}">Home</a>
    <a href="${urlAbout}" class="${isActive('about')}">About Us</a>
    <a href="${urlImmersion}" class="${isActive('our-programs')}">Our Programs</a>
    <a href="${urlGallery}" class="${isActive('gallery')}">Gallery</a>
    <a href="${urlContact}" class="${isActive('contact')}">Contact Us</a>
  </div>
  `;

  // 3. Render Footer HTML & Bottom Bar
  const footerHTML = `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-grid">
        
        <!-- COLUMN 1: BRAND & SOCIALS -->
        <div class="footer-brand">
          <div class="footer-logo">
            <a href="${urlHome}" onclick="window.location.href='${urlHome}'; return false;" style="text-decoration: none; display: inline-block;">
              <img 
                src="/images/logo-of-vijigishu_2-1.webp" 
                onerror="
                  if (!this.dataset.step) { this.dataset.step='1'; this.src='${assetBase}images/logo-of-vijigishu_2-1.webp'; }
                  else if (this.dataset.step==='1') { this.dataset.step='2'; this.src='/images/logo-of-vijigishu_2-1.webp'; }
                  else if (this.dataset.step==='2') { this.dataset.step='3'; this.src='${assetBase}images/logo-of-vijigishu_2-1.webp'; }
                  else if (this.dataset.step==='3') { this.dataset.step='4'; this.src='https://staging.vijigishu.co.in/wp-content/uploads/2026/05/logo-of-vijigishu_2-white-01-scaled.png'; }
                " 
                alt="Vijigishu Educational Travel" 
                style="height: 65px; width: auto; object-fit: contain;" 
              />
            </a>
          </div>
          <div style="display:flex; align-items:center; gap:12px; margin-top:20px;">
            <a class="social-btn fb" href="https://www.facebook.com/people/Vijigishu-Education-Pvt-Ltd/100087566430571/#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a class="social-btn insta" href="https://www.instagram.com/vijigishu_official/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>
            </a>
            <a class="social-btn yt" href="https://www.youtube.com/@vijigishueducation" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" class="yt-body"/><polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" class="yt-play"/></svg>
            </a>
            <a class="social-btn linkedin" href="https://www.linkedin.com/company/vijigishu-education-private-limited/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- COLUMN 2: QUICK LINKS -->
        <div>
          <div class="footer-col-title">Quick Links</div>
          <div class="footer-links">
            <a href="${urlImmersion}">Programs</a>
            <a href="${urlGallery}">Gallery</a>
            <a href="${urlContact}">Cancellation &amp; Refund process</a>
          </div>
        </div>

        <!-- COLUMN 3: DESTINATIONS -->
        <div>
          <div class="footer-col-title">Destinations</div>
          <div class="footer-links">
            <a href="${urlDestSingapore}">Singapore</a>
            <a href="${urlDestJapan}">Japan</a>
            <a href="${urlDestKorea}">South Korea</a>
            <a href="${urlDestEurope}">Europe</a>
            <a href="${urlDestMalaysia}">Malaysia</a>
            <a href="${urlDestUAE}">UAE / Dubai</a>
          </div>
        </div>

        <!-- COLUMN 4: CONTACT INFO -->
        <div>
          <div class="footer-col-title">Contact</div>
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; align-items:flex-start; gap:12px; color:#1E293B; font-size:.9rem;">
              <div class="social-btn" style="width:36px; height:36px; flex-shrink:0; pointer-events:none; margin:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div style="line-height:1.5; padding-top:6px;">
                <a href="tel:9028068711" style="color:inherit; text-decoration:none;">+91 9028068711</a> , <a href="tel:9422023792" style="color:inherit; text-decoration:none;">+91 9422023792</a>
              </div>
            </div>

            <div style="display:flex; align-items:flex-start; gap:12px; color:#1E293B; font-size:.9rem;">
              <div class="social-btn" style="width:36px; height:36px; flex-shrink:0; pointer-events:none; margin:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div style="line-height:1.5; padding-top:6px;">
                <a href="mailto:info@vijigishu.co.in" style="color:inherit; text-decoration:none;">info@vijigishu.co.in</a>
              </div>
            </div>

            <div style="display:flex; align-items:flex-start; gap:12px; color:#1E293B; font-size:.88rem; line-height:1.55;">
              <div class="social-btn" style="width:36px; height:36px; flex-shrink:0; pointer-events:none; margin:0;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div style="padding-top:4px;">
                C-41, Floor No. 1, Madhav Baug Society, Shivthirth Nagar, Paud Road, Kothrud, Pune – 411038
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
  <div class="footer-bottom-bar">
    © ${new Date().getFullYear()} Vijigishu Education Pvt. Ltd. All rights reserved.
  </div>
  `;

  const ctaHTML = `
<!-- ===== GLOBAL CTA ===== -->
<section class="global-cta-section" style="position:relative; overflow:hidden;">
  <!-- Flowing Background SVG Animation & Office Coordinates Watermark -->
  

  <div class="container" style="position:relative; z-index:2;">
    <div class="global-cta-inner reveal">
      <div class="global-cta-left">
        <h2 class="global-cta-h2">Ready to <em>Transform</em> Your<br>Students' Learning Journey?</h2>
        <p class="global-cta-sub">Partner with India's most trusted educational travel specialist and give your students a learning experience they'll carry for life.</p>
        <div class="global-cta-buttons">
          <a href="${urlImmersion}" class="btn btn-royal">Explore Programs &nbsp;&nbsp;&rarr;</a>
          <a href="${urlContact}" class="btn btn-outline" style="border-color: var(--navy); color: var(--navy);">Contact Our Team</a>
        </div>
      </div>
      <div class="global-cta-right">
        <img src="${assetBase}images/floating-world-cta.webp" class="floating-cta-img" alt="Global Education Island" />
      </div>
    </div>
  </div>
</section>
`;

  // 4. Auto-Inject into DOM
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

    
    // Inject Global CTA
    const ctaContainer = document.getElementById('global-cta');
    if (ctaContainer) {
      ctaContainer.outerHTML = ctaHTML;
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

    
        
    // Inject Global Floating FAB Menu (Excluding admin page)
    if (!currentPath.includes('admin') && !document.getElementById('floating-fab-menu') && document.body) {
      const fabMenuHTML = `
      <div id="floating-fab-menu">
        <button class="fab-main-btn" id="fabMainBtn" type="button" aria-label="Explore Destinations Menu" title="Explore Destinations">
          <span class="fab-main-tip">Explore Destinations</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
        </button>
        <div class="fab-actions">
          <a href="${urlDestUAE}" class="fab-action-item" title="Dubai & Abu Dhabi (UAE)">
            <span class="fab-action-icon">🇦🇪</span>
            <span class="fab-action-label">Dubai & Abu Dhabi</span>
          </a>
          <a href="${urlDestJapan}" class="fab-action-item" title="Japan Immersion">
            <span class="fab-action-icon">🇯🇵</span>
            <span class="fab-action-label">Japan Immersion</span>
          </a>
          <a href="${urlDestKorea}" class="fab-action-item" title="South Korea Immersion">
            <span class="fab-action-icon">🇰🇷</span>
            <span class="fab-action-label">South Korea</span>
          </a>
          <a href="${urlDestEurope}" class="fab-action-item" title="Europe Immersion">
            <span class="fab-action-icon">🇪🇺</span>
            <span class="fab-action-label">Europe Immersion</span>
          </a>
          <a href="${urlDestMalaysia}" class="fab-action-item" title="Malaysia & Singapore">
            <span class="fab-action-icon">🇲🇾</span>
            <span class="fab-action-label">Malaysia & Singapore</span>
          </a>
          <a href="${urlDestSingapore}" class="fab-action-item" title="Singapore & Indonesia">
            <span class="fab-action-icon">🇸🇬</span>
            <span class="fab-action-label">Singapore & Indonesia</span>
          </a>
          <a href="${urlLeadership}" class="fab-action-item" title="Leadership Walks">
            <span class="fab-action-icon">🚶</span>
            <span class="fab-action-label">Leadership Walks</span>
          </a>
        </div>
      </div>
      `;
      document.body.insertAdjacentHTML('beforeend', fabMenuHTML);
      document.body.classList.add('has-fab-menu');
    }

    // Inject Global Floating WhatsApp Button
    if (!currentPath.includes('admin') && !document.getElementById('whatsappFloat') && document.body) {
      const hasFab = !!document.getElementById('floating-fab-menu');
      if (hasFab) document.body.classList.add('has-fab-menu');

      const whatsappBtnHTML = `
      <a href="https://wa.me/919422023792?text=Hello%20Vijigishu%20Team%2C%20I%20have%20an%20enquiry" target="_blank" rel="noopener noreferrer" id="whatsappFloat" class="whatsapp-float-btn ${hasFab ? 'has-fab' : ''}" aria-label="Chat on WhatsApp" title="Chat with us on WhatsApp">
        <span class="whatsapp-tooltip">Chat with Us</span>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.16 4.237 4.303-1.128zm11.38-5.378c-.287-.144-1.696-.837-1.958-.933-.263-.096-.455-.144-.647.144-.192.288-.744.933-.912 1.125-.168.192-.336.216-.623.072-.287-.144-1.214-.447-2.312-1.427-.854-.763-1.431-1.704-1.598-1.992-.168-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.647-1.56-.886-2.136-.233-.561-.47-.484-.647-.492-.168-.008-.36-.008-.552-.008s-.504.072-.767.36c-.263.288-1.007.984-1.007 2.4 0 1.416 1.031 2.784 1.175 2.976.144.192 2.03 3.1 4.918 4.347 2.888 1.248 2.888.832 3.415.776.527-.056 1.696-.693 1.935-1.363.239-.67.239-1.243.168-1.363-.072-.12-.264-.192-.551-.336z"/>
        </svg>
      </a>
      `;
      document.body.insertAdjacentHTML('beforeend', whatsappBtnHTML);
    }

    // Inject Global Scroll To Top Button (Excluding admin page)
    if (!currentPath.includes('admin') && !document.getElementById('scrollToTop') && document.body) {
      const scrollToTopHTML = `
      <button id="scrollToTop" class="scroll-to-top" aria-label="Scroll to top" title="Go to top">
        <span class="compass-tooltip">Navigate to top</span>
        <svg class="scroll-compass-svg" viewBox="0 0 100 100" width="100%" height="100%">
          <!-- Outer Progress Ring Track (Concentric r=46) -->
          <circle class="progress-ring-bg" cx="50" cy="50" r="46" />
          <!-- Animated Progress Circle (Concentric r=46, starts at 12 o'clock) -->
          <circle class="progress-ring-circle" id="scrollProgressCircle" cx="50" cy="50" r="46" transform="rotate(-90 50 50)" />
          
          <!-- Inner Compass Dial Body -->
          <circle cx="50" cy="50" r="39" fill="#2B62A4" stroke="#1D4475" stroke-width="1.5" />
          <circle cx="50" cy="50" r="35" fill="#F4C74D" stroke="#DDA82B" stroke-width="1.8" />
          <circle cx="50" cy="50" r="30" fill="#E6B435" />
          
          <!-- Dial Star Points -->
          <polygon points="50,22 52.8,47.2 50,50 47.2,47.2" fill="#D39E22" />
          <polygon points="50,78 52.8,52.8 50,50 47.2,52.8" fill="#D39E22" />
          <polygon points="22,50 47.2,47.2 50,50 47.2,52.8" fill="#D39E22" />
          <polygon points="78,50 52.8,47.2 50,50 52.8,52.8" fill="#D39E22" />
          <polygon points="30,30 48.4,47.2 50,50 47.2,48.4" fill="#CB951C" />
          <polygon points="70,30 51.2,48.4 50,50 52.8,47.2" fill="#CB951C" />
          <polygon points="30,70 48.4,51.2 50,50 47.2,52.8" fill="#CB951C" />
          <polygon points="70,70 52.8,52.8 50,50 51.2,51.2" fill="#CB951C" />
          
          <!-- Dial Cardinal Markers -->
          <text x="50" y="31.5" font-family="'Plus Jakarta Sans', sans-serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle">N</text>
          <text x="50" y="74.5" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="7.5" fill="rgba(255,255,255,0.75)" text-anchor="middle">S</text>
          <text x="71.5" y="52.8" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="7.5" fill="rgba(255,255,255,0.75)" text-anchor="middle">E</text>
          <text x="28.5" y="52.8" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="7.5" fill="rgba(255,255,255,0.75)" text-anchor="middle">W</text>

          <!-- Rotating Compass Needle -->
          <g id="compassNeedle" class="compass-needle-group">
            <polygon points="50,21 44.8,50 50,50" fill="#46B45C" />
            <polygon points="50,21 55.2,50 50,50" fill="#2C8840" />
            <polygon points="50,79 44.8,50 50,50" fill="#EA4D3D" />
            <polygon points="50,79 55.2,50 50,50" fill="#C42E21" />
            <circle cx="50" cy="50" r="6" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="0.8" />
            <circle cx="50" cy="50" r="3.2" fill="#E2AC2E" stroke="#C49120" stroke-width="0.8" />
          </g>
        </svg>
      </button>
      `;
      document.body.insertAdjacentHTML('beforeend', scrollToTopHTML);
    }

    // Initialize Event Listeners
    initHeaderEvents();
    initRevealObserver();
    initFabMenu();
    initScrollToTop();
    document.querySelectorAll('.current-year').forEach(el => el.textContent = new Date().getFullYear());
  }

  if (document.readyState === 'loading') {
    
  // Global Asset Protection: Disable context menu & drag on media
  
  // Prevent text selection site-wide except in input & textarea fields
  document.addEventListener('selectstart', function (e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      return false;
    }
  }, true);
  document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.closest('img') || e.target.closest('video')) {
      e.preventDefault();
      return false;
    }
  }, true);

  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO' || e.target.closest('img') || e.target.closest('video')) {
      e.preventDefault();
      return false;
    }
  }, true);
  document.addEventListener('DOMContentLoaded', injectComponents);
  } else {
    injectComponents();
  }

  function initHeaderEvents() {
    const nav = document.getElementById('navbar');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 40);
      }, { passive: true });
    }

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

  
  function initFabMenu() {
    const fabMenu = document.getElementById('floating-fab-menu');
    const fabBtn = document.getElementById('fabMainBtn') || (fabMenu ? fabMenu.querySelector('.fab-main-btn') : null);
    if (!fabMenu || !fabBtn) return;

    fabBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      fabMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', function (e) {
      if (!fabMenu.contains(e.target)) {
        fabMenu.classList.remove('is-open');
      }
    });
  }

  function initScrollToTop() {
    if (currentPath.includes('admin')) return;
    const scrollBtn = document.getElementById('scrollToTop');
    const circle = document.getElementById('scrollProgressCircle');
    const needle = document.getElementById('compassNeedle');
    if (!scrollBtn || !circle) return;

    function getCircumference() {
      const radius = 46;
      return 2 * Math.PI * radius;
    }

    let circumference = getCircumference();
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    function updateScrollProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight;

      circumference = getCircumference();
      circle.style.strokeDasharray = `${circumference} ${circumference}`;

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max(scrollTop / scrollHeight, 0), 1);
        const offset = circumference - (progress * circumference);
        circle.style.strokeDashoffset = offset;

        if (needle) {
          const rotationAngle = (progress * 360) % 360;
          needle.style.transform = `rotate(${rotationAngle}deg)`;
        }
      }

      if (scrollTop > 200) {
        scrollBtn.classList.add('visible');
        scrollBtn.classList.add('show');
      } else {
        scrollBtn.classList.remove('visible');
        scrollBtn.classList.remove('show');
      }
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('touchmove', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    updateScrollProgress();

    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  function initRevealObserver() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    reveals.forEach(el => observer.observe(el));
  }
})();


  // Detect if page has floating FAB menu and add class to body for side-by-side layout
  function checkFabMenu() {
    if (document.getElementById('floating-fab-menu')) {
      document.body.classList.add('has-fab-menu');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkFabMenu);
  } else {
    checkFabMenu();
  }