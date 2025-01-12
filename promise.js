const timestamp1 = Date.now();
console.log("Start");

const promise = new Promise((resolve, reject) => {
  function heavyCalc() {
    for (let i = 0; i < 1000000000; i++) {
      i * i;
    }

    return "Heavy calc is finished";
  }

  resolve(heavyCalc());
});

promise
  .then(function (result) {
    return result;
  })
  .then(function (res) {
    console.log(res);
  });

const timestamp2 = Date.now();

console.log("Finished", timestamp2 - timestamp1);
