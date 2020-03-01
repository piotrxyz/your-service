const slides = [{
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`
},
{
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`
},
{
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`
}]

const subtitle = document.querySelector('.hero__subtitle');
const dots = [...document.querySelectorAll('.hero__slider span')]

const time = 5000;
let slideActive = 0;

const changeDot = () => {
    dots.findIndex(dot => dot.classList.contains('active'))
}

const changeSlide = () => {
    slideActive++;
    if (slideActive === slides.length) {
        slideActive = 0;
    }
    subtitle.textContent = slides[slideActive].text;
    subtitle.classList.toggle('hero__subtitle--show');
    changeDot()
}
setInterval(changeSlide, time)
