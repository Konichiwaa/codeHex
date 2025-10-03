
    //Tab functionality
    document.addEventListener('DOMContentLoaded', function() { 
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      const awardCount = document.getElementById('award-count');
      
      // Award counts for each tab
      const awardCounts = {
        'all': document.querySelectorAll('.award-card').length,
        'research': document.querySelectorAll('.award-card[data-category="research"]').length,
        'innovation': document.querySelectorAll('.award-card[data-category="innovation"]').length,
        'scholarship': document.querySelectorAll('.award-card[data-category="scholarship"]').length
      };
      
      // Switch tabs
      tabButtons.forEach(button => {
        button.addEventListener('click', function() {
          // Remove active class from all buttons and contents
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Show the corresponding tab content
          const tabId = this.getAttribute('data-tab') + '-tab';
          document.getElementById(tabId).classList.add('active');
          
          // Update award count
          awardCount.textContent = awardCounts[this.getAttribute('data-tab')];
        });
      });
      
      // Initialize award count
      awardCount.textContent = awardCounts['all'];
    });

