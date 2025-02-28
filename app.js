"use strict";

const btnClose = document.querySelector(".closemodal");
const projectModal = document.querySelector(".projectModal");
const overlay = document.querySelector(".overlay");
const ioProject = document.querySelector(".patternedIO");

const openModal = function () {
  projectModal.classList.remove("projectModal-hide");
  overlay.classList.remove("overlay-hide");
};

const closeModal = function () {
  projectModal.classList.add("projectModal-hide");
  overlay.classList.add("overlay-hide");
};

ioProject?.addEventListener("click", openModal);
btnClose?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal); // Click outside to close

const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});
