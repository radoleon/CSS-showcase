const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active")
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(item => {
  item.addEventListener("click", () => {
    nav.classList.remove("active")
  })
});

window.addEventListener("scroll", () => {
  nav.classList.remove("active")
});