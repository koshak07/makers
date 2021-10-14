//Dom, селекторы native Js

// let h1 = document.getElementsByTagName("h1");
// h1[0].style.color = "green";

// let p = document.getElementsByClassName("paragraph");
// console.log(p);
// // p[0].style.fontSize = "24px";
// for (i of p) {
//   i.style.fontSize = "24px";
// }

// let span = document.getElementById("first-span");
// span.style.fontWeight = 700;

// let h1 = document.querySelector("h1");
// // console.log(h1);
// h1.style.color = "blue";
// let p = document.querySelectorAll(".paragraph");
// p.forEach((i) => {
//   i.style.fontSize = "25px";
// });

// let span = document.querySelector("#first-span");
// span.style.background = "lightblue";

// let p = document.querySelector(".paragraph");
// // p.classList.toggle("paragraph");
// p.classList.add("text");
// // p.classList.remove("paragraph");
// p.classList.replace("paragraph", "para");
// console.log(p.classList.value);

// let div = document.querySelector("div");
// let btn = document.createElement("button");
// btn.innerText = "Save";
// div.append(btn);

// let lastP = document.getElementById("last-p");
// let text = lastP.innerText;
// // lastP.innerText += " coding is easy";
// lastP.innerHTML += " <strong class=str>coding is easy</strong>";

// let strong = document.querySelector("strong");
// console.log(strong);

// let allTags = document.querySelectorAll("*");
// console.log(allTags);

// let tags1 = document.getElementsByTagName("a");
// let tags2 = document.querySelectorAll("a");
// let a = document.createElement("a");
// document.body.append(a);
// console.log(tags1);
// console.log(tags2);

// let listItem = document.querySelectorAll("li");
// let listItemTag = listItem[0].outerHTML;
// console.log(listItemTag);
// listItem.forEach((i, index) => {
//   if (index % 2 === 0) {
//     i.style.backgroundColor = "blue";
//   }
// });

// let h3 = document.querySelector("h3");
// h3.outerHTML = `<h2>${h3.innerText}</h2>`;

// let second = document.querySelectorAll("p");
// second.forEach((i) => {
//   i.classList.toggle("second-title");
// });

// let h2 = document.querySelector("h2");
// // let res = h2.hasAttribute("class");
// h2.setAttribute("class", "h2-title");
// h2.removeAttribute("id");
// h2.removeAttribute("class");
// // console.log(res);
