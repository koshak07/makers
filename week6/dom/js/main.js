// console.log(typeof document.getElementById("title"));
// let title = document.getElementById("title");
// let list = document.getElementsByTagName("ul");
// console.log(list);

// let items = document.getElementsByClassName("item");

// let inp = document.getElementsByName("inp-name");
// console.log(inp);

// let title = document.querySelector("#title");
// let list = document.querySelectorAll("ul");
// let items = document.querySelectorAll(".item");
// let inp = document.querySelectorAll('[name="inp-name"]');
// console.log(inp);

// let items = document.getElementsByClassName("item");

// let items2 = document.querySelectorAll(".item");
// let list = document.getElementsByTagName("ul");
// list[0].innerHTML += '<li class="item">New Elem</li>';

// // console.log(list);

// for (let i = 0; i < items2.length; i++) {
//   console.log(items2[i]);
// }

// let example = document.getElementById("hello");
// // console.log(example.innerHTML);
// example.innerText = "New Data";
// console.log(example.innerText);

// let h2s = document.querySelectorAll("h2");
// // let h2s = document.getElementsByTagName("h2"); //нельзя применять методы массивов
// // console.log(h2s);
// h2s.forEach((item) => {
//   console.log(item);
//   item.innerText = "Hello World!";
// });

// let items = document.querySelectorAll(".item");
// console.log(items);
// items.forEach((item, index) => {
//   //   item.innerHTML = `${index + 1} ${item.innerHTML} `;
//   //   item.style.color = "red";
//   //   item.style.backgroundColor = "green";
//   if (index % 2 !== 0) {
//     item.style.backgroundColor = "pink";
//   }
// });

//создание элемента
// let newElem = document.createElement("div");
// newElem.innerHTML = "<span>I am a new element</span>";

// //добавление элемента

// container[0].appendChild(newElem);
// newElem.style.color = "brown";
// newElem.style.fontSize = "42px";

// let container = document.querySelectorAll(".container");
// let elem1 = document.createElement("div");
// let elem2 = document.createElement("div");
// let elem3 = document.createElement("div");

// elem1.innerText = "Elem 1";
// elem2.innerText = "Elem 2";
// elem3.innerText = "Elem 3";

// container[0].append(elem1); //push
// container[0].prepend(elem2); //unshift
// container[0].appendChild(elem3);

// //удаление элементов

// container[0].removeChild(elem1);

// //добавить и удалить классы

// elem1.classList.add("foo");
// elem1.classList.remove("foo");
// elem1.classList.toggle("foo"); //если нет добавит, если нет то удалит

// let date = new Date().getHours();
// console.log(date);

// if (date > 21) {
//   document.body.classList.add("theme-dark");

// }
// else{
//     document.body.classList.add()
// }

// Import stylesheets
// import './style.css';

// DOM. Классная работа

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.
// let h3s = document.getElementsByTagName('h3');
// for (let i of h3s) {
//   i.innerText = '!!!';
// }

// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.
// for (let i of h3s) {
//   i.style.color = 'green';
// }
// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;
// let list = document.getElementsByTagName('ul');
// for (let i = 1; i <= 30; i++) {
//   let newItem = document.createElement('li');
//   newItem.innerText = `${i} овечка`;
//   list[0].append(newItem);
// }

// Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.

// let spans = document.querySelectorAll('span');
// spans.forEach((item) => {
//   item.classList.add('active');
// });
