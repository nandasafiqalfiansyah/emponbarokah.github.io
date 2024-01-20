// fungsi tombol pemesanan
function pesan(dropDonwId) {
  let dropdown = document.getElementById(dropDonwId);
  dropdown.classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches(".dropBtn")) {
    let dropDowns = document.getElementsByClassName("dropDown");
    let i;
    for (i = 0; i < dropDowns.length; i++) {
      let openDropDown = dropDowns[i];
      if (openDropDown.classList.contains("show")) {
        openDropDown.classList.remove("show");
      }
    }
  }
};

// navbar
// const nav = document.querySelector("#nav");
// let lastScrollY = window.scrollY;

// window.addEventListener("scroll", () => {
//   if (lastScrollY < window.scrollY) {
//     nav.classList.add("navHidden");
//   } else {
//     nav.classList.remove("navHidden");
//   }

//   lastScrollY = window.scrollY;
// });

// image slider
let list = document.querySelector(".hero-slider .hero-list");
let items = document.querySelectorAll(".hero-slider .hero-list .hero-item");
let dots = document.querySelectorAll(".hero-slider .dots li");
let prev = document.getElementById("previous");
let next = document.getElementById("nexts");

let active = 0;
let lengthItmes = items.length - 1;

prev.onclick = function () {
  if (active - 1 < 0) {
    active.lengthItmes;
  } else {
    active = active - 1;
  }
  reloadSlider();
};

next.onclick = function () {
  if (active + 1 > lengthItmes) {
    active = 0;
  } else {
    active = active + 1;
  }
  reloadSlider();
};

let refreshSlider = setInterval(() => {
  next.click();
}, 5000);

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + "px";

  let lasActiveDot = document.querySelector(
    ".hero-container .hero-slider .dots li.active"
  );
  lasActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadSlider();
  });
});

// sidebar hamburger menu (toggle)
const navbar = document.querySelector(".navbar");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
