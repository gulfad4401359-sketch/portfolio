/* ═══════════════════════════════════════════════════════════════
   ANTIGRAVITY — Scroll Animation Engine
   Source: move_and_flip.html (JS adapted verbatim)
   
   This file combines:
   1. Scroll-driven home hero animation (from move_and_flip.html)
   2. IntersectionObserver for timeline card entrance animations
   3. Stat counter animation
   
   Merged per Implementation Plan Fix 6: timeline.js → scroll-anim.js
═══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ═════════════════════════════════════════════════════════════
       1. LERP FUNCTION — Identical to move_and_flip.html source
       lerp factor: 0.08 (LOCKED VALUE — never change)
    ═════════════════════════════════════════════════════════════ */
    var LERP_FACTOR = 0.08;

    function lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    /* ═════════════════════════════════════════════════════════════
       2. SCROLL-DRIVEN HERO ANIMATION
       Drives the home page card position, rotation, tilt, and
       text section fading based on scroll progress.
       
       Phase 1: 0% – 50% scroll (from move_and_flip.html)
       Phase 2: 50% – 100% scroll (from move_and_flip.html)
    ═════════════════════════════════════════════════════════════ */

    /**
     * Initialize the scroll story on the home page.
     * Call this from index.html after DOM is ready.
     *
     * @param {Object} config - Element references
     * @param {HTMLElement} config.cardContainer - #homeCardContainer
     * @param {HTMLElement} config.card - #homeCard (the .card element)
     * @param {HTMLElement[]} config.textSections - Array of text section elements
     * @param {HTMLElement} config.resumeCta - #resumeCta element
     * @param {HTMLElement} config.scrollWrapper - .scroll-story-wrapper
     */
    function initScrollStory(config) {
        // Don't run on mobile (scroll story disabled per PRD §11.2)
        if (window.innerWidth < 768) return;

        // Don't run if prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var cardContainer = config.cardContainer;
        var card = config.card;
        var heroText = config.textSections[0];   // #heroText
        var skillsText = config.textSections[1];   // #skillsText
        var aboutText = config.textSections[2];   // #aboutText
        var resumeCta = config.resumeCta;          // #resumeCta
        var scrollWrapper = config.scrollWrapper;

        // Physics state — from move_and_flip.html
        var currentX = 50;
        var currentY = 50;
        var currentRot = 0;
        var currentTilt = 0;

        // Reference to front image for swap during flip
        var imgFront = cardContainer.querySelector('#img-front');
        var image1URL = imgFront ? imgFront.src : '';
        var image3URL = imgFront ? imgFront.getAttribute('data-swap-src') || '' : '';

        function animate() {
            // Calculate scroll progress within the scroll-story-wrapper
            var wrapperRect = scrollWrapper.getBoundingClientRect();
            var wrapperTop = -wrapperRect.top;
            var wrapperHeight = scrollWrapper.offsetHeight - window.innerHeight;
            var progress = Math.max(0, Math.min(1, wrapperTop / wrapperHeight));

            var targetX = 50;
            var targetY = 50;
            var targetRot = 0;
            var targetTilt = 0;

            /* ── PHASE 1: 0% – 50% scroll ─────────────────────────── */
            /* Directly from move_and_flip.html lines 177-198 */
            if (progress <= 0.5) {
                var p1 = progress / 0.5;

                targetX = 50 + (25 * p1);          // 50% → 75%
                targetY = 50 + (p1 * 10);          // 50% → 60%
                targetRot = p1 * 180;                // 0° → 180°
                targetTilt = p1 * 6;                  // 0° → 6°

                // Text fading & vertical scroll simulation
                if (heroText) {
                    heroText.style.opacity = Math.max(0, 1 - (p1 * 3));
                    heroText.style.transform =
                        'translateY(calc(-50% - ' + (p1 * 100) + 'px))';
                }

                if (skillsText) {
                    skillsText.style.opacity = Math.max(0, (p1 - 0.5) * 2);
                    skillsText.style.transform =
                        'translateY(calc(-50% + ' + ((1 - p1) * 100) + 'px))';
                }

                if (aboutText) {
                    aboutText.style.opacity = 0;
                    aboutText.style.transform = 'translateY(calc(-50% + 100px))';
                }

                if (resumeCta) {
                    resumeCta.style.opacity = 0;
                    resumeCta.style.transform = 'translateY(calc(-50% + 100px))';
                }

                // Swap front image when card passes 90° (back is facing user)
                if (imgFront && image1URL && targetRot < 90) {
                    imgFront.src = image1URL;
                }
            }
            /* ── PHASE 2: 50% – 100% scroll ────────────────────────── */
            /* Directly from move_and_flip.html lines 200-221 */
            else {
                var p2 = (progress - 0.5) / 0.5;

                targetX = 75;                      // Holds at 75%
                targetY = 60 - (p2 * 10);          // 60% → 50%
                targetRot = 180 + (p2 * 180);        // 180° → 360°
                targetTilt = 6;                       // Holds at 6°

                if (heroText) {
                    heroText.style.opacity = 0;
                }

                if (skillsText) {
                    skillsText.style.opacity = Math.max(0, 1 - (p2 * 3));
                    skillsText.style.transform =
                        'translateY(calc(-50% - ' + (p2 * 100) + 'px))';
                }

                if (aboutText) {
                    aboutText.style.opacity = Math.max(0, (p2 - 0.5) * 2);
                    aboutText.style.transform =
                        'translateY(calc(-50% + ' + ((1 - p2) * 100) + 'px))';
                }

                if (resumeCta) {
                    // Resume CTA fades in at the very end (last 15% of Phase 2)
                    var ctaProgress = Math.max(0, (p2 - 0.7) / 0.3);
                    resumeCta.style.opacity = ctaProgress;
                    resumeCta.style.transform =
                        'translateY(calc(-50% + ' + ((1 - ctaProgress) * 40) + 'px))';
                }

                // Swap front image when card passes 270° (about face again)
                if (imgFront && image3URL && targetRot > 180) {
                    imgFront.src = image3URL;
                }
            }

            /* ── Apply lerp physics — from move_and_flip.html lines 223-227 ── */
            currentX = lerp(currentX, targetX, LERP_FACTOR);
            currentY = lerp(currentY, targetY, LERP_FACTOR);
            currentRot = lerp(currentRot, targetRot, LERP_FACTOR);
            currentTilt = lerp(currentTilt, targetTilt, LERP_FACTOR);

            /* ── Update DOM — from move_and_flip.html lines 229-233 ── */
            cardContainer.style.left = currentX + '%';
            cardContainer.style.top = currentY + '%';
            // rotateY for flip + rotateZ for tilt — identical to source
            card.style.transform =
                'rotateY(' + currentRot + 'deg) rotateZ(' + currentTilt + 'deg)';

            requestAnimationFrame(animate);
        }

        // Start the rAF loop
        requestAnimationFrame(animate);
    }

    /* ═════════════════════════════════════════════════════════════
       3. INTERSECTION OBSERVER — Timeline Card Entrances
       Used on Projects and Experience timeline pages.
       Cards animate in with fadeInUp when they enter the viewport.
    ═════════════════════════════════════════════════════════════ */

    function initIntersectionAnimations() {
        // Skip if prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',   // Trigger 80px before element reaches viewport bottom
            threshold: 0.15
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Animate only once
                }
            });
        }, observerOptions);

        // Observe all timeline cards and entries
        var timelineCards = document.querySelectorAll('.timeline-card, .timeline-entry');
        timelineCards.forEach(function (card) {
            observer.observe(card);
        });

        // Observe any element with .animate-on-scroll class
        var animateElements = document.querySelectorAll('.animate-on-scroll');
        animateElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* ═════════════════════════════════════════════════════════════
       4. STAT COUNTER ANIMATION
       Counts up numbers when they enter the viewport.
       Used on home page stat counters.
    ═════════════════════════════════════════════════════════════ */

    function initStatCounters() {
        var counters = document.querySelectorAll('[data-count-to]');
        if (counters.length === 0) return;

        // Skip if prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            counters.forEach(function (el) {
                el.textContent = el.getAttribute('data-count-to');
            });
            return;
        }

        var counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(function (el) {
            counterObserver.observe(el);
        });
    }

    function animateCounter(el) {
        var target = el.getAttribute('data-count-to');
        var suffix = el.getAttribute('data-count-suffix') || '';
        var numTarget = parseInt(target, 10);
        var duration = 1500; // ms
        var startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var elapsed = timestamp - startTime;
            var progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(eased * numTarget);

            el.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    /* ═════════════════════════════════════════════════════════════
       5. SCROLL PROGRESS BAR
       Thin rose gold bar at very top of viewport.
       Only shown on pages taller than 200vh (PRD §6.4).
    ═════════════════════════════════════════════════════════════ */

    function initScrollProgress() {
        var bar = document.querySelector('.scroll-progress-bar');
        if (!bar) return;

        // Only show on tall pages
        if (document.body.scrollHeight < window.innerHeight * 2) {
            bar.style.display = 'none';
            return;
        }

        function updateProgress() {
            var scrollTop = window.scrollY;
            var docHeight = document.body.scrollHeight - window.innerHeight;
            var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            bar.style.width = progress + '%';
        }

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
    }

    /* ═════════════════════════════════════════════════════════════
       6. EXPORTS — Attach to window for use by page scripts
    ═════════════════════════════════════════════════════════════ */

    window.AntigravityScroll = {
        initScrollStory: initScrollStory,
        initIntersectionAnimations: initIntersectionAnimations,
        initStatCounters: initStatCounters,
        initScrollProgress: initScrollProgress,
        lerp: lerp
    };

    /* ═════════════════════════════════════════════════════════════
       7. AUTO-INIT — Run intersection + counters + progress on load
       (Scroll story is page-specific, called from index.html)
    ═════════════════════════════════════════════════════════════ */

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initIntersectionAnimations();
            initStatCounters();
            initScrollProgress();
        });
    } else {
        initIntersectionAnimations();
        initStatCounters();
        initScrollProgress();
    }

})();
