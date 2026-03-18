
const products = [
    {
        id: 1,
        name: "Classic T-Shirt",
        price: 150,
        category: "clothes",
        image: "images/Classic Cotton T-Shirt.png",
        quantity: 10,
        description: "Comfortable cotton t-shirt for everyday wear"
    },
    {
        id: 2,
        name: "Denim Jeans",
        price: 350,
        category: "clothes",
        image: "images/Slim Fit Jeans.png",
        quantity: 8,
        description: "High-quality denim jeans with perfect fit"
    },
    {
        id: 3,
        name: "Summer Dress",
        price: 280,
        category: "clothes",
        image: "images/clothes Summer Dress.png",
        quantity: 5,
        description: "Beautiful summer dress for special occasions"
    },
    {
        id: 4,
        name: "Lipstick Set",
        price: 120,
        category: "makeup",
        image: "images/Luxury Lipstick Set.png",
        quantity: 15,
        description: "Professional lipstick set with 6 colors"
    },
    {
        id: 5,
        name: "Foundation Kit",
        price: 250,
        category: "makeup",
        image: "images/Foundation & Concealer Kit.png",
        quantity: 12,
        description: "Complete foundation kit for all skin types"
    },
    {
        id: 6,
        name: "Eye Shadow Palette",
        price: 180,
        category: "makeup",
        image: "images/Eye Shadow Palette.png",
        quantity: 20,
        description: "Stunning eye shadow palette with 24 colors"
    },
    {
        id: 7,
        name: "iPhone 15 Pro",
        price: 4500,
        category: "phones",
        image: "images/iphon15.png",
        quantity: 6,
        description: "Latest iPhone with advanced features"
    },
    {
        id: 8,
        name: "Samsung Galaxy S24",
        price: 3800,
        category: "phones",
        image: "images/Screenshot 2026-02-19 133359.png",
        quantity: 7,
        description: "Powerful Android smartphone"
    },
    {
        id: 9,
        name: "Pixel 8 Pro",
        price: 3200,
        category: "phones",
        image: "images/Screenshot 2026-02-19 133530.png",
        quantity: 4,
        description: "Google's flagship phone with AI features"
    },
    {
        id: 10,
        name: "Casual Hoodie",
        price: 220,
        category: "clothes",
        image: "images/Casual Hoodie.png",
        quantity: 9,
        description: "Warm and comfortable hoodie"
    },
    {
        id: 11,
        name: "Mascara Premium",
        price: 95,
        category: "makeup",
        image: "images/Makeup Brush Set.png",
        quantity: 25,
        description: "Long-lasting waterproof mascara"
    },
    {
        id: 12,
        name: "OnePlus 12",
        price: 2800,
        category: "phones",
        image: "images/oneplus.png",
        quantity: 5,
        description: "Fast and smooth OnePlus experience"
    },
    {
        id: 13,
        name: "Xiaomi 14 Ultra",
        price: 3500,
        category: "phones",
        image: "images/Screenshot 2026-02-19 133921.png",
        quantity: 6,
        description: "Professional camera phone with stunning photography capabilities"
    },
    // Watches Category
    {
        id: 14,
        name: "Rolex Submariner",
        price: 8500,
        category: "watches",
        image: "images/Watches1.png",
        quantity: 3,
        description: "Luxury Swiss automatic watch with water resistance and timeless design"
    },
    {
        id: 15,
        name: "Apple Watch Ultra",
        price: 3200,
        category: "watches",
        image: "images/Watches2.png",
        quantity: 10,
        description: "Advanced smartwatch with fitness tracking and health monitoring"
    },
    {
        id: 16,
        name: "Omega Seamaster",
        price: 7800,
        category: "watches",
        image: "images/Watches3.png",
        quantity: 4,
        description: "Professional diving watch with exceptional precision and durability"
    },
    {
        id: 17,
        name: "Samsung Galaxy Watch",
        price: 1200,
        category: "watches",
        image: "images/Watches4.png",
        quantity: 12,
        description: "Smart wearable with comprehensive health features and long battery life"
    },
    // Sofas Category
    {
        id: 18,
        name: "Modern L-Shape Sofa",
        price: 5500,
        category: "sofas",
        image: "images/Sofas1.png",
        quantity: 4,
        description: "Spacious L-shaped sectional sofa with premium fabric and comfortable cushions"
    },
    {
        id: 19,
        name: "Luxury Velvet Sofa",
        price: 4200,
        category: "sofas",
        image: "images/Sofas2.png",
        quantity: 6,
        description: "Elegant velvet sofa with tufted backrest and golden metal legs"
    },
    {
        id: 20,
        name: "Leather Recliner Sofa",
        price: 6800,
        category: "sofas",
        image: "images/Sofas3.png",
        quantity: 3,
        description: "Premium leather reclining sofa with massage function and USB charging"
    },
    {
        id: 21,
        name: "Scandinavian Style Sofa",
        price: 3500,
        category: "sofas",
        image: "images/Sofas4.png",
        quantity: 8,
        description: "Minimalist Scandinavian design sofa with wooden legs and neutral colors"
    },
    // Shoes Category
    {
        id: 22,
        name: "Nike Air Jordan",
        price: 850,
        category: "shoes",
        image: "images/shose1.png",
        quantity: 15,
        description: "Iconic basketball sneakers with superior cushioning and legendary style"
    },
    {
        id: 23,
        name: "Adidas Ultraboost",
        price: 720,
        category: "shoes",
        image: "images/shose2.png",
        quantity: 18,
        description: "Premium running shoes with responsive boost technology and comfort"
    },
    {
        id: 24,
        name: "Puma Suede Classic",
        price: 380,
        category: "shoes",
        image: "images/shose3.png",
        quantity: 20,
        description: "Timeless suede sneakers with retro design and everyday comfort"
    }
];

