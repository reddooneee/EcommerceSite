let currentSlide = 1;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.querySelector('.carousel-inner').style.transform = `translateX(-${100}%)`;

function showSlide(index) {
    const carouselInner = document.querySelector('.carousel-inner');

    if (index >= totalSlides - 1) {
        currentSlide = 1;
        carouselInner.style.transition = 'none';
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 0);
    } else if (index <= 0) {
        currentSlide = totalSlides - 2;
        carouselInner.style.transition = 'none';
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease';
            carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
        }, 0);
    } else {
        currentSlide = index;
        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}


setInterval(nextSlide, 5000);
