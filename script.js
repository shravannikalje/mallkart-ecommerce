// Global Variables
let products = [
    // भाजीपाला
    {
        id: 1,
        name: "टोमॅटो",
        description: "ताजे टोमॅटो - 1kg",
        price: 40,
        category: "भाजीपाला",
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
        stock: 100
    },
    {
        id: 2,
        name: "कांदा",
        description: "ताजा कांदा - 1kg",
        price: 30,
        category: "भाजीपाला",
        image: "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae",
        stock: 100
    },
    {
        id: 3,
        name: "बटाटा",
        description: "ताजा बटाटा - 1kg",
        price: 35,
        category: "भाजीपाला",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        stock: 100
    },
    // साबण आणि स्वच्छता
    {
        id: 4,
        name: "लाइफबॉय साबण",
        description: "लाइफबॉय साबण - 4 नग पॅक",
        price: 100,
        category: "साबण",
        image: "https://example.com/lifebuoy.jpg",
        stock: 50
    },
    {
        id: 5,
        name: "डव साबण",
        description: "डव बॉडी वॉश - 250ml",
        price: 180,
        category: "साबण",
        image: "https://example.com/dove.jpg",
        stock: 40
    },
    // मेडिकल
    {
        id: 6,
        name: "पॅरासिटामॉल",
        description: "पॅरासिटामॉल टॅबलेट्स - 10 नग",
        price: 30,
        category: "मेडिकल",
        image: "https://example.com/paracetamol.jpg",
        stock: 100
    },
    {
        id: 7,
        name: "फर्स्ट एड किट",
        description: "बेसिक फर्स्ट एड किट",
        price: 250,
        category: "मेडिकल",
        image: "https://example.com/firstaid.jpg",
        stock: 30
    },
    // इलेक्ट्रिकल
    {
        id: 8,
        name: "एलईडी बल्ब",
        description: "9W LED बल्ब",
        price: 120,
        category: "इलेक्ट्रिकल",
        image: "https://example.com/ledbulb.jpg",
        stock: 50
    },
    {
        id: 9,
        name: "एक्सटेंशन कॉर्ड",
        description: "3 मीटर एक्सटेंशन कॉर्ड",
        price: 299,
        category: "इलेक्ट्रिकल",
        image: "https://example.com/extension.jpg",
        stock: 30
    },
    // किड्स
    {
        id: 10,
        name: "क्रेयॉन्स",
        description: "12 रंगांचे क्रेयॉन्स सेट",
        price: 99,
        category: "किड्स",
        image: "https://example.com/crayons.jpg",
        stock: 40
    },
    {
        id: 11,
        name: "खेळणी",
        description: "शैक्षणिक खेळणी सेट",
        price: 399,
        category: "किड्स",
        image: "https://example.com/toys.jpg",
        stock: 25
    },
    {
        id: 2,
        name: "गहू",
        description: "शेतकी गहू - 5kg",
        price: 250,
        category: "धान्य",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b",
        stock: 40
    },
    {
        id: 3,
        name: "डाळ (तूर)",
        description: "शुद्ध तूर डाळ - 1kg",
        price: 130,
        category: "डाळी",
        image: "https://example.com/toor-dal.jpg",
        stock: 30
    },
    {
        id: 4,
        name: "मूग डाळ",
        description: "शुद्ध मूग डाळ - 1kg",
        price: 140,
        category: "डाळी",
        image: "https://example.com/moong-dal.jpg",
        stock: 25
    },
    {
        id: 5,
        name: "खाद्य तेल",
        description: "शुद्ध सूर्यफूल तेल - 1L",
        price: 180,
        category: "तेल",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5",
        stock: 60
    },
    {
        id: 6,
        name: "साखर",
        description: "शुद्ध साखर - 1kg",
        price: 45,
        category: "मसाले",
        image: "https://example.com/sugar.jpg",
        stock: 100
    },
    {
        id: 7,
        name: "मीठ",
        description: "आयोडाइज्ड मीठ - 1kg",
        price: 20,
        category: "मसाले",
        image: "https://example.com/salt.jpg",
        stock: 150
    },
    {
        id: 8,
        name: "हळद पावडर",
        description: "शुद्ध हळद पावडर - 200g",
        price: 60,
        category: "मसाले",
        image: "https://example.com/turmeric.jpg",
        stock: 45
    },
    {
        id: 9,
        name: "मिरची पावडर",
        description: "तीखट लाल मिरची पावडर - 200g",
        price: 80,
        category: "मसाले",
        image: "https://example.com/chilli.jpg",
        stock: 40
    },
    {
        id: 10,
        name: "धनिया पावडर",
        description: "ताजी धनिया पावडर - 200g",
        price: 50,
        category: "मसाले",
        image: "https://example.com/coriander.jpg",
        stock: 35
    },
    {
        id: 11,
        name: "चहा पत्ती",
        description: "प्रीमियम चहा पत्ती - 500g",
        price: 280,
        category: "पेय",
        image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9",
        stock: 70
    },
    {
        id: 12,
        name: "कॉफी",
        description: "फिल्टर कॉफी - 250g",
        price: 150,
        category: "पेय",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
        stock: 40
    }
];
let cart = [];
let orders = [];

