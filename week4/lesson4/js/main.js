//регулярные выражения

// 2 способа создания регулярного выражения

// const regexp1 = /coding/   // 1-й способ
// const regexp2 = new RegExp('coding')  //2 способ

// const str = 'coding is easy';
// let res = str.match(regexp1) || []
// console.log(res);

// if(res.length > 0){
//     console.log('here');
// }
// else{
//     console.log('not');
// }


//flags

//i игнорирует регистр
//g поиск ищет все совпадения, без него только первое совпадение


//метод строки match ищет и возращает массив, если не найдено то NULL
// let regexp = /code/gi

// let str = 'code, bad CODE'
// let res = str.match(regexp)
// console.log(res);

// let str = 'Работайте, братья работайте'

// let regexp = new RegExp('работайте', 'gi');
// let res = str.match(regexp)
// console.log(res);


//метод строки replace ищет совпадения и заменяет их на то что мы укажем

// let str = 'требуется мидлл разработчик'

// let regexp = /мидлл/

// let res = str.replace(regexp, 'джуниор')
// console.log(res);

// метод регулярного выражения test проверяет есть ли совпадение возращает true/false

// let str = 'We can'

// let regexp = /We/i

// let res = regexp.test(str)

// console.log(res);

//\d цифра от 0-9
// \ s пробелы
//\w символ, буква строчная латинского алфавита или _
//\D не цифра, все кроме цифр 0-9
//\S Не пробел, все кроме пробела
//\W  символ, кроме букв латинского алфавита и _ и не цифра
//  . любой символ (точка, экранировать не надо)

// let str = 'coding is easy'
// let regexp = /\w\w\w\w\w\w.\w\w/

// let res = str.match(regexp)
// console.log(res);

//якоря

// ^  начало строки
// $ конец строки

// let time = '20:12'

// let regexp = /^\d\d:\d\d$/

// let result = regexp.test(time)
// console.log(result);

//наборы []

// let str1 = 'mad'
// let str2 = 'sad'

// let regexp = /[ms]ad/;  //or mad or sad
// let res= str1.match(regexp)
// console.log(res);


//Диапазоны

// let str1 = '123456789'

// let regexp = /[1-5]/g;
// let res = str1.match(regexp)
// console.log(res);

// [0-9], [a-z], [A-Z], [А-Я]

//исключения

// let regexp = /[^aeiou]/ //все кроме этих букв

// Квантификаторы

//{n} количество

// let number = ' 12 555 3477' //нужно 500
// // let regexp = /\d\d\d/  или
// let regexp = /\d{3}/ // возьмет 500
// let regexp = /\d{3, 4}/ // возьмет 555 3477
// let regexp = /\d+/ //+ означает 1 или более символов
// let res = number.match(regexp)

// let regexp = /\d?/
//  let res = number.match(regexp)
//  console.log(res);

// let str = 'color or colour'
// let regexp = /colou?r/g
// let res = str.match(regexp)
// console.log(res);

//скобочные группы

// let str = 'mail.ru'
// let regexp = /(\w+\.)+\w+/g
// let res = str.match(regexp)
// console.log(res);

// let str = ' brown, black, blue, ligthblue'
// let regexp = /[aieou]/gi
// let res = str.match(regexp).length
// console.log(res);

// let str = '5 apples and 5 oranges';
// let regexp = /5/g
// let newStr = str.replace(regexp, 'пять')
// console.log(newStr);

// альтернация (или) '|'

// let str = 'I know Java, Python, Flutter, JavaScript, Dart';
// let regexp = /Java(Script)?|Python|Flutter|Dart/g
// let res = str.match(regexp)
// console.log(res);


// let elevator = {
//     floor: 1,
//     minFloor: 1,
//     maxFloor: 16,
//     printFloor: function (){
//         console.log(`Вы находитесь на ${this.floor}`)
//     },
//     upOneFloor: function(){
//         if(this.floor < this.maxFloor){
//             this.floor++
//             this.printFloor();
//         }
//         else{
//             console.log(`Вы не можете поднятся выше ${this.maxFloor}`);
//         }
//     },
//     downOneFloor: function(){
//         if(this.floor > this.minFloor){
//             this.floor--
//             this.printFloor();
//         }
//         else{
//             console.log(`Вы не можете спустится выше ${this.minFloor}`);
//         }
//     },
//     toFloor: function(num){
//         if(num <this.minFloor || num > this.maxFloor){
//             console.log(`Нет такого этажа`);
//             return
//         }
//         if( num > this.floor){
//             while(this.floor !==num){
//                 this.upOneFloor()
//             }
//         }
//         else if(num === this.floor){
//             console.log(`Вы уже находитесь на ${num}`);
//         }
//         else {
//             while(this.floor !== num){
//                 this.downOneFloor()
//             }
//         }
//     }
// }
// elevator.toFloor(5)
// elevator.toFloor(11)
// elevator.toFloor(2)

// function calcArea (r){
//   let sq = 3.14 * (r ** 2)
//   console.log(Math.round(sq));
//   let p = 2 * 3.14 * r
//   console.log(Math.round(p));
// }
// calcArea(10)

