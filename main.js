 // Simple form validation and CAPTCHA check
    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get CAPTCHA value
      const captchaInput = document.getElementById('captcha').value;
      
      // Simple CAPTCHA check (7 + 5 = 12)
      if (captchaInput !== '12') {
        alert('Please enter the correct CAPTCHA answer.');
        return;
      }
      
      // If CAPTCHA is correct, show success message
      alert('Thank you for your message! It has been sent successfully.');
      document.getElementById('contact-form').reset();
    });