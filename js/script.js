// select html elements
const openBtn = document.querySelector(".nav-open");
const closeBtn = document.querySelector(".nav-close img");
const main = document.querySelector(".main");

openBtn.addEventListener("click", function () {
  main.classList.add("show-navbar");
});

closeBtn.addEventListener("click", function () {
  main.classList.remove("show-navbar");
});
