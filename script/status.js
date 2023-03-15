//toggle switch for brake/tread
//timeout set to transtion length

//set initial color on tread
$("#tread").css("color", "black");
$("#toggle").click(() => {
  if ($("#toggle").prop("checked")) {
    $(".slider").removeClass("slide-left");
    $(".slider").addClass("slide-right");
    $("#tread").css("color", "white");
    setTimeout(() => {
      $("#brake").css("color", "black");
    }, 500);
  } else {
    $(".slider").removeClass("slide-right");
    $(".slider").addClass("slide-left");
    $("#brake").css("color", "white");
    setTimeout(() => {
      $("#tread").css("color", "black");
    }, 500);
  }
});
