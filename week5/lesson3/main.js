//Поверхностное и глубокое копирование объектов

// let user = {
//     name: 'Aisultan',
//     age: 20,
//     languages: {
//         english: '2 level',
//         french: '3 level'
//     }
// }
// // при поверхностном копирование второй и более уровней вложенности объектов не копируются - копируется ссылка на них
// // let newUser = user  //копировали ссылку на объект
// // let newUser = Object.assign({}, user) //создавали новый обьект поверхностное копирование
// // let newUser = {...user}  // тоже поверхностное копирование спред оператор

// newUser.name = 'Aibek'
// newUser.languages.english = '6 level'

// console.log(user);
// console.log(newUser);

// let product = {
//     title: 'T-Shirt',
//     price: {
//         s: 3000,
//         m: 4000,
//         l: 5000,
//     },
// };

// let newProduct = JSON.parse(JSON.stringify(product)) //глубокое копирование
// newProduct.price.s = 10000
// console.log(product);
// console.log(newProduct);

// let str = JSON.stringify(product)
// let obj = JSON.parse(str)
// console.log(obj);

//Деструктуризация

// let student ={
//     name: 'Melis',
//     lastName: 'Arturbaev'
// }

// let name = 'Sanjar'
// let {name: studentName, lastName} = student;
// console.log(studentName, lastName);

// let arr = ['true', 10, null, 'str', 77, false]
// let [first, , third, ...rest] = arr
// console.log(first, third, rest);

// let obj = {
//     name: 'Market Place',
//     frameworks: ['React', 'Django API'],
//     versions: {
//         legasy: [2011, 2012, 2013],
//     },
// };

// let {frameworks: [frontEndFramework]} = obj;
// console.log(frontEndFramework);
// let {versions: {legasy: [, year]} } = obj
// console.log(year);
// let {name: projectName} = obj
// console.log(projectName);

// let product = {
//     // title: 'Pencil',
//     price: 100,
// }
// let {title = 'Default title'} = product;
// console.log(title);

// let user = {
//     name: 'John',
//     age: '22'
// };

// let {name, age} = user;
// console.log(name, age);

// function showNameAndPhone({name, phone}){
//     console.log(name, phone);
// }

// let obj = {
//     name: 'Shergazy',
//     phone: 777222333
// }
// showNameAndPhone(obj)

// function func ([first, second]) {
//     console.log(first, second);
//     // arg.forEatch((i) => {
//     //     console.log(i);
//     // });

// }
// func([1,2,3,4,5])

// function showUser ({name = 'name', lastName, age}){
//     console.log(name, lastName, age);
// }
// let obj = {
//     // name: 'Iskhak',
//     lastName: 'Boobekov',
//     age: 24,
// };

// showUser(obj)

// const courseCatalogMetadata = [
//   {
//     title: "The Hobbit, or There and Back Again",
//     description:
//       "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
//     texts: [
//       {
//         author: "J. R. R. Tolkien",
//         price: 120,
//         ISBN: "912-6-44-578441-0",
//       },
//     ],
//   },
// ];

// let [
//   {
//     texts: [{ ISBN: seriya }],
//   },
// ] = courseCatalogMetadata;

// console.log(seriya);

// let obj = { name: "John", age: "22" };
// let { name: name = prompt("Enter name"), age: age = prompt('Enter age') } = obj;

// function func(name = "имя", surname = "фамилия", age = "возраст") {
//   console.log(name, surname, age);
// }
// func({ n: "Luck", a: 22 });
