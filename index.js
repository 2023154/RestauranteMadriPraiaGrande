const slides = document.querySelectorAll('.slide-image');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
let index = 0;

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === i);
    });
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;
setInterval(nextSlide, 5000); // Slide muda sozinho a cada 5 segundos