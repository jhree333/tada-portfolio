# :pushpin: 타다

> 타다 홈페이지 코드를 분석하여 올바른 시멘틱 공부한 프로젝트 (개인 프로젝트)
>
> https://jhree333.github.io/tada-portfolio/

</br>

## 1. 제작 기간

- 3일
- 개인 프로젝트

</br>

## 2. 사용 기술

- 프런트엔드: HTML, CSS, SCSS, JavaScript
- 라이브러리 및 프레임워크: Swiper (슬라이더 구현), GSAP (애니메이션 효과)
- 디자인: 타다 홈페이지 자체 디자인

</br>

## 3. 인터렉티브 기능

- 슬라이더와 애니메이션 효과를 통해 사용자의 상호작용을 유도하고,
  보다 생동감 있는 웹사이트 경험을 제공합니다.

<details>
<summary><b>인터렉션 기능 설명 펼치기</b></summary>
<div markdown="1">

### 3.1 해당 슬라이드에 도착 시 자동 재생 및 슬라이드 게이지

![](./images/markdown/animate1.gif)

```jsexport default function updateLineup() {
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
    lineupPlayers.forEach((element, index) => {
      if (index === idx) {
        element
          .play()
          .then(function () {
            // 재생이 성공적으로 시작됨
            $(".nav_wrapper li").eq(idx).addClass("on");
          })
          .catch(function (error) {
            console.error("재생 중 오류:", error);
          });
      } else {
        element
          .pause()
          .then(function () {
            // 일시 정지가 성공적으로 수행됨
          })
          .catch(function (error) {
            console.error("일시 정지 중 오류:", error);
          });
      }
    });
  });
}

```

### 3.2 마우스 스크롤시 배경색 변하는 효과

![](./images/markdown/animate2.gif)

```js
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
}
```

### 3.2. 마우스 스크롤시 고정되는 효과

![](./images/markdown/animate3.gif)

```js
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
```

### 3.3 스와이프가 자동으로 진행되는 효과

![](./images/markdown/animate4.gif)

```js
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
```

</div>
</details>

</br>
