const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');

let scrollTopPosition = 0;


// ---- header on scroll behavior ---------
document.addEventListener("scroll", () => {
  scrollTopPosition = window.scrollY;
  scrollTopPosition > 90 ? header.classList.add('onscroll') : header.classList.remove('onscroll')
});
menuBtn.addEventListener("click", () => {
  header.classList.toggle('collapsed-nav')
});


$('.carousel').carousel()