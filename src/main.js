const header = document.querySelector('.header');
let scrollTopPosition = 0;

// ---- header on scroll behavior ---------
document.addEventListener("scroll", () => {
  scrollTopPosition = window.scrollY;
  scrollTopPosition > 90 ? header.classList.add('onscroll') : header.classList.remove('onscroll')
});

const owl = $('.owl-carousel');

owl.owlCarousel({
  items: 5,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  nav: true,
  rewindNav: true,
  navText: [$('.control-btn.prev'), $('.control-btn.next')],
  dots: false,
  responsive: {
    0: {
      items: 2
    },
    900: {
      items: 3
    },
    1200: {
      item: 5
    }
  }
})
owl.trigger('play.owl.autoplay', [3000])


