# EXPERIENCE_1_CONTENT_BRIEF.md
## Experience 01 — Engineering Intern at Artistic Milliners
### For: Muhammad Ali Gulfad — Portfolio

---

## STEP 0 — Confirm all images exist in experiences/experience-1/

Before editing any file, confirm all these files exist in:
`C:\Users\4star\Desktop\Claude dev\portfolio\experiences\experience-1\`

- AM.jpeg
- artistic-milliners-for-KPQ.png
- Absorption_chiller.png
- Boiler.png
- Gas_engine.png
- Utilities_panel_room.jpeg
- bathtub_curve.jpeg
- maintanance_and_relibility.jpeg

If any file is missing, stop and report. Do not proceed until all images are confirmed.

---

## PART 1 — Edit experience.html (Experience 01 card only)

Open `C:\Users\4star\Desktop\Claude dev\portfolio\experience.html` via Filesystem MCP.

Find the Experience 01 card block. It is the FIRST `.timeline-entry` div in the timeline section.
Replace the entire Experience 01 card-container div with the following HTML.
Do NOT touch the Experience 02 card. Do NOT touch any other element.

```html
<!-- ── EXPERIENCE 01 (LEFT) ───────────────────────────── -->
<div class="timeline-entry">
    <div class="card-container">
        <div class="card">
            <div class="card-face card-front">
                <div style="background-color: #ffffff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    <img src="experiences/experience-1/artistic-milliners-for-KPQ.png"
                        alt="Artistic Milliners — Engineering Internship"
                        class="card-image"
                        style="object-fit: contain; padding: 2rem;">
                </div>
                <div class="exp-front-overlay">
                    <div class="exp-dates">Mar 2025 — Apr 2025</div>
                    <h3 class="exp-role">Engineering Intern</h3>
                    <div class="exp-company">at Artistic Milliners</div>
                </div>
            </div>
            <div class="card-face card-back">
                <div class="project-number" style="margin-top: 1.5rem;">Experience 01</div>
                <h3 class="exp-role">Engineering Intern</h3>
                <div class="exp-company">at Artistic Milliners</div>
                <p class="exp-description" style="margin-bottom: 0.5rem;">Textile plant internship — HVAC, boilers, chillers, and power systems.</p>
                <div class="exp-skills" style="margin-top: 0.5rem; margin-bottom: 0.4rem;">
                    <span class="tag">HVAC</span>
                    <span class="tag">Boilers</span>
                    <span class="tag">RAM Analysis</span>
                </div>
                <a href="experience-1.html" class="exp-cta" style="margin-top: auto; margin-bottom: 12px;">View Full Experience →</a>
            </div>
        </div>
    </div>
