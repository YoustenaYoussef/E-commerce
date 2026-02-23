

import { products } from './script.js';
import { 
    isLoggedIn, 
    getCart, 
    saveCart, 
    updateCartCount, 
    updateNavigation, 
    logout,
    scrollToTop 
} from './script.js';

const getProductIdFromURL = () => {
  
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id ? parseInt(id) : null;
};

const findProductById = (id) => {
    return products.find(product => product.id === id);
};

const addToCartFromDetails = (productId) => {
    if (!isLoggedIn()) {
        alert('Please login to add items to cart!');
        window.location.href = 'login.html';
        return;
    }

    const cart = getCart();

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const updatedCart = cart.map(item => 
            item.id === productId 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
        );
        saveCart(updatedCart);
    } else {
        
        const product = findProductById(productId);
        if (product) {
          
            const newItem = {
                ...product,
                quantity: 1
            };
            
            saveCart([...cart, newItem]);
        }
    }
    
    updateCartCount();
    alert('Product added to cart!');
};

const renderProductDetails = (product) => {
    const container = document.getElementById('product-details');
    if (!container) return;

    
    const { id, name, price, image, category, quantity, description } = product;

    
    container.innerHTML = `
        <div class="product-image-container">
            <img src="${image}" alt="${name}" class="product-image-large" 
                 onerror="this.src='https://via.placeholder.com/400x400?text=No+Image'">
        </div>
        <div class="product-details-info">
            <h1>${name}</h1>
            <div class="detail-row">
                <span class="detail-label">Product Name:</span>
                <span class="detail-value">${name}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price:</span>
                <span class="detail-value">${price}$</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Quantity:</span>
                <span class="detail-value">${quantity}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Category:</span>
                <span class="detail-value">${category}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Description:</span>
                <span class="detail-value">${description}</span>
            </div>
            <button class="add-to-cart-btn" id="add-to-cart-btn">
                Add To Cart
            </button>
        </div>
    `;

    const addToCartBtn = document.getElementById('add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            addToCartFromDetails(id);
        });
    }
};

const showNotFound = () => {
    const container = document.getElementById('product-details');
    if (!container) return;

    container.innerHTML = `
        <div class="empty-cart">
            <h3>Product Not Found</h3>
            <p>The product you're looking for doesn't exist.</p>
            <a href="index.html" style="color: var(--primary-color);">Go back to Home</a>
        </div>
    `;
};

const initProductDetails = () => {
    const productId = getProductIdFromURL();

    if (!productId) {
        showNotFound();
        return;
    }

    const product = findProductById(productId);

    if (!product) {
        showNotFound();
        return;
    }

    renderProductDetails(product);

    updateCartCount();

    updateNavigation();

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

document.addEventListener('DOMContentLoaded', initProductDetails);

export {
    getProductIdFromURL,
    findProductById,
    addToCartFromDetails,
    renderProductDetails
};
