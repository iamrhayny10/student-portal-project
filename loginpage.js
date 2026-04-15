document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        // Simulate login delay
        document.querySelector('.login-btn').innerHTML = 'Signing In...';
        document.querySelector('.login-btn').disabled = true;
        
        setTimeout(() => {
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        }, 1500);
    }
});