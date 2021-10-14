//замыкание

//  через глобальную переменную

// let count = 0
// function counter(){
//     count++
//     return count
// }
// counter()
// counter()
// console.log(counter());

// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }

// let first = counter();
// first()
// first()
// first()
// console.log(first());

//рекурсия
// let x = 0;
// function rec(){
//     if(x <= 10){
//         console.log(x++);
//         rec()
//     }
// }
// rec()

// let arrNums = [1, 2, 3, 4]
// function rec(arr, sum){
//     sum += arr.shift()
//     if(arr.length != 0){
//         sum = rec(arr, sum)
//     }
//     return sum
// }

// console.log(rec(arrNums, 0));

// let request = +prompt('Enter number')
// function recSum(num){
//     if(num === 1) return 1;
//     return num + recSum(num-1)
// }
// console.log(recSum(request));

// function fib(n){
//     if(n > 1){
//         return fib(n-1) + fib(n-2)
//     }
//     else {
//         return n
//     }
// }
// console.log(fib(10));

