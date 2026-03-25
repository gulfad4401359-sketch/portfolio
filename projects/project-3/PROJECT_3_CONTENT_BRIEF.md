# PROJECT 3 CONTENT BRIEF
## IoT Smart Parking Management System

---

## STEP 0 — CONFIRM IMAGES IN FOLDER
All images must be present at: projects/project-3/

| Filename | Used for |
|---|---|
| project3_card.png | CARD front image |
| IMG20241116201943.jpg | Detail page — in-progress circuit photo |
| DSC_6244.JPG | Detail page — exhibition day group photo |

Confirm all 3 files exist before proceeding.

---

## PART 1 — projects.html — PROJECT 03 CARD

Locate the Project 03 card block (lines ~141–169).
Replace ALL placeholder tokens exactly as specified below.
Do NOT touch any other card or any other part of the file.

**Card front:**
- img src: `projects/project-3/project3_card.png`
- img alt: `Arduino UNO with red and green LEDs, IR sensor and jumper wires — IoT smart parking system`
- Project number: `Project 03` (already correct)
- h3 title (front): `IoT Smart Parking Management System`
- Tag 1: `Arduino`
- Tag 2: `IoT`
- Tag 3: `ESP8266`

**Card back:**
- Project number: `Project 03` (already correct)
- h3 title (back): `IoT Smart Parking Management System`
- Summary (MAX 12 WORDS): `Arduino & IoT system automating parking slot detection and gate control.`
- Outcome 1 (MAX 8 WORDS): `4 slots monitored via IR sensors in real-time`
- Outcome 2 (MAX 8 WORDS): `Live cloud dashboard via Arduino IoT Cloud`
- CTA link: `project-3.html` (already correct)

---

## PART 2 — project-3.html — FULL DETAIL PAGE

Replace the entire contents of project-3.html with the following.
IMAGE PATH RULE: Every src MUST use `projects/project-3/FILENAME` — never just the filename.

---

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IoT Smart Parking Management System — Muhammad Ali Portfolio</title>
    <meta name="description"
        content="IoT-based intelligent vehicle parking management system using Arduino, ESP8266, IR sensors, servo motors and cloud dashboard.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/detail.css">
</head>

