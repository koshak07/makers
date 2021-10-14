//Native js events
// DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Loaded");
// });

// let btn = document.querySelector("button");
// 2-й способ
// btn.onclick = () => {
//   alert("Cliked");
// };

//3-й способ
// btn.addEventListener("click", (e) => {
//   alert("Cliked");
// });
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

//online, offline

// window.addEventListener("offline", () => {
//   console.log("Internet non");
// });
// window.addEventListener("online", () => {
//   console.log("Internet here");
// });

//mousemove - любое движение мышью
// document.addEventListener("mousemove", (e) => {
//   console.log(e);
// });
//mousedown -при нажатии на мышь
// document.addEventListener("mousedown", (e) => {
//   console.log(e);
// });
//mouseup - при отпускании мыши
// document.addEventListener("mouseup", (e) => {
//   console.log(e);
// });

//input срабатывает на каждое изменение инпута

// let inp = document.querySelector("input");
// let h3 = document.querySelector("h3");
// // inp.addEventListener("input", (e) => {
// //   h3.innerText = e.target.value;
// //   console.log(e.target.value);
// // });

// //past не дает вставить
// inp.addEventListener("paste", (e) => {
//   alert("Copy");
// });

// //copy не дает скопировать
// inp.addEventListener("copy", (e) => {
//   alert("dont copy");
// });

//resize срабатывает при изменении расширения экрана

// window.addEventListener("resize", (e) => {
//   console.log(e);
// });

//submit - у тега form срабатывает при нажатии на enter

// let inp = document.querySelector("input");
// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let text = inp.value;
//   inp.value = "";
//   let li = document.createElement("li");
//   li.innerText = text;
//   ul.append(li);
// });

//keypress - любое нажатие на клавишу
//keydown - при удержании нажатой клавиши
//keyup - при отпускании нажатой клавиши

// document.addEventListener("keypress", (e) => {
//   console.log(e);
// });

// document.addEventListener("keydown", (e) => {
//   console.log(e);
// // });
// document.addEventListener("keyup", (e) => {
//   console.log(e);
// });

// let span = document.querySelector(".first-span");
// let btnColor = document.querySelector(".change-color");
// let btnSize = document.querySelector(".change-size");

// btnColor.addEventListener("click", () => {
//   let red = Math.ceil(Math.random() * 255);
//   let green = Math.ceil(Math.random() * 255);
//   let blue = Math.ceil(Math.random() * 255);
//   span.style.color = `rgb(${red}, ${green}, ${blue})`;
// });
// btnSize.addEventListener("click", () => {
//   span.style.fontSize = `${Math.ceil(Math.random() * 100)}px`;
// });

// let input = document.querySelectorAll(".inp");
// console.log(input);
// input[0].placeholder = "Enter";

// let a = document.querySelectorAll("a");
// a.forEach((i) => {
//   i.style.textDecoration = "name";
// });

// let links = document.querySelectorAll("a");
// a.forEach((i) => {
//   i.setAttribute("href", "https://makers.kg");
//   i.setAttribute("target", "blank");
// });

// let list = document.querySelectorAll("ul");
// let count = 1;

// function sheep() {
//   list[0].innerHTML += `<li>${count} -sheep</li>`;
//   count++;
//   if (count === 21) {
//     clearInterval(x);
//   }
// }
// let x = setInterval(sheep, 500);