<<<<<<< HEAD
export { products };

=======
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
const productQuantities = {};

products.forEach(product => {
    productQuantities[product.id] = 1;
});

let currentSlideIndex = 0;

const startAutoSlider = () => {
    const sliderBackground = document.getElementById('slider-background');
    if (!sliderBackground) return;

    const changeSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % products.length;
        const currentProduct = products[currentSlideIndex];
        sliderBackground.style.backgroundImage = `url('${currentProduct.image}')`;
    };

    if (products.length > 0) {
        sliderBackground.style.backgroundImage = `url('${products[0].image}')`;
    }

    setInterval(changeSlide, 3000);
};

const getFromLocalStorage = (key, defaultValue = null) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};


const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

<<<<<<< HEAD
=======
const showToast = (message, type = 'success') => {
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 250);
    }, 2200);
};

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)

const isLoggedIn = () => {
    const session = getFromLocalStorage('currentUser');
    return session !== null;
};

const getCurrentUser = () => getFromLocalStorage('currentUser');


const getCart = () => getFromLocalStorage('cart', []);


const saveCart = (cart) => saveToLocalStorage('cart', cart);

<<<<<<< HEAD
=======
const getFavorites = () => getFromLocalStorage('favorites', []);


const saveFavorites = (favorites) => saveToLocalStorage('favorites', favorites);


const isFavorite = (productId) => getFavorites().includes(productId);


const toggleFavorite = (productId) => {
    const favorites = getFavorites();
    const isAlreadyFavorite = favorites.includes(productId);

    const updatedFavorites = isAlreadyFavorite
        ? favorites.filter(id => id !== productId)
        : [productId, ...favorites];

    saveFavorites(updatedFavorites);

    return !isAlreadyFavorite;
};

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
const updateCartCount = () => {
    const cart = getCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
};

const addToCart = (productId) => {
    if (!isLoggedIn()) {
        alert('Please login to add items to cart!');
        window.location.href = 'login.html';
        return;
    }

    const cart = getCart();
    const quantityToAdd = productQuantities[productId] || 1;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        const updatedCart = cart.map(item => 
            item.id === productId 
                ? { ...item, quantity: item.quantity + quantityToAdd } 
                : item
        );
        saveCart(updatedCart);
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            const newItem = {
                ...product,
                quantity: quantityToAdd
            };
            saveCart([...cart, newItem]);
        }
    }
    
    
    productQuantities[productId] = 1;
    
    updateCartCount();
<<<<<<< HEAD
    alert(`${quantityToAdd} item(s) added to cart!`);
=======
    showToast(`${quantityToAdd} item(s) added to cart.`);
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
    
    renderProducts();
};

