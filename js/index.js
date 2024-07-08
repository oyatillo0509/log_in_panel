document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one number."
      );
      return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Form submitted successfully and data stored in localStorage!");
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
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one number."
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    localStorage.setItem("registerUsername", username);
    localStorage.setItem("registerEmail", email);
    localStorage.setItem("registerPassword", password);

    alert(
      "Register form submitted successfully and data stored in localStorage!"
    );
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

  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      return true;
    }
  }

  return false;
}
