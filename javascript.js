// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and sections
            tabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Show corresponding section
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Card click animation
    const cards = document.querySelectorAll('.conference-card, .editorial-card, .membership-box');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // Auto remove active class after 2 seconds
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        });
    });
    
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navmenu = document.querySelector('#navmenu');
    
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navmenu.classList.toggle('active');
        });
    }
    
    // Scroll top button
    const scrollTop = document.getElementById('scroll-top');
    if (scrollTop) {
        const toggleScrollTop = function() {
            if (window.scrollY > 100) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleScrollTop);
        document.addEventListener('scroll', toggleScrollTop);
        
        scrollTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navmenu.classList.contains('active')) {
                navmenu.classList.remove('active');
            }
        });
    });
});