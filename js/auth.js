
const getFromLocalStorage = (key, defaultValue = []) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};


const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};


const isValidPassword = (password) => password.length >= 6;


const isValidName = (name) => name.trim().length >= 2;


const doPasswordsMatch = (password, confirmPassword) => password === confirmPassword;

const showError = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
};


const clearError = (elementId) => {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
};


const clearAllErrors = () => {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
};


const handleRegister = (e) => {
    e.preventDefault();
    clearAllErrors();


    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let isValid = true;


    if (!isValidName(name)) {
        showError('name-error', 'Name must be at least 2 characters');
        isValid = false;
    }

    
    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

    
    if (!isValidPassword(password)) {
        showError('password-error', 'Password must be at least 6 characters');
        isValid = false;
    }

    
    if (!doPasswordsMatch(password, confirmPassword)) {
        showError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }

    if (!isValid) return;

    
    const users = getFromLocalStorage('users', []);

    
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
        showError('email-error', 'Email already registered');
        return;
    }

    const newUser = {
        id: Date.now(), 
        name,           
        email,          
        password,       
        createdAt: new Date().toISOString()
    };

    
    const updatedUsers = [...users, newUser];
    
    saveToLocalStorage('users', updatedUsers);

    alert('Registration successful! Please login.');
    
    window.location.href = 'login.html';
};


const handleLogin = (e) => {
    e.preventDefault();
    clearAllErrors();

  
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let isValid = true;

    if (!isValidEmail(email)) {
        showError('email-error', 'Please enter a valid email address');
        isValid = false;
    }

  
    if (!password) {
        showError('password-error', 'Please enter your password');
        isValid = false;
    }

    if (!isValid) return;

  
    const users = getFromLocalStorage('users', []);

    const user = users.find(({ email: userEmail, password: userPassword }) => 
        userEmail === email && userPassword === password
    );

    if (!user) {
        showError('email-error', 'Invalid email or password');
        return;
    }

    const { password: _, ...userWithoutPassword } = user; // Remove password from session
    
    
    saveToLocalStorage('currentUser', userWithoutPassword);

    
    alert(`Welcome back, ${user.name}!`);

  
    window.location.href = 'index.html';
};


const initAuth = () => {
    
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        
      
        const inputs = registerForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                clearError(`${input.id}-error`);
            });
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        
      
        const inputs = loginForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                clearError(`${input.id}-error`);
            });
        });
    }

    
    const currentUser = getFromLocalStorage('currentUser', null);
    if (currentUser) {
      
        window.location.href = 'index.html';
    }
};

document.addEventListener('DOMContentLoaded', initAuth);


export {
    isValidEmail,
    isValidPassword,
    isValidName,
    doPasswordsMatch,
    handleRegister,
    handleLogin
};
