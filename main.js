// const allClearBtn = document.getElementById('allClearButton');
// const clearBtn = document.getElementById('clearButton');
// можно добавить функцию получения по id + сделать пространство имен

const getElementById = (id) => {
  return document.getElementById(id);
};

const firstInput = getElementById("calcFirstInput");
const secondInput = getElementById("calcSecondInput");
// let valFirst = firstInput.value;     // Не работают вне функции
// let valSecond = secondInput.value;

const equalBtn = getElementById("equalButton");
const selectOperator = getElementById("calcSelect");
let result = getElementById("result");

function getResult() {
  // Number()

  let valFirst = Number(firstInput.value);
  let valSecond = Number(secondInput.value);

  // if (selectOperator.value === 'subtract') {
  //     result.innerHTML += valFirst - valSecond;
  // }

  // очищаем innerHTML
  result.innerHTML = "";

  switch (selectOperator.value) {
    case "add":
      result.innerHTML = valFirst + valSecond;
      break;

    case "subtract":
      result.innerHTML = valFirst - valSecond;
      break;

    case "multi":
      result.innerHTML = valFirst * valSecond;
      break;
    // проверка на 0
    case "divis":
      result.innerHTML = valFirst / valSecond;
      break;

    default:
      alert("Try again");
  }
}

equalBtn.addEventListener("click", getResult);
