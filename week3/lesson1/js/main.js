// console.log("Hello world");

// let string = "abcd";
// const number = 10;

// let boolean = true;
// let typeNull = null;
// let typeUndefined = undefined;

// let object = {
//     title: "adidas",
//     color: "green",
//     size: 42,
//     'description-1': "Good shoes"
// }
// console.log(object['description-1']); // для вытаскивания обернутого нужно вместо точки использовать квадратные скобки

// object.size = 37
// let newObject = object;
// newObject.title = 'Nike AirForce-1'
// console.log(newObject);
// console.log(object)

// let firstStr = "js12";
// let secondStr = firstStr;
// secondStr = "js13-fullstack";
// console.log(firstStr);
// console.log(secondStr);

///alert, promt, confirm


// alert("Привет")
// console.log(result)

// let name = prompt("Введите ваше имя")
// console.log('Privet ' +  name);
// let result = confirm('Вам есть 14лет')
// console.log(result)


// let num1 = "10";
// let num2 = 20;
// let sum = num1 + num2;
// console.log(sum);

// console.log(typeof null)

// console.log (10<=10)
// console.log(10 >=11)
// console.log(10 =='10')
// console.log(10 === '10')

// let numb = +prompt('Введите 1-е число')
// let numb1 = +prompt('Введите 2-е число')
// res = numb + numb1
// alert(res)

// let user = {
//     name: "Beknazar",
//     lastName: "Omurbek",
//     age: 23
// }


// console.log('Добро пожаловать ' + user.name + user.lastName + ' на наш сайт')
// console.log(`Добро пожаловать  ${user.name} ${user.lastName} на наш сайт`)

// let obj = {
//     5: 0,
//     "5": 10,
//     5: 333,
//     name: "Askat",
//     name: "Mirbek"
// }
// console.log(obj)
// console.log(obj['5'])


// let list = [1,2,3,4,5, 'hello', {arr:545}, ["first", "second"]]
// console.log(list[6])

// let vis = prompt("Введите высоту")

// console.log(vis * vis * vis)

// let vis = +prompt("Введите длину")
// let shir = +prompt("Введите ширину")
// console.log(2*(vis + shir))

// console.log(true && false)

// console.log(true || false)

// let response = prompt('How old are you?')
// if(response >= 18) {
//     alert('Allowed')
// }else if(confirm('Do you parents allow?')){
//     alert('Okey')
// }

// else {
//     alert('Forbidden')
// }

// let age = prompt('enter your age').toLocaleLowerCase();
// let name = prompt('Enter your name').toLocaleLowerCase();
// if(age >=18 && name === "admin") {
//     alert('Welcome, Admin')
// }else if(age >= 18) {
//     alert('Hello User')
// }
// else {
//     alert('Forbidden')
// }

// let sum = 5 + 5;
// switch(sum){
//     case 6: alert('Malo')
//     break
//     case 7: alert('Ne pravilno')
//     break
//     case 8: alert('Pravilno')
//     break
//     case 9: alert('Mnogo')
//     break
//     default: alert('net takogo')
// }

// let age = parseInt(prompt('enter your age'));
// console.log(age);
//     switch(age) {
//         case 15: alert('watch naruto')
//         break;
//         case 18: alert('watch shrek')
//         break;
//         case 20: alert('watch avengers')
//         break;
//         default: alert('watch harry potter')
// //     }
// let age = prompt('Enter your age')
// age >= 18 ? alert('Allowed') : alert('Forbidden')

// let a = 6;
// if(a > 5){
//     a += 5
// }else {
//     a -= 2
// }
// console.log(a);

// let a = 5;
// a>5 ? a+= 5 : a-= 2;
// console.log(a);
let age = prompt('Enter your age')
if(age >= 1 && age <= 13){
    alert('watch mulan')
}else if(age >=14 && age <= 17){
    alert('watch Harry Potter')
}else if(age >= 18){
    alert('watch horror')
}else{
    alert('You entered wrong age')
}