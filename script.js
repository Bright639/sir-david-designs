// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    // Mobile menu functionality
    initializeMobileMenu();
    
    // Smooth scrolling for navigation links
    initializeSmoothScrolling();
    
    // Filter functionality
    initializeFilters();
    
    // Contact form handling
    initializeContactForm();
    
    // Initialize modal functionality
    initializeModal();
    
    // Header scroll effect
    initializeHeaderScroll();
    
    // Active navigation highlighting
    initializeNavigation();
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Filter Functionality
function initializeFilters() {
    const categoryButtons = document.querySelectorAll('.filter-btn');
    const colorButtons = document.querySelectorAll('.color-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    let currentCategory = 'all';
    let currentColor = 'all';
    
    // Category filter
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.getAttribute('data-category');
            
            // Apply filters
            applyFilters(currentCategory, currentColor);
        });
    });
    
    // Color filter
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            colorButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current color
            currentColor = this.getAttribute('data-color');
            
            // Apply filters
            applyFilters(currentCategory, currentColor);
        });
    });
    
    function applyFilters(category, color) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardColor = card.getAttribute('data-color');
            
            const categoryMatch = category === 'all' || cardCategory === category;
            const colorMatch = color === 'all' || cardColor === color;
            
            if (categoryMatch && colorMatch) {
                card.classList.remove('hidden');
                // Add animation
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.classList.add('hidden');
            }
        });
        
        // Update product count display
        updateProductCount(category, color);
    }
    
    function updateProductCount(category, color) {
        const visibleProducts = document.querySelectorAll('.product-card:not(.hidden)');
        const count = visibleProducts.length;
        
        // You can add a product count display here if needed
        console.log(`Showing ${count} products`);
    }
}

// Product Modal Functionality
const productData = {
    product1: {
        title: "Classic Navy Suit",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 25,000",
        description: "Premium wool blend navy suit perfect for business and formal occasions. Expertly tailored with attention to detail.",
        features: [
            "100% Premium Wool Blend",
            "Half Canvas Construction", 
            "Custom Fit Guarantee",
            "Horn Buttons",
            "Bemberg Lining",
            "2-3 Weeks Delivery"
        ],
        colors: ["Navy", "Charcoal", "Black"],
        sizes: ["36-48 Regular", "38-46 Long", "40-44 Short"]
    },
    product2: {
        title: "Black Tuxedo",
        image: "https://images.pexels.com/photos/1702736/pexels-photo-1702736.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 35,000",
        description: "Elegant evening wear with satin lapels and perfect tailoring for special occasions and formal events.",
        features: [
            "Finest Black Wool",
            "Satin Peak Lapels",
            "Silk Lining",
            "Custom Tailored Fit",
            "Matching Bow Tie Included",
            "White Dress Shirt Available"
        ],
        colors: ["Black", "Midnight Blue"],
        sizes: ["36-48 Regular", "38-46 Long", "40-44 Short"]
    },
    product3: {
        title: "Tailored Trousers",
        image: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 8,500",
        description: "Classic fit trousers with impeccable attention to detail. Perfect for both business and casual wear.",
        features: [
            "Premium Cotton Blend",
            "Custom Waist & Length",
            "Side Adjusters Available",
            "Multiple Pocket Options",
            "Crease Resistant",
            "1-2 Weeks Delivery"
        ],
        colors: ["Gray", "Navy", "Black", "Khaki"],
        sizes: ["28-42 Waist", "30-36 Length", "Custom Sizes Available"]
    },
    product4: {
        title: "Custom Dress Shirt",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 5,000",
        description: "Premium cotton dress shirt with French cuffs and mother-of-pearl buttons. Perfect for professional settings.",
        features: [
            "100% Premium Cotton",
            "French Cuffs",
            "Mother-of-Pearl Buttons",
            "17 Measurement Points",
            "Monogramming Available",
            "1 Week Delivery"
        ],
        colors: ["White", "Light Blue", "Pink", "Striped"],
        sizes: ["14.5-18 Collar", "32-36 Sleeve", "Custom Measurements"]
    },
    product5: {
        title: "Charcoal Business Suit",
        image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 28,000",
        description: "Contemporary cut with modern styling for the professional. Perfect for daily business wear.",
        features: [
            "Super 120s Wool",
            "Slim Fit Cut",
            "Half Canvas Construction",
            "Ticket Pocket",
            "Functional Sleeve Buttons",
            "2-3 Weeks Delivery"
        ],
        colors: ["Charcoal", "Navy", "Dark Gray"],
        sizes: ["36-48 Regular", "38-46 Long", "40-44 Short"]
    },
    product6: {
        title: "Casual Blazer",
        image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 15,000",
        description: "Versatile blazer perfect for smart casual occasions. Pairs well with jeans or dress trousers.",
        features: [
            "Cotton-Linen Blend",
            "Unstructured Soft Shoulder",
            "Patch Pockets",
            "Working Button Holes",
            "Casual Styling",
            "2 Weeks Delivery"
        ],
        colors: ["Navy", "Olive", "Brown", "Burgundy"],
        sizes: ["36-48 Regular", "Custom Fit Available"]
    },
    product7: {
        title: "Evening Dress",
        image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 18,000",
        description: "Elegant custom-fitted evening dress perfect for special occasions, galas, and formal events.",
        features: [
            "Premium Silk or Satin Fabric",
            "Custom Fitted Design",
            "Hand-Sewn Details",
            "Multiple Length Options",
            "Color Customization",
            "2-3 Weeks Delivery"
        ],
        colors: ["Red", "Black", "Navy", "Emerald"],
        sizes: ["Size 6-18", "Custom Measurements", "Petite & Tall Available"]
    },
    product8: {
        title: "Silk Blouse",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 7,500",
        description: "Premium silk blouse with perfect tailoring for professional wear and business settings.",
        features: [
            "100% Pure Silk",
            "French Seam Construction",
            "Mother-of-Pearl Buttons",
            "Custom Collar Styles",
            "Perfect Fit Guarantee",
            "1-2 Weeks Delivery"
        ],
        colors: ["White", "Cream", "Light Blue", "Blush Pink"],
        sizes: ["XS-XXL", "Custom Measurements Available"]
    },
    product9: {
        title: "Pencil Skirt",
        image: "https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 6,000",
        description: "Classic tailored pencil skirt for business and formal wear with impeccable fit and style.",
        features: [
            "Premium Wool Blend",
            "High-Waisted Design",
            "Back Slit Detail",
            "Invisible Zipper",
            "Lined Interior",
            "1 Week Delivery"
        ],
        colors: ["Navy", "Black", "Gray", "Burgundy"],
        sizes: ["Size 6-18", "Custom Waist & Length"]
    },
    product10: {
        title: "Children's Suit",
        image: "https://images.pexels.com/photos/1702736/pexels-photo-1702736.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 12,000",
        description: "Adorable mini suit perfect for special occasions, weddings, and formal events for children.",
        features: [
            "Child-Safe Materials",
            "Comfortable Fit",
            "Adjustable Features",
            "Matching Accessories",
            "Easy Care Fabric",
            "1-2 Weeks Delivery"
        ],
        colors: ["Navy", "Black", "Gray", "Light Blue"],
        sizes: ["Ages 2-12", "Custom Sizing Available"]
    },
    product11: {
        title: "Party Dress",
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 8,500",
        description: "Beautiful custom party dress for your little princess, perfect for birthdays and celebrations.",
        features: [
            "Soft, Comfortable Fabrics",
            "Beautiful Embellishments",
            "Full Circle Skirt",
            "Adjustable Straps",
            "Machine Washable",
            "1 Week Delivery"
        ],
        colors: ["Pink", "Purple", "White", "Light Blue"],
        sizes: ["Ages 2-10", "Custom Measurements"]
    },
    product12: {
        title: "School Uniform",
        image: "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=600",
        price: "KES 4,500",
        description: "Durable and comfortable school uniform tailored to fit perfectly and last through the school year.",
        features: [
            "Durable Cotton Blend",
            "Stain Resistant",
            "Reinforced Seams",
            "Easy Care Instructions",
            "School Logo Embroidery",
            "3-5 Days Delivery"
        ],
        colors: ["Gray", "Navy", "White", "Khaki"],
        sizes: ["Ages 4-18", "All School Requirements"]
    }
};

