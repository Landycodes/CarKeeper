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
  if ($("#model-val").text().trim() !== "") {
    localStorage.setItem("model", $("#model-val").text().trim());
  }
  if ($("#year-val").text().trim() !== "") {
    localStorage.setItem("year", $("#year-val").text().trim());
  }
  if ($("#vin-val").text().trim().trim() !== "") {
    localStorage.setItem("VIN", $("#vin-val").text().trim());
  }
  if ($("#tire-val").text().trim() !== "") {
    localStorage.setItem("tire", $("#tire-val").text().trim());
  }
  if ($("#engine-val").text().trim() !== "") {
    localStorage.setItem("engine", $("#engine-val").text().trim());
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
