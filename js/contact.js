/* ═══════════════════════════════════════════════════════════════
   ANTIGRAVITY — Contact Form Validation
   Source: PRD §5.4.2
   Client-side validation with visual error states
═══════════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    document.addEventListener('DOMContentLoaded', initContactForm);

    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', handleSubmit);

        // Remove error state on input
        const inputs = form.querySelectorAll('.contact-form__input, .contact-form__textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => clearFieldError(input));
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        let isValid = true;

        // Validate Name
        const name = form.querySelector('#contactName');
        if (!name.value.trim()) {
            showFieldError(name, 'Please enter your name');
            isValid = false;
        }

        // Validate Email
        const email = form.querySelector('#contactEmail');
        if (!email.value.trim()) {
            showFieldError(email, 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showFieldError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate Subject
        const subject = form.querySelector('#contactSubject');
        if (subject && !subject.value.trim()) {
            showFieldError(subject, 'Please enter a subject');
            isValid = false;
        }

        // Validate Message
        const message = form.querySelector('#contactMessage');
        if (!message.value.trim()) {
            showFieldError(message, 'Please enter a message');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showFieldError(message, 'Message must be at least 10 characters');
            isValid = false;
        }

        if (!isValid) return;

        // Simulate form submission
        const submitBtn = form.querySelector('.contact-form__submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message →';
            showFormMessage(form, 'success', 'Message sent successfully! I\'ll get back to you soon.');
            form.reset();
        }, 1500);
    }

    function showFieldError(field, message) {
        field.classList.add('is-error');
        const errorEl = field.parentElement.querySelector('.contact-form__error');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.classList.add('is-visible');
        }
    }

    function clearFieldError(field) {
        field.classList.remove('is-error');
        const errorEl = field.parentElement.querySelector('.contact-form__error');
        if (errorEl) {
            errorEl.classList.remove('is-visible');
        }
    }

    function showFormMessage(form, type, message) {
        // Remove existing messages
        const existing = form.querySelectorAll('.contact-form__message');
        existing.forEach(el => {
            el.classList.remove('is-success', 'is-error');
            el.style.display = 'none';
        });

        const msgEl = form.querySelector('.contact-form__message');
        if (msgEl) {
            msgEl.textContent = message;
            msgEl.classList.add(type === 'success' ? 'is-success' : 'is-error');
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
})();
