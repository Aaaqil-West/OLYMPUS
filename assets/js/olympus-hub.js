// Olympus Academy Hub Navigation and Authentication

let isLoggedIn = localStorage.getItem('olympusAuth') === 'true';
let currentUser = localStorage.getItem('olympusUser') || '';

// Login form handler
function initLogin() {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username && password) {
                login(username);
            } else {
                alert('⚡ Please enter both username and password!');
            }
        });
    }
}

function login(user) {
    localStorage.setItem('olympusAuth', 'true');
    localStorage.setItem('olympusUser', user);
    currentUser = user;
    isLoggedIn = true;
    showHub();
}

function showLogin() {
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('hub-content').style.display = 'none';
}

function showHub() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('hub-content').style.display = 'block';
    document.getElementById('welcome-user').textContent = `Welcome, ${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}`;
}

function logout() {
    localStorage.removeItem('olympusAuth');
    localStorage.removeItem('olympusUser');
    isLoggedIn = false;
    currentUser = '';
    showLogin();
}

function goToAcademy() {
    if (!isLoggedIn) return;
    window.location.href = '../ACADEMY/index.html';
}

function goToWellness() {
    if (!isLoggedIn) return;
    window.location.href = '../SANCTUARY/index.html';
}

function goToAgora() {
    if (!isLoggedIn) return;
    window.location.href = '../AGORA/index.html';
}

// Divine portal effects
function addDivineEffects() {
    const portals = document.querySelectorAll('.portal');
    portals.forEach(portal => {
        portal.addEventListener('mouseenter', () => {
            portal.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        portal.addEventListener('mouseleave', () => {
            portal.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Divine initialization
document.addEventListener('DOMContentLoaded', function() {
    // Always show login first
    showLogin();
    
    // Initialize login form after DOM is ready
    setTimeout(initLogin, 100);
    // Add floating animation to portal icons
    const icons = document.querySelectorAll('.portal-icon');
    icons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });
    
    // Add divine CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes glow {
            0%, 100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); }
            50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.3); }
        }
        
        .hub-header h1 {
            animation: glow 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize divine effects
    addDivineEffects();
});