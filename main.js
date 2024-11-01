
// 1. выводит сообщение, вертикально
// 2. проверяет первую букву на совпадение с 's'
// 3. если совпадение с 's' нету, действия? 
// 4. проверка на количество сисволом в строке
// 5. если символов больше, выводит только первые, в указанном количестве 

// function showVerticalMessage(word) {
// for (crap of word) {
    
// }
// }
// (letter.lenght <= 7 || letter.lenght > 7)
function checkFirstLetter(letter) {
    

    if (letter[0] === 's' && letter !== Number) { 
        
        letter = letter[0].toUpperCase() + letter.slice(1);
        letter = letter.slice(0, 7);

     for (key of letter) {
        
            console.log(key);
        } 
        
    }
    else if (letter[0] !== 's' && letter !== Number) {
        
        letter = letter.slice(0, 7);
        
        for (key of letter) {
                console.log(key);
        } 
    }   
    else {
        console.log('Это не строка!');
    }
}

checkFirstLetter('123456789'); // Но выпадает в ошибку, когда ввожу число

