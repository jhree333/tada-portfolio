export default function updateVideo() {
  $(".video").addClass("active");

  $(".btn_wrapper button").click(function (e) {
    e.preventDefault();
    $(this).siblings(".link_wrapper").toggleClass("show");
  });
}
