const swiper = new Swiper(".teamSwiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  longSwipes: false,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
