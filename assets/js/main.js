//Current year - copyright
document.querySelector(".current__year").textContent = new Date().getFullYear();

//Responsive menu
const nav = document.querySelector(".navbar");
const btnOpenMenu = document.querySelector(".btn__responsive__menu");
const btnCloseMenu = document.querySelector(".btn__close__responsive__menu");

btnOpenMenu.addEventListener("click", () => {
    nav.classList.add("visible");
});

btnCloseMenu.addEventListener("click", () => {
    nav.classList.remove("visible");
});