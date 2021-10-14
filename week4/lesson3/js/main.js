//Стрелочные функции arrow function

// const arrowFunc = () => {
//     console.log('Arrow');
// };
// arrowFunc();

// const arrowFunc = () => console.log('Hello');
// arrowFunc()

// const arrowFunc = (arg) => console.log(arg);
// arrowFunc(10)

// function func() {
//     console.log(...arguments);
// }
// func('str', 10, true)


// const func =()=> {
//     console.log(...arguments);  //не работает
// }
// func('str', 10, true)

// let km = +prompt ('Enter km')
// const converter = (arg) => {
//     let m = arg * 1000;
//     console.log(`${m} m.`);
// }
// converter(km)

//методы объектов

// console.error('method')

// let user = {
//     name: 'Ilyas',
//     sayHello: function(arg){             // function expression
//         console.log(`Hello ${arg}`);
//     },
//     sayHello(arg) {                     // function declaration
//         console.log(`Hello ${arg}`);
//     },
//     sayHello: (arg) => {                   // arrow function
//         console.log(`Hello ${arg}`);
//     }
// }

// user.sayHello('Damir');

//thhis

// room: 19;

// function sum (){

// }


// console.log(this);

// let obj = {
//     title: 'js77',
//     sayContext() {
//         console.log(this);
//     },
//     sayContextArrow: () => {
//         console.log(this);
//     },
//     func(){
//         let arrowFunc = () =>{
//             console.log(this);
//         }
//         arrowFunc();
//     }
// }
// obj.sayContext();
// obj.sayContextArrow();
// obj.func(); 

// let user = {
//     name: 'Erlan',
//     sayName: function() {
//         console.log(this.name);
//     },
// }
// let newUser = {...user};
// newUser.name = 'islam';
// user.sayName();
// newUser.sayName();

// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'US12345678',
//     baggage: 20,
//     getInfo (){
//         console.log(`Passenger ${this.firstName} ${this.lastName}. Passport number is ${this.passportNum}. Maximum laggeg weidht is ${this.baggage} kg`);
//     },
//     setBaggege(arg){
//         this.baggage = arg;
//     }
// }
// passenger.setBaggege(30);
// passenger.getInfo()


// Дан объект user. Напишите метод byTicket для этого объекта.
// При вызове метода количество билетов должно увеличиваться на единицу, при условии,
// что у пользователя будет достаточно средств на балансе.
// Также, с баланса должна сниматься стоимость билета (400).
// Если на счету недостаточно средств вывести соответствующее сообщение.


// let user = {
// name: 'Sam',
// age: 17,
// balanse: 700,
// tickets: 0,
// byTicket (count){
//     if(this.balanse >= 400 * count){
//         this.tickets += count;
//         this.balanse-=400 * count;
//         console.log(`Вы успешно купили ${count} билет(ов)`);
//     }
//     else{ 
//         let avaTicket = Math.floor(this.balanse / 400)
//         if (avaTicket > 0){
//           this.balanse -= 400 * avaTicket
//           this.tickets+= avaTicket  
//             console.log(`У вас недостачно купить ${count} вы успешно купили ${avaTicket} билет(ов)`)
//         }
//         else {
//             console.log('Недостаточно средств')
//         }
//         }
//     },
//     addToBallance(sum){
//         this.balanse += sum;
//         console.log('Вы успешно пополнили баланс');
//     },
//     showBalanse (){
//         console.log(`Ваш баланс ${this.balanse}`)
//     }
// }


// user.byTicket(5)
// console.log(user);
// user.addToBallance(1000);
// user.showBalanse()
// user.byTicket(3)
// console.log(user);


