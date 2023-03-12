const make = document.querySelector('#make');
const model = document.querySelector('#model');
const year = document.querySelector('#year');
const vin = document.querySelector('#vin');
const tire = document.querySelector('#tire');
const engine = document.querySelector('#engine');

//input values
const makeVal = document.querySelector('#make-val');
const modelVal = document.querySelector('#model-val');
const yearVal = document.querySelector('#year-val');
const vinVal = document.querySelector('#vin-val');
const tireVal = document.querySelector('#tire-val');
const engineVal = document.querySelector('#engine-val');

const Btn = document.querySelector('#save-edit');
const input = document.querySelectorAll('.value')

//set values from localstorage
make.textContent = localStorage.getItem('make');
model.textContent = localStorage.getItem('model');
year.textContent = localStorage.getItem('year');
vin.textContent = localStorage.getItem('VIN');
tire.textContent = localStorage.getItem('tire');
engine.textContent = localStorage.getItem('engine');

<<<<<<< HEAD
//if box is not empty save it to localstorage and reset page
=======
//if box is not empty save it to localstorage
///NEEDS REFACTORING
>>>>>>> 847353a4aa6d96a7215145277c44db6a75ae1d26
const save = () => {
    if(makeVal.value !== ''){
        localStorage.setItem('make', makeVal.value)
    } 
    if(modelVal.value !== ''){
        localStorage.setItem('model', modelVal.value)
    } 
    if(yearVal.value !== ''){
        localStorage.setItem('year', yearVal.value)
    } 
    if(vinVal.value.trim() !== ''){
        localStorage.setItem('VIN', vinVal.value)
    } 
    if(tireVal.value !== ''){
        localStorage.setItem('tire', tireVal.value)
    } 
    if(engineVal.value !== ''){
        localStorage.setItem('engine', engineVal.value)
    }
    location.reload();
}

//edit input
const edit = () => {
    for(let i = 0; i < input.length; i++){
        input[i].style.display = 'block';
        }
        Btn.textContent = 'Save'
        return
}

<<<<<<< HEAD
//edit-save button
=======

>>>>>>> 847353a4aa6d96a7215145277c44db6a75ae1d26
Btn.addEventListener('click', () => {
    if(Btn.textContent === 'Edit'){
    edit();
    }else if(Btn.textContent === 'Save'){
  save();
    }
});


