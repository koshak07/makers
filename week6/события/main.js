// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   console.log("Hello");
// });
// btn.addEventListener("click", handler2);
// btn.onclick = () => {
//   console.log("Hiiii");
// };

// // function handler() {
// //   console.log("Hello");
// // }

// function handler2() {
//   console.log("hi");
// }

// btn.removeEventListener("click", handler2);

// let h1 = document.querySelector("h1");
// let inp = document.querySelector("#inp");

// inp.addEventListener("change", (event) => {
//   console.log(event.target.value);
//   h1.innerText = event.target.value;
//   event.target.value = "";
// });

// inp.addEventListener("input", (event) => {
//   console.log(event.target.value);
//   h1.innerText = event.target.value;
// });

// inp.addEventListener("keydown", (event) => {
//   console.log(event.target.value);
//   h1.innerText = event.key;
// });

// let btn = document.querySelector("#btn");
// let inp = document.querySelector("#inp");
// let div = document.querySelector("#container");

// let addElemToCont = function () {
//   let newElem = document.createElement("div");
//   if (inp.value === "") return;
//   newElem.innerText = inp.value;
//   div.append(newElem);
//   inp.value = "";
// };

// btn.addEventListener("click", addElemToCont);
// inp.addEventListener("change", addElemToCont);

// document.addEventListener("mousemove", () => {
//   console.log("mouse");
//   //   console.log(`x=${e.clientX}, y=${e.clientY}`);
// });

// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");

// btn1.addEventListener("click", () => {
//   console.log("clicked");
// });

// let event = new Event("click");
// // btn1.dispatchEvent(event);

// btn2.addEventListener("click", () => {
//   btn1.dispatchEvent(event);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Loaded");
// });

// let div = document.getElementById("container");
// document.addEventListener("keydown", (e) => {
//   if (event.code === "KeyB" && event.shiftKey) {
//     div.style.backgroundColor = "black";
//   } else if (event.code === "KeyG") {
//     div.style.backgroundColor = "grey";
//   } else if (event.code === "KeyR") {
//     div.style.backgroundColor = "red";
//   } else if (event.code === "KeyG") {
//     div.style.backgroundColor = "green";
//   } else if (event.code === "KeyB") {
//     div.style.backgroundColor = "blue";
//   } else if (event.code === "KeyW") {
//     div.style.backgroundColor = "white";
//   }
// });

// let btn = document.getElementsByTagName("button")[0];
// let i = 1;
// btn.addEventListener("click", (e) => {
//   i *= 2;
//   console.log(i);
// });

// let div = document.getElementById("container");
// div.addEventListener("click", function(e){
//   console.log(`x=${e.offsetX}, y=${e.offsetY}`);
// });
// let inp = document.getElementsByTagName("input")[0];
// inp.addEventListener("input", () => {
//   document.body.style.backgroundColor = inp.value;
// });
// function check() {
//   let valid = true;

//   if (document.contact_form.contact_name.value == "") {
//     alert("Пожалуйста заполните поле 'Ваше имя'.");
//     valid = false;
//   }

//   return valid;
// }

// let inp = document.getElementById("btn1");
// inp.addEventListener("click", function check() {
//   if (inp.value === "") {
//     alert("Пожалуйста заполните поле 'Ваше имя'.");
//   } else {
//     console.log("pushed");
//   }
// });
// let but = document.querySelector("button");
// let inp = document.querySelector("input");
// but.addEventListener("click", (e) => {
//   if (inp.value === "") {
//     alert("Пожалуйста заполните поле 'Ваше имя'.");
//   } else {
//     console.log(`pushed${inp.value}`);
//   }
// });
