

let products = ['Nike', 'Puma', 'Bigser']

// let newArr = products.forEach((i) => console.log(i));
// console.log(newArr)

// let newArr = products.map((i) => i)
// console.log(newArr);

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newArr = arr.map((i) => {
//     return i.length
// })

// console.log(newArr);

// let names = ['sam','luck','james']

// let newArr = names.map((i) => {
//     i = i[0].toUpperCase()+i.slice(1) // с какого индекса по какой не включитель(тут не задан)
//     return i
// })
// console.log(newArr);

// let arr = [1, 2, 10, -11, -555, 10]
// let newArr = arr.filter ((i) => {
//     return i < 0
// })
// console.log(newArr);

// let arr = ['str', 1, [3, 4], true, ['str'], 10]
// let newArr = arr.filter((i) => {
//     return Array.isArray(i)
// })
// console.log(newArr);

// let num = 123456789;

// let str = num.toString() // перевернем массив
// let arr = str.split('') // делим по буквам и переводим в массив
// arr.reverse()    // переворачиваем массив
// num = +arr.join('') //переводим в строкуб знак + из строки в число

//or

// let reverseNum = +num.toString().split('').reverse().join('')

// console.log(reverseNum);


//  function checkPol(word) {
//     let arr = word.split('')
//     let arr1 = arr.reverse()
//     let str = arr1.join('')
//     if(word.toLowerCase().trim() === str.toLowerCase().trim()){ 
    //         return console.log('да');
    //     }
    //     else{
        //         console.log('no');
        //     }
        // }
        // checkPol('Топот ')
        
        //trim() убирает пробелы до первого символа и после последнего между буквами не уберет


// let arr = ['Молоко', 77, 11, 'Мед', -88];
// function res(a) {

//   a.forEach((i) => {
//     if (typeof i == 'number') {
//       return console.log(`${i} - число`);
//     } else {
//       console.log(`${i} - не число`);
//     }
//   });
// }
// res(arr)

// Напишите функцию, определяющую,
// присутствует ли заданный элемент в массиве.
// В качестве результата работы функции можно
// выдавать логическое значение true и индекс
// этого элемента, если элемент найден,
// и false — в противном случае.

// let arr = ['Молоко', 77, 11, 'Мед', -88];
// function check(arg){
//     let arg1 =0
//     arr.forEach((elem, index) => {
//         if(arg === elem){

//             return console.log(true, index);
//         }
//         else{
//             null
//         }
//         // if (arg !== elem){
//         //     return console.log(false);
//         // }
//     })
//      return arr
// }
//  check(12)

 
// let arr = ['Молоко', 20, 40, 'дом', 30]
// function chek(arg) {
// let est = false
// let id;
// arr.forEach((elem, index) => {
// if (elem === arg) {
// est = true
// id = index
// }
// });
// if (est) {
// console.log(est, id);
// }
// else {
// console.log(false);
// }
// }
// chek('Молоко')

// let arr = [5, 6, 7, 8, 9]
// function sum1 () {
//     let sum = 0
//     arr.forEach((i) => {
//         sum += i
//     })
//     console.log(sum);
// }
// sum1(arr)

// let sumRed = arr.reduce((a, b) => {
//    return a + b;
// });
// console.log(sumRed);


// let sumMap = 0
// arr.map((a) => {
//         return sumMap +=a
//  })
// console.log(sumMap);

// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// let res = arr.filter((i) => {
//   return i.length >= 5;
// });
// console.log(res);

// let arr = [1, 2, [3, 4], 5,[6, 7]]

// let res = arr.filter((i) =>{
//     return Array.isArray(i)
// })
// console.log(res);

// let arr = [2, 5, 9, 6]
// function del (arg, i){
//     let num = arg.indexOf((i))
//     arg.splice(num, 1)
//     return arg
// }
// console.log(del(arr, 6))

// let remove = [2, 5, 9, 6];
// let sixeFunc = (mas, arg) => {
// remove.splice(remove.indexOf(arg), 1);
// return remove;
// };
// console.log(sixeFunc(remove, 5));

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let sumCut = arr.slice(0, 3).reduce((a, b) => {
//   return a + b;
// });
// console.log(sumCut);

// дан массив с числами. Напишите функцию, которая
// вычисляет сколько элементов с начала массива
// надо сложить, чтобы в сумме получилось 10?

// let arr = [3, 1, 4, 2, 4, 5, 6]
// let sum =0
// let count = 0;
// arr.forEach((i) => {
//     sum += i
//     count++
    
//     if(sum === 10){
//         return console.log(count);
//     }
// })

// let mass8 = [3, 1, 4, 2, 4, 5, 6];
// let count = 1;
// let eightFunc = () => {
// mass8.reduce((prev, curr) => {
// count++;
// if (prev + curr >= 10) mass8.splice(1);
// return prev + curr;
// });
// console.log(count);
// };
// eightFunc();

// Задание № 10
// Дан массив с числами. Вывести количество
// отрицательных чисел в этом массиве.
// Пример: [7, -1, -9, 0, 4, 5, -6]
// Ответ: 3

// let arr = [7, -1, -9, 0, 4, 5, -6]

// let newArr = arr.filter((i) => {
//    return i < 0
// })
// console.log(newArr.length);

let arr = [1, 2, 3, 4, 5, 6]
let res = arr.reduce((prev, curr))