// Store data in localStorage since we're using GitHub Pages
const STORAGE_KEY = 'mallkart_data';

// Initialize data
let localData = JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify({
    orders: [],
    products: products // Using our default products array
}));

// Fetch products from backend
async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        products = await response.json();
        displayProducts();
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Display products in grid
function displayProducts(filteredProducts = products) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">₹${product.price}</p>
                <button onclick="addToCart(${product.id})" class="add-to-cart">
                    Add to Cart
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Filter products
function filterByCategory(category) {
    const filtered = products.filter(product => product.category === category);
    displayProducts(filtered);
    
    // Update active category styling
    document.querySelectorAll('.category-card').forEach(card => {
        if (card.querySelector('h3').textContent === category) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    let filtered = [...products];

    if (categoryFilter !== 'all') {
        filtered = filtered.filter(product => product.category === categoryFilter);
    }

    if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(Number);
        filtered = filtered.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            }
            return product.price >= min;
        });
    }

    displayProducts(filtered);
}

// Search products
function searchProducts(searchTerm) {
    if (!searchTerm) {
        document.getElementById('searchSuggestions').style.display = 'none';
        displayProducts(products);
        return;
    }

    const searchLower = searchTerm.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)
    );

    displaySearchSuggestions(filtered);
}

function displaySearchSuggestions(filteredProducts) {
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    if (filteredProducts.length === 0) {
        suggestionsDiv.style.display = 'none';
        return;
    }

    suggestionsDiv.innerHTML = '';
    filteredProducts.forEach(product => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'search-suggestion-item';
        suggestionItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="suggestion-details">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
            </div>
            <div class="suggestion-price">₹${product.price}</div>
        `;
        suggestionItem.addEventListener('click', () => {
            selectProduct(product);
        });
        suggestionsDiv.appendChild(suggestionItem);
    });
    
    suggestionsDiv.style.display = 'block';
}

function selectProduct(product) {
    // Hide suggestions
    document.getElementById('searchSuggestions').style.display = 'none';
    
    // Display only the selected product
    displayProducts([product]);
    
    // Scroll to products section
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Add event listener for search input
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    
    // Debounce function to limit API calls
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProducts(e.target.value);
        }, 300);
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-input-wrapper')) {
            document.getElementById('searchSuggestions').style.display = 'none';
        }
    });
});

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCartCount();
        showNotification('Product added to cart');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function openCart() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p class="cart-item-price">₹${item.price} x ${item.quantity}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total;
    modal.style.display = 'block';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    openCart(); // Refresh cart modal
}

// Checkout functions
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty');
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').style.display = 'block';
}

function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Send order details to WhatsApp
async function sendOrderToWhatsApp(event) {
    event.preventDefault();
    
    // Get all form values
    const phone = document.getElementById('phone').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    // Simple validation
    if (!phone.match(/^[0-9]{10}$/)) {
        showNotification('कृपया 10 अंकी मोबाईल नंबर टाका');
        return;
    }

    try {
        // Format phone number
        let formattedPhone = phone;
        if (!formattedPhone.startsWith('+91')) {
            formattedPhone = '+91' + formattedPhone;
        }

        // Calculate total and format cart items
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const orderItems = cart.map(item => 
            `▪ ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
        ).join('\n');

        // Create detailed order message
        const orderMessage = `🛒 *MallKart - ऑर्डर कन्फर्मेशन*\n\n` +
            `ऑर्डर ID: ORD${Date.now()}\n` +
            `दिनांक: ${new Date().toLocaleDateString()}\n\n` +
            `*ग्राहकाची माहिती:*\n` +
            `नाव: ${name}\n` +
            `फोन: ${phone}\n\n` +
            `*ऑर्डर तपशील:*\n${orderItems}\n\n` +
            `*एकूण रक्कम:* ₹${total}\n\n` +
            `*डिलिव्हरी माहिती:*\n` +
            `पत्ता: ${address}\n` +
            `वेळ: ${getDeliveryTimeText(deliveryTime)}\n\n` +
            `*पेमेंट पद्धत:* ${paymentMethod === 'cod' ? 'कॅश ऑन डिलिव्हरी' : 'ऑनलाईन पेमेंट'}\n\n` +
            `आपली ऑर्डर नोंद झाली आहे. लवकरच आपल्याला डिलिव्हरी मिळेल.\n` +
            `धन्यवाद! 🙏`;

        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(orderMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Show success message and clear cart
        showNotification('ऑर्डर WhatsApp वर पाठवली आहे');
        cart = [];
        updateCartCount();
        
        // Close modal after delay
        setTimeout(() => {
            closeCheckout();
        }, 2000);

        // Save order to local storage
        const orderDetails = {
            orderId: 'ORD' + Date.now(),
            customer: { name, phone, address },
            items: cart,
            total: total,
            deliveryTime: deliveryTime,
            paymentMethod: paymentMethod,
            orderDate: new Date().toLocaleString(),
            status: 'pending'
        };
        
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        savedOrders.push(orderDetails);
        localStorage.setItem('orders', JSON.stringify(savedOrders));

    } catch (error) {
        console.error('Error sending order:', error);
        showNotification('ऑर्डर पाठवताना एरर आला. कृपया पुन्हा प्रयत्न करा.');
    }

    // Format phone number
    let formattedPhone = phone;
    if (!formattedPhone.startsWith('+91')) {
        formattedPhone = '+91' + formattedPhone;
    }

    try {
        // Generate receipt preview
        const previewDetails = {
            orderId: 'ORD' + Date.now(),
            customer: {
                name: document.getElementById('name').value || 'ग्राहक',
                phone: formattedPhone,
                deliveryTime: document.getElementById('deliveryTime').value || 'तात्काळ'
            },
            items: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            orderDate: new Date().toLocaleString()
        };

        // Generate and send WhatsApp message
        const whatsappMessage = generateWhatsAppReceipt(previewDetails);
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${formattedPhone}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Update UI
        phoneInput.classList.add('phone-verified');
        const verifyButton = document.querySelector('.verify-button');
        verifyButton.innerHTML = '<i class="fas fa-check"></i> व्हेरिफाइड';
        verifyButton.style.background = '#4CAF50';
        showNotification('WhatsApp रसीद पाठवली आहे');
    } catch (error) {
        console.error('Error sending WhatsApp receipt:', error);
        showNotification('WhatsApp रसीद पाठवताना एरर आला. कृपया पुन्हा प्रयत्न करा.');
    }
}

