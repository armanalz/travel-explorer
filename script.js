"use strict";
const menuBtn = document.querySelector(".menu__btn");
const navLinks = document.querySelector(".header__nav-elements");

menuBtn.addEventListener("click", function () {
  navLinks.classList.add("menu__animated");
  const isOpen = navLinks.classList.toggle("open__menu");

  this.classList.toggle("close__menu");
  this.setAttribute("aria-expanded", isOpen);
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 720) {
    navLinks.classList.remove("menu__animated");
  }
});
