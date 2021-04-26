// Toast component

const toast = document.querySelector(".toast");
const closeToastBtn = document.querySelector(".toast__close");
const tirggerToast = document.getElementById("trigger--toast");

const showToast = () => {
    toast.classList.remove("toast--hide");
    toast.classList.add("toast--show");
}

const hideToast = () => {
    toast.classList.add("toast--hide");
    toast.classList.remove("toast--show");
};

tirggerToast.addEventListener("click", () => {
    showToast();
    setTimeout(hideToast, 5000);
});

closeToastBtn.addEventListener("click", hideToast);

// Modal component

const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal--container");
const modalTrigger = document.querySelector(".modal--trigger");
const modalDismiss = document.querySelector(".btn--dismiss");
const modalClose = document.querySelector(".modal__close");


const closeModal = () => {
    modal.style.display = "none";
    modalContainer.style.display = "none";
}


modalDismiss.addEventListener("click", closeModal);
modalClose.addEventListener("click", closeModal);

modalTrigger.addEventListener("click", () => {
    modal.style.display = "block";
    modalContainer.style.display = "block";
})

window.addEventListener("click", (event) => {
    // console.log(event);
    if (event.target === modalContainer) closeModal();
})

// Navbar component

const toggleBtn = document.getElementById("header__toggle");
const nav = document.querySelector(".nav--main");

toggleBtn.addEventListener("click", () => {
    nav.style.display = (nav.style.display === "block") ?
        "none" : "block";
})