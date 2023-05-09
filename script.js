const carousels = document.querySelectorAll('.carousel.slide');

function updateCarousel() {
  if (window.innerWidth >= 768) {
    // Mostra il carosello con quattro card quando la finestra è abbastanza ampia

    for (const carousel of carousels) {
        const inner = carousel.querySelector('.carousel-inner');
        inner.children[1].classList.remove('active');
        inner.children[0].classList.add('active');   
    }
    
  }
}

// Aggiorna il carosello quando la finestra viene ridimensionata
window.addEventListener('resize', updateCarousel);

// Aggiorna il carosello all'avvio
updateCarousel();