// Update order summary in checkout modal
function updateOrderSummary() {
    const summaryDiv = document.getElementById('orderSummaryItems');
    const totalSpan = document.getElementById('orderTotal');
    let total = 0;

    summaryDiv.innerHTML = '';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'order-item';
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p>संख्या: ${item.quantity}</p>
            </div>
            <div class="order-item-price">₹${itemTotal}</div>
        `;
        summaryDiv.appendChild(itemDiv);
    });

    totalSpan.textContent = total;
}

async function processOrder(event) {
    event.preventDefault();

    const orderDetails = {
        orderId: 'ORD' + Date.now(),
        customer: {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            deliveryTime: document.getElementById('deliveryTime').value
        },
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        orderDate: new Date().toLocaleString(),
        status: 'pending'
    };

    try {
        if (orderDetails.paymentMethod === 'razorpay') {
            // Create Razorpay order
            const response = await fetch(`${API_URL}/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: orderDetails.total })
            });
            const order = await response.json();

            // Setup Razorpay options
            const options = {
                key: 'YOUR_RAZORPAY_KEY_ID', // Replace with actual key
                amount: order.amount,
                currency: 'INR',
                name: 'MallKart',
                description: `Order ${orderDetails.orderId}`,
                order_id: order.id,
                prefill: {
                    name: orderDetails.customer.name,
                    email: orderDetails.customer.email,
                    contact: orderDetails.customer.phone
                },
                handler: async function(response) {
                    orderDetails.status = 'paid';
                    orderDetails.paymentId = response.razorpay_payment_id;
                    await sendOrderConfirmation(orderDetails);
                }
            };
            const rzp = new Razorpay(options);
            rzp.open();
        } else {
            // COD order
            orderDetails.status = 'pending';
            await sendOrderConfirmation(orderDetails);
        }
    } catch (error) {
        console.error('Error processing order:', error);
        showNotification('ऑर्डर प्रोसेस करताना एरर आला. कृपया पुन्हा प्रयत्न करा.');
    }
}

