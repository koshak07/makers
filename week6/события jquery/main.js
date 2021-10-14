// $("#btn").on("click", () => {
//   alert("clicked");
// });

// $(document).ready(() => {
//   $("#btn").click(() => {
//     alert("Clicked");
//   });
// });

// $(window).on("mousemove", (e) => {
//   console.log(e);
// });
// $(window).mousemove((e) => {
//   console.log(e);
// });

// $(".defoult-btn").on("click", () => {
//   $(".buttons").append('<button class="delete">Delete</button>');
//   //   $(".delete").on("click", () => {
//   //     console.log("cliked");
//   //   });
// });

// $(".buttons").click(() => {
//   console.log("cliked");
// });

// let title = $("h1");
// let welcome = $(".welcome");
// let h3 = $("#title");
// let inp = $('[name="inp-name"]');

// title.style.color = 'red' // в натив js
// title.css("color", "red");  // в jquery
// welcome.css("background-color", "pink");

// welcome.classList.add("exemple"); // в натив js
// welcome.addClass("example1 example2"); // в jquery(можно несколько сразу разделяя пробелом)

// console.log(welcome.hasClass("welcome"));

// welcome.removeClass("example2");

// h3.append(" World");
// h3.prepend(" hello ");

// title.prependTo(h3); //помещает элемент внутрь элемента

//можно обращаться без объявления переменной
// $(".center").before('<h3 class="new">New Element</h3>');
// $(".center").after('<h3 class="new">New Element</h3>');

// let result = confirm("are you 18 y.o.?");

// if (result) {
//   $("h1").css("display", "block");
// }

// $("p").empty(); //очищает содержимое тэга
// $("p").remove(); //удаляет тэг

// $("body").html("<h1>Makers Bootcamp</h1>"); // изменяет тэг body, удаляя все содержимое
// $("body").after("<div class='container'></div>");

// let clonedElem = $("body").clone();
// clonedElem[0].children[0].innerText = "Modified";
// console.log(clonedElem);

// $(".container").append(clonedElem);

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// let result = num1 + num2;
// $("body").html(`<h1>${result}</h1>`);

// function sum() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt("Enter second number");
//   let result = num1 + num2;
//   $("body").html(`<h1>${result}</h1>`);
// }
// function mul() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt("Enter second number");
//   let result = num1 * num2;
//   $("body").html(`<h1>${result}</h1>`);
// }
// function sub() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt("Enter second number");
//   let result = num1 - num2;
//   $("body").html(`<h1>${result}</h1>`);
// }
// function div() {
//   let num1 = +prompt("Enter first number");
//   let num2 = +prompt("Enter second number");
//   let result = num1 / num2;
//   $("body").html(`<h1>${result}</h1>`);
// }

// 2) все HTML-элементы strong и окрасьте их в зеленый цвет

// let strong = $("strong");
// strong.css("color", "green");

// 3) найдите все HTML-элементы em и добавьте им класс .selected

// let em = $("em");
// em.addClass(".selected");

// $(".block").fadeOut(2000);
// $(".block").fadeIn(2000);
// $(".block").hide(2000);
// $(".block").show(2000);

// $(".block").fadeOut(2000).delay(3000).show(2000);

// $("p").click((e) => {
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);
//   if (e.target !== this) {
//     return;
//   }

//   console.log("p cliked");
// });
// $("div").click((e) => {
//   //   console.log(e.target);
//   //   console.log(e.currentTarget);
//   if (e.target !== this) {
//     return;
//   }
//   console.log("div cliked");
// });
// $("button").click((e) => {
//   console.log(e.currentTarget);
//   //   e.stopPropagetion(); //прервет остальные события
//   //   e.stopImmediatePropagation(); //прервет остальные события есть баги у этого метода
//   if (e.target !== this) {
//     return;
//   }

//   console.log("btn cliked");
// });

$("button").on("click", (e) => {
  e.preventDefault();
  $("h1").text("Makers Bootcamp");
});
