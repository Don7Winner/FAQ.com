// THE STARTING OF MY CODE
$(".sign--1").on("click", function () {
  $(".toggle-1").toggle();
});
document.querySelector(".sign--1").addEventListener("click", function () {
  document
    .querySelector(".sign--1")
    .setAttribute("src", "assets/images/icon-plus.svg");
  document.querySelector(".sign--1").addEventListener("click", function () {
    document
      .querySelector(".sign--1")
      .setAttribute("src", "assets/images/icon-minus.svg");
    document.querySelector(".sign--1").addEventListener("click", function () {
      document
        .querySelector(".sign--1")
        .setAttribute("src", "assets/images/icon-plus.svg");
      document.querySelector(".sign--1").addEventListener("click", function () {
        document
          .querySelector(".sign--1")
          .setAttribute("src", "assets/images/icon-minus.svg");
        document
          .querySelector(".sign--1")
          .addEventListener("click", function () {
            document
              .querySelector(".sign--1")
              .setAttribute("src", "assets/images/icon-plus.svg");
          });
      });
    });
  });
});

// THE STARTING OF THE MINU PART
$(".toggle-2").hide();
$(".sign--2").on("click", function () {
  $(".toggle-2").toggle();
});

$(".toggle--3").hide();
$(".sign--3").on("click", function () {
  $(".toggle--3").toggle();
});

$(".toggle--4").hide();
$(".sign--4").on("click", function () {
  $(".toggle--4").toggle();
});
