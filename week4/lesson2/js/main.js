//Замыкание

// function init(){
//     let name = 'Adilet';
//     return function (){
//         console.log(name);
//     }
// }

// let sowName = init()
// sowName()

// function words(arg1){
//     return function(arg2){
//         console.log(arg1, arg2)
//     }
// }
// let hello =words('Hello')
// hello('World');
// let count = words('count')
// count(5)

// function sum(num1){
//     console.log(num1)
//     return function(num2){
//         console.log(num1 + num2);
//     }
// }
// let sum10 = sum(10);
// sum10(20)

// sum(20)(40);
//замыкание это когда дочерняя функция замкнута на лексическом окружении родительской функции

//рекурсия
// let result = 0;
// function toSum(num){
//     for(let i = num; i>= 1; i--){
//         result +=i;
//     }
// }
// toSum(5)
// console.log(result);

// function toSum (num){
//     if(num <=1) return num //точка выхода
//     return num + toSum(num - 1) //вызов функции
    
// }
// let result = toSum(5)
// console.log(result);


// function finder(arr){
//     if(arr.length <1) return 0;
//     let currentNum = arr.splice(0, 1)
//     console.log(arr);
//     return currentNum[0] === 1 ? 1 + finder(arr) : finder(arr)
// }
// let count = finder([1, 2, 22, 4, 1])
// console.log(count);

// function calcSum (arr){
//     if(arr.length < 1) return 0
//     let sum = arr.splice(0, 1)
//     return typeof sum[0] === 'number' ? sum[0] + calcSum(arr) : calcSum(arr)

// }
// let res = calcSum([true, 7, 2, 'hello'])
// console.log(res);

// function fib(num){
//     if (num > 1){
//         return fib(num - 1) + fib(num - 2)
//     } 
//     return num
    
// }
// console.log(fib(10))

// let count =0
// function checkLetter (word, letter){
//     for (let i=0; i<word.length; i++){
//         if(letter === word[i]){
//             count++
//         }
//     }
//     return count;
// }
// console.log(checkLetter('hello', 'l'))

// let side = 0
// let sum = 0
// function getDirection(){
//     let sideX = 0
//     let sideY = 0
//     if(str.length !== 10) return false
//     for(let i = 0; i< str.length; i++){
//         switch(str[i]){
//             case 'с': sideX++
//             break;
//             case 'ю': sideX--
//             break;
//             case 'з': sideY++
//             break;
//             case 'в': sideX--
//             break;
//             default: return console.log('nevernaya bukva');
//             break;
//         }
//     }
//     return sideX=== 0 && sideY ===0 ? true : false; 
// }
// console.log(getDirection('сюзввсюююв'));

// function checkPal(str){
//     let arr = str.split('')
//     let rev = arr.reverse().join('')
//     if(rev === str){
//         console.log('polindrom');
//         return true
//     }
//     else {
//         console.log('polindrom');
//         return false;
//     }
// }
// checkPal('комок')

// function exampleFour(n) {
// return function (num) {
// return n + num;
// };
// }
// console.log(exampleFour(15)(4));

