
const images = document.querySelectorAll('.slideshow img');
let current = 0;

function showNextImage() {
  images[current].classList.remove('active');
  current = (current + 1) % images.length;
  images[current].classList.add('active');
}

images[current].classList.add('active');
setInterval(showNextImage, 4000); // Change image every 4 seconds
