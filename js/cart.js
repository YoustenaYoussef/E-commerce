
const getFromLocalStorage = (key, defaultValue = null) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


const isLoggedIn = () => {
    const session = getFromLocalStorage('currentUser');
    return session !== null;
};

const getCurrentUser = () => getFromLocalStorage('currentUser');

const getCart = () => getFromLocalStorage('cart', []);

const saveCart = (cart) => saveToLocalStorage('cart', cart);


const updateCartCount = () => {
    const cart = getCart();
    
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
};


const calculateTotal = (cart) => {
    
    return cart.reduce((total, { price, quantity }) => {
        return total + (price * quantity);
    }, 0); 
};


const updateTotalDisplay = () => {
    const cart = getCart();
    const total = calculateTotal(cart);
    const totalElement = document.getElementById('total-amount');
    if (totalElement) {
    
        totalElement.textContent = `${total}$`;
    }
};


const increaseQuantity = (productId) => {
    const cart = getCart();
    

    const updatedCart = cart.map(item => 
        item.id === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
    );
    
    saveCart(updatedCart);
    renderCartItems();
    updateCartCount();
    updateTotalDisplay();
};

const decreaseQuantity = (productId) => {
    let cart = getCart();
    
  
    const item = cart.find(item => item.id === productId);
    
    if (item && item.quantity > 1) {
        
        cart = cart.map(item => 
            item.id === productId 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
        );
    } else {
        cart = cart.filter(item => item.id !== productId);
    }
    
    saveCart(cart);
    renderCartItems();
    updateCartCount();
    updateTotalDisplay();
};

const removeItem = (productId) => {
    const cart = getCart();

    const updatedCart = cart.filter(item => item.id !== productId);
    
    saveCart(updatedCart);
    renderCartItems();
    updateCartCount();
    updateTotalDisplay();
};

const clearCart = () => {
    saveCart([]);
    updateCartCount();
};

const renderCartItems = () => {
    const container = document.getElementById('cart-items');
    if (!container) return;

    const cart = getCart();

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some products to your cart!</p>
                <a href="index.html" style="color: var(--primary-color);">Continue Shopping</a>
            </div>
        `;
        return;
    }

    cart.forEach(({ id, name, price, quantity }) => {
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        cartItem.innerHTML = `
            <div class="cart-item-info">
                <span class="cart-item-name">${name}</span>
                <span class="cart-item-price">${price}$</span>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn decrease" data-id="${id}">−</button>
                <span class="quantity-display">${quantity}</span>
                <button class="quantity-btn increase" data-id="${id}">+</button>
                <button class="remove-item-btn" data-id="${id}">🗑️</button>
            </div>
        `;

      
        container.appendChild(cartItem);
    });


    addCartEventListeners();
};

const addCartEventListeners = () => {
  
    const increaseButtons = document.querySelectorAll('.quantity-btn.increase');
    increaseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            increaseQuantity(productId);
        });
    });

  
    const decreaseButtons = document.querySelectorAll('.quantity-btn.decrease');
    decreaseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            decreaseQuantity(productId);
        });
    });


    const removeButtons = document.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removeItem(productId);
        });
    });
};


const buyNow = () => {
    const cart = getCart();
    
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }


    clearCart();

  
    const cartContainer = document.querySelector('.cart-container');
    if (cartContainer) {
        cartContainer.style.display = 'none';
    }


    const orderShipped = document.getElementById('order-shipped');
    if (orderShipped) {
        orderShipped.style.display = 'block';
    }


    updateTotalDisplay();
    renderCartItems();
};

const updateNavigation = () => {
    const authLink = document.getElementById('auth-link');
    const logoutBtn = document.getElementById('logout-btn');
    const userNameSpan = document.getElementById('user-name');
    
    if (isLoggedIn()) {
        const user = getCurrentUser();
        const { name } = user; 
        
        if (authLink) authLink.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'inline';
        if (userNameSpan) userNameSpan.textContent = `Welcome, ${name}`;
    } else {
        if (authLink) {
            authLink.style.display = 'inline';
            authLink.href = 'login.html';
            authLink.textContent = 'Login';
        }
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (userNameSpan) userNameSpan.textContent = '';
    }
};

const logout = () => {
    localStorage.removeItem('currentUser');
    updateNavigation();
    window.location.href = 'index.html';
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const checkLoginAccess = () => {
    if (!isLoggedIn()) {
        alert('Please login to access the cart!');
        window.location.href = 'login.html';
        return false;
    }
    return true;
};

const initCart = () => {
  
    if (!checkLoginAccess()) return;

    
    renderCartItems();

  
    updateCartCount();

  
    updateTotalDisplay();


    updateNavigation();

  
    const buyNowBtn = document.getElementById('buy-now-btn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', buyNow);
    }

    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

  
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', scrollToTop);
    }
};

document.addEventListener('DOMContentLoaded', initCart);

export {
    getCart,
    saveCart,
    calculateTotal,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
    buyNow
};
