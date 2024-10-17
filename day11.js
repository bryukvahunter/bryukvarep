function calc(operation, a, b) {
    if (operation ==='add') {
        return a + b;
    } 
    if (operation === 'multi') {
        return a * b;
    }
    if (operation === 'substract') {
        return a - b;
    }
}
 
console.log(calc('add',1, 2));
console.log(calc('multi',1, 2));
console.log(calc('substract',3, 2));