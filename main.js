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
            const cards = document.querySelectorAll('.conference-card, .editorial-card');
            
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
        });