// Analytics functions
async function initializeAnalytics() {
    try {
        const response = await fetch(`${API_URL}/analytics`);
        const data = await response.json();
        
        // Sales Chart
        const salesCtx = document.getElementById('salesChart').getContext('2d');
        new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: data.salesData.labels,
                datasets: [{
                    label: 'Sales',
                    data: data.salesData.values,
                    borderColor: '#e74c3c'
                }]
            }
        });

        // Products Chart
        const productsCtx = document.getElementById('productsChart').getContext('2d');
        new Chart(productsCtx, {
            type: 'bar',
            data: {
                labels: data.popularProducts.map(p => p.name),
                datasets: [{
                    label: 'Sales Count',
                    data: data.popularProducts.map(p => p.count),
                    backgroundColor: '#e74c3c'
                }]
            }
        });

        // Customers Chart
        const customersCtx = document.getElementById('customersChart').getContext('2d');
        new Chart(customersCtx, {
            type: 'pie',
            data: {
                labels: ['New', 'Returning'],
                datasets: [{
                    data: [data.customerMetrics.new, data.customerMetrics.returning],
                    backgroundColor: ['#e74c3c', '#3498db']
                }]
            }
        });
    } catch (error) {
        console.error('Error fetching analytics:', error);
    }
}

// Send order confirmation and WhatsApp receipt
async function sendOrderConfirmation(orderDetails) {
    try {
        // Format phone number
        let phone = orderDetails.customer.phone.replace(/\s/g, '');
        if (!phone.startsWith('+91')) {
            phone = '+91' + phone;
        }

        // For testing - use WhatsApp web URL scheme
        // In production, this should go through your backend server
        const whatsappMessage = generateWhatsAppReceipt(orderDetails);
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        // Open WhatsApp in new window
        window.open(whatsappURL, '_blank');

        // Show success modal
        showOrderSuccess(orderDetails);
        
        // Save order to local storage for now
        const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        savedOrders.push(orderDetails);
        localStorage.setItem('orders', JSON.stringify(savedOrders));
        
        // Clear cart
        cart = [];
        updateCartCount();
        closeCheckout();
        
        // Show notification
        showNotification('ऑर्डर यशस्वी! WhatsApp रसीद पाठवत आहे...');
    } catch (error) {
        console.error('Error processing order:', error);
        showNotification('ऑर्डर प्रोसेस करताना एरर आला. कृपया पुन्हा प्रयत्न करा.');
    }
}

