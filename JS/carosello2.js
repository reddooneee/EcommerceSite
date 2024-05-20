let currentSlide2 = 0;
let isTransitioning2 = false;

function showSlide2(index) {
    const slides2 = document.querySelectorAll('.carousel-item2');
    const totalSlides2 = slides2.length;

    if (isTransitioning2) {
        document.querySelector('.carousel-inner2').style.transition = 'none';
        isTransitioning2 = false;
    } else {
        document.querySelector('.carousel-inner2').style.transition = 'transform 0.5s ease';
    }

    if (index >= totalSlides2) {
        currentSlide2 = 0;
        isTransitioning2 = true;
    } else if (index < 0) {
        currentSlide2 = totalSlides2 - 1;
        isTransitioning2 = true;
    } else {
        currentSlide2 = index;
    }

    const offset2 = -currentSlide2 * 100;
    document.querySelector('.carousel-inner2').style.transform = `translateX(${offset2}%)`;

    if (isTransitioning2) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.querySelector('.carousel-inner2').style.transition = 'transform 0.5s ease';
                if (index >= totalSlides2 || index < 0) {
                    const offset2 = -currentSlide2 * 100;
                    document.querySelector('.carousel-inner2').style.transform = `translateX(${offset2}%)`;
                }
            });
        });
    }
}

function nextSlide2() {
    showSlide2(currentSlide2 + 1);
}

function prevSlide2() {
    showSlide2(currentSlide2 - 1);
}

// Autoplay
setInterval(nextSlide2, 5000); // Cambia immagine ogni 5 secondi
