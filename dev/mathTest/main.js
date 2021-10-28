
let btn = document.getElementById('finish')

btn.addEventListener('click', checkTest)
function checkTest(){
    let res = 0;
    let a1 = document.getElementById('q1').value;
    if(a1 === '4'){
        res++
    }
    let a2 = document.getElementById('q2').value;
    if(a2 === '6'){
        res++
    }
    let a3 = document.getElementById('q3').value;
    if(a3 === '10'){
        res++
    }
    let a4 = document.getElementById('q4').value;
    if(a4 === '1'){
        res++
    }

    alert('Количество правильных ответов: ' + res)
}