$("#toggle").click(() => {
  if ($("#toggle").prop("checked")) {
    $("#slider").addClass("slide-right");
  } else {
    $("#slider").removeClass("slide-right");
    $("#slider").addClass("slide-left");
  }
});
