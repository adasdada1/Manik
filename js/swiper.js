const swiper = new Swiper(".swiper", {
  // Optional parameters
  effect: "cards",
  grabCursor: true,
  direction: "horizontal",
  loop: true,
  spaceBetween: 60,
  speed: 1000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  // },
});
