//Задача №1

// let askName = prompt('Введите ваше имя');
// let askAge = prompt('Введите ваш возраст');
// let result = `Привет, меня зовут ${askName}, мне ${askAge} лет!`;
// alert(result);

//Задача №2

// let askNum_1 = parseInt(prompt('Введите первое число'));
// let askNum_2 = parseInt(prompt('Введите второе число'));

// let result_1 = askNum_1 + askNum_2;
// let result_2 = askNum_1 - askNum_2;
// let result_3 = askNum_1 * askNum_2;
// let result_4 = askNum_1 / askNum_2;
// alert(`${result_1}, ${result_2}, ${result_3}, ${result_4}`);

// alert(`${askNum_1 + askNum_2}, ${askNum_1 - askNum_2}, ${askNum_1 * askNum_2}, ${askNum_1 / askNum_2}`);

//Задача №3

// let askAge = prompt('Укажите ваш возраст');
// if (askAge >= 6 && askAge <= 10) {
//  console.log('Идем на детскую площадку');
// } else if (askAge >= 11 && askAge <= 16) {
//     console.log("Едим в горы");
// } else if (askAge >= 17 && askAge <= 20) {
//     console.log("Идем в кафе");
// } else if (askAge >= 21 && askAge <= 25) {
//     console.log("Идем на дискотеку");
// } else {
//     console.log('Неверный возраст. Сидим дома.');
// }

//Задача №4

let askNumber = parseInt(prompt('МИНОМЕТ. Укажите число'));

if (askNumber > 28 && askNumber < 30) {
        console.log('ПОПАЛ');
} else if (askNumber >= 30) {
       console.log('ПЕРЕЛЕТ');
} else if (askNumber > 0 && askNumber <= 28) {
       console.log('НЕДОЛЕТ');
} else if (askNumber <= 0) {
    console.log('НЕ БЕЙ ПО СВОИМ');
} 
