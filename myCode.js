function Showtable() {
  document.getElementById("promotion-table").style.display = "block";
}
const slides = document.querySelectorAll(".item");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;
function showSlide(n) {
  if (n >= slides.length) currentSlide = 0;
  else if (n < 0) currentSlide = slides.length - 1;
  else currentSlide = n;
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");

  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicators[currentSlide].classList.add("active");
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

document
  .getElementById("prevBtn")
  .addEventListener("click", () => changeSlide(-1));
document
  .getElementById("nextBtn")
  .addEventListener("click", () => changeSlide(1));

indicators.forEach((indicator) => {
  indicator.addEventListener("click", () =>
    showSlide(Number(indicator.dataset.slideTo)),
  );
});
