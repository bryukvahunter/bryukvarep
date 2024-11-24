
// const allClearBtn = document.getElementById('allClearButton');
// const clearBtn = document.getElementById('clearButton');

const firstInput = document.getElementById('calcFirstInput');
const secondInput = document.getElementById('calcSecondInput');
// let valFirst = firstInput.value;     // Не работают вне функции
// let valSecond = secondInput.value; 

const equalBtn = document.getElementById('equalButton');
const selectOperator = document.getElementById('calcSelect');
let result = document.getElementById('result');



function getResult() {
    
    let valFirst = +firstInput.value;
    let valSecond = +secondInput.value;
    
    // if (selectOperator.value === 'subtract') {
    //     result.innerHTML += valFirst - valSecond;
    // }

    switch(selectOperator.value) {

        case 'add': 
        result.innerHTML += valFirst + valSecond;
        break;

        case 'subtract': 
        result.innerHTML += valFirst - valSecond;
        break;

        case 'multi': 
        result.innerHTML += valFirst * valSecond;
        break;

        case 'divis': 
        result.innerHTML += valFirst / valSecond;
        break;

        default: 
        alert('Try again');
    }
    
}

equalBtn.addEventListener('click', getResult);






