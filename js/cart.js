// Load and display cart items
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    updateCartCount();
});

function displayCart() {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
                <a href="products.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        cartSummary.style.display = 'none';
        return;
    }

    // Display cart items
    cartItemsContainer.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p>Quantity: ${item.quantity}</p>
                <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('tax').textContent = '$' + tax.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);

    cartSummary.style.display = 'block';
}

function removeFromCart(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
    updateCartCount();
}

// Checkout button
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const cart = getCart();
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            // Simple checkout simulation
            alert('Thank you for your purchase! Your order has been placed successfully.');
            
            // Clear cart after checkout
            saveCart([]);
            displayCart();
            updateCartCount();
        });
    }
});

