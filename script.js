"use strict";
//Menu
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

//Options
const options = document.querySelectorAll(".option__check");

options.forEach((el) => {
  el.addEventListener("click", function () {
    // const currentOption = el.parentElement;
    // const wasActive = currentOption.classList.contains("active");

    // options.forEach((element) => {
    //   element.parentElement.classList.toggle("active");
    // });

    // if (!wasActive) {
    //   currentOption.classList.add("active");
    // }

    this.parentElement.classList.toggle("active");
  });
});
