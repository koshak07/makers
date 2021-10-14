//while, do while

// let arr = [1, 2, 3, 4, 5]

// let i = 0;
// while(i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// let num = 1;
// while(num <= 100){
//     if(num % 2 === 0){
//         console.log(num);
//     }
//     num++
// }

// let i = 50;
// do{
//     console.log(i, "Сработает один оаз полюбому");
// }while(i < 40)


//for

// for(let i = 0; i <= 20; i++){
//     console.log(i);
// }

// let arr = ['Arstan', 'Beksultan', 'akai']
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     if (arr[i] === 'Beksultan'){
//       alert(arr[i])  
//       continue
//     }
//     console.log('код ниже');
// }

// let users = [
//     {
//         name: 'Askat'
//     },
//     {
//         name: 'Sanjar'
//     },
//     {
//         name: "Vladimir"
//     },
//     {
//         name: "Erlan"
//     }
// ]
// for(let i = 0; i < users.length; i++)
// document.write(`<p>имя ${users[i].name}</p>`)
// console.log(users);

//for..of, for..in

// for(let value of users) {
//     console.log(value);
// }

// for(let value in users){
//     // console.log(value)// вытащит индексы
//     console.log(users[value])
// }

// let user = {
//     name: 'Atai'
// }
// // можно перебирать и объекты и массивы
// for(let key in user){
//     console.log(key);
// }
// // можно перебирать только массивы
// for(let value of user){
//     console.log(value);
// }

// let number = 5;
// console.log(number++);
// console.log(number--);
// console.log(++number);

// let arr = [true, 7, 2, 'Hello', NaN]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
    
//     if(typeof arr[i] ==='number' &&arr[i].toString() !=='NaN'){  
//         sum += arr[i]
//     }
// }
// console.log(sum);

// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]
// let pol = 0;
// let otr = 0;
// let zero = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 0){
//         zero++
//     }
//     else if (arr[i] > 0){
//         pol++
//     }
//     else if(arr[i] < 0){
//         otr++
//     }
// }
// console.log(pol, otr, zero)

// let bool = true;
// let count = 0;
// let sum = 0;

// while(bool){
//     let num = +prompt('dai nomer')
//     if (num ===0 || num ===null){
//         bool = false
//     }
//     count++
//     sum += num
// }
// console.log(`sum: ${sum}, count ${count}, avg${sum/count}`)

// function checkTask(arr) {
//     for (let item of arr) {
//         console.log(`${item[0]}: ${item[1]}`)
//     }
// }

// let s = 0
// i=9
// bool = true
// if(i%2===0){
//     console.log("Четные числа не бывают простыми")
// }
// for (let x = 3; x < i; x+=2) {
//     if (i % x === 0) {
//         bool = false
//     }
//     if(bool===false){
//         break
//     }
// }
// if (bool === true) {
//     console.log("Простое число")
// }


