"use strict";

const navBtn = document.querySelector("header nav .navbtn");
const navList = document.querySelector("header nav ul");
const searchBtn = document.querySelector("header .search-nav .g-search-btn");
const searchForm = document.querySelector("header .search-nav form");
let navLinks = document.querySelectorAll("header nav ul a");

// navbar active links

navLinks.forEach((links) => {
  links.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// toggle navbar button

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  if (navBtn.classList.contains("active")) {
    navList.classList.add("active");
    searchBtn.classList.remove("active");
    searchForm.classList.remove("active");
  } else {
    navList.classList.remove("active");
  }
});

// Navbar search form

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("active");
  if (searchBtn.classList.contains("active")) {
    searchForm.classList.add("active");
    navList.classList.remove("active");
    navBtn.classList.remove("active");
  } else {
    searchForm.classList.remove("active");
  }
});
