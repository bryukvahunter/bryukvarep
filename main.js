const getElementById = (id) => {
    return document.getElementById(id);
};

const ID = {
    FIRST_INPUT: getElementById('input1'),
    SECOND_INPUT: getElementById('input2'),
    EQUAL_BTN: getElementById('equalBaton'),
    SELECT_OPERATOR: getElementById('select'),
    RESULT: getElementById('result'),
};


function getResult() {
    
    let firstValue = Number(ID.FIRST_INPUT.value);
    let secondValue = Number(ID.SECOND_INPUT.value);
    
    ID.RESULT.innerHTML = '';

    switch(ID.SELECT_OPERATOR.value) {

        case 'add': 
            ID.RESULT.innerHTML = firstValue + secondValue;
            break;

        case 'subtract': 
            ID.RESULT.innerHTML = firstValue - secondValue;
            break;

        case 'multi': 
            ID.RESULT.innerHTML = firstValue * secondValue;
            break;

        case 'divis': 
            switch(firstValue) {
                case 0:
                    alert('На ноль делить нельзя');
                    break;
            }
            ID.RESULT.innerHTML = firstValue / secondValue;
            break;

        default: 
            alert('Try again');
    }
    
};

ID.EQUAL_BTN.addEventListener('click', getResult);


const body = document.querySelector('body');

function saveRes() {
    body.insertAdjacentHTML('beforeend', `<div>${ID.RESULT.innerHTML}</div>`);
}

ID.EQUAL_BTN.addEventListener('click', saveRes);


function deleteSaved(res) {
    body.removeChild(res.target);
}

body.addEventListener('click', deleteSaved);