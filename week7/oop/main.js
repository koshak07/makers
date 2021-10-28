// let person1 ={
//     name: 'John',
//     lastName: 'Snow',
//     age: 29,
//     sayHello(){
//         console.log(`hello! My name is ${this.name} ${this.lastName}`);
//     }
// }

// console.log(person1);
// person1.sayHello()
// let person2 = 

// function Person(name, lastName, age){
//     this.name = name
//     this.lastName = lastName
//     this.age = age
// }

// Person.prototype.sayHello = function(){
//     console.log(`hello! My name is ${this.name} ${this.lastName}`)
// }
// Person.prototype.sayAge = function(){
//     console.log(`i am ${this.age} y.o.`);
// }

// let person1 = new Person('john', 'snow', 29)
// let person2 = new Person('Emili', 'Brown', 19)
// console.log(person1);
// console.log(person2);
// person1.sayHello()
// person1.sayAge()

// class Person{
//     constructor(name, lastName, age){
//         this.name = name
//         this.lastName = lastName
//         this.age = age
//         Person.count++ //покажет количество обьектов, созданных от класса, доступен только через класс
//     }
//     sayHello(){
//         console.log(`hello! My name is ${this.name} ${this.lastName}`)
//     }
//     sayAge(){
//             console.log(`i am ${this.age} y.o.`)
//     }
//     static countOfObj(){
//         console.log(Person.count); //static делает метод статическим
//     }
// }
// Person.count = 0



// let person1 = new Person('john', 'snow', 29)
// console.log(person1);
// person1.sayAge()
// person1.sayHello()
// console.log(Person.count);
// Person.countOfObj()

// function Person(name, lastName, age){
//     this.name = name
//     this.lastName = lastName
//     this.age = age
// }

// Person.prototype.sayHello = function(){
//     console.log(`hello! My name is ${this.name} ${this.lastName}`)
// }
// Person.prototype.sayAge = function(){
//     console.log(`i am ${this.age} y.o.`);
// }
// class Mentor extends Person {
//     constructor(name, lastName, age, position, type){
//         super(name, lastName, age)
//         this.position = position
//         this.type = type
//     }
//     work(){
//         console.log(`I am a ${this.type} ${this.position}`);
//     }
// }

// let mentor1 = new Mentor('john', 'Snow', 29, 'Mentor', "js")

// console.log(mentor1);
// mentor1.sayHello()
// mentor1.sayAge()
// mentor1.work()
// let person1 = ('john', 'snow', 31)

// class Animal {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     saySound(){
//         console.log('I am an animal');
//     }
//     static sayBye(){
//         console.log('This is static - Bye');
//     }
// }

// let dog = new Animal('Rex', 3)
// console.log(dog);
// dog.saySound()

// class Dog extends Animal{
//     constructor(name, age, voice){

//         super(name, age)
//         this.voice = voice
//     }
//     sayVoice(){
//         console.log(`${this.voice}`);
//     }
// }
// let dog = new Dog('Rex', 3, 'Gavvv')
// console.log(dog);
// dog.saySound()
// dog.sayVoice()

// class Cat extends Animal{
//     constructor(name, age, type){
//         super(name,age)
//         this.type = type
//     }
//     sayType(){
//         console.log(`${this.type}`);
//     }
// }

// let cat = new Cat('fanta', 2, 'british')
// cat.sayType()
// cat.saySound()
// console.log(cat);

// class User {
//     constructor(password, username){
//         this.#password = password
//         this.username = username
//     }
//     #password
//     getPassword(username){
//         if (username ===this.username){

//             return this.#password
//         }
//         else{
//             return 'forbiden'
//         }
//     }
//     setPassword(oldPassword, newPassword, userName){
//         if(userName === this.username && oldPassword === this.#password){
//             this.#password = newPassword
//             console.log('password changed');
//         }
//         else {
//             console.log('Forbiden');
//         }
//     }
// }

// let user1 = new User('qwerty', 'john777')
// // console.log(user1.getPassword('john777'));
// user1.setPassword('qwerty', 'asdf', 'john777')
// console.log(user1.getPassword('john777'));

// class Dog {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayVoice(){
//         console.log('Gavvv');
//     }
// }

// class Cat{
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
//     sayVoice(){
//         console.log('Meoww!!');
//     }
// }

// let dog = new Dog('Rex', 2)
// dog.sayVoice()

// let cat = new Cat('fanta', 3)

// cat.sayVoice()

// class Car{
//     constructor(brand){
//         this.brand = brand
//     }
//     go(){
//         console.log('I am going');
//     }
// }

// class Ship{
//     constructor(brand){
//         this.brand = brand
//     }
//     go(){
//         console.log('I am moving');
//     }
// }

// let car = new Car('toyota')
// car.go()

// let ship = new Ship('Some ship')
// ship.go()