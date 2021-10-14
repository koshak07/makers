//Arrays
// let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

//length
// console.log(numArr.length);

//Доступ к элементам массива
// console.log(numArr[3]);
// console.log(numArr[numArr.length-1]);

const guests = [
    {
        name: 'Alice'
    },
    {
        name: 'John'
    },
    {
        name: 'Emily'
    },
    {
        name: 'Raychel'
    }
]

let newGuest = {
    name: 'Alex'
}

//push
guests.push(newGuest)

// console.log(guests);

// pop
guests.pop()
// console.log(guests);

let iportantGuest = {
    name: 'Jack'
}
//unshift
guests.unshift(
    {name: 'Tom'},
    iportantGuest,
    {name: 'Bill'});
    
    //shift
    guests.shift();
    console.log(guests);

    //slice указывается индекс начала и индекс конца
    // let a = guests.slice(2, 3);
    // console.log(a);

    //splice указывается индекс начала и сколько шт(если ноль, то не удалится), можно добавить указав после запятой переменную с массивом можно вытащить в переменную

    guests.splice(3, 1)  
    console.log(guests);  

    let arrAge = [3, 90, 12, 34, 22,9, 7];
    arrAge.sort((a, b) => a-b)
    console.log(arrAge);