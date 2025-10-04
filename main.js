<script>
    // Tab functionality
    document.addEventListener('DOMContentLoaded', function() {
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      const publicationCount = document.getElementById('publication-count');
      
      // Publication counts for each tab
      const publicationCounts = {
        'all': document.querySelectorAll('.publication-card').length,
        'journal': document.querySelectorAll('.publication-card[data-category="journal"]').length,
        'conference': document.querySelectorAll('.publication-card[data-category="conference"]').length,
        'book': document.querySelectorAll('.publication-card[data-category="book"]').length
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
          
          // Update publication count
          publicationCount.textContent = publicationCounts[this.getAttribute('data-tab')];
        });
      });
      
      // Initialize publication count
      publicationCount.textContent = publicationCounts['all'];
    });
  </script>