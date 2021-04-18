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