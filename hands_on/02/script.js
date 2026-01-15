// ==================== Image Gallery ==================== 
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function () {
        const fullImageUrl = this.dataset.full;
        document.getElementById('mainImage').src = fullImageUrl;
    });
});

// ==================== Size Selection ====================
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// ==================== Color Selection ====================
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// ==================== Quantity Controls ====================
document.getElementById('qty-increase').addEventListener('click', function () {
    const input = document.getElementById('quantity');
    input.value = parseInt(input.value) + 1;
});

document.getElementById('qty-decrease').addEventListener('click', function () {
    const input = document.getElementById('quantity');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
});

// ==================== Add to Cart ====================
document.getElementById('add-to-cart').addEventListener('click', function () {
    const quantity = document.getElementById('quantity').value;
    const selectedSize = document.querySelector('.size-btn.active').dataset.size;
    const selectedColor = document.querySelector('.color-btn.active').dataset.color;

    console.log('Added to cart:', {
        product: 'Asgaard sofa',
        quantity: quantity,
        size: selectedSize,
        color: selectedColor
    });

    alert(`Added ${quantity} item(s) to cart!\nSize: ${selectedSize}\nColor: ${selectedColor}`);
});

// ==================== Compare Button ====================
document.getElementById('compare').addEventListener('click', function () {
    alert('Comparing with other products...');
});

// ==================== Wishlist Button ====================
document.getElementById('wishlist-btn').addEventListener('click', function () {
    this.classList.toggle('active');
    const text = this.classList.contains('active') ? 'Added to Wishlist' : 'Removed from Wishlist';
    alert(text);
});

// ==================== Cart Button ====================
document.getElementById('cart-btn').addEventListener('click', function () {
    alert('View your shopping cart');
});

// ==================== Search Button ====================
document.getElementById('search-btn').addEventListener('click', function () {
    const searchQuery = prompt('Search for products:');
    if (searchQuery) {
        console.log('Searching for:', searchQuery);
    }
});

// ==================== Account Button ====================
document.getElementById('account-btn').addEventListener('click', function () {
    alert('Account login / profile');
});

// ==================== Tabs ====================
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const tabName = this.dataset.tab;

        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

        // Add active class to clicked button and corresponding pane
        this.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// ==================== Social Links ====================
document.getElementById('facebook').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Share on Facebook');
});

document.getElementById('twitter').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Share on Twitter');
});

document.getElementById('linkedin').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Share on LinkedIn');
});

// ==================== Show More Button ====================
document.querySelector('.btn-show-more').addEventListener('click', function () {
    alert('Loading more products...');
});

// ==================== Navigation Links ====================
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Navigating to:', this.textContent);
    });
});

// ==================== Breadcrumb Links ====================
document.querySelectorAll('.breadcrumb a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Breadcrumb navigation to:', this.textContent);
    });
});

// ==================== Footer Links ====================
document.querySelectorAll('.footer-section a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Footer navigation to:', this.textContent);
    });
});

// ==================== Newsletter Subscribe ====================
document.querySelector('.newsletter-btn').addEventListener('click', function (e) {
    const email = document.querySelector('.newsletter-input').value;
    if (email) {
        alert(`Subscribed with email: ${email}`);
        document.querySelector('.newsletter-input').value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// ==================== Responsive Image Loading ====================
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded successfully');
});
