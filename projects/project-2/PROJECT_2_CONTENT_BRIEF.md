# PROJECT_2_CONTENT_BRIEF.md
## C-Beam Stress Analysis — Analytical, Experimental & FEA

---

## STEP 0 — Confirm all these image files exist in projects/project-2/

- experimental_method_setup.jpeg
- strain_guage_attachment_on_beam__2_.jpeg
- mesh_independecy_graph.jpeg
- mesh.jpeg
- stress_1.jpeg
- stress_2.jpeg
- 3d_model_of_beam.jpeg
- All_views_of_modeled_beam.jpeg

Report which files are present and which are missing. Do not proceed until confirmed.

---

## PART 1 — Edit Project 02 card in projects.html ONLY

Find the Project 02 card. Replace ONLY the following — do not touch any other card:

**Card image:**
src="projects/project-2/experimental_method_setup.jpeg"
alt="C-beam cantilever experimental setup with Arduino strain gauge system and brick load"

**Card title (both instances):**
C-Beam Stress Analysis

**Card number:**
PROJECT 02
Add style="margin-top: 1.5rem;" to the PROJECT 02 number element.

**3 tags:**
SolidWorks / ANSYS / FEA

**Summary (max 12 words):**
PLA C-beam stress validated through FEA, experiment, and analytical methods.

**Outcome 1 (max 8 words):**
Three-method validation — FEA error under 8%

**Outcome 2 (max 8 words):**
Mesh independence confirmed at 6mm, 900 elements

**View Full Project button:**
href="project-2.html"
Add style="margin-top: auto; margin-bottom: 12px;" to the button.

---

## PART 2 — Replace project-2.html fully

Replace the entire content of project-2.html with the following. Keep all external links (fonts, css, js) exactly as they are in the current file:

