// function calc(operation, a, b) {
//     if (operation ==='add') {
//         return a + b;
//     } 
//     if (operation === 'multi') {
//         return a * b;
//     }
//     if (operation === 'substract') {
//         return a - b;
//     }
// }
 
// console.log(calc('add',1, 2));
// console.log(calc('multi',1, 2));
// console.log(calc('substract',3, 2));




function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;     
        case 'substract':
            return a - b;
    }   
}
console.log(calc('add',5, 5));
console.log(calc('multi',5, 5));
console.log(calc('substract',5, 5));