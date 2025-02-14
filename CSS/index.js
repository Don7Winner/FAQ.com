$(document).ready(function () {
  $(".FAQ p").hide();

  $(".sign").attr("src", "assets/images/icon-plus.svg");
  $(".FAQ p").first().show();
  $(".sign").first().attr("src", "assets/images/icon-minus.svg");
  $(".minus").click(function () {
    let answer = $(this).next("p");
    let icon = $(this).find(".sign");

    answer.slideToggle();

    if (icon.attr("src") === "assets/images/icon-plus.svg") {
      icon.attr("src", "assets/images/icon-minus.svg");
    } else {
      icon.attr("src", "assets/images/icon-plus.svg");
    }
  });
});
