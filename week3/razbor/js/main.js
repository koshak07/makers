// let name = prompt('Enter name');
// let surName = prompt('Enter surName');
// let age = prompt('Enter age');

// console.log(name && surName && age ? `'Your name:' ${name}, age: ${age}, surName ${surName}` : `Enter ${name ? '' : 'name'} ${surName ? '' : 'surName'} ${age ? '' : 'age'}`);

// let login = prompt('enter login');

// if(login === 'admin'){
//     let pasw = prompt('enter pasw')
//     if (pasw === 'password') {
//         alert('welcome admin')
//         if (pasw !== 'password') {
//             alert('wrong passwod')
//         }
// }  
// }else if(login !== 'admin') {
// alert('i dont know you')
// }


// let arr1 = [12, 45, 67, 56];
// let arr2 = [2, 105, 10, 122];
// let arr3 = [];



// for(let i = 0; i < arr1.length; i++){
//     sum = arr1[i] + arr2[i]
//     arr3.push(sum)
// }

// console.log(arr3)

// let num1 = +prompt('cislo1')
// let num2 = +prompt('chislo2')
// let sum = 0;
// let sum1 = 0;

// if(num1 > num2){
//     num3 = num1;
//     num2 = num3
// }
// for(let i =num1; i < num2; i++){
//     if(i%2 ===1)
//     sum +=i
// }
// console.log(sum)

// let str1 = 'kaban';
// let str2 = 'banka';
// let arr1 = str1.split('').sort();
// let arr2 = str2.split('').sort();
// for(let i = 0; i < arr1.length; i++){
//     if(arr1[i] === arr2[i]){
//         console.log('являются анаграммами')
//     }
//     else {
//         console.log('Не являются анаграммами');
//     }
// }

// // console.log(arr1)
// // console.log(arr2)


// string.isUpperCase

// let word = 'ananas'
// let i = word.slice(0, 1)
// if(i === 'a'){
    
//      console.log('да')
//  }
//  else {
//      console.log('нет')
//  }
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     // console.log(sum)
// }
// console.log(sum)


// Задание №1
// Четное или нечетное число. Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число». Если пользователь вводит четное число, то вывести «"Число " + num + " четное"», если нечетное: "Число " + num + " нечетное".


let num = +prompt('Введите целое число');
if (num >= 1 && num <= 9) {
  console.log(`Число ${num} однозначное положительное`);
} else if (num > 10 && num <= 99) {
  console.log(`Число ${num} двузначное положительное`);
} else if (num >= 100 && num <= 999) {
  console.log(`Число ${num} трехзначное положительное`);
} else if (num <= -1 && num >= -9) {
  console.log(`Число ${num} однозначное отрицательное`);
} else if (num <= -10 && num >= -99) {
  console.log(`Число ${num} двузначное отрицательное`);
} else if (num <= -100 && num >= -999) {
  console.log(`Число ${num} трехзначное отрицательное`);
}
