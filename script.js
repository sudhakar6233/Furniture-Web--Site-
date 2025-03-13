// navbar
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

// footer part
function subscribe() {
  let email = document.getElementById('email').value;
  if (email) {
      alert(`Thank you for subscribing with: ${email}`);
  } else {
      alert('Please enter a valid email address');
  }
}
// another sec 
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}