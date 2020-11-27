const button = document.getElementById("menu-button");
const menuList = document.getElementById("menu-links");

button.addEventListener("click", (e) => {
  menuList.classList.toggle("menu-clicked");
});
