 //Maintanence list
 const oil = document.querySelector('#oil');
 const coolant = document.querySelector('#coolant');
 const brake = document.querySelector('#brake');
 const ps = document.querySelector('#ps');
 const trans = document.querySelector('#trans');
 const tiro = document.querySelector('#tiro');

 const spanEl = document.querySelectorAll('.span')

 //get and set stored values
 oil.textContent = localStorage.getItem('oil');
 coolant.textContent = localStorage.getItem('coolant');
 brake.textContent = localStorage.getItem('brake');
 ps.textContent = localStorage.getItem('ps');
 trans.textContent = localStorage.getItem('trans');
 tiro.textContent = localStorage.getItem('tiro');

 //Maintanence performed input
const menuInput = document.querySelector('#maint-input');
menuInput.addEventListener('submit', (event) => {
    event.preventDefault();
    const menVal = document.querySelector('#maint-menu').value.trim();
    let miles = document.querySelector('#miles').value.trim();

    //if input value is not empty then add to maintenance list
    if(miles !== '') {
        miles = Number(miles)

    } else {
        //change alert to modal
        prompt.style.display = 'block';
        promptTxt.textContent = "Please enter current mileage!";
        exitPrompt.style.display = 'none';
        setTimeout(() => {
            prompt.style.display = 'none'
            exitPrompt.style.display = 'block';           
        }, 1500);

        return
    }
    switch(menVal) {
        case 'oil':
            let oilInt = miles + 3500;
            oil.textContent = oilInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('oil', oil.textContent)
        break;
        case 'coolant':
            let coolInt = miles + 16000;
            coolant.textContent = coolInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('coolant', coolant.textContent)
        break;
        case 'brake':
            let brakeInt = miles + 30000;
            brake.textContent = brakeInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('brake', brake.textContent)
        break;
        case 'ps':
            let psInt = miles + 30000;
            ps.textContent = psInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('ps', ps.textContent)
        break;
        case 'trans':
            let transInt = miles + 45000;
            trans.textContent = transInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('trans', trans.textContent)
        break;
        case 'tiro':
            let tiroInt = miles + 7000;
            tiro.textContent = tiroInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('tiro', tiro.textContent)
    }
    location.reload();
});

//attaches miles to number if not empty
const Milestxt = () => {
    for(let i = 0; i < spanEl.length; i++) {
        if(spanEl[i].innerText !== '') {
            spanEl[i].insertAdjacentHTML('beforeend', '<small> Miles</small>')
        }
    }
}
Milestxt();
//attaching Miles is buggy. only appears on refresh or adds multiple

 //Maintanece intervals
 //oil every 3.5k
 //coolant every 16k
 //brake/clutch flush 30k
 //power steering 30k
 //trans 45k
 //tiro 7k

