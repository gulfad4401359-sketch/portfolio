# EXPERIENCE 02 — CONTENT BRIEF
## Engineering Intern — Pakistan Airports Authority
For Antigravity IDE. Follow every instruction in exact order.

---

## STEP 0 — CONFIRM ALL IMAGES EXIST IN experiences/experience-2/

Check that both files below exist in `experiences/experience-2/`:
- Pakistan_Airports_Authority_logo.png
- R.jfif

Report which files are present and which are missing before proceeding.

---

## PART 1 — experience.html CARD — EXPERIENCE 02 ONLY

Find the EXPERIENCE 02 card in `experience.html`. Replace the entire card block (from `<!-- ── EXPERIENCE 02 (RIGHT) -->` opening div to its closing `</div>`) with the following. Do not touch Experience 01 card or any other element.

```html
<!-- ── EXPERIENCE 02 (RIGHT) ──────────────────────────── -->
<div class="timeline-entry">
    <div class="card-container">
        <div class="card">
            <div class="card-face card-front">
                <div style="background-color: #ffffff; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
                    <img src="experiences/experience-2/Pakistan_Airports_Authority_logo.png"
                        alt="Pakistan Airports Authority — PAA logo"
                        class="card-image"
                        style="object-fit: contain; padding: 2rem;">
                </div>
                <div class="exp-front-overlay">
                    <div class="exp-dates">Mar 2024 — Apr 2024</div>
                    <h3 class="exp-role">Engineering Intern</h3>
                    <div class="exp-company">at Pakistan Airports Authority</div>
                </div>
            </div>
            <div class="card-face card-back">
                <div class="project-number" style="margin-top: 1.5rem;">Experience 02</div>
                <h3 class="exp-role">Engineering Intern</h3>
                <div class="exp-company">at Pakistan Airports Authority</div>
                <p class="exp-description" style="margin-bottom: 0.5rem;">Hands-on internship in airport mechanical systems — HVAC, escalators, elevators, and conveyors.</p>
                <div class="exp-skills" style="margin-top: 0.5rem; margin-bottom: 0.4rem;">
                    <span class="tag">HVAC</span>
                    <span class="tag">Mechanical Systems</span>
                    <span class="tag">Maintenance</span>
                </div>
                <a href="experience-2.html" class="exp-cta" style="margin-top: auto; margin-bottom: 12px;">View Full Experience →</a>
            </div>
        </div>
    </div>
</div>
```

---

## PART 2 — experience-2.html FULL REPLACEMENT

