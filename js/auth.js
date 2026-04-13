"use strict";

/* =========================
   REGISTER
========================= */
const registerForm = document.querySelector("#registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.querySelector("#regUsername").value;
    const email = document.querySelector("#regEmail").value;
    const password = document.querySelector("#regPassword").value;

    const user = {
      username,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");
    window.location.href = "login.html";
  });
}


/* =========================
   LOGIN
========================= */
const loginForm = document.querySelector("#loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.querySelector("#loginUsername").value;
    const password = document.querySelector("#loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No registered user!");
      return;
    }

    if (
      username === savedUser.username &&
      password === savedUser.password
    ) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Invalid login credentials!");
    }
  });
}


/* =========================
   SESSION CHECK
========================= */
if (window.location.pathname.includes("index.html")) {
  const loggedIn = localStorage.getItem("loggedIn");

  if (!loggedIn) {
    window.location.href = "login.html";
  }
}


/* =========================
   LOGOUT
========================= */
function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}