$(document).ready(function () {
  $(".arrow").click(function () {
    console.log("clicked");
    var height = $(document).height();
    $("html, body").animate(
      {
        scrollTop: height,
      },
      700
    );

    return false;
  });
});
