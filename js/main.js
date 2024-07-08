document
  .getElementById("show-register")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
  });

document
  .getElementById("show-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("register-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      document.getElementById("login-email").style.outlineColor = "red";
      document.getElementById("login-email").focus();
      return;
    } else {
      document.getElementById("login-email").style.outlineColor = "";
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one number."
      );
      document.getElementById("login-password").style.outlineColor = "red";
      document.getElementById("login-password").focus();
      return;
    } else {
      document.getElementById("login-password").style.outlineColor = "";
    }

    localStorage.setItem("loginEmail", email);
    localStorage.setItem("loginPassword", password);

    alert("Login form submitted successfully!");
  });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById(
      "register-confirm-password"
    ).value;

    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      document.getElementById("register-username").style.outlineColor = "red";
      document.getElementById("register-username").focus();
      return;
    } else {
      document.getElementById("register-username").style.outlineColor = "";
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      document.getElementById("register-email").style.outlineColor = "red";
      document.getElementById("register-email").focus();
      return;
    } else {
      document.getElementById("register-email").style.outlineColor = "";
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one number."
      );
      document.getElementById("register-password").style.outlineColor = "red";
      document.getElementById("register-password").focus();
      return;
    } else {
      document.getElementById("register-password").style.outlineColor = "";
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      document.getElementById("register-confirm-password").style.outlineColor =
        "red";
      document.getElementById("register-confirm-password").focus();
      return;
    } else {
      document.getElementById("register-confirm-password").style.outlineColor =
        "";
    }

    localStorage.setItem("registerUsername", username);
    localStorage.setItem("registerEmail", email);
    localStorage.setItem("registerPassword", password);

    alert("Register form submitted successfully!");
    window.location.href = "main.html"; 
  });

function validateEmail(email) {
  const atSymbolIndex = email.indexOf("@");
  if (atSymbolIndex < 1) return false;

  const dotIndex = email.lastIndexOf(".");
  if (dotIndex <= atSymbolIndex + 1 || dotIndex === email.length - 1)
    return false;

  return true;
}

function validatePassword(password) {
  if (password.length < 4) return false;

  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (/\d/.test(password[i])) {
      hasNumber = true;
      break;
    }
  }

  return hasNumber;
}
