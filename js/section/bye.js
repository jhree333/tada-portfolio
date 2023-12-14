export default function updateBye() {
  const bye = gsap.timeline({});

  ScrollTrigger.create({
    animation: bye,
    trigger: ".bye h2",
    start: "top 80%",
    end: "bottom top",
    // markers: true,
    scrub: 1,
    onEnter: () => {
      $(".bye h2").addClass("active");
    },
  });
}
