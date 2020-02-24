const hamburger = document.querySelector('.nav__button');
const showMenu = document.querySelector('.menu');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('nav__button--active');
    showMenu.classList.toggle('show-menu');
})
