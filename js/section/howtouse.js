export default function updateHowtouse() {
  new Swiper(".howtouse-slider", {
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    allowTouchMove: false,
    speed: 700,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
