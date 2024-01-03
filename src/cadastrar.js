function togglePassword(inputId) {
    const inputElement = document.getElementById(inputId);
    const eyeIcon = document.querySelector(`[onclick="togglePassword('${inputId}')"]`);
    const errorIcon = document.getElementById(`${inputId}Icon`);
  
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
  
  function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const mensagemSenha = document.getElementById("mensagemSenha");
    const senhaIcon = document.getElementById("senhaIcon");
  
    
    const senhaRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    if (!senhaRegex.test(senha)) {
      mensagemSenha.textContent = "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.";
      senhaIcon.style.display = "inline";
    } else {
      mensagemSenha.textContent = "";
      senhaIcon.style.display = "none";
    }
  }
  
  
  function validarSenha() {
    const senha = document.getElementById("senha").value;
    const repetirSenha = document.getElementById("repetirSenha").value;
    const senhaInput = document.getElementById("senha");
    const repetirSenhaInput = document.getElementById("repetirSenha");
    const senhaIcon = document.getElementById("senhaIcon");
    const repetirSenhaIcon = document.getElementById("repetirSenhaIcon");
  
    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      senhaInput.style.borderColor = "red";
      repetirSenhaInput.style.borderColor = "";
      senhaIcon.style.display = "inline";
      return false;
    } else {
      senhaInput.style.borderColor = "";
      senhaIcon.style.display = "none";
    }
  
    if (senha !== repetirSenha) {
      alert("As senhas não coincidem.");
      senhaInput.style.borderColor = "red";
      repetirSenhaInput.style.borderColor = "red";
      senhaIcon.style.display = "inline";
      repetirSenhaIcon.style.display = "inline";
      return false;
    } else {
      senhaInput.style.borderColor = "";
      repetirSenhaInput.style.borderColor = "";
      senhaIcon.style.display = "none";
      repetirSenhaIcon.style.display = "none";
    }
  
    return true;
  }
  