---

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C-Beam Stress Analysis — Muhammad Ali Portfolio</title>
    <meta name="description"
        content="Stress analysis of a PLA C-beam using analytical calculations, experimental strain gauge testing, and ANSYS FEA simulation — three-method validation study.">
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
            <p class="detail-header__number" style="margin-top: 2.5rem;">Project 02</p>
            <h1 class="detail-header__title">C-Beam Stress Analysis</h1>
            <div class="detail-header__line" aria-hidden="true"></div>
            <div class="detail-header__tags">
                <span class="tag">SolidWorks</span>
                <span class="tag">ANSYS Mechanical</span>
                <span class="tag">FEA</span>
                <span class="tag">Static Structural</span>
                <span class="tag">Strain Gauges</span>
            </div>
            <p class="detail-header__meta">2024</p>
        </header>
        <div class="detail-hero">
            <img class="detail-hero__img"
                src="projects/project-2/experimental_method_setup.jpeg"
                alt="C-beam cantilever experimental setup with Arduino strain gauge data acquisition system and brick weight load"
                loading="eager"
                style="object-fit: contain; max-width: 100%; height: auto; max-height: 420px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>
        <div class="detail-body">
            <article class="detail-prose">
                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Project Overview</h2>
                    <p class="detail-prose__text">This project performed a comprehensive stress analysis of a 3D-printed PLA C-beam under static cantilever loading — validated across three independent methods: analytical calculation, physical experimentation, and Finite Element Analysis (FEA). The beam (300mm length, 25mm flange width, 3mm wall thickness) was subjected to a 19.62 N point load at its free end. My contribution covered the full numerical workflow: 3D modelling in SolidWorks, static structural FEA in ANSYS, and a mesh independence study across seven mesh sizes. The other two team members handled analytical derivations and experimental strain gauge testing respectively, with two of us co-authoring the final report.</p>
                </div>
                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Challenge</h2>
                    <p class="detail-prose__text">C-beams with open cross-sections are prone to twisting under load, which analytical models typically ignore. The challenge was to accurately predict stress, strain, and deflection while accounting for this behaviour — and then validate the simulation against physical measurements. The experimental method introduced its own complexity: strain gauges had to be precisely bonded to the PLA surface, wired in a Wheatstone bridge configuration, and read through an Arduino-based data acquisition system. Achieving reliable strain data required careful calibration before any load was applied. On the FEA side, selecting the correct mesh size was critical — too coarse and the results diverge; too fine and computation becomes inefficient.</p>
                </div>
                <div class="detail-prose__section">
                    <h2 class="detail-prose__heading">Solution</h2>
                    <p class="detail-prose__text">The C-beam was modelled in SolidWorks with exact geometry and imported into ANSYS Mechanical for static structural analysis. A 19.62 N force was applied at the free end with a fixed support at the root. Seven mesh configurations were tested — from 30mm (100 elements) down to 6mm (900 elements) — and a MATLAB mesh independence plot confirmed convergence. Mesh 7 (6mm) was selected as the final configuration, with stress results stable within 2% of the previous iteration. For the experiment, strain gauges were bonded along the upper flange at high-stress locations and connected to an HX711 signal amplifier and Arduino Uno for real-time strain logging. Results from all three methods were compared directly.</p>
                </div>
            </article>
            <aside class="detail-meta" aria-label="Project details">
                <div>
                    <span class="detail-meta__label">Tech Stack</span>
                    <div class="detail-meta__tags">
                        <span class="tag">SolidWorks</span>
                        <span class="tag">ANSYS Mechanical</span>
                        <span class="tag">Static Structural</span>
                        <span class="tag">FEA</span>
                        <span class="tag">MATLAB</span>
                        <span class="tag">Arduino Uno</span>
                        <span class="tag">Strain Gauges</span>
                    </div>
                </div>
                <hr class="detail-meta__divider">
                <div><span class="detail-meta__label">Year</span><span class="detail-meta__value">2024</span></div>
                <div><span class="detail-meta__label">Role</span><span class="detail-meta__value">3D Modelling & FEA — SolidWorks Model, ANSYS Static Structural, Mesh Independence Study</span></div>
                <div><span class="detail-meta__label">Team</span><span class="detail-meta__value">Student Group Project</span></div>
            </aside>
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/3d_model_of_beam.jpeg"
                alt="SolidWorks 3D model of PLA C-beam — isometric view"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 70%; height: auto; max-height: 340px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/All_views_of_modeled_beam.jpeg"
                alt="Engineering drawing showing all views of the C-beam with dimensions"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 70%; height: auto; max-height: 340px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/mesh.jpeg"
                alt="ANSYS structured mesh of C-beam — 6mm element size, 900 elements"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 90%; height: auto; max-height: 360px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/stress_1.jpeg"
                alt="ANSYS von Mises equivalent stress result for PLA C-beam — peak 6.54 MPa, average 2.46 MPa"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 90%; height: auto; max-height: 360px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/stress_2.jpeg"
                alt="ANSYS total deformation result for PLA C-beam — max 6.38mm, average 1.63mm"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 90%; height: auto; max-height: 360px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/mesh_independecy_graph.jpeg"
                alt="MATLAB mesh independence test graph — stress vs number of elements, convergence confirmed under 2% error"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 85%; height: auto; max-height: 360px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <div class="detail-image-row">
            <img src="projects/project-2/strain_guage_attachment_on_beam__2_.jpeg"
                alt="Strain gauges bonded to PLA C-beam surface for experimental stress measurement"
                class="detail-prose__img"
                style="object-fit: contain; max-width: 55%; height: auto; max-height: 340px; display: block; margin: 0 auto; border-radius: 12px;">
        </div>

        <section class="detail-outcomes" aria-labelledby="outcomes-heading-2">
            <h2 class="detail-outcomes__title" id="outcomes-heading-2">Key Outcomes</h2>
            <ul class="detail-outcomes__list">
                <li class="detail-outcomes__item">Three-method validation completed — FEA stress error 7.18%, strain error 2.33% against experimental results</li>
                <li class="detail-outcomes__item">Mesh independence confirmed at Mesh 7 (6mm, 900 elements) — simulation convergence within 2% across consecutive mesh sizes</li>
                <li class="detail-outcomes__item">Average FEA stress 2.46 MPa and deformation 1.63mm closely matched experimental values of 2.65 MPa and 1.82mm</li>
            </ul>
        </section>
        <nav class="detail-nav" aria-label="Project navigation">
            <a href="project-1.html" class="detail-nav__link detail-nav__link--prev">← Previous Project</a>
            <a href="project-3.html" class="detail-nav__link">Next Project →</a>
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

1. Confirm all images in STEP 0 before touching any file
2. Complete PART 1 — edit Project 02 card in projects.html only
3. Complete PART 2 — replace project-2.html fully
4. Take Puppeteer screenshots of projects.html and project-2.html when done
5. Check card back — if PROJECT 02 number or View Full Project button is off-screen, report it
6. Do not touch any other file. Do not commit. Report done.
