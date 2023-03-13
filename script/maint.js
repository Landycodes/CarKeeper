//Maintanence list
const oil = $("#oil");
const coolant = $("#coolant");
const brake = $("#brake");
const ps = $("#ps");
const trans = $("#trans");
const tiro = $("#tiro");

const spanEl = document.querySelectorAll(".span");

//get and set stored values
oil.text(localStorage.getItem("oil"));
coolant.text(localStorage.getItem("coolant"));
brake.text(localStorage.getItem("brake"));
ps.text(localStorage.getItem("ps"));
trans.text(localStorage.getItem("trans"));
tiro.text(localStorage.getItem("tiro"));

//get intervals from local storage
const interval = JSON.parse(localStorage.getItem("intervals"));
const oilInt = interval ? parseInt(interval.oil) : 3500;
const coolInt = interval ? parseInt(interval.cool) : 16000;
const psInt = interval ? parseInt(interval.ps) : 30000;
const brakeInt = interval ? parseInt(interval.br) : 30000;
const tiroInt = interval ? parseInt(interval.tiro) : 7000;
const transInt = interval ? parseInt(interval.trans) : 45000;

//Maintanence performed input
const menuInput = $("#maint-input");
menuInput.on("submit", (event) => {
  event.preventDefault();
  const menVal = $("#maint-menu").val().trim();
  let miles = $("#miles").val();

  //if input value is not empty then add to maintenance list
  if (miles !== "") {
    miles = Number(miles);
  } else {
    //change alert to modal
    prompt.css("display", "block");
    promptTxt.text("Please enter current mileage!");
    exitPrompt.css("display", "none");
    setTimeout(() => {
      prompt.css("display", "none");
      exitPrompt.css("display", "block");
    }, 1500);

    return;
  }
  switch (menVal) {
    case "oil":
      let nextOil = miles + oilInt;
      oil.text(nextOil).toString();
      localStorage.setItem(
        "oil",
        oil.text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      break;
    case "coolant":
      let nextCool = miles + coolInt;
      coolant.text(nextCool).toString();
      localStorage.setItem(
        "coolant",
        coolant.text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      break;
    case "brake":
      let nextBrake = miles + brakeInt;
      brake.text(nextBrake).toString();
      localStorage.setItem(
        "brake",
        brake.text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      break;
    case "ps":
      let nextPs = miles + psInt;
      ps.text(nextPs).toString();
      localStorage.setItem(
        "ps",
        ps.text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      break;
    case "trans":
      let nextTrans = miles + transInt;
      trans.text(nextTrans).toString();
      localStorage.setItem(
        "trans",
        trans.text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
      break;
    case "tiro":
      let nextTiro = miles + tiroInt;
      tiro.text(nextTiro).toString();
      localStorage.setItem(
        "tiro",
        tiro.text().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      );
  }
  location.reload();
});

//attaches miles to number if not empty
const Milestxt = () => {
  for (let i = 0; i < spanEl.length; i++) {
    if (spanEl[i].innerText !== "") {
      spanEl[i].insertAdjacentHTML("beforeend", "<small> Miles</small>");
    }
  }
};
Milestxt();

//default Maintanece intervals
//oil every 3.5k
//coolant every 16k
//brake/clutch flush 30k
//power steering 30k
//trans 45k
//tiro 7k
