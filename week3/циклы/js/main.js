//for, while, do..while, for..in, for..of

// let arr = [1, 2, 3, 4, 5];

// // for(period){body/action}

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] * 2);
// }

// let data = ['Kubat', 'Aktan', 'Kani', 'Adilet'];
// for(let i = 0; i < data.length; i++){
//     if(data[i] === 'Aktan'){
//         console.log(`${data[i]} not invited`);
//         continue // продолжит работу цикла for кани -> адилет
//         //break -завершит работу цикла for
//     }
//     console.log(`${data[i]} you are invaited`);
// }

//while

// let i = 0;
// while(i <= 3){
//     console.log(i);
//     i++
// }

//do...while
// let i = 10;
// do{
//     console.log(i);
//     i--
// }while(i > 5)

//for..in
// let obj = {
//     name: 'Kani',
//     age: 22, 
//     isHuman: true,
//     languages: ['Pyton', 'Javascript']
// }

// for(i in obj){
//     console.log(obj[i]);
// }

//for..of

// let arr = ['Pyton', 'Javascript', 'PHP', 'Java'];
// for(i of arr){
//     console.log(i);
// }
// let arr = ['а', 'б', 'в'];
// arr.push(4, 3, 5, 5);
// console.log(arr);
// let i = 45;
// while(i <= 670){
//     if(i % 10 ===0){
//         console.log(i);
//     }
//     i++
// }

let obj = ['Paul', 'John', 'George', 'Ringo', 'Yoko']
// for (let i = obj[0]; i <= 4; i++) {
//     console.log(i)
// }
while(obj[0] <= obj[4]){
    console.log(obj);
    obj++
}