const heroSlides = [{
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`
},
{
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation`
},
{
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud`
}]

const subtitle = document.querySelector('.hero__subtitle');
const dots = [...document.querySelectorAll('.hero__slider span')]

const time = 5000;
let slideActive = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[slideActive].classList.add('active');
}

const changeSlide = () => {
    slideActive++;
    if (slideActive === heroSlides.length) {
        slideActive = 0;
    }
    subtitle.textContent = heroSlides[slideActive].text;
    subtitle.classList.toggle('hero__subtitle--fadein');
    changeDot()
}
setInterval(changeSlide, time);


