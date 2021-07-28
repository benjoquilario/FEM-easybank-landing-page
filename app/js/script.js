const btnHamburger = document.querySelector(".btn--menu");
const navbarMenu = document.querySelector(".navbar__menu");
const icon = document.querySelector(".icon");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");

  if (navbarMenu.classList.contains("active")) {
    icon.src = "./images/icon-close.svg";
    btnHamburger.setAttribute("aria-expanded", true);
    body.classList.add("no-scroll");
    overlay.classList.add("show");
  } else {
    icon.src = "./images/icon-hamburger.svg";
    btnHamburger.setAttribute("aria-expanded", false);
    body.classList.remove("no-scroll");
    overlay.classList.remove("show");
  }
});
