
<<<<<<< HEAD

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

=======
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
const getProductIdFromURL = () => {
  
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return id ? parseInt(id) : null;
};

const findProductById = (id) => {
    return products.find(product => product.id === id);
};

<<<<<<< HEAD
=======
const getReviewsKey = (productId) => `productReviews_${productId}`;

const getProductReviews = (productId) => {
    const data = localStorage.getItem(getReviewsKey(productId));
    return data ? JSON.parse(data) : [];
};

const saveProductReviews = (productId, reviews) => {
    localStorage.setItem(getReviewsKey(productId), JSON.stringify(reviews));
};

const showDetailsToast = (message, type = 'success') => {
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

const getStarsText = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

const formatReviewDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
};

const showReviewStatus = (message, isSuccess = false) => {
    const reviewStatus = document.getElementById('review-status');
    if (!reviewStatus) return;
    reviewStatus.textContent = message;
    reviewStatus.className = `review-status ${isSuccess ? 'success' : 'error'}`;
};

const setupStarRatingSelector = () => {
    const stars = document.querySelectorAll('.rating-star');
    const ratingInput = document.getElementById('review-rating');

    if (!stars.length || !ratingInput) return;

    const paintStars = (value) => {
        stars.forEach((star) => {
            const starValue = parseInt(star.dataset.value);
            star.classList.toggle('selected', starValue <= value);
        });
    };

    stars.forEach((star) => {
        star.addEventListener('mouseenter', () => {
            paintStars(parseInt(star.dataset.value));
        });

        star.addEventListener('click', () => {
            ratingInput.value = star.dataset.value;
            paintStars(parseInt(star.dataset.value));
        });
    });

    const starsContainer = document.getElementById('rating-stars');
    if (starsContainer) {
        starsContainer.addEventListener('mouseleave', () => {
            paintStars(parseInt(ratingInput.value || '0'));
        });
    }
};

const renderReviewsList = (productId) => {
    const reviewsList = document.getElementById('reviews-list');
    if (!reviewsList) return;

    const reviews = getProductReviews(productId);

    if (reviews.length === 0) {
        reviewsList.innerHTML = '<div class="empty-cart">No reviews yet. Be the first to add one.</div>';
        return;
    }

    reviewsList.innerHTML = reviews
        .slice()
        .reverse()
        .map((review) => `
            <article class="review-card">
                <div class="review-header">
                    <span class="review-user">${review.userName}</span>
                    <span class="review-date">${formatReviewDate(review.createdAt)}</span>
                </div>
                <div class="review-stars">${getStarsText(review.rating)}</div>
                <p>${review.comment}</p>
            </article>
        `)
        .join('');
};

const handleReviewSubmit = (productId, e) => {
    e.preventDefault();

    if (!isLoggedIn()) {
        showReviewStatus('Please login first to add a review.');
        window.location.href = 'login.html';
        return;
    }

    const ratingInput = document.getElementById('review-rating');
    const commentInput = document.getElementById('review-comment');
    const rating = parseInt(ratingInput.value);
    const comment = commentInput.value.trim();

    if (!rating || rating < 1 || rating > 5) {
        showReviewStatus('Please select a star rating between 1 and 5.');
        return;
    }

    if (comment.length < 3) {
        showReviewStatus('Review text should be at least 3 characters.');
        return;
    }

    const currentUser = getCurrentUser();
    const currentUserEmail = currentUser?.email || null;
    const newReview = {
        id: Date.now(),
        userName: currentUser?.name || 'User',
        userEmail: currentUserEmail,
        rating,
        comment,
        createdAt: new Date().toISOString()
    };

    const reviews = getProductReviews(productId);
    const existingReviewIndex = reviews.findIndex((review) => review.userEmail && review.userEmail === currentUserEmail);

    if (existingReviewIndex >= 0) {
        reviews[existingReviewIndex] = {
            ...reviews[existingReviewIndex],
            rating: newReview.rating,
            comment: newReview.comment,
            createdAt: new Date().toISOString()
        };
        showReviewStatus('Your review was updated.', true);
    } else {
        reviews.push(newReview);
        showReviewStatus('Thanks! Your review was submitted.', true);
    }

    saveProductReviews(productId, reviews);

    e.target.reset();
    const hiddenRating = document.getElementById('review-rating');
    if (hiddenRating) hiddenRating.value = '';
    setupStarRatingSelector();
    renderReviewsList(productId);
};

const renderReviewsSection = (productId) => {
    const reviewsSection = document.getElementById('reviews-section');
    if (!reviewsSection) return;

    reviewsSection.innerHTML = `
        <h2>Reviews & Ratings</h2>
        <form id="review-form" class="review-form">
            <input id="review-rating" type="hidden" required>
            <div class="rating-stars" id="rating-stars" aria-label="Choose rating">
                <button type="button" class="rating-star" data-value="1">★</button>
                <button type="button" class="rating-star" data-value="2">★</button>
                <button type="button" class="rating-star" data-value="3">★</button>
                <button type="button" class="rating-star" data-value="4">★</button>
                <button type="button" class="rating-star" data-value="5">★</button>
            </div>
            <textarea id="review-comment" placeholder="Write your review..." required></textarea>
            <button type="submit" class="review-submit-btn">Submit Review</button>
            <p id="review-status" class="review-status"></p>
        </form>
        <div id="reviews-list" class="reviews-list"></div>
    `;

    const reviewForm = document.getElementById('review-form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (e) => handleReviewSubmit(productId, e));
    }

    setupStarRatingSelector();

    renderReviewsList(productId);
};

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
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
<<<<<<< HEAD
    alert('Product added to cart!');
=======
    showDetailsToast('Product added to cart.');
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
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

<<<<<<< HEAD
=======
    renderReviewsSection(product.id);

>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
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
<<<<<<< HEAD

export {
    getProductIdFromURL,
    findProductById,
    addToCartFromDetails,
    renderProductDetails
};
=======
>>>>>>> 29479e7 (Added favorites, dark/light mode, reviews, and contact page)
