

// function showMessage(message){
//     console.log(message);
// }
// showMessage('Marers Bootcamp')
// showMessage('javaScript')

// function calcMultiply(a, b){
//    return a *b;
// }
// let res = calcMultiply(2,3);
// console.log(res);


// let showMessage = function(message){
// console.log(message)
// }
// showMessage('Hello world')

// let calcMultiply = function(a, b){
//     return a*b
// }
// console.log(calcMultiply(2, 7))

//Hoisting
// console.log(a);
// console.log(b);
// var a = 'Maikers'
// let b = 'bootcamp'

// function counter(){
//     let count = 10;
    
//     console.log(count);
// }
// counter();

let pesonName = 'Kani';
function func(){
    let personName = 'Kubat';
    function func2(){
        personName = 'Aidai';
        console.log(personName)
    }
    func2()
}

func()