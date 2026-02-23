
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

export { products };

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
    alert(`${quantityToAdd} item(s) added to cart!`);
    
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

        productCard.innerHTML = `
            <div class="favorite-icon" data-id="${id}">♡</div>
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
            icon.classList.toggle('active');
            icon.textContent = icon.classList.contains('active') ? '♥' : '♡';
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


const init = () => {
  
    startAutoSlider();
    
    renderProducts();
    
    updateCartCount();
    
    updateNavigation();

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
