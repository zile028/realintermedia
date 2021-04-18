var social = document.querySelector(".social");
var menuBtn = document.querySelector(".btnMenu > i");
var menu = document.querySelector(".btnMenu > ul");
var menuItem = document.querySelectorAll(".btnMenu > ul li");

window.addEventListener("scroll", () => {
  console.log(window.scrollY > 0 || window.innerWidth < 767);
  if (window.scrollY > 0 && window.innerWidth < 767) {
    social.className = "social hide";
  } else {
    social.className = "social";
  }
});

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

menuItem.forEach((el) => {
  el.addEventListener("click", () => {
    menu.className = "";
  });
});
