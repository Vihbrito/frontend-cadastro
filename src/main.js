function togglePassword(inputId) {
    const inputElement = document.getElementById(inputId);
    const eyeIcon = document.querySelector(`[onclick="togglePassword('${inputId}')"]`);
   
  
    if (inputElement.type === "password") {
      inputElement.type = "text";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    } else {
      inputElement.type = "password";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    }
  }
  