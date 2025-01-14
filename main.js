//  + функция updateInfo 
//  + проверка на нажатое сердечко
//  + проверка на нажатый ul block
//  + добавить деструктуризацию
// вставить картинку через запрос // absolutely hui znaet kak eto sdelat:)



const findForm = document.querySelector('#block-form'); 
const inputName = document.querySelector('#input-name');
const weatherBlock = document.querySelector('#block-city-info');
const underFormBlock = document.querySelector('#block-under-form');
const tempValue = document.querySelector('#temperature').textContent;
const addCityBlock = document.querySelector('#add-city');
const checkboxInput = document.querySelector('.check-input');
const checkboxSpan = document.querySelector('.check-box');
const nameCityBlock = document.querySelector('#city-name');
nameCityBlock.textContent = 'Saint Petersburg';


const cities = [];


function findCity(event) {
    event.preventDefault();
    const inputValue = inputName.value;
    getWeather(inputValue);   
    event.target.reset();
}

findForm.addEventListener('submit', findCity);


function getWeather(name) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = name;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('wtf error');
        } 
        return response.json();
    })
    .then(data => {
        const {main: {temp}, name, weather:[{icon}]} = data;
        updateInfo(Math.round(temp), name, icon);
        checkLove();
    })
    .catch (error => {
        console.error(error);
    })
}


function addCity() {
    if (this.checked) {
        const addedCities = {
            name: nameCityBlock.textContent
        };
        cities.push(addedCities);
        clean();
        render();

    } else {
        const findIndex = cities.findIndex(index => {
        return index.name === nameCityBlock.textContent;
        });
        cities.splice(findIndex, 1);
        clean();
        render();
    }
}

checkboxInput.addEventListener('change', addCity);


function createElement(text) {
    const city = document.createElement('li');
    city.classList.add('city');
    city.textContent = text;
    return city; 
}


function checkLove() {
    const findName = cities.find(city => {
        return city.name === nameCityBlock.textContent; 
    });
    
    if (findName) {
        checkboxInput.checked = true;
            return;
        } 
    checkboxInput.checked = false;
}


function render() {
    cities.forEach(item => {
            addCityBlock.appendChild(createElement(item.name));
        } 
    );
}


function clean() {
    let allCities = document.querySelectorAll('.city');
    for(let i = 0; i < allCities.length; i++) {
        allCities[i].remove();
    }
}


function getCity(event) {
    const clickName = event.target;

    if (clickName.tagName != 'LI') {
        return;
    } 
    getWeather(clickName.textContent);
}

addCityBlock.addEventListener('click', getCity)


function updateInfo(temp, name, pic) {
    document.getElementById('temperature').textContent = temp;
    document.getElementById('city-name').textContent = name;
    document.querySelector('#pic').src = `https://openweathermap.org/img/wn/${pic}@4x.png`
}





// const STATUSES = {
//     ADDED: 'Added',
//     NOT_ADDED: 'Not added',
// };

// const WARNINGS = { 
//     ADDED: 'City alrady added',
//     NO_CITY: 'There is no such city',
// }

// function createElement() {
//     const cityInfoBlock = document.createElement('ul');
//     const cityNameBlock = document.createElement('li');
//     const labelBlock = document.createElement('label');
//     const inputLoveBlock = document.createElement('input');
//     const spanLoveBlock = document.createElement('span');
//     const tempValueBlock = document.createElement('li');
//     const numberTempBlock = document.createElement('div');
//     const picTempBlock = document.createElement('div');
//     const tempInfoBlock = document.createElement('li');
//     const feelsLikeBlock = document.createElement('div');
//     const sunriseBlock = document.createElement('div');
//     const sunsetBlock = document.createElement('div');

//     cityNameBlock.classList.add('city-name');
//     labelBlock.classList.add('check');
//     inputLoveBlock.type = 'checkbox';
//     inputLoveBlock.classList.add('check-input');
//     spanLoveBlock.classList.add('check-box');
//     numberTempBlock.classList.add('temp');
//     picTempBlock.classList.add('img-block');
//     tempInfoBlock.classList.add('temp-info');
//     feelsLikeBlock.classList.add('temper-info-text');
//     sunriseBlock.classList.add('temper-info-text');
//     sunsetBlock.classList.add('temper-info-text');

//     labelBlock.appendChild(inputLoveBlock);
//     labelBlock.appendChild(spanLoveBlock);
//     tempValueBlock.appendChild(numberTempBlock);
//     tempValueBlock.appendChild(picTempBlock); 
//     tempInfoBlock.appendChild(feelsLikeBlock);
//     tempInfoBlock.appendChild(sunriseBlock);
//     tempInfoBlock.appendChild(sunsetBlock);
//     cityInfoBlock.appendChild(cityNameBlock);
//     cityInfoBlock.appendChild(labelBlock);
//     cityInfoBlock.appendChild(tempValueBlock);
//     cityInfoBlock.appendChild(tempInfoBlock);

//     return cityInfoBlock;
// }