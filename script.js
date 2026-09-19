const slides = document.querySelectorAll(".slider");
const dots = document.querySelectorAll(".dot");

let counter = 0;

// Set the initial position of each slide
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Update active dot
const updateDots = () => {
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    if (dots[counter]) {
        dots[counter].classList.add("active");
    }
};

// Move slides
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    updateDots();
};

// Next slide
const goNext = () => {
    counter++;

    if (counter >= slides.length) {
        counter = 0;
    }

    slideImage();
};

// Previous slide
const goPrev = () => {
    counter--;

    if (counter < 0) {
        counter = slides.length - 1;
    }

    slideImage();
};

// Select a specific slide
const currentSlide = (index) => {
    counter = index;
    slideImage();
};

// Automatically change slide every 3 seconds
setInterval(() => {
    goNext();
}, 3000);

// Show first slide when page loads
slideImage();

