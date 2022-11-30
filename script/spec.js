const make = document.querySelector('#make');
const model = document.querySelector('#model');
const year = document.querySelector('#year');
const vin = document.querySelector('#vin');
const tire = document.querySelector('#tire');
const engine = document.querySelector('#engine');

const saveBtn = document.querySelector('#save');

//set values from localstorage
make.textContent = localStorage.getItem('make');
model.textContent = localStorage.getItem('model');
year.textContent = localStorage.getItem('year');
vin.textContent = localStorage.getItem('VIN');
tire.textContent = localStorage.getItem('tire');
engine.textContent = localStorage.getItem('engine');

//add eventlistener to each box
const saveArr = [make, model, year, vin, tire, engine];
for(let i = 0; i < saveArr.length; i++) {
    saveArr[i].addEventListener('input',() => saveBtn.style.display = 'block');
}

//if box is not empty save it to localstorage
const save = () => {
    if(make.textContent !== ''){
        localStorage.setItem('make', make.textContent)
    } 
    if(model.textContent !== ''){
        localStorage.setItem('model', model.textContent)
    } 
    if(year.textContent !== ''){
        localStorage.setItem('year', year.textContent)
    } 
    if(vin.textContent.trim() !== ''){
        localStorage.setItem('VIN', vin.textContent)
    } 
    if(tire.textContent !== ''){
        localStorage.setItem('tire', tire.textContent)
    } 
    if(engine.textContent !== ''){
        localStorage.setItem('engine', engine.textContent)
    }
    location.reload();
}
saveBtn.addEventListener('click', save);