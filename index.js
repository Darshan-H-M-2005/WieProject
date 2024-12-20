// Navigation and Section Management
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Show home section by default
    showSection('#home');

    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            showSection(targetId);
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Form handling
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

// Form Handlers
async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        // Here you would typically make an API call to your backend
        console.log('Login attempt:', loginData);
        showMessage('Login successful!', 'success');
        // Redirect to dashboard or home page
    } catch (error) {
        showMessage(error.message, 'error');
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signupData = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        password: formData.get('password'),
        phone: formData.get('phone')
    };

    try {
        // Here you would typically make an API call to your backend
        console.log('Signup attempt:', signupData);
        showMessage('Account created successfully!', 'success');
        // Redirect to login page
    } catch (error) {
        showMessage(error.message, 'error');
    }

    // Navigation and Section Management
document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const authLinks = document.querySelectorAll('.auth-links a');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        const targetSection = document.querySelector(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
        }
    }

    // Show home section by default
    showSection('#home');

    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            showSection(targetId);
            
            // Update active nav link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Auth link click handlers
    authLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            showSection(targetId);
        });
    });

    // Form handling
    const loginForm = document.getElementById('signInForm');
    const signupForm = document.getElementById('signUpForm');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

// Form Handlers
async function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const user = await response.json();
            console.log('Login successful:', user);
            document.getElementById('userName').textContent = user.name; // Update user name
            document.getElementById('accountInfo').style.display = 'block'; // Show account info
            showMessage('Login successful!', 'success');
            showSection('#home'); // Redirect to home section
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage(error.message, 'error');
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const signupData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    };

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signupData)
        });

        if (response.ok) {
            console.log('Signup successful:', await response.json());
            showMessage('Account created successfully! Please sign in.', 'success');
            showSection('#sign-in'); // Redirect to sign in section
        } else {
            throw new Error('Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage(error.message, 'error');
    }
}

// Utility function to show messages
function showMessage(message, type) {
    const messageBox = document.createElement('div');
    messageBox.className = `message ${type}`;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}

// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('accountInfo').style.display = 'none'; // Hide account info
    showMessage('Logged out successfully!', 'success');
    // Optionally, redirect to home or login page
});
}


function madhu(){
       
}