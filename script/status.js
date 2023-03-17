//set initial color on tread slider text
$("#tread").css("color", "black");
//hide input box on page load
$(".stat-val").css("display", "none");

//toggle switch for brake/tread
//timeout set to transtion length
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

$("#edit-stat").click(() => {
  $(".stat-val").css("display", "block");
  $("#edit-stat").text("Save");
});
