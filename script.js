"use strict";

let btns = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let closeModal = document.querySelector(".close-modal");

let closedFun = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  // modal.style.display = 'none';
};

let openFun = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // modal.style.display = 'block';
};
btns.forEach((btn) => btn.addEventListener("click", openFun));

closeModal.addEventListener("click", closedFun);
overlay.addEventListener("click", closedFun);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hidden")) {
    closedFun();
  }
});
