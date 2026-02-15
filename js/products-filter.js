// Products Filter and Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const productCards = document.querySelectorAll('.product-card');
    const noResults = document.getElementById('no-results');

    let currentCategory = 'all';
    let currentSearch = '';

    // Category filter
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            currentCategory = this.getAttribute('data-category');
            filterProducts();
        });
    });

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value.toLowerCase();
            filterProducts();
        });
    }

    function filterProducts() {
        let visibleCount = 0;

        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const name = card.getAttribute('data-name').toLowerCase();
            
            const matchesCategory = currentCategory === 'all' || category === currentCategory;
            const matchesSearch = currentSearch === '' || name.includes(currentSearch);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide no results message
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
});

