document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const username = document.querySelector('input[placeholder="First name"]');
    const phone = document.querySelector('input[placeholder="Phone Number"]');
    
    function showError(input, message) {
      const formControl = input.parentElement;
      formControl.classList.add('error');
      const small = formControl.querySelector('small');
      small.innerText = message;
    }
  
    function showSuccess(input) {
      const formControl = input.parentElement;
      formControl.classList.remove('error');
      formControl.classList.add('success');
    }
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (username.value === '') {
        showError(username, 'Username is required');
      } else {
        showSuccess(username);
      }
      
      if (phone.value === '') {
        showError(phone, 'Phone number is required');
      } else {
        showSuccess(phone);
      }
    });
  });
  