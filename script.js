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
    navLinks.classList.remove("menu__animated", "open__menu");
    menuBtn.classList.remove("close__menu");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

//Sticky Nav

const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const navHeight = nav.getBoundingClientRect().height;

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px 0px 0px 0px`,
});

headerObserver.observe(header);

//Options
const options = document.querySelectorAll(".option__check");

options.forEach((el) => {
  el.addEventListener("click", function () {
    this.parentElement.classList.toggle("active");
  });
});

//Progressive Image Loading
const headerImg = document.querySelector(".hero");
const img = new Image();

img.addEventListener("load", function () {
  headerImg.style.backgroundImage = `url(${img.src})`;
});

img.src = "./img/header.jpg";
