// Login Form Handler
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');
const username = document.getElementById('username');
const password = document.getElementById('password');

// Correct credentials
const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = '1234';

// Check if user is already logged in on page load
if (document.title === 'Login') {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    if (isLoggedIn) {
        window.location.href = 'home.html';
    }

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputUsername = username.value.trim();
        const inputPassword = password.value.trim();

        // Validate credentials
        if (inputUsername === CORRECT_USERNAME && inputPassword === CORRECT_PASSWORD) {
            // Successful login
            errorMessage.textContent = '';
            localStorage.setItem('userLoggedIn', 'true');
            localStorage.setItem('username', inputUsername);

            // Redirect to home page
            window.location.href = 'home.html';
        } else {
            // Failed login
            errorMessage.textContent = '❌ Username หรือ Password ไม่ถูกต้อง';
            password.value = ''; // Clear password field
            password.focus();
        }
    });

    // Clear error message when user starts typing
    username.addEventListener('input', () => {
        errorMessage.textContent = '';
    });

    password.addEventListener('input', () => {
        errorMessage.textContent = '';
    });
}

// Home Page Handler
if (document.title === 'Home Page') {
    const isLoggedIn = localStorage.getItem('userLoggedIn');
    const storedUsername = localStorage.getItem('username');

    // If user is not logged in, redirect to login page
    if (!isLoggedIn) {
        window.location.href = 'index.html';
    }

    // Display username
    const userDisplay = document.getElementById('userDisplay');
    if (userDisplay && storedUsername) {
        userDisplay.textContent = storedUsername.charAt(0).toUpperCase() + storedUsername.slice(1);
    }

    // Handle logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('username');
            window.location.href = 'index.html';
        });
    }
}
