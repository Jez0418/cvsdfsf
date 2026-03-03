document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // 1. Modal Functionality
    // =========================================
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');

    // Open Modal
    function openModal() {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    // Close Modal
    function closeModalFunc() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    }

    // Event Listeners for Modal
    if (loginBtn) loginBtn.addEventListener('click', openModal);
    if (signupBtn) signupBtn.addEventListener('click', openModal);
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);

    // Close modal when clicking outside content
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModalFunc();
            }
        });
    }

    // =========================================
    // 2. Cart Counter Functionality
    // =========================================
    const addToCartButtons = document.querySelectorAll('.btn-primary, .btn-outline');
    const cartCountElement = document.querySelector('.cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent form submission if inside a form
            
            // Increment Cart
            cartCount++;
            if (cartCountElement) {
                cartCountElement.textContent = cartCount;
            }

            // Visual Feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#4CAF50'; // Green color
            this.style.color = 'white';

            // Reset Button
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 1500);
        });
    });

    // =========================================
    // 3. Social Login Buttons
    // =========================================
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 
                           this.classList.contains('facebook') ? 'Facebook' : 
                           this.classList.contains('instagram') ? 'Instagram' : 'Social';
            
            alert(`Signing in with ${provider}... (This is a demo)`);
            closeModalFunc();
        });
    });

    // =========================================
    // 4. Search Bar Functionality
    // =========================================
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput ? searchInput.value.trim() : '';
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
            } else {
                alert('Please enter a search term');
            }
        });
    }

    // Search on Enter key
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    alert(`Searching for: ${searchTerm}`);
                } else {
                    alert('Please enter a search term');
                }
            }
        });
    }

    // =========================================
    // 5. Smooth Scroll for Navigation Links
    // =========================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // =========================================
    // 6. Category Links
    // =========================================
    const categoryLinks = document.querySelectorAll('.cat-list a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim();
            alert(`Viewing category: ${category}`);
        });
    });

    // =========================================
    // 7. Footer Links
    // =========================================
    const footerLinks = document.querySelectorAll('.footer-links a');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            alert(`Opening ${linkText}... (This is a demo)`);
        });
    });

    // =========================================
    // 8. Timer Countdown (Visual Only)
    // =========================================
    const timerElement = document.querySelector('.timer');
    
    if (timerElement) {
        // This is just a visual countdown for demo purposes
        let hours = 4;
        let minutes = 23;
        let seconds = 15;

        setInterval(() => {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
            }
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            if (hours < 0) {
                hours = 23;
                minutes = 59;
                seconds = 59;
            }

            const formattedTime = 
                `${hours.toString().padStart(2, '0')}h : ` +
                `${minutes.toString().padStart(2, '0')}m : ` +
                `${seconds.toString().padStart(2, '0')}s`;
            
            timerElement.textContent = formattedTime;
        }, 1000);
    }

    // =========================================
    // 9. Product Card Hover Effects
    // =========================================
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // =========================================
    // 10. Cart Icon Click
    // =========================================
    const cartIcon = document.querySelector('.cart-icon');
    
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            if (cartCount > 0) {
                alert(`You have ${cartCount} item(s) in your cart!`);
            } else {
                alert('Your cart is empty!');
            }
        });
    }

    // =========================================
    // 11. Hero Section Button
    // =========================================
    const shopNowBtn = document.querySelector('.hero .btn-primary');
    
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // =========================================
    // 12. Form Submission (Demo)
    // =========================================
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully! (This is a demo)');
            form.reset();
        });
    });

    // =========================================
    // 13. Console Log for Debugging
    // =========================================
    console.log('Jez Techno Website Loaded Successfully!');
    console.log(`Cart Count: ${cartCount}`);
    console.log('All interactive elements are ready!');
});