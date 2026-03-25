# PROJECT 01 — CONTENT BRIEF
## MD Nanoindentation of Clay Minerals — Final Year Project
For Antigravity IDE. Follow every instruction in exact order.

---

## STEP 0 — CONFIRM ALL IMAGES EXIST IN projects/project-1/

Check that every file below exists in `projects/project-1/`:
- Methodology.jpeg
- unit_cell_to_super_cell_model.png
- Hardness_simulation_setup.jpeg
- surface_energy_simulation_setup.jpeg
- Interfacial_Energy_simulation_setup.jpeg
- before_vs_after_indentation_model.jpeg
- Kaolinite_graph.PNG
- Me_with_our_poster.png
- FYDP_group_pic.jpeg
- Group_pic_with_our_fyp_supervising_teacher.jpeg
- final_report_cover_pic.jpeg

Report which files are present and which are missing before proceeding.

---

## PART 1 — projects.html CARD — PROJECT 01 ONLY

Find the PROJECT 01 card in `projects.html`. Replace the entire card block (from `<!-- ── PROJECT 01 (LEFT) -->` opening div to its closing `</div>`) with the following. Do not touch any other card.

```html
<!-- ── PROJECT 01 (LEFT) ────────────────────────────────── -->
<div class="timeline-entry">
    <div class="card-container">
        <div class="card">
            <div class="card-face card-front">
                <img src="projects/project-1/Methodology.jpeg"
                    alt="Methodology roadmap for clay minerals MD simulation study — Materials Studio, LAMMPS, OVITO pipeline"
                    class="card-image">
                <div class="card-front-content">
                    <div class="project-number">Project 01</div>
                    <h3 class="project-title">MD Nanoindentation of Clay Minerals</h3>
                    <div class="project-tags">
                        <span class="tag">MD Simulation</span>
                        <span class="tag">LAMMPS</span>
                        <span class="tag">Materials Studio</span>
                    </div>
                </div>
            </div>
            <div class="card-face card-back">
                <div class="project-number" style="margin-top: 1.5rem;">Project 01</div>
                <h3 class="project-title">MD Nanoindentation of Clay Minerals</h3>
                <p class="project-summary" style="margin-bottom: 0.5rem;">Atomic-scale nanoindentation of clay minerals — hardness and modulus derived via MD simulation.</p>
                <div class="project-outcomes">
                    <div class="project-outcomes__label" style="margin-top: 0.5rem; margin-bottom: 0.4rem;">Key Outcomes</div>
                    <div class="project-outcome">Pyrophyllite — strongest mineral, highest modulus</div>
                    <div class="project-outcome">3rd Place — 14th Int'l ME Conference</div>
                </div>
                <a href="project-1.html" class="project-cta" style="margin-top: auto; margin-bottom: 12px;">View Full Project →</a>
            </div>
        </div>
    </div>
</div>
```

---

## PART 2 — project-1.html FULL REPLACEMENT