<body class="page-detail-project">
    <div class="scroll-progress-bar" aria-hidden="true"></div>
    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar__links">
            <a href="index.html" class="navbar__link">Home</a>
            <a href="projects.html" class="navbar__link navbar__link--active">Projects</a>
            <a href="experience.html" class="navbar__link">Experience</a>
        </div>
        <a href="contact.html" class="navbar__cta">Contact</a>
        <button class="navbar__hamburger" aria-label="Open menu"
            aria-expanded="false"><span></span><span></span><span></span></button>
    </nav>
    <div class="navbar-spacer"></div>
    <div class="mobile-nav-overlay" role="dialog" aria-label="Mobile navigation" aria-hidden="true">
        <button class="mobile-nav-overlay__close" aria-label="Close menu">✕</button>
        <nav class="mobile-nav-overlay__links">
            <a href="index.html">Home</a>
            <a href="projects.html">Projects</a>
            <a href="experience.html">Experience</a>
            <a href="contact.html">Contact</a>
        </nav>
    </div>
    <main class="container" id="main-content">
        <a href="projects.html" class="detail-back">← Back to Projects</a>
        <header class="detail-header">
            <p class="detail-header__number">Project 03</p>
            <h1 class="detail-header__title">IoT Smart Parking Management System</h1>
            <div class="detail-header__line" aria-hidden="true"></div>
            <div class="detail-header__tags">
                <span class="tag">Arduino Uno</span>
                <span class="tag">ESP8266</span>
                <span class="tag">IR Sensors</span>
                <span class="tag">IoT</span>
                <span class="tag">Servo Motors</span>
            </div>
            <p class="detail-header__meta">2025</p>
        </header>
        <div class="detail-hero">
            <img class="detail-hero__img"
                src="projects/project-3/IMG20241116201943.jpg"
                alt="IoT smart parking system circuit in progress — Arduino, NodeMCU, IR sensors, LEDs and breadboard connections"
                loading="eager"
                style="object-fit: contain; max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 12px;">
        </div>
        <div class="detail-body">
            <article class="detail-prose">
                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Project Overview</h2>
                    <p class="detail-prose__text">The Intelligent Vehicle Parking Management System (IVPMS) is an
                        IoT-based solution built to automate parking slot detection, gate control, and real-time
                        monitoring. The system uses IR sensors to detect vehicle presence across 4 slots, servo motors
                        to control entry and exit gates, and an ESP8266 (NodeMCU) to transmit live data to the Arduino
                        IoT Cloud dashboard. A 20×4 I2C LCD on-site displays slot status in real time. This was a group
                        project for the AI & IoT course (ME-438) at NED University. My role covered complete hardware
                        assembly — wiring the Arduino Uno, NodeMCU, IR sensors, servo motors, LEDs, and breadboard —
                        as well as contributing to the coding of the full system.</p>
                </div>
                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Challenge</h2>
                    <p class="detail-prose__text">Conventional parking systems rely on manual monitoring, leading to
                        inefficient space utilization, long wait times, and no real-time visibility for drivers. The
                        challenge was to design a fully automated system that could detect occupancy, control gates
                        dynamically, and provide remote monitoring — all using low-cost, widely available hardware. The
                        circuit required careful integration of two separate microcontrollers: an Arduino Uno handling
                        gate servo control, and a NodeMCU (ESP8266) managing slot monitoring, LCD updates, and Wi-Fi
                        data transmission simultaneously.</p>
                </div>
                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Solution</h2>
                    <p class="detail-prose__text">The system was split into two microcontroller modules. The Arduino
                        Uno handled IR-triggered servo gate automation — opening the entry gate when a vehicle is
                        detected and a slot is available, and operating the exit gate on departure. The NodeMCU managed
                        4 IR slot sensors, updated the 20×4 LCD display with live slot status, and transmitted data
                        wirelessly to the Arduino IoT Cloud. The cloud dashboard visualized all 4 slots in real time,
                        accessible from any internet-connected device. The full circuit was assembled and wired on
                        breadboard, with separate schematics designed for each microcontroller to ensure clean
                        integration.</p>
                </div>
            </article>
            <aside class="detail-meta" aria-label="Project details">
                <div>
                    <span class="detail-meta__label">Tech Stack</span>
                    <div class="detail-meta__tags">
                        <span class="tag">Arduino Uno</span>
                        <span class="tag">NodeMCU ESP8266</span>
                        <span class="tag">IR Sensors</span>
                        <span class="tag">Servo Motors</span>
                        <span class="tag">I2C LCD</span>
                        <span class="tag">Arduino IoT Cloud</span>
                    </div>
                </div>
                <hr class="detail-meta__divider">
                <div><span class="detail-meta__label">Year</span><span class="detail-meta__value">2025</span></div>
                <div><span class="detail-meta__label">Role</span><span class="detail-meta__value">Hardware Assembly & Coding — Arduino, NodeMCU, IR Sensors, Servo Motors, Breadboard Wiring</span></div>
                <div><span class="detail-meta__label">Team</span><span class="detail-meta__value">Group OEL — 4 Members, AI & IoT (ME-438), NED University</span></div>
            </aside>
        </div>
        <div class="detail-image-row">
            <img src="projects/project-3/DSC_6244.JPG"
                alt="Team presenting IoT smart parking system at NED University AI and IoT exhibition — group photo at project stall"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 100%; height: auto; display: block; margin: 0 auto; border-radius: 12px;">
        </div>
        <section class="detail-outcomes" aria-labelledby="outcomes-heading-3">
            <h2 class="detail-outcomes__title" id="outcomes-heading-3">Key Outcomes</h2>
            <ul class="detail-outcomes__list">
                <li class="detail-outcomes__item">4 parking slots monitored in real-time via IR sensors with automated LED indicators and LCD status display</li>
                <li class="detail-outcomes__item">Entry and exit gates fully automated via servo motors triggered by vehicle detection</li>
                <li class="detail-outcomes__item">Live cloud dashboard deployed on Arduino IoT Cloud — slot occupancy visible remotely from any device</li>
            </ul>
        </section>
        <nav class="detail-nav" aria-label="Project navigation">
            <a href="project-2.html" class="detail-nav__link detail-nav__link--prev">← Previous Project</a>
            <a href="project-4.html" class="detail-nav__link">Next Project →</a>
        </nav>
    </main>
    <footer class="footer" role="contentinfo">
        <div class="footer__inner container">
            <p class="footer__copy">© 2026 [OWNER_NAME] — Built with purpose.</p>
            <div class="footer__social">
                <a href="#" class="footer__social-link" aria-label="LinkedIn"><svg viewBox="0 0 24 24"
                        fill="currentColor" width="20" height="20">
                        <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg></a>
                <a href="mailto:[OWNER_EMAIL]" class="footer__social-link" aria-label="Email"><svg viewBox="0 0 24 24"
                        fill="currentColor" width="20" height="20">
                        <path
                            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg></a>
            </div>
        </div>
    </footer>
    <script src="js/navbar.js"></script>
    <script src="js/scroll-anim.js"></script>
</body>

</html>
```

---

## FINAL INSTRUCTIONS

1. Confirm all 3 image files exist in projects/project-3/
2. Save projects.html — Project 03 card only. Do not touch any other card.
3. Save project-3.html — full replacement as written above.
4. Take Puppeteer screenshot of projects.html and project-3.html when done.
5. Check card back face — if project number or button is out of frame, report immediately.
6. Do not touch global.css, detail.css, navbar.css, or any other file.
7. Do not commit.
8. Report done.