const increaseProductQuantity = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product && productQuantities[productId] < product.quantity) {
        productQuantities[productId]++;
        updateQuantityDisplay(productId);
    }
};

const decreaseProductQuantity = (productId) => {
    if (productQuantities[productId] > 1) {
        productQuantities[productId]--;
        updateQuantityDisplay(productId);
    }
};

const updateQuantityDisplay = (productId) => {
    const quantityElement = document.querySelector(`[data-quantity-id="${productId}"]`);
    if (quantityElement) {
        quantityElement.textContent = productQuantities[productId];
    }
};

const getStarRating = (rating = 0) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(`<span class="star ${i <= rating ? 'filled' : ''}">★</span>`);
    }
    return stars.join('');
};

<<<<<<< HEAD
=======
const renderFavoritesSection = () => {
    const container = document.getElementById('favorites-container');
    if (!container) return;

    const favorites = getFavorites();
    const favoriteProducts = favorites
        .map(favoriteId => products.find(product => product.id === favoriteId))
        .filter(Boolean);

    container.innerHTML = '';

    if (favoriteProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <h3>No favorites yet</h3>
                <p>Tap the heart icon on any product to save it here.</p>
                <a href="index.html" class="empty-state-link">Browse Products</a>
            </div>
        `;
        return;
    }

    favoriteProducts.forEach(({ id, name, price, image, category }) => {
        const favoriteCard = document.createElement('div');
        favoriteCard.className = 'product-card favorite-card';

        favoriteCard.innerHTML = `
            <div class="favorite-icon active" data-id="${id}">♥</div>
            <img src="${image}" alt="${name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="product-info">
                <h3>${name}</h3>
                <p class="category">${category}</p>
                <p class="price">$ ${price}</p>
            </div>
            <button class="add-to-cart-product" data-id="${id}">Add to Cart</button>
        `;

        favoriteCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-product') && !e.target.classList.contains('favorite-icon')) {
                window.location.href = `product-details.html?id=${id}`;
            }
        });

        container.appendChild(favoriteCard);
    });

    const removeFavoriteButtons = container.querySelectorAll('.favorite-icon');
    removeFavoriteButtons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.id);
            const isNowFavorite = toggleFavorite(productId);
            renderFavoritesSection();
            renderProducts();
            showToast(isNowFavorite ? 'Added to favorites.' : 'Removed from favorites.', isNowFavorite ? 'success' : 'info');
        });
    });

    const addButtons = container.querySelectorAll('.add-to-cart-product');
    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
};

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
const renderProducts = (productsToRender = products) => {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';

    productsToRender.map(({ id, name, price, image, category }) => {
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.dataset.id = id;

        const rating = Math.floor(Math.random() * 6);

        const currentQuantity = productQuantities[id];

<<<<<<< HEAD
        productCard.innerHTML = `
            <div class="favorite-icon" data-id="${id}">♡</div>
=======
        const favoriteActive = isFavorite(id);

        productCard.innerHTML = `
            <div class="favorite-icon ${favoriteActive ? 'active' : ''}" data-id="${id}">${favoriteActive ? '♥' : '♡'}</div>
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
            <img src="${image}" alt="${name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            <div class="product-info">
                <h3>${name}</h3>
                <p class="category">${category}</p>
                <div class="product-rating">
                    ${getStarRating(rating)}
                </div>
                <p class="price">$ ${price}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn-small decrease-qty" data-id="${id}">−</button>
                    <span class="quantity-display-small" data-quantity-id="${id}">${currentQuantity}</span>
                    <button class="quantity-btn-small increase-qty" data-id="${id}">+</button>
                </div>
            </div>
            <button class="add-to-cart-product" data-id="${id}">Add to Cart</button>
        `;

        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart-product') && 
                !e.target.classList.contains('favorite-icon') &&
                !e.target.classList.contains('quantity-btn-small')) {
                window.location.href = `product-details.html?id=${id}`;
            }
        });

        container.appendChild(productCard);
    });

    
    const favoriteIcons = container.querySelectorAll('.favorite-icon');
    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
<<<<<<< HEAD
            icon.classList.toggle('active');
            icon.textContent = icon.classList.contains('active') ? '♥' : '♡';
