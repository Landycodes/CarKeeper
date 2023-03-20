//set initial color on tread slider text and measurment type
$("#tread").css("color", "black");
$(".measurement").text("/32 inch");

//get values from local storage
$("#FL").text(localStorage.getItem("FL-tread"));
$("#FR").text(localStorage.getItem("FR-tread"));
$("#BL").text(localStorage.getItem("BL-tread"));
$("#BR").text(localStorage.getItem("BR-tread"));

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
    //*get data for brakes from localstorage and insert it
  } else {
    $(".measurement").text("/32 inch");
    $(".slider").removeClass("slide-right");
    $(".slider").addClass("slide-left");
    $("#brake").css("color", "white");
    setTimeout(() => {
      $("#tread").css("color", "black");
    }, 500);
    $("#FL").text(localStorage.getItem("FL-tread"));
    $("#FR").text(localStorage.getItem("FR-tread"));
    $("#BL").text(localStorage.getItem("BL-tread"));
    $("#BR").text(localStorage.getItem("BR-tread"));
  }
});

$("#edit-stat").click(() => {
  if ($("#edit-stat").text() === "Edit") {
    //show edit box according to the checkbox value (brake or tread)
    if ($("#toggle").prop("checked")) {
      $(".brake-val").css("display", "block");
    } else {
      $(".tread-val").css("display", "block");
    }
    $("#edit-stat").text("Save");
  } else if ($("#edit-stat").text() === "Save") {
    // hide editbox that was opened
    if ($("#toggle").prop("checked")) {
      $(".brake-val").css("display", "none");
    } else {
      saveTreadInputs();
      $(".tread-val").css("display", "none");
    }
    $("#edit-stat").text("Edit");
  }
});

const saveTreadInputs = () => {
  //empty array for each tire
  let flTread = [];
  let frTread = [];
  let blTread = [];
  let brTread = [];

  //get every input from each tire
  let flInputs = $("#FL-tread").find("input");
  flInputs.each((i) => {
    if ($(flInputs[i]).val() !== "") {
      flTread.push($(flInputs[i]).val());
    }
  });

  let frInputs = $("#FR-tread").find("input");
  frInputs.each((i) => {
    if ($(frInputs[i]).val() !== "") {
      frTread.push($(frInputs[i]).val());
    }
  });

  let blInputs = $("#BL-tread").find("input");
  blInputs.each((i) => {
    if ($(blInputs[i]).val() !== "") {
      blTread.push($(blInputs[i]).val());
    }
  });

  let brInputs = $("#BR-tread").find("input");
  brInputs.each((i) => {
    if ($(brInputs[i]).val() !== "") {
      brTread.push($(brInputs[i]).val());
    }
  });

  //if array has any values save them to localstorage
  if (flTread.length !== 0) {
    localStorage.setItem("FL-tread", flTread.toString().replace(/,/g, "|"));
  }
  if (frTread.length !== 0) {
    localStorage.setItem("FR-tread", frTread.toString().replace(/,/g, "|"));
  }
  if (blTread.length !== 0) {
    localStorage.setItem("BL-tread", blTread.toString().replace(/,/g, "|"));
  }
  if (brTread.length !== 0) {
    localStorage.setItem("BR-tread", brTread.toString().replace(/,/g, "|"));
  }

  //set txt to what was saved to local storage
  $("#FL").text(localStorage.getItem("FL-tread"));
  $("#FR").text(localStorage.getItem("FR-tread"));
  $("#BL").text(localStorage.getItem("BL-tread"));
  $("#BR").text(localStorage.getItem("BR-tread"));
};
