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
        const messageDiv = form.querySelector('.contact-form__message');
        
        const formData = new FormData(form);
        fetch('https://formspree.io/f/xnjoaooy', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                messageDiv.textContent = 'Message sent! I will get back to you soon.';
                messageDiv.style.color = '#4A006A';
                form.reset();
            } else {
                messageDiv.textContent = 'Something went wrong. Please try again.';
                messageDiv.style.color = 'red';
            }
        })
        .catch(() => {
            messageDiv.textContent = 'Something went wrong. Please try again.';
            messageDiv.style.color = 'red';
        });
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