=======
            const productId = parseInt(icon.dataset.id);
            const isNowFavorite = toggleFavorite(productId);
            icon.classList.toggle('active');
            icon.textContent = icon.classList.contains('active') ? '♥' : '♡';
            renderFavoritesSection();
            showToast(isNowFavorite ? 'Added to favorites.' : 'Removed from favorites.', isNowFavorite ? 'success' : 'info');
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
        });
    });

    const increaseButtons = container.querySelectorAll('.increase-qty');
    increaseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.id);
            increaseProductQuantity(productId);
        });
    });

    const decreaseButtons = container.querySelectorAll('.decrease-qty');
    decreaseButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.id);
            decreaseProductQuantity(productId);
        });
    });


    const addButtons = container.querySelectorAll('.add-to-cart-product');
    addButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.id);
            addToCart(productId);
        });
    });
};


const filterByCategory = (category) => {
    if (category === 'all') {
        renderProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        renderProducts(filteredProducts);
    }
};


const sortProducts = (sortBy) => {
    let sortedProducts = [...products];
    
    switch(sortBy) {
        case 'price':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            break;
    }
    
    renderProducts(sortedProducts);
};

const updateNavigation = () => {
    const authLink = document.getElementById('auth-link');
    const logoutBtn = document.getElementById('logout-btn');
    const userNameSpan = document.getElementById('user-name');
    
    if (isLoggedIn()) {
        const { name } = getCurrentUser(); 
        
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

<<<<<<< HEAD
=======
const initContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const contactStatus = document.getElementById('contact-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const messageInput = document.getElementById('contact-message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        const nameError = document.getElementById('contact-name-error');
        const emailError = document.getElementById('contact-email-error');
        const subjectError = document.getElementById('contact-subject-error');
        const messageError = document.getElementById('contact-message-error');

        if (nameError) nameError.textContent = '';
        if (emailError) emailError.textContent = '';
        if (subjectError) subjectError.textContent = '';
        if (messageError) messageError.textContent = '';

        let hasError = false;

        if (name.length < 2) {
            hasError = true;
            if (nameError) nameError.textContent = 'Please enter at least 2 characters.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            hasError = true;
            if (emailError) emailError.textContent = 'Please enter a valid email address.';
        }

        if (subject.length < 3) {
            hasError = true;
            if (subjectError) subjectError.textContent = 'Subject should be at least 3 characters.';
        }

        if (message.length < 10) {
            hasError = true;
            if (messageError) messageError.textContent = 'Message should be at least 10 characters.';
        }

        if (hasError) {
            if (contactStatus) {
                contactStatus.textContent = 'Please fix highlighted fields.';
                contactStatus.className = 'contact-status error';
            }
            return;
        }

        const submitBtn = document.querySelector('.contact-submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
        }

        const savedMessages = getFromLocalStorage('contactMessages', []);
        savedMessages.push({
            id: Date.now(),
            name,
            email,
            subject,
            message,
            createdAt: new Date().toISOString()
        });
        saveToLocalStorage('contactMessages', savedMessages);

        contactForm.reset();

        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }

        if (contactStatus) {
            contactStatus.textContent = 'Message sent successfully. Thank you!';
            contactStatus.className = 'contact-status success';
        }

        showToast('Your message has been sent.');
    });
};

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)

const init = () => {
  
    startAutoSlider();
    
    renderProducts();
<<<<<<< HEAD
=======

    renderFavoritesSection();
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
    
    updateCartCount();
    
    updateNavigation();

<<<<<<< HEAD
=======
    initContactForm();

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            
            categoryButtons.forEach(b => b.classList.remove('active'));
            
            e.target.classList.add('active');
            
            const category = e.target.dataset.category;
            filterByCategory(category);
        });
    });

    
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

document.addEventListener('DOMContentLoaded', init);
<<<<<<< HEAD


export {
    getFromLocalStorage,
    saveToLocalStorage,
    isLoggedIn,
    getCurrentUser,
    getCart,
    saveCart,
    updateCartCount,
    addToCart,
    updateNavigation,
    logout,
    scrollToTop,
    getStarRating,
    increaseProductQuantity,
    decreaseProductQuantity,
    productQuantities
};
=======
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
