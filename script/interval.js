const oilInt = $("#oil-int");
const coolInt = $("#coolant-int");
const psInt = $("#ps-int");
const brInt = $("#brake-int");
const tiroInt = $("#tiro-int");
const transInt = $("#trans-int");

//all input fields
const intField = document.querySelectorAll(".interval");

//hide save button until input value is changed
const saveBtn = $("#save-int").css("display", "none");

//set default values
oilInt.val(3500);
coolInt.val(16000);
psInt.val(30000);
brInt.val(30000);
tiroInt.val(7000);
transInt.val(45000);

//if intervals have been changed save them as current input values
if (localStorage.getItem("intervals")) {
  const int = JSON.parse(localStorage.getItem("intervals"));
  oilInt.val(parseInt(int.oil));
  coolInt.val(parseInt(int.cool));
  psInt.val(parseInt(int.ps));
  brInt.val(parseInt(int.br));
  tiroInt.val(parseInt(int.tiro));
  transInt.val(parseInt(int.trans));
} else {
  const intervals = {
    oil: oilInt.val(),
    cool: coolInt.val(),
    ps: psInt.val(),
    br: brInt.val(),
    tiro: tiroInt.val(),
    trans: transInt.val(),
  };
  console.log(intervals);
  localStorage.setItem("intervals", JSON.stringify(intervals));
}

//if input value changes, display save button
for (let i = 0; i < intField.length; i++) {
  intField[i].addEventListener("input", () => {
    saveBtn.css("display", "block");
  });
}

//when save button is clicked save input values as an object in localstorage
//aswell as prompt user that inputs have been saved
saveBtn.on("click", () => {
  console.log(oilInt.val());
  const intervals = {
    oil: oilInt.val(),
    cool: coolInt.val(),
    ps: psInt.val(),
    br: brInt.val(),
    tiro: tiroInt.val(),
    trans: transInt.val(),
  };
  localStorage.setItem("intervals", JSON.stringify(intervals));

  prompt.css("display", "block");
  promptTxt.text("Intervals have been updated!");
  exitPrompt.css("display", "none");
  setTimeout(() => {
    prompt.css("display", "none");
    exitPrompt.css("display", "block");
    saveBtn.css("display", "none");
  }, 1500);

  return;
});

//error occurs in maint.js if localstorage has not been set
