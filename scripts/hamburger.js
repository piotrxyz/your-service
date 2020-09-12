const hamburger = document.querySelector(".menu-button");
const showMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("menu-button--active");
    showMenu.classList.toggle("menu--show");
});