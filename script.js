 //Maintanence list
 const oil = document.querySelector('#oil');
 const coolant = document.querySelector('#coolant');
 const brake = document.querySelector('#brake');
 const ps = document.querySelector('#ps');
 const trans = document.querySelector('#trans');
 const tiro = document.querySelector('#tiro');

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
    const menVal = document.querySelector('#maint-menu').value;
    let miles = document.querySelector('#miles').value;
    miles = Number(miles)
    switch(menVal) {
        case 'oil':
            oil.textContent = miles + 3500;
            localStorage.setItem('oil', oil.textContent.toString())
        break;
        case 'coolant':
            coolant.textContent = miles + 16000;
            localStorage.setItem('coolant', coolant.textContent.toString())
        break;
        case 'brake':
                brake.textContent = miles + 30000;
                localStorage.setItem('brake', brake.textContent.toString())
        break;
        case 'ps':
            ps.textContent = miles + 30000;
            localStorage.setItem('ps', ps.textContent.toString())
        break;
        case 'trans':
            trans.textContent = miles + 45000;
            localStorage.setItem('trans', trans.textContent.toString())
        break;
        case 'tiro':
            tiro.textContent = miles + 7000;
            localStorage.setItem('tiro', tiro.textContent.toString())
    }
});

 //Maintanece intervals
 //oil every 3.5k
 //coolant every 16k
 //brake/clutch flush 30k
 //power steering 30k
 //trans 45k
 //tiro 7k

