# Master Task List — Vijigishu Website Redesign & Content Updates

> **Date:** September 2, 2026  
> **Source Documents:** Initial Request List + Content PDF Revision (13 Pages)  
> **Status:** Active Execution  

---

## 1. 🏠 Home Page (`index.html`)

- [x] **"Why Vijigishu" Section:** Update heading to **"Top QS-Ranked Universities."** and text to **"Strong partnerships with QS-ranked universities."**
- [x] **FAQs Section:**
  - [x] *What kind of food **will be** provided during the trip?*
  - [x] *Can the trip be customized for our college **or group**?*
  - [x] *Is travel insurance included in the program* -> Update answer to: *"Yes, travel insurance is included in the program."* (Removed "for all participants").
  - [x] *How do you balance learning and leisure **during the trip**?*
  - [x] *Our programs are thoughtfully designed to offer a balanced experience, combining academic sessions, industry visits, and cultural exploration with visits to iconic landmarks, **ensuring students learn while enjoying the destination.***
  - [x] Pre-departure guidance: Update to *"Predeparture training session on intercultural competence enhancement for a seamless global mobility & adaptability"*.
- [x] **Testimonials Section:**
  - [x] Add **"(Faculty)"** label next to Dr. Vijaya Kumar Thota and Mrunal Joshi.
  - [x] Replace duplicate testimonial pictures with unique student photos.
- [x] **Featured Programs Section:**
  - [x] Japan card: Add "Enquire About Program →" CTA button.
  - [x] South Korea card: Remove "museum" from Day 7 heading -> `Day 7 – Departure`.
- [x] **Hero Video & Banner Stat:**
  - [x] Hero video heights: Set natural height starting below navbar on desktop (`height: auto !important`, `margin-top: 72px !important`), and `350px !important` on mobile.
  - [x] Update dynamic stat from `18K` to `18000+`.

---

## 2. ℹ️ About Page (`about.html`)

- [x] **Grammar & Sentence Cleanups:**
  - [x] Fix sentence error *"Our expertise lies in curating International and Domestic Academic Our Programs..."*
  - [x] Fix Title Case sentences where every single word was capitalized.
  - [x] Fix font style variation on *"Recognized by Cornell Maha 60"*.
  - [x] Rewrite to: *"VEPL is **proudly a part** of the prestigious Cornell Maha 60 program."*
  - [x] Rewrite to: *"a fully sponsored **program** by the Government of Maharashtra."*
  - [x] Rewrite to: *"transformative journey of **the student**."*
  - [x] Rewrite to: *"We value diverse **perspective** and foster an environment."*
- [x] **Directors Section:** Fix font style variations and bio text:
  - [x] Neeraj Yadav bio: *"After serving in the industry for 15+ years of heading senior positions and delivering success."*
  - [x] Pranav Chobhe bio: *"proven track record of initiating and developing projects in education, on domestic and foreign soil."*

---

## 3. 🎓 Our Programs Page (`our-programs/index.html`)

- [x] **Global Navigation Bar:** Add interactive 3-column mega menu (Academic Disciplines, Specialized Programs, Global Destinations) & mobile drawer.
- [x] **Filter Bar Tabs:** Remove emoji icons from filter bar (clean text labels only: *All Programs*, *Best Selling*, *Academic Disciplines*, *Internships, Faculty Development & Conferences*, *How It Works*).

### Other Programs Cards & Modals:
- [x] **International Internship — Malaysia:**
  - [x] Remove Program Duration and Program Location blocks.
  - [x] Add *"3 Months Internship"* in description.
- [x] **Faculty Development Program:**
  - [x] Remove Program Duration and Program Location blocks.
- [x] **International Internship — Thailand:**
  - [x] Set Program Location strictly to *"Thailand"*.
- [x] **International Conferences & Seminars:**
  - [x] Remove Program Duration and Program Location blocks.

---

## 4. 🌍 Program Specific Pages & Itineraries (`our-programs/*.html`)

### General Itinerary Formatting Rules:
- [x] Do not write day titles in ALL CAPS (use Title Case e.g., `Day 1 – Arrival in Paris`).
- [ ] Use arrows `→` instead of the word "to" in day title transitions (e.g. `Day 3 – Kyoto → Osaka`).

### Europe (`our-programs/europe.html`)
- [x] Update description: *"Designed for students across disciplines such as management, engineering, architecture, and design, our Europe programs provide an opportunity to experience:"*
- [x] **West Europe Itinerary (8 Days):** Update Day 1–8 bullet points according to PDF pages 4–5.
- [x] **East Europe Itinerary (11 Days):** Update Day 1–11 bullet points according to PDF pages 5–7.

### Malaysia & Singapore (`our-programs/malaysia-singapore.html`)
- [x] Key Takeaways: Add *"Build global perspective and adaptability"* & *"Certification through international academic sessions"*.
- [x] **7 Days / 6 Nights Itinerary:** Update Day 1–7 bullet points according to PDF pages 7–8.

### Singapore & Indonesia (`our-programs/singapore-indonesia.html`)
- [x] **5 Days / 4 Nights Itinerary:** Update Day 1–5 bullet points according to PDF pages 8–9.

### UAE / Dubai (`our-programs/uae.html`)
- [x] **6 Days / 5 Nights Itinerary:** Update Day 1–6 bullet points according to PDF pages 9–10.

---

## 5. 📦 Standardized 8-Point Program Inclusions (Website-Wide)

- [x] Standardize the **Program Inclusions** section across all destination, academic, and specialized/internship pages to strictly these 8 points:
  1. **Flights (Roundtrip)**
  2. **Accommodation**
  3. **Meals**
  4. **Industry/Academic visit**
  5. **Transportation (Comfortable AC coach)**
  6. **Sightseeing**
  7. **Experienced VPL Tour leader**
  8. **Visa and Travel Insurance**

---

## 6. ⚙️ "How It Works" Section Updates

- [x] **Connect with Experts:** Update Step 2 heading to *"Connect with our Program Experts"* and description to *"Our team works closely with institutions to understand their objectives and create meaningful experiences."*
- [x] **Customize Your Experience:** Update Step 3 to *"based on your preferred learning outcomes and budget."*
- [x] **Pre-Departure Orientation:** Update Step 5 description to *"Before the journey begins, we conduct a detailed pre-departure orientation briefing for students and educators covering travel guidelines, cultural awareness, itinerary briefings, safety protocols, documentation, and program expectations."*
- [x] **Global Exposure:** Update heading to *"Experience Global Exposure & Exploration"*.
- [x] **Reflect, Share & Grow:** Update text to *"At the end of every program, we encourage feedback from both educators and students. These insights help us continuously improve and enhance our experiences, ensuring every future program becomes even more impactful, enriching, and globally relevant."*

---

## 7. 🖼️ Contact & Gallery Page Updates

- [x] **Contact Page (`contact.html`):** Remove dash from sub-header (*"Join the Global Circle of Vijigishu"*).
- [x] **Gallery Page (`gallery.html`):** Remove dash and put second sentence in one line (*"Our Global Footprint: Moments captured from thousands of successful student journeys worldwide."*).
- [x] **CTA Background Image:** Use student photo asset `gallery-singapore-07.webp` wrapped inside a royal blue morphing blob container.
