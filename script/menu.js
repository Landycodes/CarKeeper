var prompt = $("#modal");
var promptTxt = $("#promptTxt");
var exitPrompt = $("#close");

const display = () => {
  prompt.css("display", "block");
  const page = prompt.data("page");
  if (page === "main") {
    promptTxt.html(`<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="./pages/specs.html"><h3>Specifications</h3></a></li>
        <li class="p-1"><a href="./pages/status.html"><h3>Part Status</h3></a></li>
        <li class="p-1"><a href="./pages/interval.html"><h3>Set Intervals</h3></a></li>
        </ul>`);
  } else if (page === "specs") {
    promptTxt.html(`<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="../index.html"><h3>Maintenance</h3></a></li>
        <li class="p-1"><a href="../pages/status.html"><h3>Part Status</h3></a></li>
        <li class="p-1"><a href="../pages/interval.html"><h3>Set Intervals</h3></a></li>
        </ul>`);
  } else if (page === "status") {
    promptTxt.html(`<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="../pages/specs.html"><h3>Specifications</h3></a></li>
        <li class="p-1"><a href="../index.html"><h3>Maintenance</h3></a></li>
        <li class="p-1"><a href="../pages/interval.html"><h3>Set Intervals</h3></a></li>
        </ul>`);
  } else if (page === "interval") {
    promptTxt.html(`<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="../pages/specs.html"><h3>Specifications</h3></a></li>
        <li class="p-1"><a href="../pages/status.html"><h3>Part Status</h3></a></li>
        <li class="p-1"><a href="../index.html"><h3>Maintenance</h3></a></li>
        </ul>`);
  }
  exitPrompt.click(() => {
    prompt.css("display", "none");
  });
};
let menuBtn = $("#menu").click(display);
