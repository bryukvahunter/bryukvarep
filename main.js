// можно добавить запись в localStorage

const findForm = document.querySelector("#block-form");
const inputName = document.querySelector("#input-name");
const weatherBlock = document.querySelector("#block-city-info");
const underFormBlock = document.querySelector("#block-under-form");
const tempValue = document.querySelector("#temperature").textContent;
const addCityBlock = document.querySelector("#add-city");
const checkboxInput = document.querySelector(".check-input");
const checkboxSpan = document.querySelector(".check-box");
const nameCityBlock = document.querySelector("#city-name");

const STATUSES = {
  ADDED: "Added",
  NOT_ADDED: "Not added",
};

const WARNINGS = {
  // так и не понял, куда их вставить
  ADDED: "City alrady added",
  NO_CITY: "There is no such city",
};

const cities = [];

function findCity(event) {
  event.preventDefault();

  const inputValue = inputName.value;
  getWeather(`${inputValue}`);

  event.target.reset();
}
findForm.addEventListener("submit", findCity);

function getWeather(name) {
  const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
  const cityName = name;
  const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("wtf error");
      }
      return response.json();
    })
    .then((data) => {
      // можно юзануть деструктуризацию если уже проходил
      const tempVal = data.main.temp;
      const integerTempVal = Math.round(tempVal);
      const cityName = data.name;
      const icon = data.weather[0].icon;
      console.log(data);
      // можно вынести в отдельную ф-ю updateInfo
      document.getElementById("temperature").textContent = integerTempVal;
      document.getElementById("city-name").textContent = cityName;
      document.querySelector(
        "#pic"
      ).src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
      const checkName = cities.find((item) => {
        return item.name === nameCityBlock.textContent;
      });
      console.log(nameCityBlock.innerText);
      console.log(checkName);
      if (checkName) {
        checkboxInput.checked = true;
        return;
      }
      checkboxInput.checked = false;

      return icon;
    })
    .then((icon) => {})
    .catch((error) => {
      console.error(error);
    });
}

function addCity() {
  if (this.checked) {
    const addedCities = {
      name: nameCityBlock.textContent,
      status: STATUSES.ADDED,
    };

    cities.push(addedCities);
    clean();
    render();
  } else {
    const findIndex = cities.findIndex((index) => {
      return index.name === nameCityBlock.textContent;
    });
    this.checked
      ? (cities[findIndex].status = STATUSES.ADDED)
      : (cities[findIndex].status = STATUSES.NOT_ADDED);
    clean();
    render();
    cities.splice(findIndex, 1);
  }
  console.log(cities);
}

checkboxInput.addEventListener("change", addCity);

function createElement(text) {
  const city = document.createElement("li");
  city.classList.add("city");
  city.textContent = text;

  return city;
}

function render() {
  cities.forEach((item) => {
    if (item.status === STATUSES.ADDED) {
      addCityBlock.appendChild(createElement(item.name));
    }
  });
}

function clean() {
  let allCities = document.querySelectorAll(".city");
  for (let i = 0; i < allCities.length; i++) {
    allCities[i].remove();
  }
}

addCityBlock.addEventListener("click", function getCity(event) {
  const clickName = event.target.innerText;
  getWeather(`${clickName}`);
});

// const checkName = cities.find(item => {
//     return item.name === inputValue;
// });

// if (checkName) {
//     checkboxInput.checked = true;
//     return;
// }

// const checkName = cities.find(item => {
//     return item.name === nameCityBlock.textContent;
// });
// console.log(nameCityBlock.innerText);
// console.log(checkName);
// if (checkName) {
//     checkboxInput.checked = true;
//     // event.target.reset();
//     return;
// }

// checkboxInput.checked = false; // cделать проверку регистра при вводе названия города

// const addedCities = {
//     name: nameCityBlock.textContent,
//     status: STATUSES.ADDED,
// };

// cities.push(addedCities);
// clean();
// render();

// const findIndex = cities.findIndex(index => {
// return index.name === nameCityBlock.textContent;
// });

// this.checked ? cities[findIndex].status = STATUSES.ADDED : cities[findIndex].status = STATUSES.NOT_ADDED;
// console.log(addedCities);

// const addedCities = {
//     name: nameCityBlock.textContent,
//     status: STATUSES.ADDED,
// };
// cities.push(addedCities);

// const findIndex = cities.findIndex(index => {
//    return index.name === nameCityBlock.textContent;
// });
// this.checked ? cities[findIndex].status = STATUSES.ADDED : cities[findIndex].status = STATUSES.NOT_ADDED;
// console.log(addedCities);

// if (this.checked) {

//     console.log(addedCities);
//     cities.push(addedCities);
//     // render();
//     return;
// } if (!this.checked) {
//     addedCities.status = STATUSES.NOT_ADDED;
//     console.log(addedCities);
// }

// if (newFetch.ok) {
//     let jsonNew = await newFetch.json();
//     console.log(jsonNew.main.temp);
// } else {
//     alert('Error: ' + newFetch.status);
// }

// console.log(weatherData);
// let temerature = weatherData.main.temp;
// console.log(temerature);

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
//     tempValueBlock.appendChild(picTempBlock); // добавить картинку через массив
//     tempInfoBlock.appendChild(feelsLikeBlock);
//     tempInfoBlock.appendChild(sunriseBlock);
//     tempInfoBlock.appendChild(sunsetBlock);
//     cityInfoBlock.appendChild(cityNameBlock);
//     cityInfoBlock.appendChild(labelBlock);
//     cityInfoBlock.appendChild(tempValueBlock);
//     cityInfoBlock.appendChild(tempInfoBlock);

//     return cityInfoBlock;

// }
