// Ativa e desativa o navbar
const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
    goTop.classList.remove("show-top");
  });
}

// Remover o navbar ao clicar no link
const links = document.querySelectorAll("nav ul li a, .go-top a");

for (const link of links) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    nav.classList.remove("show");
    // Smooth
    scrollSmooth(link);
  });
}

//Sombra no scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// Slide
const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination"
  },
  mousewheel: true,
  keyboard: true,
  loop: true
});

// Scroll Reveal
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #menu .text, #menu .cards,
  #testimonials .text, #testimonials .testimonials,
  #contact .text, #contact .links,
  #footer .text, #footer .social
  `,
  { interval: 200 }
);

// Scroll Behavior
function scrollSmooth(link) {
  const sectionId = link.getAttribute("href");
  document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Go to top
const goTop = document.querySelector(".go-top");
const home = document.querySelector("#home");
const homeHight = home.offsetHeight;
const show = document.querySelector("nav.show");

window.addEventListener("scroll", function () {
  if (this.window.scrollY >= homeHight) {
    goTop.classList.add("show-top");
  } else {
    goTop.classList.remove("show-top");
  }
});
