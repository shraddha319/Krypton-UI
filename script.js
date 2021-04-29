window.onload = function () {
  toastShowHide();
  modalInvoke();
  navbarMobile();
  carouselSlide();
}

// Toast component

function toastShowHide() {
  const toast = document.querySelector(".toast");
  const closeToastBtn = document.querySelector(".toast__close");
  const triggerToast = document.getElementById("trigger--toast");

  const showToast = () => {
    toast.classList.remove("toast--hide");
    toast.classList.add("toast--show");
  };

  const hideToast = () => {
    toast.classList.add("toast--hide");
    toast.classList.remove("toast--show");
  };

  try {
    triggerToast.addEventListener("click", () => {
      showToast();
      setTimeout(hideToast, 5000);
    });

    closeToastBtn.addEventListener("click", hideToast);
  } catch (err) {}

}

// Modal component

function modalInvoke() {
  const modal = document.querySelector(".modal");
  const modalContainer = document.querySelector(".modal--container");
  const modalTrigger = document.querySelector(".modal--trigger");
  const modalDismiss = document.querySelector(".btn--dismiss");
  const modalClose = document.querySelector(".modal__close");

  const closeModal = () => {
    modal.style.display = "none";
    modalContainer.style.display = "none";
  };

  try {
    modalDismiss.addEventListener("click", closeModal);
    modalClose.addEventListener("click", closeModal);

    modalTrigger.addEventListener("click", () => {
      modal.style.display = "block";
      modalContainer.style.display = "block";
    });

    window.addEventListener("click", (event) => {
      // console.log(event);
      if (event.target === modalContainer) closeModal();
    });
  } catch (err) {}

}

// Navbar component

function navbarMobile() {
  const toggleBtn = document.getElementById("header__toggle");
  const nav = document.querySelector(".nav--main");

  try {
    toggleBtn.addEventListener("click", () => {
      nav.style.display = nav.style.display === "block" ? "none" : "block";
    });
  } catch (err) {}

}

// Carousel component

function carouselSlide() {
  const track = document.querySelector(".carousel__track");
  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel__button--right");
  const prevButton = document.querySelector(".carousel__button--left");

  const slideWidth = slides[0].clientWidth;

  //arrange the slides next to each other
  function setSlidePosition(slide, index) {
    slide.style.left = `${slideWidth * index}px`;
  }

  slides.forEach(setSlidePosition);

  function hideShowButtons() {
    const currentSlide = track.querySelector(".carousel__slide--active");
    currentSlideIndex = slides.findIndex((slide) => slide === currentSlide);
    if (currentSlideIndex === slides.length - 1)
      nextButton.classList.add("carousel__button--hidden");
    else nextButton.classList.remove("carousel__button--hidden");

    if (currentSlideIndex === 0)
      prevButton.classList.add("carousel__button--hidden");
    else prevButton.classList.remove("carousel__button--hidden");
  }

  try {
    nextButton.addEventListener("click", (event) => {
      const currentSlide = track.querySelector(".carousel__slide--active");
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = nextSlide.style.left;

      //move to next slide by sliding track
      track.style.transform = `translateX(-${amountToMove})`;
      currentSlide.classList.remove("carousel__slide--active");
      nextSlide.classList.add("carousel__slide--active");

      hideShowButtons();
    });

    prevButton.addEventListener("click", (event) => {
      const currentSlide = track.querySelector(".carousel__slide--active");
      const prevSlide = currentSlide.previousElementSibling;
      const amountToMove = prevSlide.style.left;

      track.style.transform = `translateX(-${amountToMove})`;
      currentSlide.classList.remove("carousel__slide--active");
      prevSlide.classList.add("carousel__slide--active");

      hideShowButtons();
    });
  } catch (err) {}

  //when I click left, move to prev slide
  //when I click right, move to next slide
  //when I click nav indicator move to that slide
}