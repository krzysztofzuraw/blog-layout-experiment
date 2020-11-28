const button = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

button.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("clicked");
});
