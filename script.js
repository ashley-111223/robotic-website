function validateLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Login successful (Demo only)");
  return true;
}

function validateContact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields are required.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email address.");
    return false;
  }

  alert("Message sent successfully (Demo).");
  return true;
}