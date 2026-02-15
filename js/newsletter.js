// Newsletter Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletter-email').value;
            
            if (!email) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate subscription
            alert('Thank you for subscribing! You will receive our latest updates soon.');
            newsletterForm.reset();
        });
    }
});

