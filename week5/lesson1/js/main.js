//методы массивов forEach, map, filter, reduce, indexOf, includes, every, some

//forEach

// let arr = ['bolleane', 34, {}, true]

// for (let i =0; i < arr.length; i++){
//     console.log( arr[i], i, arr);
// } 

// arr.forEach((item, index, array) =>{
//     console.log(item, index, array);
// })

//map

// let arr = [1, 2, 3, 4, 'a', 6];

// let newArr = arr.map((item, index, array) => {
//     // console.log(item, index, array);
//     if(item === 'a'){
//         return 5
//     } 
//     return item    // чтобы возвращались данные массива, а не undefine
// })
// console.log(newArr);

//filter

// let numbers = [32, 2, 43, 10, 15]
// let newArr = numbers.filter((item) => {
//     return item >= 15
// })

// console.log(newArr);

// let films = [
//     {
//         title: 'Оно',
//         genre: 'horror'
//     },
//     {
//         title: 'Эки баатыр',
//         genre: 'comedy'
//     },
//     {
//         title: 'Веном',
//         genre: 'fantasy'
//     }

// ]

// function handFilter (genre) {
//     let filteredArr = films.filter((item) => {
        
//         return item.genre === genre;
//     })
//     console.log(filteredArr);
// }
// handFilter('fantasy')


// reduce

// let arr = [2, 4, 10, 12]

// let res = arr.reduce((prevVal,  currVal, currIndex, array) =>{
//     console.log(prevVal, currVal);
//    return prevVal + currVal
// });

// console.log(res);


//indexOf

// let arr = [true, 1, 0, 'str']


// function cut(elem) {

//     let i = arr.indexOf(elem)
//     console.log(i);
//     arr.splice(i, 1)
// }
// console.log(arr);
// cut(3)
// console.log(arr);

// includes

// let arr = [10,20, 'array']

// let res = arr.includes(2)
// console.log(res);


//some and every

// let users = [
//     {id: 1, name: 'Sanjar'},
//     {id: 2, name: 'Bayel'},
//     {id: 3, name: 'Atai'},
// ];

// // let res = users.some((item) => {
// //     return item.id === 1;
// // });
// // console.log(res);
// let res = users.every((item) => {
//     return item.id === 1;
// });
// console.log(res);

// let arr = [1, 20, 30, -5]

// // let res = arr.every((item) => item > 0);
// // console.log(res);
// let res = arr.some((item) => item > 0);
// console.log(res);

// let users = [
//     {id: 1, name: 'Sanjar'},
//     {id: 2, name: 'Bayel'},
//     {id: 3, name: 'Atai'},
// ];

// // let user = users.find((item) => {
// //     return item.name === 'Atai'
// // })
// // console.log(user);
// let user = users.findIndex((item) => {
//     return item.name === 'Atai'
// })
// console.log(user);

// let cel = [-15, 10, 24, 36, 0]

// let res = cel.map((item) =>{
//     return item * 1.8 + 32
// })

// console.log(res);

// Создать новый список (массив) из массива studentRecords, где будут храниться только студенты, у которых баллы больше 50.
// После отфильтровки начислить каждому студенту по 15 баллов в качестве поощрения.
// В конце посчитать средний балл студентов (используйте метод reduce()).

// let studentRecords = [
// { name: 'John', id: 123, marks: 98 },
// { name: 'Baba', id: 101, marks: 23 },
// { name: 'John', id: 200, marks: 45 },
// { name: 'Wick', id: 115, marks: 75 },
// ]

// let updatedList = studentRecords.filter((item) => {
//     return item.marks > 50
// })
// updatedList = updatedList.map((item) => {
//     item.marks += 15
//     return item
// })
// console.log(updatedList);
// let ave = updatedList.reduce((prev, student) => {
//     console.log(prev, student)
//     return prev + student.marks
// }, 0)
// ave = ave / updatedList.length
// console.log(`srednee ${ave}`);

// let res = 35;
// if (res > 23 && res < 40){
//     console.log('Hello');
// }else{
//     console.log('Goodbye');
// }

// function func (str){
//     let regexp = /[aeiou]/gi
//     return str.match(regexp).length;
// }
// console.log(func('Hello'));

// let task2 = [10, 25, 25, 15, 5, 10]
// let newArr = task2.forEach((item) => {
//     newArr += item
// })

// console.log(newArr);

// let task2 = [10, 25, 25, 15, 5, 10];
// let sum = () => {
//   let sum = 0;
//   task2.forEach((item) => {
//     sum = sum + item;
//   });
//   return sum;
// };
// console.log(sum());

let task3 = [175, 50, 25]
let num = task3.reduce((a, b) => {
    return a - b 
})
console.log(num)