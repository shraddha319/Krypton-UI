const toggleBtn = document.getElementById("header__toggle");
const nav = document.querySelector(".nav--main");

toggleBtn.addEventListener("click", () => {
    nav.style.display = (nav.style.display === "block") ?
        "none" : "block";
})