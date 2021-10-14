//Функции, области видимости, хойстинг
//function declaration
//function expression
//arrow function

//function declaration

// function func() {
//     console.log('Hi');
// }
// func()

// function sayHello(){
//     alert('Hello')
// }
// sayHello();
// //объявляем функцию
// function имя (параметры) {
//     тело функции
// }
// имя() вызов функции

// function calc (num1, num2){
//      let res = num1 + num2;
//      return res;
// }
// let sum = calc(10, 20)
// console.log(sum)


// function firstElem(arr) {
//     let elem = arr.shift();
//     return elem;
// }
// let array = [1, 2, 3, 4, 5]
// let res = firstElem(array)
// console.log(res);

// function mulTwoNums(arg1, arg2=1){
//     console.log(arg1, arg2);
//     console.log(arg1 * arg2);
// }
// mulTwoNums(2, 7)

// let message = 'Hello world'
// function showMessage (message){
//     console.log(message)
// }
// showMessage(message)
// let mass = ['str']
// function array(mass) { //функция принимает аргументы
//     console.log(mass)
// }
// array(mass); //здесь передаются аргументы функции
// // если функция принимает аргументы, то аргументы нужно передавать

// let numbers = [100, 200, 300]
// function lastElemOfArray(array){
//     let lastElem= array.pop();
//     console.log(lastElem)
// }
// lastElemOfArray(numbers);

// let boolValues = [true, false, true];

// lastElemOfArray(boolValues);

//function expression

// let str = 'Hello world'
// let sayHello = function (a, b){
// console.log(a);
// }

// sayHello(str)


// let obj = {
//     title: 'Makers',
// };
// function showTitle(arg1){
//     console.log(arg1)
//     document.write(`<h1>${arg1.title}</h1>`)
// }
// showTitle(obj)

// let school = {
//     title: 'gazprom'
// };
// showTitle(school);

//локальные и глобальные обл видимости
// let num1 = 50;
// function func(){
//     let num1 =20;
//     console.log(num1);
// }
// func()

//тело функции это локальная обл видимости

// function pow (x,n){
//     let res = x **n;
//     return res;
// }

// let res = pow(2,3);
// console.log(res)

// let res = +prompt('число')
// function getDay (num){
//     switch(num){
//         case 1: return 'Понедельник';
//         case 2: return 'Вторник';
        
//         case 3: return 'среда';
        
//         case 4: return 'четверг';
        
//         case 5: return 'пятница';
        
//         case 6: return 'суббота';
        
//         case 1: return'воскресение';
        
//         default: return'левое значение'
//         }
// }
// console.log(getDay(res));
// let res = 3
// let res2 = 3
// function calcSum(a , b){
//     if(a === b){
//         let sum1 = (a + b) *3
//         return sum1
//     }
//     else {
//         let sum2 = a + b
//         return sum2
//     }
//     }
// console.log(calcSum(res, res2))

// let names = ['Maksat', 'Vladimir', 'nurlan', 'Aidar']
// function checkArr (arr, name) {
// for (let i =0; i <arr.length; i++){
//     let check =arr[i];
//     if(check === name){
//         return 'Yes';
//     }
// }
// return 'No'

// }
// console.log(checkArr(names, 'Aidar'));


// let str = '#'
// function calcStr(value, num){
//     let sum = ''
//     for(let i = 0; i < num; i++){
        
//         sum +=value;
//         console.log(sum)
//     }
// }
// calcStr('A', 15)

// let arr = ['Apple', 'Oranje', 'Banana', 'Pineapple', 'Cherry']

// function sortArr(array){
//     array.sort((a,b) => b.length - a.length)
    
//     let longword = array[array.length - 1]
//     console.log(longword)
//     console.log(array)
// }
// sortArr(arr)

// Задание №1
// Создайте функцию которая выводит в
// консоль “Hello World!”

//решение 
// function sayHi(){
//     console.log('Hello World!')
// }
// sayHi()
// Задание №2
// Напишите функцию hello(), которая при
// вызове будет возвращать строку:
// "Привет, JavaScript!"

// function sayHi() {
//     let say = ('Привет, JavaScript!');
//     return say
// }
// console.log(sayHi())

// Задание №3
// Создайте функцию которая принимает в качестве
// аргумента два числа и возвращает их сумму.

// //решение 
// function calcSum(a, b){
//     let sum = a + b
//      return sum
// }
// console.log(calcSum(5, 7))

// Задание №4
// Напишите функцию, которая в качестве аргумента принимает
// число - возраст. Если возраст больше 18 выведите в
// консоль “Добро пожаловать”, иначе “Вход запрещен”

// //решение 

// function checkAge(age){
//     if(age > 18){
//         console.log('Добро пожаловать')
//     }
//     else {
//         console.log('Вход запрещен');
//     }
// }
// checkAge(19)

// Задание №5
// Напишите функцию, которая принимает целое число и возвращает сумму всех его цифр.
// Например: ввод 456, функция должна вернуть число 15, так как 4 + 5 + 6 = 15

// //решение
// let num = 456;
// function calcSum (num){
//     let sum = 0;
//     let str = String(num)
//     for(let i =0; i < str.length; i++){
//         sum += Number(str[i])
//     }
//     return sum
//     }
// console.log(calcSum(num));

// Задание №6
// Напишите функцию которая принимает
// массив с названиями стран и возвращает
// страну с самым длинным названием,
// затем напишите вторую функцию которая возвращает
// страну с самым коротким названием.

// //решение

// let arr1 = ['Kyrgizstan', 'Nepal', 'Russia', 'China', 'England']

// function sortSortArr(array) {
//     array.sort((a, b) => a.length - b.length)

//     let shortWord = array[array.length - 1]
//     console.log(shortWord)
//     console.log(array)
// }
// sortSortArr(arr1)



// let arr2 = ['Kyrgizstan', 'Nepal', 'Russia', 'China', 'England']

// function sortLongArr(array){
//     array.sort((a,b) => b.length - a.length)

//     let longword = array[array.length - 1]
//     console.log(longword)
//     console.log(array)
// }
// sortLongArr(arr2)


// Задание №7
// Напишите функцию которая принимает два аргумента, строку и букву.
// Функция должна возвращать число повторений переданной буквы в строке.
// Например:
// func('hello', 'l')
// Вернет число 2, т.к в слове 'hello' две буквы 'l'

//решение

// function calcWord (word, s){
//     let str = String(word);
//     let st = String(s);
//     let sumLetter =0;
//     console.log(st);
//     for(let i = 0; i < str.length; i++) {
//         sumLetter += st
//         return sumLetter
//     }
// }
// console.log(calcWord('apple', 'p'));

// function someFunc(){
//     console.log('hello ');
// }
// let newFunc = someFunc;
// console.log(newFunc);

// function calcSum(a, b=0){    //можно задать дефолтное значение, перезапишется после объяявления
//     return a+b
// }
// console.log(calcSum(2));

// function someFunc (a,b,c,d,e){
//     // console.log(a,b,c,d,e);
//     console.log(...arguments);
//     let arr = [...arguments]
//     for(let i = 0; i <arr.length; i++){
//         console.log(arr[i]);
//     }
// }
// someFunc('hello', false, 25, [], {})

