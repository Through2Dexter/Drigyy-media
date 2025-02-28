"use strict";
const btnClose = document.querySelector(".closemodal");
const projectModal = document.querySelector(".projectModal");
const overlay = document.querySelector(".overlay");
const ioProject = document.querySelector(".patternedIO");
const overlayHide = document.querySelector(".overlay-hide");

const openModal = function () {
  overlayHide.classList.add("overlay");
  console.log("happy");
};
ioProject.addEventListener("click", openModal);

const closeModal = function () {
  projectModal.classList.add("projectModal-hide");
  overlay.classList.add("overlay-hide");
  console.log("dexter");
};
btnClose.addEventListener("click", closeModal);

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});
