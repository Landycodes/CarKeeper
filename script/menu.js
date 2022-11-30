var prompt = document.getElementById('modal');
var promptTxt = document.getElementById('promptTxt');
var exitPrompt = document.getElementById('close');


const display = () => {
    prompt.style.display = 'block';
    if(prompt.dataset.page === 'main'){
        promptTxt.innerHTML = `<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="./pages/specs.html"><h3>Specifications</h3></a></li>
        <li class="p-1"><a href="./pages/status.html"><h3>Part Status</h3></a></li>
        <li class="p-1"><a href="./pages/interval.html"><h3>Set Intervals</h3></a></li>
        </ul>`
    } else if(prompt.dataset.page === 'specs'){
        promptTxt.innerHTML = `<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="../index.html"><h3>Maintenance</h3></a></li>
        <li class="p-1"><a href="../pages/status.html"><h3>Part Status</h3></a></li>
        <li class="p-1"><a href="../pages/interval.html"><h3>Set Intervals</h3></a></li>
        </ul>`
    } else if(prompt.dataset.page === 'status'){
        promptTxt.innerHTML = `<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="../pages/specs.html"><h3>Specifications</h3></a></li>
        <li class="p-1"><a href="../index.html"><h3>Maintenance</h3></a></li>
        <li class="p-1"><a href="../pages/interval.html"><h3>Set Intervals</h3></a></li>
        </ul>`    
    } else if(prompt.dataset.page === 'interval'){
        promptTxt.innerHTML = `<h2 class="text-center font-weight-bold">MENU</h2> <ul class="text-center font-weight-bold list-unstyled">
        <li class="p-1"><a href="../pages/specs.html"><h3>Specifications</h3></a></li>
        <li class="p-1"><a href="../pages/status.html"><h3>Part Status</h3></a></li>
        <li class="p-1"><a href="../index.html"><h3>Maintenance</h3></a></li>
        </ul>`

    }
    exitPrompt.addEventListener('click', () => {
        prompt.style.display = 'none';
    })
}
let menuBtn = document.getElementById('menu').addEventListener('click', display);
