const slides = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot");

var counter = 0;
slides.forEach(
(slider, index) => {
    slider.style.left = `${index * 100}%`
    });

const updateDots = () => {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[counter].classList.add("active");
};

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    updateDots();
}; 

const goNext = () => {
    counter++;

    if (counter >= slides.length) {
        counter = 0; 
    }

    slideImage();
};

const goPrev = () => {
    counter--;

    if (counter < 0) {
        counter = slides.length - 1; 
    }

    slideImage();
};

const currentSlide = (index) => {
    counter = index;
    slideImage();
};

setInterval(() => {
    goNext();
}, 3000);
    slideImage();
