
const carousel = document.querySelector('.carousel-imagens');
let index = 0;

function moveCarousel() {
index++;
const images = document.querySelectorAll('.carousel-imagens img');
if (index >= images.length) {
    index = 0;
}
  carousel.style.transform = `translateX(-${index *  100}% )`;
}

setInterval(moveCarousel, 3000); 

