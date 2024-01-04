const containerSlideSoluctions = document.querySelector(".container_slide");
const containerSlideDepositions = document.querySelector(".slide_testimonial");
const slideDepositions = document.querySelectorAll(
  ".slide_testimonial .testimonial_item"
);
const slideSoluctios = document.querySelectorAll(".container_slide .soluction");
const prevBtnSoluctions = document.querySelector(".btn-prev");
const nextBtnSoluctions = document.querySelector(".btn-next");
const prevBtnTestimonial = document.querySelector(".btn_prev_testimonial");
const NextBtnTestimonial = document.querySelector(".btn_next_testimonial");
const itemWidthSoluctions = 324;
const itemWidthDepositions = 472;
const totalItemsBoxSoluctions = slideSoluctios.length;
const totalItemsBoxDepositions = slideDepositions.length;
let current_slide = 0;
function updateSlidePositionSoluctions() {
  if (current_slide <= 5) {
    const newPosition = -current_slide * itemWidthSoluctions;
    containerSlideSoluctions.style.transform = `translateX(${newPosition}px)`;
  }
}
function updateSlidePositionDepositions() {
  if (current_slide <= 3) {
    const newPosition = -current_slide * itemWidthDepositions;
    containerSlideDepositions.style.transform = `translateX(${newPosition}px)`;
  }
}
function handlePrevClick() {
  if (current_slide > 0) {
    current_slide--;
    updateSlidePositionSoluctions();
    updateSlidePositionDepositions();
  }
}

function handleNextClick() {
  if (
    current_slide < totalItemsBoxSoluctions - 1 ||
    current_slide < totalItemsBoxDepositions - 1
  ) {
    current_slide++;
    updateSlidePositionSoluctions();
    updateSlidePositionDepositions();
  }
}

prevBtnSoluctions.addEventListener("click", handlePrevClick);
nextBtnSoluctions.addEventListener("click", handleNextClick);
prevBtnTestimonial.addEventListener("click", handlePrevClick);
NextBtnTestimonial.addEventListener("click", handleNextClick);

function toggleMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("active");
}