</div>
```

Save experience.html. Do not commit.

---

## PART 2 — Replace experience-1.html fully

Open `C:\Users\4star\Desktop\Claude dev\portfolio\experience-1.html` via Filesystem MCP.
Replace the entire file content with the following HTML exactly as written.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineering Intern at Artistic Milliners — Muhammad Ali Portfolio</title>
    <meta name="description"
        content="Detail view of Muhammad Ali's Engineering Internship at Artistic Milliners AM-4 — utilities, HVAC, boilers, power generation, and maintenance systems.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="styles/global.css">
    <link rel="stylesheet" href="styles/navbar.css">
    <link rel="stylesheet" href="styles/detail.css">
</head>

<body class="page-detail-experience">
    <div class="scroll-progress-bar" aria-hidden="true"></div>

    <nav class="navbar" role="navigation" aria-label="Main navigation">
        <div class="navbar__links">
            <a href="index.html" class="navbar__link">Home</a>
            <a href="projects.html" class="navbar__link">Projects</a>
            <a href="experience.html" class="navbar__link navbar__link--active">Experience</a>
        </div>
        <a href="contact.html" class="navbar__cta">Contact</a>
        <button class="navbar__hamburger" aria-label="Open menu"
            aria-expanded="false"><span></span><span></span><span></span></button>
    </nav>

    <div class="navbar-spacer"></div>

    <div class="mobile-nav-overlay" aria-hidden="true">
        <button class="mobile-nav-overlay__close" aria-label="Close menu">✕</button>
        <a href="index.html" class="mobile-nav-overlay__link">Home</a>
        <a href="projects.html" class="mobile-nav-overlay__link">Projects</a>
        <a href="experience.html" class="mobile-nav-overlay__link is-active">Experience</a>
        <a href="contact.html" class="mobile-nav-overlay__link">Contact</a>
        <a href="resume.html" class="mobile-nav-overlay__link">Resume</a>
    </div>

    <main class="container" id="main-content">
        <a href="experience.html" class="detail-back">← Back to Experience</a>

        <header class="detail-header detail-header--experience" style="margin-top: 2.5rem;">
            <p class="detail-header__number">Experience 01</p>
            <h1 class="detail-header__title">Engineering Intern</h1>
            <div class="detail-header__line" aria-hidden="true"></div>
            <div class="detail-header__tags">
                <span class="tag">HVAC</span>
                <span class="tag">Boilers</span>
                <span class="tag">Chillers</span>
                <span class="tag">Power Generation</span>
                <span class="tag">RAM Analysis</span>
            </div>
            <p class="detail-header__meta">Mar 2025 — Apr 2025 · 4 Weeks</p>
        </header>

        <div class="detail-hero">
            <img class="detail-hero__img"
                src="experiences/experience-1/AM.jpeg"
                alt="Artistic Milliners facility exterior — Karachi"
                loading="eager"
                style="max-height: 420px; object-fit: cover;">
        </div>

        <!-- AM Logo block -->
        <div style="background-color: #ffffff; display: flex; align-items: center; justify-content: center; padding: 1.5rem 2rem; margin-bottom: 2rem; border-radius: 8px;">
            <img src="experiences/experience-1/artistic-milliners-for-KPQ.png"
                alt="Artistic Milliners logo"
                style="max-height: 80px; object-fit: contain;">
        </div>

        <div class="detail-body">
            <article class="detail-prose">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Role Overview</h2>
                    <p class="detail-prose__text">As part of a group internship at Artistic Milliners Unit 4 (AM-4), one of Pakistan's largest integrated textile manufacturers, I spent four weeks embedded within the Utilities Department — the backbone of the entire facility's mechanical and electrical infrastructure. The internship provided hands-on exposure to the systems that keep a large-scale industrial plant running continuously, including power generation, steam production, cooling, and HVAC.</p>
                    <p class="detail-prose__text">Artistic Milliners operates multiple processing units across Karachi, covering garment manufacturing, denim processing, and yarn spinning. The Utilities Department at AM-4 manages power supply, water treatment, steam generation, compressed air distribution, and environmental systems — all of which I observed and studied in operation.</p>
                </div>

                <img src="experiences/experience-1/Utilities_panel_room.jpeg"
                    alt="Medium Voltage utilities panel room at Artistic Milliners AM-4"
                    class="detail-prose__img"
                    style="width: 100%; max-height: 380px; object-fit: cover; border-radius: 8px; margin: 1.5rem 0;">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">HVAC & Chiller Systems</h2>
                    <p class="detail-prose__text">A major focus of the internship was understanding how large-scale HVAC systems are operated and maintained in an industrial textile environment. The facility uses chilled water generated by both absorption chillers and York compression chillers, which is then distributed through Air Handling Units (AHUs), Fan Coil Units (FCUs), and Fresh Air Handling Units (FAHUs) to maintain temperature and air quality across production floors.</p>
                    <p class="detail-prose__text">I gained first-hand understanding of how absorption chillers operate without a compressor, using heat to drive the cooling cycle through a lithium bromide and water working pair. This included observing the generator, condenser, evaporator, and absorber stages, along with the associated pump systems — hot water pumps, refrigerant pumps, solution pumps, and condenser pumps — that maintain continuous flow through the cycle.</p>
                </div>

                <img src="experiences/experience-1/Absorption_chiller.png"
                    alt="Absorption chiller unit at Artistic Milliners"
                    class="detail-prose__img"
                    style="width: 100%; max-height: 380px; object-fit: contain; border-radius: 8px; margin: 1.5rem 0;">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Boilers & Steam Generation</h2>
                    <p class="detail-prose__text">The facility's steam generation infrastructure was one of the most technically rich areas of the internship. I studied the operation of fire tube boilers used for primary steam supply, observing feed water treatment, steam pressure regulation, blowdown procedures, and safety valve operation. The plant also runs Waste Heat Recovery Boilers (WHRBs) connected directly to the gas engines, capturing exhaust heat and converting it into usable steam — improving overall energy efficiency significantly.</p>
                    <p class="detail-prose__text">Additionally, I was exposed to a biomass boiler system that burns wood to generate heat, providing a sustainable supplementary steam source. Working through Process Flow Diagrams (PFDs) and Piping and Instrumentation Diagrams (P&IDs) for the boiler systems helped solidify my understanding of how these industrial processes are documented and monitored.</p>
                </div>

                <img src="experiences/experience-1/Boiler.png"
                    alt="Gresham Waste Heat Recovery Boiler at Artistic Milliners AM-4"
                    class="detail-prose__img"
                    style="width: 100%; max-height: 380px; object-fit: contain; border-radius: 8px; margin: 1.5rem 0;">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Power Generation & MV Room</h2>
                    <p class="detail-prose__text">The facility operates a Tri-Generation Power Plant — simultaneously producing electricity, heat, and cooling from a single energy source. The power house is equipped with JENBACHER gas engines which drive the on-site generation capacity, supplemented by a rooftop solar installation and grid supply from K-Electric. I studied the operational logic behind balancing these three sources to optimise cost and reliability.</p>
                    <p class="detail-prose__text">Inside the Medium Voltage (MV) Room, I observed the switchgear, transformers, and circuit breaker panels that control power distribution across the plant. Key electrical components including vacuum circuit breakers, air circuit breakers, automatic voltage regulators, and LT synchronisation couplers were explained in the context of maintaining stable 50 Hz distribution across the facility. Safety protocols and PPE requirements in the power house were also covered.</p>
                </div>

                <img src="experiences/experience-1/Gas_engine.png"
                    alt="JENBACHER gas engine at Artistic Milliners AM-4 power house"
                    class="detail-prose__img"
                    style="width: 100%; max-height: 380px; object-fit: contain; border-radius: 8px; margin: 1.5rem 0;">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Maintenance & Reliability</h2>
                    <p class="detail-prose__text">A dedicated portion of the internship introduced industrial maintenance methodologies as applied in a real production environment. I was exposed to Root Cause Analysis (RCA) for identifying the underlying causes of equipment failures, and Reliability Centered Maintenance (RCM) for designing maintenance strategies around the functional requirements of each system rather than time-based schedules alone.</p>
                    <p class="detail-prose__text">The Bathtub Curve model — covering the infant mortality, useful life, and wear-out phases of equipment — was studied in the context of the plant's actual machinery lifecycle. Reliability, Availability, and Maintainability (RAM) analysis frameworks, including MTBF and MTTR calculations, were observed in use by the Utilities team for scheduling preventive maintenance and managing spare parts inventory.</p>
                </div>

                <img src="experiences/experience-1/bathtub_curve.jpeg"
                    alt="The Normal Bathtub Curve — Expected Failure Rate over operating time"
                    class="detail-prose__img"
                    style="width: 100%; max-height: 340px; object-fit: contain; border-radius: 8px; margin: 1.5rem 0;">

                <img src="experiences/experience-1/maintanance_and_relibility.jpeg"
                    alt="Maintenance and Reliability Optimization framework — from Reactive to Reliability-Driven"
                    class="detail-prose__img"
                    style="width: 100%; max-height: 300px; object-fit: contain; border-radius: 8px; margin: 1.5rem 0;">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Additional Exposure</h2>
                    <p class="detail-prose__text">Beyond the primary systems, the internship covered several other areas within the Utilities Department. I observed the denim washing and finishing systems, understanding how water is managed, treated, and recycled through the production process. Water treatment and softening plants, compressed air distribution networks, and effluent treatment processes were also part of the tour.</p>
                    <p class="detail-prose__text">Exposure to industrial control panels, motor control centres, and plant-wide instrumentation gave a broader picture of how large facilities integrate mechanical and electrical systems under a unified operations framework. The internship reinforced how energy management — balancing gas, solar, and grid sources — directly impacts operational cost in a facility where energy constitutes a significant portion of total running expenses.</p>
                </div>

            </article>

            <aside class="detail-meta" aria-label="Experience details">
                <div>
                    <span class="detail-meta__label">Systems Covered</span>
                    <div class="detail-meta__tags">
                        <span class="tag">HVAC</span>
                        <span class="tag">Chillers</span>
                        <span class="tag">Boilers</span>
                        <span class="tag">Power Generation</span>
                        <span class="tag">MV Room</span>
                        <span class="tag">RAM Analysis</span>
                        <span class="tag">Steam Systems</span>
                        <span class="tag">Tri-Generation</span>
                    </div>
                </div>
                <hr class="detail-meta__divider">
                <div><span class="detail-meta__label">Organisation</span><span class="detail-meta__value">Artistic Milliners (AM-4)</span></div>
                <div><span class="detail-meta__label">Location</span><span class="detail-meta__value">Karachi, Pakistan</span></div>
                <div><span class="detail-meta__label">Type</span><span class="detail-meta__value">Engineering Internship</span></div>
                <div><span class="detail-meta__label">Duration</span><span class="detail-meta__value">Mar 2025 — Apr 2025</span></div>
                <hr class="detail-meta__divider">
                <a href="https://www.artisticmilliners.com/" class="detail-meta__link detail-meta__link--primary" target="_blank" rel="noopener">↗ Artistic Milliners Website</a>
            </aside>
        </div>

        <section class="detail-outcomes" aria-labelledby="outcomes-heading-exp1">
            <h2 class="detail-outcomes__title" id="outcomes-heading-exp1">Key Takeaways</h2>
            <ul class="detail-outcomes__list">
                <li class="detail-outcomes__item">Gained practical exposure to industrial-scale HVAC, absorption chillers, and chilled water distribution systems within a large textile manufacturing facility</li>
                <li class="detail-outcomes__item">Developed hands-on understanding of steam boiler operation, waste heat recovery systems, and tri-generation power plants including JENBACHER gas engines and MV room infrastructure</li>
                <li class="detail-outcomes__item">Applied RAM analysis, RCA, RCM, and the Bathtub Curve model in a live industrial setting — understanding how reliability-driven maintenance strategies are implemented in continuous-process manufacturing</li>
            </ul>
        </section>

        <nav class="detail-nav" aria-label="Experience navigation">
            <a href="experience.html" class="detail-nav__link detail-nav__link--prev">← All Experience</a>
            <a href="experience-2.html" class="detail-nav__link">Next Experience →</a>
        </nav>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer__name">
                [OWNER_NAME] <span class="footer__diamond">◆</span> Portfolio
            </div>
            <p class="footer__tagline">[OWNER_BIO_TAGLINE]</p>
            <div class="footer__socials">
                <a href="[OWNER_LINKEDIN_URL]" class="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                    <svg viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
            </div>
            <div class="footer__copyright">© 2026 [OWNER_NAME]. All rights reserved.</div>
        </div>
    </footer>

    <script src="js/navbar.js"></script>
    <script src="js/scroll-anim.js"></script>
</body>

</html>
```

Save experience-1.html. Do not commit.

---

## FINAL INSTRUCTIONS

1. Confirm all 8 images exist in `experiences/experience-1/` — if any are missing, stop and report
2. Edit experience.html — replace Experience 01 card only, do not touch Experience 02
3. Replace experience-1.html fully with the HTML above
4. Use Puppeteer MCP to screenshot experience.html and experience-1.html when both files are saved
5. Check Experience 01 card back — if the Experience number or View Full Experience button is off-screen, report it
6. Do not touch any other file
7. Do not commit
8. Report done
