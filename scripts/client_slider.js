const clientSlides = [{
    img: "img/client-image.jpg",
    name: `John Doe`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque`
},
{
    img: "img/client-image2.jpg",
    name: `Celine Jones`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque`
},
{
    img: "img/client-image3.jpg",
    name: `Amanda Smith`,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque`
}]

const clientName = document.querySelector(".client__name");
const description = document.querySelector(".client__description");
const image = document.querySelector(".client__image");
const client_dots = [...document.querySelectorAll(".client__slider span")]

const client_time = 5000;
let active = 0;

const changeDots = () => {
    const acvDot = client_dots.findIndex(dot => dot.classList.contains("active"));
    client_dots[acvDot].classList.remove("active");
    client_dots[active].classList.add("active");
}

const changeClientSlide = () => {
    active++
    if (active === clientSlides.length) {
        active = 0;
    }
    image.src = clientSlides[active].img;
    description.textContent = clientSlides[active].text;
    clientName.textContent = clientSlides[active].name;
    changeDots()
}
setInterval(changeClientSlide, client_time)
