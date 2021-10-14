//jQuery

//ready
$(document).ready(() => {
  console.log("DOM загружен");
});

//click

// let btn = $("button");
// btn.on("click", () => {
//   console.log("Hi");
// });

// let btn = $("button");
// function sayHello() {
//   console.log("Hello");
// }
// btn.on("dblclick", sayHello);

//focus

// let inp = $("input");
// inp.on("focus", () => {
//   console.log("here focus");
// });

//blur

// проверка инпута на значение
// inp.on("blur", () => {
//   console.log("not focus");
//   if (!inp.val()) {
//     inp.css("border", "2px solid red");
//   } else {
//     inp.css("border", "2px solid green");
//   }
// });

//input

// inp.on("input", (e) => {
//   console.log(e.target.value);
// });

//select можно применить только к инпутам и текст ареа

// let inp = $("input");
// inp.on("select", (e) => {
//   console.log(e.target.value);
// });

//получение выделенного текста
// let strong = $("strong");
// let p = $("p");

// p.on("mouseup", (e) => {
//   let selectedText = window.getSelection().toString();

//   strong.text(selectedText);
// });

//hide, show, toggle

// let img = $("img");
// let btnHide = $("#btn-hide");
// let btnShow = $("#btn-show");
// let btnToggle = $("#btn-toggle");

// btnHide.on("click", () => {
//   img.hide(2000); //указывается в милисекундах
// });

// btnShow.on("click", () => {
//   img.show(2000); //указывается в милисекундах
// });

// btnToggle.on("click", () => {
//   img.toggle(1500); //указывается в милисекундах
// });

//fadeIn, fadeout, fadeTo, fadeToggle

// let img = $("img");
// let btnFadeOut = $("#btn-hide");
// let btnFadeIn = $("#btn-show");
// let btnFadeTo = $("#btn-to");
// let btnFadeToggle = $("#btn-toggle");

// btnFadeOut.on("click", () => {
//   img.fadeOut(1000);
// });
// btnFadeIn.on("click", () => {
//   img.fadeIn(1000);
// });
// btnFadeToggle.on("click", () => {
//   img.fadeToggle(1000);
// });

// btnFadeTo.on("click", () => {
//   img.fadeTo(1000, 0.5); //принимает милисикунды и прозрачность
// });

// let btnShowModal = $(".show-modal");
// let btnCloseModel = $(".my-modal button");
// let modal = $(".modal");
// let myModal = $("my-modal");
// let h3 = $(".my-modal h3");
// let p = $(".my-modal p");

// function showModal() {
//   modal.fadeIn(1000).css("display", "flex");
// }
// btnShowModal.on("click", showModal);

// function closeModal() {
//   modal.fadeOut(1000);
// }

// btnCloseModel.on("click", closeModal);

// modal.on("click", (e) => {
//   if (e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
//     closeModal();
//   }
// });

// //range input

// let range = $("#range");
// let img = $("img");
// range.on("change", (e) => {
//   let value = e.target.value;
//   img.fadeTo(500, value);
// });
