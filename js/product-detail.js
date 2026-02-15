// Product data
const products = {
    1: {
        id: 1,
        name: 'Classic T-Shirt',
        price: 29.99,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
        description: 'High-quality cotton t-shirt perfect for everyday wear. Comfortable fit and durable fabric that lasts. Available in multiple colors and sizes. Made from 100% organic cotton.'
    },
    2: {
        id: 2,
        name: 'Denim Jeans',
        price: 49.99,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
        description: 'Classic denim jeans with a perfect fit. Made from premium denim fabric that gets better with every wash. Perfect for casual and semi-formal occasions. Available in multiple washes.'
    },
    3: {
        id: 3,
        name: 'Summer Dress',
        price: 39.99,
        category: 'Dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
        description: 'Lightweight and breezy summer dress perfect for warm weather. Flowing design with comfortable fabric that keeps you cool all day long. Perfect for beach or casual outings.'
    },
    4: {
        id: 4,
        name: 'Winter Jacket',
        price: 79.99,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
        description: 'Warm and stylish winter jacket to keep you cozy during cold months. Water-resistant outer shell with soft inner lining for maximum comfort. Perfect for outdoor activities.'
    },
    5: {
        id: 5,
        name: 'Cozy Sweater',
        price: 44.99,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop',
        description: 'Soft and warm sweater made from premium wool blend. Perfect for layering or wearing alone on chilly days. Available in various colors and patterns.'
    },
    6: {
        id: 6,
        name: 'Casual Shorts',
        price: 24.99,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1506629905607-cc2c0c0e0a0c?w=500&h=600&fit=crop',
        description: 'Comfortable casual shorts for everyday wear. Lightweight fabric with perfect fit for maximum comfort. Ideal for summer and casual occasions.'
    },
    7: {
        id: 7,
        name: 'Comfort Hoodie',
        price: 54.99,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop',
        description: 'Cozy hoodie with soft inner lining. Perfect for lounging or casual outings. Features adjustable hood and front pocket. Made from premium cotton blend.'
    },
    8: {
        id: 8,
        name: 'Elegant Skirt',
        price: 34.99,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
        description: 'Elegant and versatile skirt that can be dressed up or down. Flattering fit with quality fabric that drapes beautifully. Perfect for office or evening wear.'
    },
    9: {
        id: 9,
        name: 'Formal Shirt',
        price: 35.99,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop',
        description: 'Crisp formal shirt perfect for office and formal occasions. Made from premium cotton with wrinkle-resistant fabric. Available in white, blue, and other colors.'
    },
    10: {
        id: 10,
        name: 'Leather Jacket',
        price: 89.99,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
        description: 'Stylish leather jacket that never goes out of fashion. Made from genuine leather with comfortable lining. Perfect for adding edge to any outfit.'
    },
    11: {
        id: 11,
        name: 'Maxi Dress',
        price: 45.99,
        category: 'Dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
        description: 'Beautiful maxi dress with elegant design. Flowing fabric that moves gracefully. Perfect for parties, weddings, or special occasions.'
    },
    12: {
        id: 12,
        name: 'Cargo Pants',
        price: 42.99,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1506629905607-cc2c0c0e0a0c?w=500&h=600&fit=crop',
        description: 'Functional cargo pants with multiple pockets. Durable fabric perfect for outdoor activities or casual wear. Comfortable fit with adjustable waist.'
    },
    13: {
        id: 13,
        name: 'Polo Shirt',
        price: 32.99,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
        description: 'Classic polo shirt perfect for casual and semi-formal occasions. Made from premium cotton blend with comfortable fit. Available in multiple colors.'
    },
    14: {
        id: 14,
        name: 'Chino Pants',
        price: 47.99,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop',
        description: 'Versatile chino pants perfect for office and casual wear. Comfortable fit with wrinkle-resistant fabric. Available in khaki, navy, and black.'
    },
    15: {
        id: 15,
        name: 'Floral Dress',
        price: 42.99,
        category: 'Dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
        description: 'Beautiful floral print dress perfect for spring and summer. Flowing fabric with elegant design. Perfect for parties and casual outings.'
    },
    16: {
        id: 16,
        name: 'Bomber Jacket',
        price: 69.99,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
        description: 'Stylish bomber jacket with modern design. Lightweight yet warm, perfect for transitional weather. Features ribbed cuffs and hem.'
    },
    17: {
        id: 17,
        name: 'V-Neck T-Shirt',
        price: 27.99,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop',
        description: 'Comfortable V-neck t-shirt made from soft cotton. Perfect for layering or wearing alone. Available in various colors and sizes.'
    },
    18: {
        id: 18,
        name: 'Jogger Pants',
        price: 38.99,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1506629905607-cc2c0c0e0a0c?w=500&h=600&fit=crop',
        description: 'Comfortable jogger pants perfect for casual wear and workouts. Elastic waistband and cuffed ankles. Made from breathable fabric.'
    },
    19: {
        id: 19,
        name: 'Cocktail Dress',
        price: 59.99,
        category: 'Dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop',
        description: 'Elegant cocktail dress perfect for evening events and parties. Flattering silhouette with quality fabric. Available in multiple colors.'
    },
    20: {
        id: 20,
        name: 'Trench Coat',
        price: 99.99,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
        description: 'Classic trench coat with timeless design. Water-resistant fabric perfect for rainy weather. Features belt and double-breasted closure.'
    }
};

// Load product details
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products[productId];

    if (product) {
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = '$' + product.price.toFixed(2);
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-image').alt = product.name;
    }

    // Quantity controls
    const decreaseBtn = document.getElementById('decrease-qty');
    const increaseBtn = document.getElementById('increase-qty');
    const quantityInput = document.getElementById('quantity');

    decreaseBtn.addEventListener('click', function() {
        let qty = parseInt(quantityInput.value);
        if (qty > 1) {
            quantityInput.value = qty - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        let qty = parseInt(quantityInput.value);
        if (qty < 10) {
            quantityInput.value = qty + 1;
        }
    });

    // Add to cart button
    const addToCartBtn = document.getElementById('add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        const size = document.getElementById('product-size').value;
        const quantity = parseInt(quantityInput.value);

        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: size,
            quantity: quantity
        };

        addToCart(cartItem);
    });
});

