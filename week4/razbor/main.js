// let nestedObject = {
//   data: {
//     info: {
//       stuff: {
//         thing: {
//           moreStuff: {
//             magicNumber: 44,
//             something: "foo2",
//           },
//         },
//       },
//     },
//   },
// };



// let search = function (obj, value){
// for (let key in obj){
//     if (typeof obj [key] === 'object'){
//        return search(obj[key], value)
//     }
//     if (obj[key] === value){
//         return true
//     }
    
// }
// return false;
// }

// console.log(search(nestedObject, 44));

// let raf = [1, 0, 3]
// let novak = [2, 2, 1]

// function checkScore (pl1, pl2) {

//     let count1 = 0
//     let count2 = 0
//     pl1.map((item) => {
//         if(item > pl2[index]){
//             count1++
//         }
//         else {
//             count2++
//         }
//     });
//     return count1 > count2 ? `Raf won ${count1}` : `Nov won ${count2}`
// }

// console.log(checkScore(raf, novak));


//  let items = [
//   ["phone", "blue", "pixel"],
//   ["computer", "silver", "lenovo"],
//   ["phone", "gold", "iphone"],
// ];

// let ruleKey = "color";
// let ruleValue = "silver";
// function checkRules(items, ruleKey, ruleValue){
//     if(ruleKey === 'type'){
// for(let let i = 0; i < items.length; i++){

// }
//     }
//     else if( ruleKey === 'color'){

//     }
//     else if (ruleKey === 'brand'){

//     }
// }

// function calcStep (num){
//     let count = 0
//     while(num > 0){
//         if(num % 2 === 0){
        
//             num = num / 2;
//             count++
//         }
//         else{
//             num -= 1
//             count++
//         }
//     }
//     return count
// }
// console.log(calcStep(14));


// let string = 'hello world this is Dayana'
// function fixSentens(str, num){
//     let arr = str.split(' ').splice(0, num);
//     console.log(arr.join(' '));

// }
// fixSentens(string, 3 );
// let nums = [1, 2, 3, 4, 4, 3, 2, 1]
// let n = 4
// function newArr (arr, num){
//     let arr3 = arr.splice(0, num)
//     for(let i = 0; i < num*2; i+=2){
//         arr3.splice(i+1, 0, arr[i/2])
//     }

//     //или так
//     // for (let i = 0; i < num; i++){
//     //     arr3.push(newArr[i]);
//     //     arr3.push(arr[i]);
//     // }
//     return arr3

// }
// console.log(newArr(nums, n));

// let result = 15;
// if (result > 23 && result < 40) {
//   console.log('Hello');
// } else {
//   console.log('Goodbye');
// }

// let arr9 = [1, 2, 3, 4, 5, 6]
// function calc (arr) {
//   let newArr = []
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//           newArr.push(arr[i])
//           sum += arr[i]
//       }
//   }
//   newArr.join
//   console.log(`четных числа ${newArr} сумма ${sum}`)
// }
// calc(arr9)