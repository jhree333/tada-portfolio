export default function updateEventbg() {
  let motion01 = gsap.timeline({});

  ScrollTrigger.create({
    animation: motion01,
    trigger: ".event_wrapper",
    start: "top top",
    end: "bottom top",
    // markers: true,
    scrub: 1,
    onLeave: () => {
      if ($("header").hasClass("on")) {
        return;
      }
      $("header").removeClass("menu_color_reversal");
      $(".hamburger").removeClass("active");
    },
    onLeaveBack: () => {
      if ($("header").hasClass("on")) {
        return;
      }
      $("header").removeClass("menu_color_reversal");
      $(".hamburger").removeClass("active");
    },
    onEnter: () => {
      if ($("header").hasClass("on")) {
        return;
      }
      $("header").addClass("menu_color_reversal");
      $(".hamburger").addClass("active");
    },
    onEnterBack: () => {
      if ($("header").hasClass("on")) {
        return;
      }
      $("header").addClass("menu_color_reversal");
      $(".hamburger").addClass("active");
    },
  });

  let motion02 = gsap.timeline({});

  ScrollTrigger.create({
    animation: motion02,
    trigger: ".event_wrapper",
    start: "top 50%",
    end: "bottom top",
    // markers: true,
    scrub: 1,
    onLeave: () => {
      $(".event_wrapper").removeClass("event_bg_on");
    },
    onLeaveBack: () => {
      $(".event_wrapper").removeClass("event_bg_on");
    },
    onEnter: () => {
      $(".event_wrapper").addClass("event_bg_on");
    },
    onEnterBack: () => {
      $(".event_wrapper").addClass("event_bg_on");
    },
  });

  const verticalSlider = (elem) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elem,
        start: "80% bottom",
        end: "80% top",
        scrub: true,
      },
    });

    tl.to(elem, {
      opacity: 0,
    });
    tl.to(elem, {
      opacity: 1,
    });
    tl.to(elem, {
      opacity: 1,
    });
    tl.to(elem, {
      opacity: 1,
    });
    tl.to(elem, {
      opacity: 0,
    });
  };

  gsap.utils.toArray(".vertical_motion li").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        verticalSlider(elem);
      },
    });
  });

  const description = document.querySelector(".desc");
  let descriptionHeight = description.getBoundingClientRect().height;

  window.onscroll = () => {
    const descriptionTop = description.getBoundingClientRect().top;

    if (descriptionTop < -(descriptionHeight - window.innerHeight)) {
      description.classList.add("background_absolute");
      description.classList.remove("background_fixed");
    } else if (descriptionTop < 0) {
      description.classList.add("background_fixed");
      description.classList.remove("background_absolute");
    } else {
      description.classList.remove("background_fixed");
    }
  };
}
