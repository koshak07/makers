

// let list = [
//     'milk',
//     'sugar',
//     'salt',
//     'butter',
//     'bread'
// ]

// // console.log(list[0]);

// let [first, second, ...other] = list

// console.log(first, second, other);

// let arr = [
//     [1,3,3,4],
//     [5,6,7,8]
// ]

// let [[a, b, c, d], newArr] = arr

// console.log(a, b, c, d, newArr);
// console.log(a, b, c, d, newArr, other);

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// }

// let {age, name, lastName} = person

// console.log(age, name);

// let obj1 = {
//     subObj: {
//         name: 'Jack'
//     }
// }

// let {subObj: {name}} = obj1
// console.log(name);

// let obj = {
//     arr: [
//         {
//             name: 'Makers'
//         }
//     ]
// }

// let {arr: [{name}]} = obj

// console.log(name);

// function foo ({name}) {
//     console.log(name);
// }

// let person = {
//     name: 'Makers',
//     lastName: 'Bootcamp',
//     age: 2
// };

// foo(person)

// let arr = [1, 2, 3, 4, 5]
// let [,,, four] = arr
// console.log(four);

//spred

// function foo(a, b, c){    // сколько параметров укажешь
//     console.log(a);
// }

// let arr = [1, 2, 3, 4, 5]

// foo(...arr)  //столько сколько укажешь параметров


// let obj1 = {
//     name: 'Kani',
//     color: 'yellow'
// }
// let obj2 = {
//     lastName: 'East'
// }

// let {color} = obj1;
// let newObj = {color, ...obj2}

// console.log(newObj);

// let obj = {
//     name: 'Kani',
//     age: 22,
//     positions: [
//         'Mentor',
//         'Backend-developer',
//         'Frontend-developer',
//         'Bloger'
//     ],
//     dog: {
//         name: 'Oreo',
//         age: 2
//     }
// };


// let {
//     name,
//     age,
//     positions: [
//         firstPos,
//         secondPos,
//         ...otherPos
//     ],
//     dog: {
//         name: nameD,
//         age: ageD
//     }

// } = obj;

// console.log(name, age, firstPos, secondPos, otherPos, nameD, ageD);

// function sayHello({name, age, dog: {name: dogName}}){
//     console.log(`
//     Hello, my name is ${name}
//     I am ${age} y.o.
//     Ihave a dog ${dogName}
//     `);
// }

// sayHello(obj)

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"]
// let [firstName, , titul] = arr;
// console.log(firstName, titul)