/* ═══════════════════════════════════════════════════════════════
   ANTIGRAVITY — Card Flip JavaScript
   Handles: Touch-device flip toggle (since :hover doesn't work on touch)
   Source: PRD §11.5 — tap/click triggers flip, auto-flips back after 3s
   Used on: Projects timeline, Experience timeline
   NOT used on: Home hero card (scroll-anim.js handles that)
═══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    // Auto-flip duration in milliseconds — how long the back face stays visible
    var FLIP_BACK_DELAY = 3000;

    // Track active timers per card so we can clear on re-tap
    var flipTimers = new WeakMap();

    /**
     * Initialize card flip behavior on all timeline card containers.
     * Skips the home hero card (#homeCardContainer) which is scroll-driven.
     */
    function initCardFlip() {
        var containers = document.querySelectorAll(
            '.card-container:not(#homeCardContainer)'
        );

        containers.forEach(function (container) {
            // Only add tap behavior on touch devices
            // On desktop, CSS :hover handles flipping
            container.addEventListener('click', handleCardTap);
            container.addEventListener('touchstart', handleCardTap, { passive: true });
        });
    }

    /**
     * Handle tap/click on a card container.
     * Toggles .is-flipped class and sets auto-flip-back timer.
     */
    function handleCardTap(e) {
        // Don't interfere with links on the back face
        if (e.target.closest('.card-detail-link') || e.target.closest('a')) {
            return;
        }

        var container = this;
        var isFlipped = container.classList.contains('is-flipped');

        // Clear any existing timer for this card
        var existingTimer = flipTimers.get(container);
        if (existingTimer) {
            clearTimeout(existingTimer);
            flipTimers.delete(container);
        }

        if (isFlipped) {
            // Flip back immediately on second tap
            container.classList.remove('is-flipped');
        } else {
            // Flip to back face
            container.classList.add('is-flipped');

            // Auto-flip back after delay (PRD §11.5)
            var timer = setTimeout(function () {
                container.classList.remove('is-flipped');
                flipTimers.delete(container);
            }, FLIP_BACK_DELAY);

            flipTimers.set(container, timer);
        }
    }

    /**
     * Check if the device supports hover.
     * If it does, we don't need the tap-to-flip behavior
     * (CSS :hover handles it). But we still init for hybrid devices.
     */
    function supportsHover() {
        return window.matchMedia('(hover: hover)').matches;
    }

    // ── Initialize on DOM ready ──────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCardFlip);
    } else {
        initCardFlip();
    }

})();
