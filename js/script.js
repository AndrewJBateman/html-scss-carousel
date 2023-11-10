const buttons = document.querySelectorAll("[data-carousel-btn]");
const dots = document.querySelectorAll("[data-carousel-dot]");

const moveSlide = (offset) => {
  const slidesContainer = document.querySelector("[data-carousel-slides]");
  if (!slidesContainer) return;
  const slides = slidesContainer.querySelectorAll("[data-carousel-slide]");

  let activeSlide = slidesContainer.querySelector("[data-active]");
  if (!activeSlide) return;
  let nextIndex = [...slides].indexOf(activeSlide) + offset;

  if (nextIndex < 0) nextIndex = slides.length - 1;
  if (nextIndex >= slides.length) nextIndex = 0;

  if (slides[nextIndex]) {
    slides[nextIndex].dataset.active = true;
  }

  if (activeSlide) {
    delete activeSlide.dataset.active;
  }

  moveDot(nextIndex);
};

const moveDot = (index) => {
  if (!dots || !dots.length) return;
  dots.forEach((dot) => {
    if (dot) {
      delete dot.dataset.active;
    }
  });

  if (dots[index]) {
    dots[index].dataset.active = true;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    moveSlide(offset);
  });
});

setInterval(() => {
  moveSlide(1);
}, 4500);
