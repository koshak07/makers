//jqwery

// let allelems = $("*");
// console.log(allelems);

// let h1 = $("h1");
// console.log(h1);

// h1.css("fontSize", "24px");

//by class
// let month = $(".paragr");
// console.log(month);

// let liTags = $("li");
// liTags.css("color", "blue");
// let thirdLiTag = $("li:nth-child(3)"); // по порядковому номеру
// // let thirdLiTag = $("li:eq(2)"); //по индексу
// thirdLiTag.css("color", "green");

// let first = $("li:first-child");
// first.css("fontWeight", "700");

// let input = $("input");
// let dis = $("input:disabled");
// dis.val("dont work");
// console.log(dis);

// let liTags = $("li");
// liTags.addClass("list-items");
// liTags.toggleClass("list-items");
// liTags.toggleClass("active");
// liTags.removeClass("list-items");
// let res = liTags.hasClass("active");
// console.log(res);

// let divWClass = $("div:not(.block");

// console.log(divWClass);

// let paragr = $(".text");
// let text = paragr.text();
// console.log(text);

// paragr.text(paragr.text() + " hello");
// paragr.html("<strong>JSFS 13</strong>");

// let div = $("#users");

// let users = [
//   {
//     name: "Alibek",
//     age: 25,
//   },
//   {
//     name: "Sasha",
//     age: 15,
//   },
//   {
//     name: "Turat",
//     age: 20,
//   },
// ];

// users.forEach((i) => {
//   div.append(`
//         <p>Имя: ${i.name},
//         <br> Возраст: ${i.age}</p>
//         <strong>14:55</strong>
//     `);
// });

// let google = $("a[href='google.com']");
// console.log(google);

// let p = $("p");
// p.text(new Date());

// let google = $("a:eq(0)");
// let href = google.attr("href"); // если передать второе значение, то он заменит значение
// google.removeAttr("href");
// google.attr("id", "global");
// console.log(href);

// let href = google.prop("href");
// console.log(href);

// let liTags = $("li");
// liTags.each((index, elem) => {
//   if (index % 2 !== 0) {
//     $(elem).css("background", "red");
//   }
// });

// let btnStart = document.querySelector(".start");
// let btnStart = document.querySelector(".start");
// let btnReset = document.querySelector(".reset");
// let car1 = document.querySelector(".car1");
// let car2 = document.querySelector(".car2");
// let winner = document.querySelector(".winner");
// console.log(btnStart);

// btnStart.addEventListener("click", () => {
//   let ranNum1 = Math.floor(Math.random() * (450 - 400) + 400);
//   let ranNum2 = Math.floor(Math.random() * (450 - 400) + 400);

//   car1.style.transform = `translateX(${ranNum1}px)`;
//   car2.style.transform = `translateX(${ranNum2}px)`;
//   setTimeout(() => {
//     if (ranNum1 > ranNum2) {
//       winner.innerText += "Car #1";
//     } else {
//       winner.innerText += "Car #2";
//     }
//   }, 100);
// });

// btnReset.addEventListener("click", () => {
//   winner.innerText = "Winner is: ";
//   car1.style.removeProperty("transform");
//   car2.style.removeProperty("transform");
// });
