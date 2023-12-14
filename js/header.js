export default function updateHeader() {
  $(".apply button").click(function (e) {
    e.preventDefault();
    $(this).parent("li").toggleClass("active");
  });

  $(window).scroll(function () {
    let curr = $(window).scrollTop();
    let intro = $(".sc_intro").offset().top;
    if (curr >= intro) {
      $("header").addClass("fix");
    } else {
      $("header").removeClass("fix");
    }
  });

  $(".hamburger").click(function () {
    if ($("header").hasClass("menu_color_reversal")) {
      $("header").removeClass("menu_color_reversal");
    }

    if ($(this).hasClass("on")) {
      $(this).removeClass("on");
      $(".menu_wrapper").removeClass("on");
      $("body").removeClass("hidden");
      if (!$("header").hasClass("menu_color_reversal") && $(".event_wrapper").hasClass("event_bg_on")) {
        $("header").addClass("menu_color_reversal");
      }
    } else {
      $(this).addClass("on");
      $(".menu_wrapper").addClass("on");
      $("body").addClass("hidden");

      // 현재 스크롤 비교해서 하는 모션
      if (window.scrollY < 891) {
        $("html,body").animate({ scrollTop: $(window).height() }, () => {
          $(".menu_wrapper").addClass("on");
        });
      } else {
        $(".menu_wrapper").addClass("on");
      }
    }
  });
}
