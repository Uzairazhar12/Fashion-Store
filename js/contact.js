// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Simulate form submission
            showFormMessage('Sending message...', 'info');
            
            setTimeout(() => {
                showFormMessage('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
                contactForm.reset();
            }, 1500);
        });
    }
});

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if (!formMessage) return;

    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';

    if (type === 'success') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

