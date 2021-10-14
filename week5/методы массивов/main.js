
//forEach не создает новый массив

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach((item, index, array) => {
//     // console.log(item * 2);
// })

//map создает новый массив

// arr.map((item, index, array) => {
    //     console.log();
    // })
    // let newArr = arr.map((item) => {
    //     return item * 10
    // })
    // console.log(newArr);


    //filter создает новый массив, хранятся отфильтрованные элем

//    let newArr =  arr.filter((item, index, array) => {
//         return item > 4
//     })

//     console.log(newArr);


// let str = 'Ivan, Misha, Andrei, Oleg, Aktan';
// let newStr = str.split(', ') // создает новый массив
// let filterdArr = str.split(', ').filter(item => {
//     // return item.length >4
//     return /a/gi.test(item)   // получим имена где есть буква а
// })
// console.log(filterdArr);

// indexOf  // первый параметр что ищем, второй начиная с какого индекса икать если не передать то будет с нулевого искать

// let str = ['Ivan', 'Misha', 'Andrei', 'Oleg', 'Aktan'];

// let search = str.indexOf('Oleg', 0)

// console.log(search);


// findIndex

// let index = arr.findIndex((item, index, array) => {
//     return item.length ===5
// })
// console.log(index);

//find

// let arr = [
//     {
//         name: 'Ivan'
//     },
//     {
//         name: 'John'
//     },
//     {
//         name: 'Oleg'
//     },
//     {
//         name:'Aktan'
//     },
//     {
//         name: 'Emily'
//     },
// ]

// console.log(arr.find(item => item.name ==='Oleg'));
// console.log(arr.findIndex(item => item.name ==='Oleg'));

//every возвратит с

// let arr = [1, 2, 3, '10', 12, 24]
// let result = arr.every((item, index, array) => {
//     return typeof item === 'number'
// })

// console.log(result);


//some вернет true or false если есть хоть одно совпадение

// let arr = [1, 2, 3, '10', 12, 24]

// let result = arr.some((item) => {
//     return typeof item === 'number'
// })
// console.log(result);

//includes вернет true or false 

// let arr = [1,2,3,4,5,6,7,8,9]
// let res = arr.includes(9, 3) // 1-й что ищем, второй откуда начинать
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,]
// let res = arr.reduce((prevVal, currVal, currIndex, array)=> {
    
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8,]
// let res = arr.reduce((prevVal, currVal)=> {
//     return prevVal + currVal
// })
// console.log(res);