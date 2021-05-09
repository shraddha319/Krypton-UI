const toast = document.querySelector(".toast");
const closeToastBtn = document.querySelector(".toast__close");
const tirggerToast = document.getElementById("trigger--toast");

const showToast = () => {
    toast.style.display = "inline-flex";
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