let index = 0;

const slides = document.getElementById("slides");
const total = document.querySelectorAll(".slide").length;

const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

function mover(direccion) {
    index = (index + direccion + total) % total;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

if (btnPrev && btnNext) {
    btnPrev.addEventListener("click", () => mover(-1));
    btnNext.addEventListener("click", () => mover(1));
}

setInterval(() => mover(1), 3000);