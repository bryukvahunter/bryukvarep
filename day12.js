let randomValue = function someFunc(a, b) {
    return a + b;
}
let love = 'Nikita' + 'Katya';

const testObj = {
  list: {
    'key1': true,
    'key2': false,
    'key3': randomValue(5, 5),
    'key4': undefined,
    'key5': null,
    'key6': 88005553535,
    'key7': 'value',
  },
  // add(name, number) {
  //   this.list[name] = number;
  // },
  // delete(name) {
  //   delete this.list[name];
  };


// console.log('key4' in testObj.list);

// for (let keys in testObj.list) {
//   console.log(keys + ' ' + '-' + ' ' + testObj.list[keys]);
//}

// testObj.delete('key3', 'key4');



// const test2Obj = structuredClone(testObj);
// console.log(test2Obj !== testObj);

// test2Obj.list['key99'] = true;

// console.log(testObj.list);
// console.log(test2Obj.list);

const newObj = {
  'slot1': {
    'inside': 'so deep))',
    'inside2': 777,
  }
};

const cloneNewObj = structuredClone(newObj);


console.log(delete newObj.slot1['inside']);
console.log(newObj);
console.log(cloneNewObj.slot1);

// Почему удаление возвращает тру?;)