function generateWhatsAppReceipt(orderDetails) {
    let message = `🛒 *MallKart - ऑर्डर कन्फर्मेशन*\n\n`;
    message += `ऑर्डर ID: ${orderDetails.orderId}\n`;
    message += `दिनांक: ${orderDetails.orderDate}\n\n`;
    message += `*ऑर्डर तपशील:*\n`;
    
    orderDetails.items.forEach(item => {
        message += `▪ ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    
    message += `\n*एकूण रक्कम:* ₹${orderDetails.total}\n`;
    message += `*पेमेंट:* ${orderDetails.paymentMethod === 'razorpay' ? 'ऑनलाईन पेमेंट' : 'कॅश ऑन डिलिव्हरी'}\n\n`;
    message += `*डिलिव्हरी पत्ता:*\n${orderDetails.customer.address}\n`;
    message += `*डिलिव्हरी वेळ:* ${getDeliveryTimeText(orderDetails.customer.deliveryTime)}\n\n`;
    message += `धन्यवाद! 🙏`;
    
    return message;
}

function getDeliveryTimeText(time) {
    const times = {
        'morning': 'सकाळ (9 AM - 12 PM)',
        'afternoon': 'दुपार (12 PM - 4 PM)',
        'evening': 'संध्याकाळ (4 PM - 8 PM)'
    };
    return times[time] || time;
}

function showOrderSuccess(orderDetails) {
    const modal = document.getElementById('orderSuccessModal');
    const detailsDiv = document.getElementById('successOrderDetails');
    
    detailsDiv.innerHTML = `
        <p><strong>ऑर्डर ID:</strong> ${orderDetails.orderId}</p>
        <p><strong>एकूण रक्कम:</strong> ₹${orderDetails.total}</p>
        <p><strong>डिलिव्हरी वेळ:</strong> ${getDeliveryTimeText(orderDetails.customer.deliveryTime)}</p>
        <p><strong>स्टेटस:</strong> ${orderDetails.status === 'paid' ? 'पेमेंट पूर्ण' : 'कॅश ऑन डिलिव्हरी'}</p>
    `;
    
    modal.style.display = 'block';
}

function closeOrderSuccess() {
    document.getElementById('orderSuccessModal').style.display = 'none';
    window.location.href = '#orders'; // Redirect to orders section
}

// Utility functions
function showNotification(message) {
    // Implementation of notification system
    alert(message); // Replace with better notification system
}

// Add scroll to products function
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// User Authentication
let isAuthenticated = false;
let currentOTP = null;
let otpTimer = null;
let remainingTime = 30;

// Hide main content until authenticated
document.addEventListener('DOMContentLoaded', () => {
    if (!isAuthenticated) {
        document.querySelector('.navbar').style.display = 'none';
        document.querySelector('.hero').style.display = 'none';
        document.querySelector('.categories').style.display = 'none';
        document.querySelector('.products').style.display = 'none';
        document.querySelector('.footer').style.display = 'none';
    }
});

function sendOTP() {
    const phoneInput = document.getElementById('phoneNumber');
    const phone = phoneInput.value;
    
    if (phone.match(/^[0-9]{10}$/)) {
        // Generate OTP
        currentOTP = Math.floor(100000 + Math.random() * 900000);
        
        // In production, this would call an API to send SMS
        // For demo, we'll show it in console and alert
        console.log(`OTP for ${phone}: ${currentOTP}`);
        
        // Update UI
        document.getElementById('phoneStep').style.display = 'none';
        document.getElementById('otpStep').style.display = 'block';
        document.getElementById('displayPhone').textContent = `+91 ${phone}`;
        
        // Start timer
        startOTPTimer();
        
        // Send SMS API call would go here
        // For demo, show alert
        alert(`डेमो OTP: ${currentOTP}`);
    } else {
        showNotification('कृपया वैध 10 अंकी मोबाईल नंबर टाका');
    }
}

function startOTPTimer() {
    remainingTime = 30;
    document.getElementById('resendButton').disabled = true;
    
    otpTimer = setInterval(() => {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        document.getElementById('otpTimer').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
        if (remainingTime <= 0) {
            clearInterval(otpTimer);
            document.getElementById('resendButton').disabled = false;
        }
    }, 1000);
}

function verifyOTP() {
    const inputs = document.querySelectorAll('.otp-box');
    const enteredOTP = Array.from(inputs).map(input => input.value).join('');
    
    if (enteredOTP == currentOTP) {
        isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userPhone', document.getElementById('phoneNumber').value);
        
        // Show main content
        document.getElementById('loginPage').style.display = 'none';
        document.querySelector('.navbar').style.display = 'flex';
        document.querySelector('.hero').style.display = 'block';
        document.querySelector('.categories').style.display = 'block';
        document.querySelector('.products').style.display = 'block';
        document.querySelector('.footer').style.display = 'block';
        
        showNotification('लॉगिन यशस्वी!');
    } else {
        showNotification('चुकीचा OTP. कृपया पुन्हा प्रयत्न करा.');
    }
}

function resendOTP() {
    clearInterval(otpTimer);
    sendOTP();
}

function goBackToPhone() {
    document.getElementById('otpStep').style.display = 'none';
    document.getElementById('phoneStep').style.display = 'block';
    clearInterval(otpTimer);
}

// Auto-focus OTP inputs
document.querySelectorAll('.otp-box').forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            if (index < 5) {
                document.querySelectorAll('.otp-box')[index + 1].focus();
            }
        } else if (e.key === 'Backspace') {
            if (index > 0) {
                document.querySelectorAll('.otp-box')[index - 1].focus();
            }
        }
    });
});

function sendOTP() {
    const phone = document.getElementById('phoneNumber').value;
    if (phone.match(/^[0-9]{10}$/)) {
        // Generate a 6-digit OTP
        currentOTP = Math.floor(100000 + Math.random() * 900000);
        // In production, this would be sent via SMS
        alert(`OTP for testing: ${currentOTP}`);
        document.getElementById('otpGroup').style.display = 'block';
    } else {
        alert('कृपया वैध 10 अंकी मोबाईल नंबर टाका');
    }
}

function verifyOTP() {
    const inputOTP = document.getElementById('otpInput').value;
    if (inputOTP == currentOTP) {
        isAuthenticated = true;
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userPhone', document.getElementById('phoneNumber').value);
        document.getElementById('otpModal').style.display = 'none';
        showNotification('वेरिफिकेशन यशस्वी!');
    } else {
        alert('चुकीचा OTP. कृपया पुन्हा प्रयत्न करा.');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Check authentication
    isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    if (!isAuthenticated) {
        showOTPModal();
    }
    
    // Show all products initially instead of fetching
    displayProducts(products);
    updateCartCount();
    
    // Add click handlers for category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const category = card.querySelector('h3').textContent;
            filterByCategory(category);
        });
    });

    // Register service worker for PWA (if supported)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then(reg => console.log('Service Worker registered:', reg.scope))
                .catch(err => console.warn('Service Worker registration failed:', err));
        });
    }
});

// Backend server commands
// cd backend
// npm install
// node server.js
