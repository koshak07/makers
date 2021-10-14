//Простые методы массивов

// push, pop, shift, unshift

// let arr =[1, 2, 3]

// arr.push(4) // добавляет в конец
// console.log(arr);

// arr.pop()// вырезает из конца можно сохранить в переменную
// let num = arr.pop()
// console.log(arr);
// console.log(num);

// let arr = ['Kyrgyzstan', 'uzbekistan', 'russia']
// arr.unshift('China')//добавляет в начало
// console.log(arr);
// let country = arr.shift() //вырезает 1 элем с начала массива, можно сохранить в переменную
// console.log(arr);
// console.log(country);

//splice как ctrl+x, slice как ctrl+c

// let nums = [22, 40, 38, 50]
// let res = nums.splice(0, 1, '1')
// console.log(nums)
// console.log(res);
// массив.splice (с какго начать, сколько вырезать, что вставить)


// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2)
// console.log(arr);
// console.log(num);

// массив.slice(с какого начать, по какой НЕ включительно)

// let arr = [1, 2, 3, 4, 5]
// // arr.reverse()
// let str = arr.join('+') //делает из массива строку
// console.log(arr);
// console.log(str);

// let newArr = str.split("+");// из строки массив делит по заданному символу
// console.log(newArr);

// let nums = [1, 2, 30, 11, 101, 22, 86]
// nums.sort((a, b)=> a-b);
// console.log(nums);

//concat
// let res = [1, 2, 3];
// let res2 = [4, 5, 6];
// let result = res.concat(res2, ['str', 'boolean']);
// console.log(result);

// let myArry = ['Kubat', 'Malik', 'Ainura', 'Adelina', 'Askat' ]
// for(let i = 0; i < myArry.length; i++) {

//     myArry.splice(i, 1, [myArry[i], i])
//     console.log(myArry);
// }

// let mixedUsers = [
//     {
//         role: 'user'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'admin'
//     },
//     {
//         role: 'user'
//     },
//     {
//         role: 'user'
//     }
// ]

// let admins = []
// let users = []

// for(let i = 0; i < mixedUsers.length; i++) {
//     if(mixedUsers[i].role === 'admin'){
//        admins.push(mixedUsers[i]); 
//     }

//  else if(mixedUsers[i].role === 'user'){

//     users.push(mixedUsers[i])
// }
// }
// console.log(admins);
// console.log(users);

// let products = [
//     { size: 's' },
//     { size: 's' },
//     { size: 's' },
//     { size: 's' },
//     { size: 'l' },
//     { size: 'l' },
//     { size: 'l' },
//     { size: 'l' },
//     { size: 'm' },
//     { size: 'm' },

// ]

// let sSize = []
// let lSize = []
// let mSize = []

// console.log(products);

// for(let i = 0; i< products.length; i++){
//     if(products[i].size ==='s'){
//         sSize.push(products[i]);
//     }
//     else if (products[i].size ==='l'){
//         lSize.push(products[i])
//     }
//     else if (products[i].size === 'm'){
//         mSize.push(products[i])
//     }
// }
// console.log(sSize);
// console.log(lSize);
// console.log(mSize);

// let num = 10;
// let sum = 0;
// for (i = 0; i <= 10; i++){
//     sum += i
// }
// console.log(sum);

// Задание №3
// Напишите код который соединяет два массива и убирает дубликаты в новом массиве.
// Пример:
// Ввод:
// array1 = [1, 2, 3];
// array2 = [2, 30, 1];
// Вывод: [3, 2, 30, 1]
// использовать метод concat()

// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let arr = arr.concat(array2)

// for (let i = 0; i <arr.length; i++){
//     for (let y = 0; y < arr.length; y++){
//         if(y===i){
//             continue;
//         }
//         if(arr[i] === arr[y]){
//             arr.splice(y, 1)
//             y--
//         }
//     }
// }



