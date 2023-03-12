//Maintanence list
const oil = document.querySelector("#oil");
const coolant = document.querySelector("#coolant");
const brake = document.querySelector("#brake");
const ps = document.querySelector("#ps");
const trans = document.querySelector("#trans");
const tiro = document.querySelector("#tiro");

const spanEl = document.querySelectorAll(".span");

//get and set stored values
oil.textContent = localStorage.getItem("oil");
coolant.textContent = localStorage.getItem("coolant");
brake.textContent = localStorage.getItem("brake");
ps.textContent = localStorage.getItem("ps");
trans.textContent = localStorage.getItem("trans");
tiro.textContent = localStorage.getItem("tiro");

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
const menuInput = document.querySelector("#maint-input");
menuInput.addEventListener("submit", (event) => {
  event.preventDefault();
  const menVal = document.querySelector("#maint-menu").value.trim();
  let miles = document.querySelector("#miles").value.trim();

  //if input value is not empty then add to maintenance list
  if (miles !== "") {
    miles = Number(miles);
  } else {
    //change alert to modal
    prompt.style.display = "block";
    promptTxt.textContent = "Please enter current mileage!";
    exitPrompt.style.display = "none";
    setTimeout(() => {
      prompt.style.display = "none";
      exitPrompt.style.display = "block";
    }, 1500);

    return;
  }
  switch (menVal) {
    case "oil":
      let nextOil = miles + oilInt;
      oil.textContent = nextOil
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("oil", oil.textContent);
      break;
    case "coolant":
      let nextCool = miles + coolInt;
      coolant.textContent = nextCool
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("coolant", coolant.textContent);
      break;
    case "brake":
      let nextBrake = miles + brakeInt;
      brake.textContent = nextBrake
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("brake", brake.textContent);
      break;
    case "ps":
      let nextPs = miles + psInt;
      ps.textContent = nextPs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("ps", ps.textContent);
      break;
    case "trans":
      let nextTrans = miles + transInt;
      trans.textContent = nextTrans
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("trans", trans.textContent);
      break;
    case "tiro":
      let nextTiro = miles + tiroInt;
      tiro.textContent = nextTiro
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      localStorage.setItem("tiro", tiro.textContent);
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
