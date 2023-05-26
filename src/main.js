const header = document.querySelector('.header');

let scrollTopPosition = 0;


// ---- header on scroll behavior ---------
document.addEventListener("scroll", () => {
  scrollTopPosition = window.scrollY;
  scrollTopPosition > 90 ? header.classList.add('onscroll') : header.classList.remove('onscroll')
});


$('.carousel').carousel()