Replace the entire contents of `project-1.html` with the following HTML:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MD Nanoindentation of Clay Minerals — Muhammad Ali Portfolio</title>
    <meta name="description"
        content="Final Year Project: Molecular Dynamics simulation-based nanoindentation of clay minerals — deriving hardness, Young's modulus, surface energy and interfacial energy at the atomistic scale using LAMMPS.">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet">

    <!-- Stylesheets -->
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

        <a href="projects.html" class="detail-back" aria-label="Back to all projects">← Back to Projects</a>

        <header class="detail-header">
            <p class="detail-header__number" style="margin-top: 2.5rem;">Project 01</p>
            <h1 class="detail-header__title">Numerical Investigation of Mechanical Properties of Various Clay Minerals</h1>
            <div class="detail-header__line" aria-hidden="true"></div>
            <div class="detail-header__tags">
                <span class="tag">MD Simulation</span>
                <span class="tag">LAMMPS</span>
                <span class="tag">Materials Studio</span>
                <span class="tag">OVITO</span>
                <span class="tag">Nanoindentation</span>
            </div>
            <p class="detail-header__meta">Aug 2024 — Jun 2025</p>
        </header>

        <div class="detail-hero">
            <img class="detail-hero__img"
                src="projects/project-1/Methodology.jpeg"
                alt="Methodology roadmap for clay minerals MD simulation — Literature Review, Material Selection, Model Building, Simulation Setup, Mechanical Testing, Post-Processing"
                loading="eager"
                style="max-height: 420px; object-fit: contain;">
        </div>

        <div class="detail-body">

            <article class="detail-prose">

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Project Overview</h2>
                    <p class="detail-prose__text">
                        This Final Year Project performs a numerical investigation into the mechanical properties of clay minerals — Kaolinite (Aluminum side and Silicon side) and Pyrophyllite — using Molecular Dynamics (MD) simulation. Virtual atomistic models were subjected to nanoindentation at the nanoscale to derive hardness, Young's modulus, surface energy, and interfacial energy from first principles.
                    </p>
                    <p class="detail-prose__text">
                        Clay minerals are critical materials in construction, ceramics, and geotechnics. Despite extensive research, gaps remain in understanding how structural variations and environmental conditions influence mechanical behaviour at the nanoscale. MD simulation was selected over conventional FEA because it captures atomic-level interactions — dislocation motion, crack initiation, and surface chemistry — without requiring pre-defined bulk material inputs.
                    </p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/unit_cell_to_super_cell_model.png"
                        alt="Conversion of unit cell to supercell of clay mineral in Materials Studio — atomistic model building"
                        style="max-height: 360px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">Unit cell expanded to supercell in Materials Studio — minimises boundary effects for accurate simulation.</p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Simulation Methodology</h2>
                    <p class="detail-prose__text">
                        The simulation pipeline ran across three phases. First, atomistic models were built in Materials Studio using crystallographic data — unit cells were expanded into supercells with periodic boundary conditions to minimise edge effects. The supercell was divided into three functional layers: a Fixed Layer at the bottom (atoms frozen to prevent rigid body translation), a Thermostat Layer in the middle (Langevin thermostat maintaining room temperature), and an Active Layer at the top that directly interacts with the spherical indenter.
                    </p>
                    <p class="detail-prose__text">
                        The LAMMPS input script — written entirely from scratch — ran a two-stage simulation. The NVT equilibration stage stabilised the model at room temperature. The NVE nanoindentation stage then descended a spherical indenter at constant velocity using the CVFF force field with Lennard-Jones and long-range Coulombic interactions.
                    </p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/Hardness_simulation_setup.jpeg"
                        alt="LAMMPS nanoindentation simulation setup — spherical indenter descending onto clay mineral supercell showing Active, Thermostat, and Fixed layers"
                        style="max-height: 400px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">Complete nanoindentation simulation setup — spherical indenter (black), Active Layer (pink), Thermostat Layer (green), Fixed Layer (purple).</p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Surface & Interfacial Energy</h2>
                    <p class="detail-prose__text">
                        Beyond mechanical properties, the study computed surface energy and interfacial energy for each mineral. Surface energy quantifies the cohesiveness of a material — the energy required to create a new surface by breaking atomic bonds. Interfacial energy measures the excess energy at the boundary between the clay mineral and water, directly governing swelling risk and substrate compatibility.
                    </p>
                    <p class="detail-prose__text">
                        Two separate simulation protocols were designed: a slab-cleavage model for surface energy, and a mineral-water separation model for interfacial energy. Both were computed from the energy difference between combined and isolated system states.
                    </p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/surface_energy_simulation_setup.jpeg"
                        alt="Surface energy simulation — combined mineral slab cleaved into two surfaces to compute surface energy difference"
                        style="max-height: 320px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">Surface energy protocol — combined slab cleaved into two surfaces; energy difference divided by twice the area gives surface energy.</p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/Interfacial_Energy_simulation_setup.jpeg"
                        alt="Interfacial energy simulation — water and mineral separated from combined model to compute energy at mineral-water boundary"
                        style="max-height: 320px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">Interfacial energy protocol — mineral-water combined system separated into isolated components; boundary energy computed from the energy difference.</p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Results & Key Findings</h2>
                    <p class="detail-prose__text">
                        Force vs Depth data was extracted from the LAMMPS output and plotted in Excel and AnyChart. Hertz contact theory was applied to derive mechanical properties from the curves. Kaolinite-Al showed a steeper slope with a distinct peak before yielding — indicating elastic recovery and higher resistance to plastic deformation. Kaolinite-Si produced a softer response at the same indentation depth, confirming directional anisotropy between the Al-octahedral and Si-tetrahedral faces. Pyrophyllite exhibited a smooth, high-force plastic curve with no crack propagation.
                    </p>
                    <p class="detail-prose__text">
                        Final results confirmed that Pyrophyllite is the strongest and stiffest mineral studied — with Young's modulus and hardness nearly double those of kaolinite. Kaolinite's Al-side hardness exceeded its Si-side, demonstrating clear structural anisotropy. All values were validated against published literature, confirming the accuracy of the CVFF force field for these clay systems.
                    </p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/before_vs_after_indentation_model.jpeg"
                        alt="OVITO visualisation of Kaolinite-Aluminum supercell — before indentation (top) and at intermediate indentation depth showing deformation crater (bottom)"
                        style="max-height: 480px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">OVITO post-processing — Kaolinite-Al supercell before indentation (top) and at intermediate depth with visible atomic deformation crater (bottom).</p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/Kaolinite_graph.PNG"
                        alt="Force vs Depth graph for Kaolinite Aluminum side — showing elastic region, peak force, and post-yield behaviour"
                        style="max-height: 360px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">Force vs Depth curve — Kaolinite (Al side). Distinct elastic region, peak force, and post-yield drop confirm expected mechanical behaviour.</p>
                </div>

                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Leadership & Team Management</h2>
                    <p class="detail-prose__text">
                        As Group Leader of a four-member team, all coordination with the FYP supervisor (Dr. Tariq Jamil) and FYP Coordinator was handled independently — scheduling regular progress meetings, managing documentation submissions, and ensuring full compliance with department requirements. Tasks were assigned to each team member with progress tracked continuously throughout the project cycle.
                    </p>
                    <p class="detail-prose__text">
                        A deliberate approach was taken to always remain two steps ahead of the team technically, enabling effective guidance on queries and problems as they arose. All documentation — methodology chapters, report compilation, milestone submissions — was personally authored and compiled.
                    </p>
                </div>

                <div class="detail-image-block">
                    <img src="projects/project-1/final_report_cover_pic.jpeg"
                        alt="Final Year Project report — Numerical Investigation of Mechanical Properties of Various Clay Minerals, NED University Mechanical Engineering Department, June 2025"
                        style="max-height: 420px; object-fit: contain; width: 100%;">
                    <p class="detail-image-caption">Completed FYP report — submitted June 2025, NED University Department of Mechanical Engineering.</p>
                </div>

            </article>

            <aside class="detail-meta" aria-label="Project details">
                <div>
                    <span class="detail-meta__label">Tools & Software</span>
                    <div class="detail-meta__tags">
                        <span class="tag">Materials Studio</span>
                        <span class="tag">LAMMPS</span>
                        <span class="tag">OVITO</span>
                        <span class="tag">VMD</span>
                        <span class="tag">Excel / AnyChart</span>
                    </div>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Duration</span>
                    <span class="detail-meta__value">Aug 2024 — Jun 2025</span>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Role</span>
                    <span class="detail-meta__value">Group Leader — Simulation, Methodology & Literature Review</span>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Team</span>
                    <span class="detail-meta__value">Student Group Project</span>
                </div>
                <hr class="detail-meta__divider">
                <div>
                    <span class="detail-meta__label">Conference</span>
                    <span class="detail-meta__value">14th Int'l ME Conference — 3rd Position (50+ entries)</span>
                </div>
            </aside>

        </div><!-- /.detail-body -->

        <section class="detail-outcomes" aria-labelledby="outcomes-heading">
            <h2 class="detail-outcomes__title" id="outcomes-heading">Key Outcomes</h2>
            <ul class="detail-outcomes__list">
                <li class="detail-outcomes__item">Pyrophyllite confirmed as the strongest and stiffest mineral studied — Young's modulus and hardness nearly double those of kaolinite — validated for compression and contact-loading applications</li>
                <li class="detail-outcomes__item">Kaolinite structural anisotropy confirmed — Al-octahedral side is significantly harder than Si-tetrahedral side, demonstrating that surface chemistry governs atomic-scale mechanical response</li>
                <li class="detail-outcomes__item">Full MD simulation framework built from scratch — LAMMPS script, Materials Studio supercells, OVITO post-processing — validated against published literature with CVFF force field confirmed accurate</li>
                <li class="detail-outcomes__item">Secured 3rd Position at the 14th International Mechanical Engineering Conference (50+ poster entries) — sole viva presenter for the group</li>
            </ul>
        </section>

        <section class="detail-prose__section" style="margin-top: 2rem;">
            <div class="detail-image-block">
                <img src="projects/project-1/Me_with_our_poster.png"
                    alt="Muhammad Ali standing with the FYP research poster at the 14th International Mechanical Engineering Conference"
                    style="max-height: 500px; object-fit: contain; width: 100%;">
                <p class="detail-image-caption">14th International Mechanical Engineering Conference — sole viva presenter. Group secured 3rd Position among 50+ entries.</p>
            </div>

            <div class="detail-image-block" style="margin-top: 1.5rem;">
                <img src="projects/project-1/Group_pic_with_our_fyp_supervising_teacher.jpeg"
                    alt="FYP Group 44 with supervisor Dr. Tariq Jamil at NED University Mechanical Engineering Department"
                    style="max-width: 60%; max-height: 380px; object-fit: contain; display: block; margin: 0 auto;">
                <p class="detail-image-caption">FYP Group 44 with supervisor Dr. Tariq Jamil — NED University Department of Mechanical Engineering.</p>
            </div>

            <div class="detail-image-block" style="margin-top: 1.5rem;">
                <img src="projects/project-1/FYDP_group_pic.jpeg"
                    alt="FYP Group 44 — Muhammad Ali Gulfad, Syed Muhammad Taha, Saad Mohiuddin Farooqi, Shahzaib Ali Khan"
                    style="max-width: 60%; max-height: 380px; object-fit: contain; display: block; margin: 0 auto;">
                <p class="detail-image-caption">FYP Group 44 — Group Leader Muhammad Ali Gulfad with team members.</p>
            </div>
        </section>

        <nav class="detail-nav" aria-label="Project navigation">
            <a href="projects.html" class="detail-nav__link detail-nav__link--prev">← All Projects</a>
            <a href="project-2.html" class="detail-nav__link">Next Project →</a>
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
2. Edit `projects.html` — Project 01 card only. Do not touch any other card.
3. Replace `project-1.html` fully as specified in Part 2.
4. Use Puppeteer MCP to screenshot `projects.html` and `project-1.html` when both files are saved.
5. On the projects.html screenshot — check the Project 01 card back face: confirm project number, summary, outcomes, and button are all visible and not cut off.
6. Report done. Do not commit.
