// ===== DOM Elements =====
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
const addToCartBtns = document.querySelectorAll('.btn-secondary');
const cartBadge = document.querySelector('.icon-btn:nth-child(3) .badge');
const searchInput = document.querySelector('.search-box input');
const searchBtn = document.querySelector('.search-box button');

// ===== State Management =====
let cartCount = 0;
let wishlistCount = 0;
let cart = [];
let wishlist = [];

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', function() {
    loadLocalStorage();
    setupEventListeners();
    updateBadges();
});

// ===== Event Listeners =====
function setupEventListeners() {
    // Wishlist buttons
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', handleWishlist);
    });

    // Add to cart buttons
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });

    // Search functionality
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
}

// ===== Wishlist Handler =====
function handleWishlist(e) {
    const btn = e.currentTarget;
    const productCard = btn.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productId = productCard.getAttribute('data-product-id') || generateId();
    
    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        btn.querySelector('i').classList.remove('fas');
        btn.querySelector('i').classList.add('far');
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification('Removed from wishlist', 'info');
    } else {
        btn.classList.add('active');
        btn.querySelector('i').classList.remove('far');
        btn.querySelector('i').classList.add('fas');
        wishlist.push({ id: productId, name: productName });
        showNotification('Added to wishlist ❤️', 'success');
    }
    
    wishlistCount = wishlist.length;
    saveLocalStorage();
    updateBadges();
}

// ===== Add to Cart Handler =====
function handleAddToCart(e) {
    const btn = e.currentTarget;
    const productCard = btn.closest('.product-card');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('.price').textContent;
    const productId = productCard.getAttribute('data-product-id') || generateId();
    
    const cartItem = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: 1
    };
    
    // Check if item already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(cartItem);
    }
    
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    saveLocalStorage();
    updateBadges();
    
    // Add animation
    btn.textContent = '✓ Added!';
    btn.style.background = 'var(--secondary-color)';
    setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.style.background = '';
    }, 2000);
    
    showNotification(`${productName} added to cart!`, 'success');
}

// ===== Search Handler =====
function handleSearch() {
    const query = searchInput.value.trim();
    if (query.length < 2) {
        showNotification('Please enter at least 2 characters', 'warning');
        return;
    }
    
    console.log('Searching for:', query);
    showNotification(`Searching for "${query}"...`, 'info');
    
    // Implement actual search functionality here
    // This would typically call your backend API
}

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = 'var(--secondary-color)';
    } else if (type === 'error') {
        notification.style.background = 'var(--primary-color)';
    } else if (type === 'warning') {
        notification.style.background = '#ffc107';
    } else {
        notification.style.background = '#007bff';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Local Storage Management =====
function saveLocalStorage() {
    localStorage.setItem('mallkart_cart', JSON.stringify(cart));
    localStorage.setItem('mallkart_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('mallkart_cart_count', cartCount);
}

function loadLocalStorage() {
    const savedCart = localStorage.getItem('mallkart_cart');
    const savedWishlist = localStorage.getItem('mallkart_wishlist');
    const savedCartCount = localStorage.getItem('mallkart_cart_count');
    
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
    if (savedCartCount) cartCount = parseInt(savedCartCount);
    
    // Update UI based on saved data
    wishlist.forEach(wishlistItem => {
        const productCard = document.querySelector(`[data-product-id="${wishlistItem.id}"]`);
        if (productCard) {
            const btn = productCard.querySelector('.wishlist-btn');
            btn.classList.add('active');
            btn.querySelector('i').classList.remove('far');
            btn.querySelector('i').classList.add('fas');
        }
    });
}

// ===== Update Badges =====
function updateBadges() {
    const cartBadge = document.querySelector('.icon-btn:nth-child(3) .badge');
    const wishlistBadge = document.querySelector('.icon-btn:nth-child(2) .badge');
    
    if (cartBadge) cartBadge.textContent = cartCount;
    if (wishlistBadge) wishlistBadge.textContent = wishlistCount;
}

// ===== Utility Functions =====
function generateId() {
    return 'prod_' + Math.random().toString(36).substr(2, 9);
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== CSS Animations =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== Logging =====
console.log('MallKart UI initialized successfully!');
