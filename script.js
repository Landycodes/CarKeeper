 //Maintanence list
 const oil = document.querySelector('#oil');
 const coolant = document.querySelector('#coolant');
 const brake = document.querySelector('#brake');
 const ps = document.querySelector('#ps');
 const trans = document.querySelector('#trans');
 const tiro = document.querySelector('#tiro');

 const spanEl = document.querySelectorAll('span')

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
        alert('please enter current mileage')
        return
    }
    switch(menVal) {
        case 'oil':
            let oilInt = miles + 3500
            oil.textContent = oilInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            localStorage.setItem('oil', oil.textContent)
        break;
        case 'coolant':
            let coolInt = miles + 16000
            coolant.textContent = coolInt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

//attaches miles to number if not empty
const Milestxt = () => {
    for(let i = 0; i < spanEl.length; i++) {
        if(spanEl[i].innerText !== '' && spanEl[i].innerText !== 'Miles') {
            spanEl[i].insertAdjacentHTML('afterend', '<small> Miles</small>')
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

