const images = document.querySelectorAll('.carousel-image');
let current = 0;

// Función: avanzar automáticamente
function nextImage() {
  // Quitar la clase 'exit' de todas las imágenes
  images.forEach(img => img.classList.remove('exit'));

  // La imagen actual se oculta
  images[current].classList.remove('active');
  images[current].classList.add('exit');

  // Pasamos a la siguiente imagen (ciclo infinito con %)
  current = (current + 1) % images.length;

  // Activamos la nueva imagen
  images[current].classList.add('active');
}

// Cambio automático cada 4 segundos
setInterval(nextImage, 4000);
