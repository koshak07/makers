
// let arrowFunc= ()=> {
//     console.log('Hello World');
// }
// arrowFunc()

// let arrowFunc = () => console.log('hello world');
// arrowFunc()

// let arrowFunc = (arg1, arg2) =>{
//     return arg1 + arg2
// }
// console.log(arrowFunc(5, 10))

// let arrowFunc = (arg1)=> console.log(arg1);
// arrowFunc(5)


// let arrowFunc = (arg1, arg2, arg3) =>{
//     console.log(...arguments);  //нет такого аргумента у стрелочной функции
// }
// arrowFunc(true, 23, 'makers')

// let person = {
//     name: 'John',
//     age: 22,

//     sayHello(){
//         console.log('hello World');
//     },

//     sayName: function(){
//         console.log(`my name is ${this.name}`);
//     },
//     sayAge: function (){
//       console.log(`I am ${this.age} y.o.`)  
//     } 
// }

// person.sayHello()
// person.sayName()
// person.sayAge()

// let person2 = {...person}

// person2.name = 'Kani';
// person2.age = 24;
// person2.sayName();
// person2.sayAge();

// let obj1 = {
//     name: 'Kani',
//     age: 20,
//     obj2: {
//         name: 'Kubat',
//         sayName: () => {
//             console.log(`${this.name}`);
//         }
//     }
// }

// obj1.obj2.sayName()

// let obj = {
//     alert(a){
//         console.log(a + ' obj1')
//     },
//     hello: function (){
//         let obj2 = {
//             alert(a){
//                 console.log(a + ' obj2');
//             },
//             hello2: () => {
//                 this.alert('ALERT')
//             }
//         }
//         obj2.hello2()
//     }
// }
// obj.hello()

// let user = {
//     name: 'John',
//     surname: 'Snow',
//     age: 31,
//     sayHi: () => {
//         console.log('hello word')
//     },
//     sayAge: function(){
//         console.log(this.age);
//     },
//     sayInfo(){
//         console.log(`${this.name} ${this.surname} ${this.age}`);
//     }
// }

// user.sayHi();
// user.sayAge();
// user.sayInfo()

// let showFirstMessage = () => {
//     console.log("Hello World!");
// }
// showFirstMessage();

// let birthday = (name) => {
//     console.log(`happy birthday ${name}`)
// }
// birthday('Nurlan')

// let arrName = ['Max', 'Nur', 'Aidar', 'Vladimir']
 
// let pastCool = () =>{
//     for(let i = 0; i < arrName.length; i++){
//         arrName[i] += ' is cool';
//         console.log(arrName[i]);
//     }
// }
// pastCool()
// решение факториала
// let factorial = (num)=>{
//     if(num ===1) return 1
//     return num *=factorial(num -1)
// }
// console.log(factorial(5))

// let oddNumbers = (n) =>{
//     if(n <= 0) return 1
//     if(n % 2 !==0){
//         console.log(n)
//     }
//     oddNumbers(n-1)
// }
// oddNumbers(10)

// let reverse = (str) => {
//     let mas = str.split('').reverse().join('')
    
//     console.log(mas)
// }
// reverse('JavaScript')

// let sum = 0;
// let str = (arg1, arg2) => {
    
//     for (let i = 0; i <= arg1.length; i++) {
//     if (arg1[i] === arg2) {
//     sum++
//     }
//         }
//     }
// str('JavaScript', 'a')
// console.log(sum);

let count = (array) => {
    let arr = [];
    for (i = 0; i < array.length; i++) {
        console.log(array[i] * 5);
        if (array[i] % 2 === 0) {
            arr.push(array[i]);
        }
    }
    console.log(arr.join());
};
count([1, 2, 3, 4, 5]);






