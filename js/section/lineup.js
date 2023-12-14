export default function updateLineup() {
  const lineupCategory = [
    {
      type: "실시간",
      name: "NEXT",
    },
    {
      type: "실시간",
      name: "PLUS",
    },
    {
      type: "실시간",
      name: "LITE",
    },
    {
      type: "실시간",
      name: "TRIP",
    },
  ];

  const lineupVideos = document.querySelectorAll(".swiper-wrapper iframe");

  const lineupPlayers = Array.from(lineupVideos).map((video) => new Vimeo.Player(video));

  const lineupSwiper = new Swiper(".lineup-slider", {
    on: {
      init: function () {
        lineupPlayers[0].play();
      },
    },
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".lineup-slider .nav-wrapper",
      clickable: true,
      bulletClass: "bullet",
      bulletActiveClass: "vimeo-active active",
      renderBullet: function (index, className) {
        return `<li class=${className}>
          <button><span>${lineupCategory[index].type}</span>${lineupCategory[index].name}</button>
        </li>`;
      },
    },
    navigation: {
      nextEl: ".lineup-slider .next",
      prevEl: ".lineup-slider .prev",
    },
  });

  $(".bullet").click(function () {
    $(this).addClass("vimeo-active").siblings().removeClass("vimeo-active");
  });

  lineupSwiper.on("slideChange", function () {
    let idx = this.realIndex;
    lineupPlayers.forEach((element) => {
      element.unload();
    });
    lineupPlayers[idx].play();
    $(".nav_wrapper li").eq(idx).addClass("on");
  });
}
