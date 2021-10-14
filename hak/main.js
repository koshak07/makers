// let a = 5;
// function rec(arg) {
//   if ((arg = 0)) return;
//   arg - 1;
//   function f(rec) {
//     return console.log(arg);
//   }
// }
// let res = rec();
// res(a);

// function checkEm(arg) {
//   if (arg === /[a-z] @ [a-z]\.[a-z]/gi) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// checkEm("ewme@erw.com");

let arr = ["hello", 25, true, {}];
function rec(arg) {
  if (arr.length === 0) return;
  let i = arr[0];
  function a(rec) {
    i++;
    return console.log(arg.i);
  }
}

rec(arr);
