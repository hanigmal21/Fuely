document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.notify form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            if (email.length > 0) {
                alert('Thank you for your interest! We will notify you at ' + email + ' when Trip Tank launches.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
});