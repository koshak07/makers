//OOP

// class User {
//     constructor(name, password, type){
//         this.name = name
//         this.password = password
//         this.type = type
//     }

// }

// let admin1 = new User('Asan', 12345, 'admin')
// let user1 = new User('Aktan', 'qwerty', 'user')
// console.log(admin1);
// console.log(user1);


//наследование
// class Cars {
//     constructor(brand, type, price){
//         this.brand = brand
//         this.type = type
//         this.price = price

//     }
// }

// class Mersedes extends Cars{
//     constructor(brand, type, price, year, color){
//         super(brand, type, price)
//         this.year = year
//         this.color = color
//     }
// }

// let w211 = new Mersedes ('mers', 'sedan', 15000, 2010, 'black')
// console.log(w211);


// class Account {
//     constructor(name, password){
//         this.name = name
//         this.#password = password
//     }
//     #password
//     getPassword(){
//         return this.#password
//     }
//     setNewPassword(newPassword){
//         this.#password = newPassword
//     }
// }

// let account1 = new Account('Ilias', 'qwerty')
// account1.setNewPassword('jsfs13')
// console.log(account1.getPassword());


// class Dog {
//     constructor(name){
//         this.name = name
//     }
//     voice(){
//         console.log('Gavvv');
//     }
// }

// class Cat {
//     constructor(name){
//         this.name = name
//     }
//     voice(){
//         console.log('meiwww');
//     }
// }

// let dog = new Dog('Pes')
// dog.voice()
// let cat = new Cat('Koshka')
// cat.voice()

// всплытия событий
// let span = document.querySelector('span')
// span.addEventListener('click', (e)=>{
//     console.log(e.target, e.currentTarget);
//     e.stopPropagation() //остановить всплытия
// })


// class Worker {
//     constructor(name, lastName, rate, days) {
//       this.name = name;
//       this.lastName = lastName;
//       this.rate = rate;
//       this.days = days;
//     }
//     getSalary() {
//       return this.days * this.rate;
//     }
//   }
//   let worker = new Worker('Ivan', 'Familiya', 1000, 24);
//   console.log(worker.getSalary());