Replace the entire contents of `experience-2.html` with the following HTML:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Engineering Intern at Pakistan Airports Authority — Muhammad Ali Portfolio</title>
    <meta name="description"
        content="Engineering internship at Pakistan Airports Authority — Jinnah International Airport, Karachi. Hands-on exposure to HVAC, escalators, elevators, conveyor belts, and airport mechanical systems.">
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
        <button class="navbar__hamburger" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
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

        <a href="experience.html" class="detail-back">← Back to Experience</a>

        <header class="detail-header detail-header--experience">
            <p class="detail-header__number" style="margin-top: 2.5rem;">Experience 02</p>
            <h1 class="detail-header__title">Engineering Intern</h1>
            <div class="detail-header__line" aria-hidden="true"></div>
            <div class="detail-header__tags">
                <span class="tag">Pakistan Airports Authority</span>
                <span class="tag">Internship</span>
                <span class="tag">Karachi</span>
            </div>
            <p class="detail-header__meta">Mar 2024 — Apr 2024 · 4 Weeks</p>
        </header>

        <!-- Hero — Airport building photo -->
        <div class="detail-hero">
            <img class="detail-hero__img"
                src="experiences/experience-2/R.jfif"
                alt="Jinnah International Airport Karachi — Pakistan Airports Authority"
                loading="eager"
                style="max-height: 420px; object-fit: cover;">
        </div>

        <div class="detail-body">

            <article class="detail-prose">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Role Overview</h2>
                    <p class="detail-prose__text">
                        This four-week engineering internship was undertaken at Jinnah International Airport, Karachi — under the Pakistan Airports Authority (PAA), formerly the Civil Aviation Authority (CAA). As part of a group of engineering interns, the internship provided direct, hands-on exposure to the live mechanical and electromechanical systems that keep a major international airport running continuously around the clock.
                    </p>
                    <p class="detail-prose__text">
                        The internship covered the Engineering and Maintenance division of the airport — observing and assisting qualified engineers and technicians across multiple system categories, from large-scale HVAC plant rooms to passenger-facing mechanical infrastructure such as escalators, elevators, and baggage conveyor systems.
                    </p>
                </div>

                <!-- PAA logo — after Overview, white background -->
                <div class="detail-image-block">
                    <div style="background-color: #ffffff; display: flex; align-items: center; justify-content: center; padding: 2rem; border-radius: 8px;">
                        <img src="experiences/experience-2/Pakistan_Airports_Authority_logo.png"
                            alt="Pakistan Airports Authority — PAA official logo"
                            style="max-height: 200px; object-fit: contain;">
                    </div>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">HVAC Systems</h2>
                    <p class="detail-prose__text">
                        A significant portion of the internship was dedicated to understanding the airport's HVAC (Heating, Ventilation, and Air Conditioning) infrastructure. Observed full-scale HVAC plant room operations including chiller units, air handling units (AHUs), cooling towers, and ductwork distribution across the terminal. Gained practical understanding of temperature zoning, airflow management, and the continuous balancing required to maintain passenger comfort across different terminal areas simultaneously.
                    </p>
                    <p class="detail-prose__text">
                        Observed how HVAC systems are monitored and adjusted in response to passenger load fluctuations, time of day, and seasonal variations — understanding the engineering decisions behind keeping a large public building at consistent conditions under variable occupancy.
                    </p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Escalators & Elevators</h2>
                    <p class="detail-prose__text">
                        Assisted the maintenance team during scheduled inspections and troubleshooting of passenger escalators and elevators throughout the terminal. Observed how fault diagnostics are carried out on escalator drive systems, safety interlocks, and step chain mechanisms. Gained exposure to elevator hydraulic and traction systems, including door mechanism alignment, cabin levelling, and safety device testing — all conducted under live airport operational conditions with minimal disruption to passengers.
                    </p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Baggage Conveyor Systems</h2>
                    <p class="detail-prose__text">
                        Assisted in maintenance and troubleshooting of the airport's baggage conveyor belt systems — the critical infrastructure linking check-in counters, sorting areas, and baggage claim carousels. Observed belt tension adjustment, drive motor inspection, roller replacement procedures, and fault identification during operational hours. Understanding the mechanical and control systems behind high-volume baggage handling provided direct insight into the engineering complexity behind airport ground operations.
                    </p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Additional Exposure</h2>
                    <p class="detail-prose__text">
                        Beyond the core systems, the internship provided broader exposure to airport engineering operations — including observations of electrical distribution panels and switchgear maintenance, standby generator systems and their testing protocols, fire suppression and safety system checks, and the documentation processes used for maintenance logs and work orders. This gave a holistic understanding of how a large-scale engineering facility is managed and maintained in a 24/7 operational environment.
                    </p>
                </div>

            </article>

            <aside class="detail-meta" aria-label="Experience details">
                <div>
                    <span class="detail-meta__label">Systems Covered</span>
                    <div class="detail-meta__tags">
                        <span class="tag">HVAC</span>
                        <span class="tag">Escalators</span>
                        <span class="tag">Elevators</span>
                        <span class="tag">Conveyor Systems</span>
                        <span class="tag">Electrical Systems</span>
                    </div>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Organisation</span>
                    <span class="detail-meta__value">Pakistan Airports Authority (PAA)</span>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Location</span>
                    <span class="detail-meta__value">Jinnah International Airport, Karachi</span>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Type</span>
                    <span class="detail-meta__value">Engineering Internship · 4 Weeks</span>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Duration</span>
                    <span class="detail-meta__value">Mar 2024 — Apr 2024</span>
                </div>
                <hr class="detail-meta__divider">
                <a href="https://paa.gov.pk/" class="detail-meta__link detail-meta__link--primary" target="_blank" rel="noopener">↗ PAA Official Site</a>
            </aside>

        </div><!-- /.detail-body -->

        <section class="detail-outcomes" aria-labelledby="outcomes-heading-exp2">
            <h2 class="detail-outcomes__title" id="outcomes-heading-exp2">Key Takeaways</h2>
            <ul class="detail-outcomes__list">
                <li class="detail-outcomes__item">Gained hands-on exposure to full-scale airport HVAC operations — chiller plants, AHUs, cooling towers, and terminal airflow management under live conditions</li>
                <li class="detail-outcomes__item">Assisted in escalator, elevator, and baggage conveyor maintenance — observing fault diagnosis, safety interlocks, and mechanical troubleshooting in a high-traffic environment</li>
                <li class="detail-outcomes__item">Developed practical understanding of how large-scale engineering infrastructure is managed, documented, and maintained in a continuous 24/7 operational setting</li>
            </ul>
        </section>

        <nav class="detail-nav" aria-label="Experience navigation">
            <a href="experience-1.html" class="detail-nav__link detail-nav__link--prev">← Previous Experience</a>
            <a href="experience.html" class="detail-nav__link">All Experience →</a>
        </nav>

    </main>

    <footer class="footer" role="contentinfo">
        <div class="footer__inner container">
            <p class="footer__copy">© 2026 Muhammad Ali — Built with purpose.</p>
            <div class="footer__social">
                <a href="#" class="footer__social-link" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                </a>
                <a href="mailto:[OWNER_EMAIL]" class="footer__social-link" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                </a>
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

1. Confirm all images in Step 0 before touching any file.
2. Edit `experience.html` — Experience 02 card only. Do not touch Experience 01 card or any other element.
3. Replace `experience-2.html` fully as specified in Part 2.
4. Use Puppeteer MCP to screenshot `experience.html` and `experience-2.html` when both files are saved.
5. On the experience.html screenshot — check the Experience 02 card back: confirm role, company, description, skills, and button are all visible and not cut off.
6. Report done. Do not commit.
