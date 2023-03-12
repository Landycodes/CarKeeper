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
console.log(interval);
const oilInt = parseInt(interval.oil);
const coolInt = parseInt(interval.cool);
const psInt = parseInt(interval.ps);
const brakeInt = parseInt(interval.br);
const tiroInt = parseInt(interval.tiro);
const transInt = parseInt(interval.trans);

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
      oil
        .text(nextOil)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("oil", oil.text());
      break;
    case "coolant":
      let nextCool = miles + coolInt;
      coolant
        .text(nextCool)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("coolant", coolant.text());
      break;
    case "brake":
      let nextBrake = miles + brakeInt;
      brake
        .text(nextBrake)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("brake", brake.text());
      break;
    case "ps":
      let nextPs = miles + psInt;
      ps.text(nextPs)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("ps", ps.text());
      break;
    case "trans":
      let nextTrans = miles + transInt;
      trans
        .text(nextTrans)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("trans", trans.text());
      break;
    case "tiro":
      let nextTiro = miles + tiroInt;
      tiro
        .text(nextTiro)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("tiro", tiro.text());
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
//attaching Miles is buggy. only appears on refresh or adds multiple

//Maintanece intervals
//oil every 3.5k
//coolant every 16k
//brake/clutch flush 30k
//power steering 30k
//trans 45k
//tiro 7k
