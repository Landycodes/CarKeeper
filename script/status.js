//set initial color on tread slider text and measurment type
$("#tread").css("color", "black");
$(".measurement").text("/32 inch");

//hide input box on page load
// $(".tread-val").css("display", "none");

//toggle switch for brake/tread
//timeout set to transtion length
$("#toggle").click(() => {
  //reset edit/input on toggle
  $(".tread-val").css("display", "none");
  $("#edit-stat").text("Edit");

  //checked = brake stats, else = tread stats
  if ($("#toggle").prop("checked")) {
    $(".measurement").text("mm");
    $(".slider").removeClass("slide-left");
    $(".slider").addClass("slide-right");
    $("#tread").css("color", "white");
    setTimeout(() => {
      $("#brake").css("color", "black");
    }, 500);
  } else {
    $(".measurement").text("/32 inch");
    $(".slider").removeClass("slide-right");
    $(".slider").addClass("slide-left");
    $("#brake").css("color", "white");
    setTimeout(() => {
      $("#tread").css("color", "black");
    }, 500);
  }
});

$("#edit-stat").click(() => {
  if ($("#edit-stat").text() === "Edit") {
    if ($("#toggle").prop("checked")) {
      $(".brake-val").css("display", "block");
    } else {
      $(".tread-val").css("display", "block");
    }
    $("#edit-stat").text("Save");
  } else if ($("#edit-stat").text() === "Save") {
    //if values arent empty save them to local storage
    if ($("#toggle").prop("checked")) {
      $(".brake-val").css("display", "none");
    } else {
      $(".tread-val").css("display", "none");
    }
    $("#edit-stat").text("Edit");
  }
});
