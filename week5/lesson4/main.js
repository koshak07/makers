// let arr = [
//   { id: 1 },
//   { id: 1 },
//   { id: 1 },
//   { id: 2 },
//   { id: 2 },
//   { id: 3 },
//   { id: 3 },
//   { id: 3 },
// ];

// function uniq(arg) {
//   let uniqArr = [];
//   arg.forEach((item) => {
//     let check = uniqArr.filter((elem) => item.id === elem.id);
//     // console.log(check);
//     if (check.length === 0) {
//       uniqArr.push(item);
//     }
//     console.log(uniqArr);
//   });
//   return uniqArr;
// }
// let newArr = uniq(arr);
// console.log(newArr);

// let arr = [1, 1, 1, 2, 3, 3, 4, 5, 5];

// let newArr = [];
// arr.forEach((item) => {
//   let check = newArr.filter((elem) => {
//     console.log("Это элем ", elem, "Это item ", item);
//     return elem === item;
//   });
//   if (check.length === 0) {
//     newArr.push(item);
//   }
// });
// console.log(newArr);

// let nums = [10, 21, 15, 5];

// let newArr = nums.map((item) => {
//   return item ** 2;
// });
// console.log(newArr);

// let student = {
//   name: "Aibek",
//   courses: {
//     javascript: {
//       price: 200,
//       duration: 3,
//     },
//     pyton: {
//       position: "intro",
//       lesson: 1,
//     },
//   },
// };

// let {
//   courses: {
//     pyton: { position },
//   },
// } = student;

// console.log(position);

// let user = {
//   name: "Igor",
//   age: 25,
//   friends: ["Ilyas", "Kostya"],
//   children: [
//     { name: "Nikolay", age: 3 },
//     { name: "Petr", age: 10 },
//   ],
//   parents: [
//     { name: "Viktor", age: 55 },
//     {
//       name: "Vasilisa",
//       age: 53,
//       friends: {
//         close: ["Shergazy", "Aleksandra"],
//         notClose: [],
//       },
//     },
//   ],
//   jobs: {
//     frontend: {
//       language: "JavaScript",
//     },
//     backend: {
//       languages: {
//         java: {
//           version: 8,
//           frameworks: {},
//           spring: {
//             version: 1,
//           },
//         },
//       },
//     },
//   },
// };
// let {
//   jobs: {
//     backend: {
//       languages: {
//         java: {
//           spring: { version },
//         },
//       },
//     },
//   },
// } = user;

// console.log(version);

// let {
//   children: [, firstChild],
// } = user;

// console.log(firstChild);

// let {
//   parents: [
//     ,
//     {
//       friends: {
//         close: [, friend],
//       },
//     },
//   ],
// } = user;

// console.log(friend);

// function sayAge(age) {
//   let days = age * 365;
//   console.log(days);
// }

// const sayAge = (age) => {
//   let days = age * 365;
//   console.log(days);
// };
// sayAge(35.9);

// let calcSquare = function () {
//   console.log(arguments);
//   let [first, second] = arguments;
//   console.log(first, second);
// };
// calcSquare(3, 5);

// let arr = [-100, 100, 300, -500];

// let newarr = arr.filter((i) => {
//   return i < 0;
// });
// console.log(newarr);

// let gamer = {
//   psevdoName: "Tuda-Suda",
//   games: ["Gta", "Dota 2", "Cs:Go"],
//   showUserGames() {
//     this.games.forEach((i) => {
//       console.log(i);
//     });
//     // console.log(this.games);
//     console.log(this.psevdoName);
//   },
// };
// gamer.showUserGames();

// let arr = [20, -15, 30];
// let count = 0;
// let newArr = arr.reduce((a, b) => {
//   count++;
//   return a * b;
// });

// console.log(newArr);
// console.log(count);

// let str = "";
// function firstFunc() {
//   return function (word) {
//     return (str += word);
//   };
// }
// let func = firstFunc();
// console.log(func("hello"));
// console.log(func(" world"));
// console.log(func("!"));

// function func(word) {
//   let str = "";
//   return (str += word);
// }
// console.log(func("hello"));
// console.log(func("world"));
// console.log(func("!"));

// function rec(start) {
//   console.log(start);
//   if (start >= 30) return;
//   rec(start + 1);
// }
// rec(0);
// let i = 0;
// while (i <= 30) {
//   console.log(i);
//   i++;
// }

// let i = 31;
// do {
//   console.log(i);
// } while (i <= 30);

// console.log((true && true && false) || true);
// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = arr.filter((i) => {
//   if (i % 2 === 0) return i;
// });

// console.log(newArr);
