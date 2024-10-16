// let temperature = +prompt('Какая температура?','');

// if (temperature < 0 && temperature > -10) {
//     alert('{Холодновато}');
// } else if (temperature <= -10 && temperature >= -30) {
//     alert('Мёрзнет жопа');
// } else if (temperature <= -31 && temperature >= -100000000) {
//     alert('Парень, ты в Норильске?!');
// } else if (temperature >= 0 && temperature <= 5) {
//     alert('Оттепель...');
// } else if (temperature >= 5 && temperature <= 20) {
//     alert('Запахло весной!');
// } else {
//     alert('Потные подмышки');
// }





// let cash = prompt('Введите сумму денег', '');

// if (cash > 1000 && cash < 5000) {
//     alert(cash - (cash * 0.05));
// } else if (cash > 5000) {
//     alert(cash - (cash * 0.1));
// }





// let age = prompt('Введите возраст', '');

// let young = age < 18 && age > 0;
// let adult = age >= 18 && age <= 65;
// let old = age > 65;

// if (young) {
//     alert('Зелен');
// } else if (adult) {
//     alert('Созрел маленький');
// } else if(old) {
//     alert('Переспелый');
// } else if (young == '' || young == null) {
//     alert('Отменено');
// }





// let hour = prompt('Который час?', '');

// if (hour >= 9 && hour <= 18) {
//     alert('The store is open ');
// } else {
//     alert('Closed');
// }





let result = prompt('Результат теста', '');

if (result >= 90 && result <= 100) {
    alert('Отлично');
} else if (result >= 70 && result <= 89) {
    alert('Хорошо');
} else if (result >= 50 && result <= 69) {
    alert('Удовлетворительно');
} else if (result > 0 && result <= 49 ) {
    alert('Неудачно');
}