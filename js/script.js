// select html elements
const openBtn = document.querySelector(".nav-open");
const closeBtn = document.querySelector(".nav-close img");
const overlay = document.querySelector(".overlay");
const main = document.querySelector(".main");

openBtn.addEventListener("click", function () {
  main.classList.add("show-navbar");
});

function closeNavbar(closeBtns) {
  closeBtns.forEach(function (close) {
    close.addEventListener("click", function () {
      main.classList.remove("show-navbar");
    });
  });
}
closeNavbar([closeBtn, overlay]);