function openModal(productId) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    const product = productData[productId];
    
    if (product && modal && modalBody) {
        modalBody.innerHTML = `
            <div class="modal-product">
                <div class="modal-product-image">
                    <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 10px;">
                </div>
                <div class="modal-product-details">
                    <h2 style="color: var(--text-dark); margin: 1rem 0;">${product.title}</h2>
                    <p style="font-size: 1.5rem; color: var(--accent-color); font-weight: bold; margin-bottom: 1rem;">${product.price}</p>
                    <p style="color: var(--text-light); margin-bottom: 2rem; line-height: 1.6;">${product.description}</p>
                    
                    <h3 style="color: var(--text-dark); margin-bottom: 1rem;">Features:</h3>
                    <ul style="margin-bottom: 2rem; padding-left: 1.5rem;">
                        ${product.features.map(feature => `<li style="margin-bottom: 0.5rem; color: var(--text-light);">${feature}</li>`).join('')}
                    </ul>
                    
                    <div class="product-options" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                        <div>
                            <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Available Colors:</h4>
                            <p style="color: var(--text-light);">${product.colors.join(', ')}</p>
                        </div>
                        <div>
                            <h4 style="color: var(--text-dark); margin-bottom: 0.5rem;">Sizes:</h4>
                            <p style="color: var(--text-light);">${product.sizes.join(', ')}</p>
                        </div>
                    </div>
                    
                    <div class="modal-buttons" style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <a href="tel:0713208363" class="btn btn-primary">Call to Order</a>
                        <a href="https://wa.me/254713208363?text=Hi, I'm interested in the ${product.title}" class="btn btn-secondary" target="_blank">WhatsApp Us</a>
                    </div>
                </div>
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add animation
        setTimeout(() => {
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
            modal.querySelector('.modal-content').style.opacity = '1';
        }, 10);
    }
}

function closeModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function initializeModal() {
    const modal = document.getElementById('productModal');
    
    if (modal) {
        // Close modal when clicking outside
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
    }
}

// Contact Form Handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formEntries = Object.fromEntries(formData.entries());
            
            // Show success message (you can replace this with actual form submission)
            showNotification('Thank you! Your message has been sent. We\'ll contact you soon.', 'success');
            
            // Reset form
            this.reset();
            
            // In a real application, you would send this data to your server
            console.log('Form data:', formEntries);
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add notification styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Header Scroll Effect
function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
}

// Navigation Active State
function initializeNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    window.addEventListener('scroll', function() {
        const scrollPos = window.pageYOffset + 150; // Offset for header height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('en-KE', {
        style: 'currency',
        currency: 'KES'
    }).format(price);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS animations for notifications
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .scroll-down {
            transform: translateY(-100%);
        }
        
        .scroll-up {
            transform: translateY(0);
        }
        
        .header {
            transition: transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize lazy loading for images (optional enhancement)
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Call lazy loading initialization
document.addEventListener('DOMContentLoaded', initializeLazyLoading);