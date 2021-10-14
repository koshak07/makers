//Логические операторы

// console.log(true && true);
// console.log(true && false)
// console.log(true && '') //выдаст false

// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// console.log(!true)
// console.log(!false)

// console.log(true && true || false && !false)
// console.log(true || !true && false || false)
// console.log(!false && !true || !true);
// console.log(false || !false && !!true);


//условные операторы

// let num1 = 140;
// let num2 = 141;

// if(num1 === num2) {
//     console.log('num1 === num2');
// }
// else if(num1 > num2){
//     console.log('num1 > num2');
// }
// else if(num1<num2) {
//     console.log('num1<num2');
// }
// else {
//     console.log("ne podoshlo");
// }

// const value = "Hello";
// const number = 50;
// if(value === 'Hello') {
//     console.log("Hello world");
// }
// if(number>50) {
//     console.log('number > 50');
// }
// else if(number < 50){
//     console.log('number < 50');
// }
// else {
//     console.log('number === 50');
// }

// let sum = 100;
// let result = 201;
// if(sum ===100 || result === 200) {
//     console.log('YES');
// }
// else {
//     console.log('No');
// }

// тернарный оператор

// let user1 = 'Mirbek'
// let user2 = 'Ulan'
// user1 === user2 ? console.log('Ecli uslovie true') : console.log('Ecli uslovie false')

// let num = 1;
// let num2 = 2;

// num < num2 || 10>5 ? alert('True') : alert('false')

// 0 || 1 ? console.log('true') : console.log('false')

//switch

// let str = 'College'

// switch(str) {
//     case "School": console.log('good')
//     break;
//     case "Bootcamp": console.log('Bootcamp')
//     break;
//     default: console.log("College")
// }
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// let code = prompt('enter teg h1')

// switch (code) {
//     case '<h1></h1>': alert('vse verno')
//         break;
//         case 'h1': alert('pochti')
//         break;

//     default: alert('Povtori zagolovki')
//         break;
// // }

// let temp = +prompt('Enter temperature')

// // temp < 0 ? console.log(`'Temperatura opustitsya do ${temp} gradusov'`) : console.log(`'Temperatura podnimetsya do ${temp} gradusov'`)

// if (temp < 0) {
//     console.log(`'Temperatura opustitsya do ${temp} gradusov'`)
// }
// else {
//     console.log(`'Temperatura podnimetsya do ${temp} gradusov'`)
// }

// let min = +prompt('Enter minute');

// if (min > 0 && min <= 15) {
//     console.log('1-я четверть')
// }
// else if(min > 16 && min <= 30) {
//     console.log('2-я четверть')
// }
// else if(min > 31 && min <= 45) {
//     console.log('3-я четверть')
// }
// else if(min > 46 && min <= 59) {
//     console.log('4-я четверть')
// }
// else {
//     console.log('left value')
// }

// let res = prompt('Наберите текст.')
// let res1 = res.charAt(0);
// if (res1 === "a") {
//     alert('Да')
// }
// else {
//     alert('Нет')
// }

function checkTask(firstNum, secondNum, thirdNum) {
    if (firstNum >= secondNum && firstNum >= thirdNum) {
        console.log(`Максимальное число ${firstNum}`)
    }
    else if (secondNum >= firstNum && secondNum >= thirdNum) {
        console.log(`Максимальное число ${secondNum}`)
    }
    else if (thirdNum >= firstNum && thirdNum >= secondNum) {
        console.log(`Максимальное число ${thirdNum}`)
    }
}