const Btn = $("#save-edit");
const input = document.querySelectorAll(".value");

//set values from localstorage
$("#make").text(localStorage.getItem("make"));
$("#model").text(localStorage.getItem("model"));
$("#year").text(localStorage.getItem("year"));
$("#vin").text(localStorage.getItem("VIN"));
$("#tire").text(localStorage.getItem("tire"));
$("#engine").text(localStorage.getItem("engine"));

//if box is not empty save it to localstorage and reset page
const save = () => {
  if ($("#make-val").val().trim() !== "") {
    localStorage.setItem("make", $("#make-val").val().trim());
  }
  if ($("#model-val").val().trim() !== "") {
    localStorage.setItem("model", $("#model-val").val().trim());
  }
  if ($("#year-val").val().trim() !== "") {
    localStorage.setItem("year", $("#year-val").val().trim());
  }
  if ($("#vin-val").val().trim().trim() !== "") {
    localStorage.setItem("VIN", $("#vin-val").val().trim());
  }
  if ($("#tire-val").val().trim() !== "") {
    localStorage.setItem("tire", $("#tire-val").val().trim());
  }
  if ($("#engine-val").val().trim() !== "") {
    localStorage.setItem("engine", $("#engine-val").val().trim());
  }
  location.reload();
};

//edit input
const edit = () => {
  for (let i = 0; i < input.length; i++) {
    input[i].style.display = "block";
  }
  Btn.text("Save");
  return;
};

//edit-save button
Btn.click(() => {
  if (Btn.text() === "Edit") {
    edit();
  } else if (Btn.text() === "Save") {
    save();
  }
});
