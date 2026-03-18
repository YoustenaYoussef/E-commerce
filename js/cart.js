
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

const PROMO_CODES = {
    SAVE10: { type: 'percentage', value: 10 },
    WELCOME15: { type: 'percentage', value: 15 },
    FLAT50: { type: 'fixed', value: 50 }
};

const getAppliedPromo = () => getFromLocalStorage('appliedPromo', null);

const saveAppliedPromo = (promoCode) => saveToLocalStorage('appliedPromo', promoCode);

const clearAppliedPromo = () => localStorage.removeItem('appliedPromo');


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

const calculateDiscountAmount = (subtotal, promoCode) => {
    if (!promoCode || !PROMO_CODES[promoCode]) return 0;

    const promo = PROMO_CODES[promoCode];

    if (promo.type === 'percentage') {
        return (subtotal * promo.value) / 100;
    }

    return Math.min(promo.value, subtotal);
};


const updateTotalDisplay = () => {
    const cart = getCart();
    const subtotal = calculateTotal(cart);
    const appliedPromo = getAppliedPromo();
    const discount = calculateDiscountAmount(subtotal, appliedPromo);
    const total = subtotal - discount;

    const subtotalElement = document.getElementById('subtotal-amount');
    const discountElement = document.getElementById('discount-amount');
    const totalElement = document.getElementById('total-amount');

    if (subtotalElement) {
        subtotalElement.textContent = `${subtotal.toFixed(2)}$`;
    }

    if (discountElement) {
        discountElement.textContent = `${discount.toFixed(2)}$`;
    }

    if (totalElement) {
        totalElement.textContent = `${total.toFixed(2)}$`;
    }
};

const showPromoMessage = (message, isSuccess = false) => {
    const promoMessage = document.getElementById('promo-message');
    if (!promoMessage) return;

    promoMessage.textContent = message;
    promoMessage.className = `promo-message ${isSuccess ? 'success' : 'error'}`;
};

const syncPromoControls = () => {
    const promoInput = document.getElementById('promo-code');
    const applyBtn = document.getElementById('apply-promo-btn');
    const removeBtn = document.getElementById('remove-promo-btn');
    const appliedPromo = getAppliedPromo();

    if (promoInput) promoInput.disabled = Boolean(appliedPromo);
    if (applyBtn) applyBtn.disabled = Boolean(appliedPromo);
    if (removeBtn) removeBtn.style.display = appliedPromo ? 'inline-block' : 'none';
};

const applyPromoCode = () => {
    const promoInput = document.getElementById('promo-code');
    if (!promoInput) return;

    const code = promoInput.value.trim().toUpperCase();
    const cart = getCart();
    const appliedPromo = getAppliedPromo();

    if (appliedPromo) {
        showPromoMessage(`Code ${appliedPromo} already applied. Remove it first.`);
        return;
    }

    if (cart.length === 0) {
        showPromoMessage('Add products to cart before applying a promo code.');
        return;
    }

    if (!code) {
        showPromoMessage('Please enter a promo code.');
        return;
    }

    if (!PROMO_CODES[code]) {
        showPromoMessage('Invalid code. Use SAVE10, WELCOME15, or FLAT50.');
        return;
    }

    saveAppliedPromo(code);
    updateTotalDisplay();
    showPromoMessage(`Code ${code} applied successfully.`, true);
    syncPromoControls();
};

const removePromoCode = () => {
    const appliedPromo = getAppliedPromo();
    if (!appliedPromo) return;

    clearAppliedPromo();
    const promoInput = document.getElementById('promo-code');
    if (promoInput) promoInput.value = '';
    updateTotalDisplay();
    showPromoMessage(`Code ${appliedPromo} removed.`, true);
    syncPromoControls();
};

const restorePromoCodeUI = () => {
    const promoInput = document.getElementById('promo-code');
    if (!promoInput) return;

    const appliedPromo = getAppliedPromo();
    if (appliedPromo) {
        promoInput.value = appliedPromo;
        showPromoMessage(`Code ${appliedPromo} is active.`, true);
    }

    syncPromoControls();
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
    clearAppliedPromo();
    updateCartCount();
};

const renderCartItems = () => {
    const container = document.getElementById('cart-items');
    if (!container) return;

    const cart = getCart();

    container.innerHTML = '';

    if (cart.length === 0) {
        clearAppliedPromo();
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
        showPromoMessage('Your cart is empty. Add products first.');
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

    restorePromoCodeUI();


    updateNavigation();

  
    const buyNowBtn = document.getElementById('buy-now-btn');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', buyNow);
    }

    const applyPromoBtn = document.getElementById('apply-promo-btn');
    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', applyPromoCode);
    }

    const removePromoBtn = document.getElementById('remove-promo-btn');
    if (removePromoBtn) {
        removePromoBtn.addEventListener('click', removePromoCode);
    }

    const promoInput = document.getElementById('promo-code');
    if (promoInput) {
        promoInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyPromoCode();
            }
        });
    }

    syncPromoControls();

    
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
