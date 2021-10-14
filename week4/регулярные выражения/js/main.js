

// const str = 'Hello! My name is Kani. I am 22 years old and I live in Bishkek for 12 eyars привет';

// const regexp = /Kani/;
// const regexp = /\d\d/g;
// const regexp = /\w/g;
// const regexp = /\W\W/
// const str = 'Hello! We are Alan and Ulan.'
// const regexp = /[AU]lan/g;

// const str = 'Today is 20.10.2020';
// const regexp = /\d\d.\d\d.\d\d\d\d/
// const regexp = /\d{2}.\d{2}.\d{4}/ или так

// const regexp = /\./
// const result = str.match(regexp);
// console.log(result)

// let str = 'We see you. we need you'
// let pattern = /we/gi;
// console.log(str.replace(pattern, 'I'));

// let str = prompt('Enter word: ')
// let regexp = new RegExp(/a-zA-Z/, 'g');
// console.log(regexp.test(str));

// let str = prompt('Enter word: ')

// let regexp = new RegExp(/\d+/, 'g')

// let str = prompt ('Enter weight product: ')
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi');
// console.log(regexp.test(str));

// let str = 'Name: Jack, LastName: Smith';

// let newArr = [];
// for(let i =0; i < str.length; i++){
//     if (str[i].toLocaleLowerCase() !== 'a'){
//         newArr.push(str[i])
//     }
//     else newArr.push('*')
// }
// let newStr = newArr.join('')
// console.log(newStr);

//или

// console.log(str.replace(/a/gi, '*'));

// let str = prompt('Enter your phone number: ')
// let regexp = new RegExp(/^\+996\d{9}/, 'g');
// // console.log(regexp.test(str));

// if (regexp.test(str){
//     alert('Correct')
// }
// else{
//     alert('wrong')
// }

// let str = 'ae1ea aeea a3544a a1a axxa axxxa'

// // console.log(str.replace(/aaa$/, '!'))

// // console.log(str.replace(/^aaa/, '!'))

// console.log(str.replace(/ae+a/g, 'many'))

// // Import stylesheets
import './style.css';

// RegExp. Домашнее задание.

// Задание №1
// Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит последнее 'aaa' на '!'.
// Пример:
// input: 'aaa aaa aaa'
// output: 'aaa aaa !'

// let str = 'aaa aaa aaa'

// console.log(str.replace(/aaa$/, '!'))

// Задание №2
// Дана строка 'aaa aaa aaa'. Напишите регулярку, которая заменит первое 'aaa' на '!'.
// Пример:
// input: 'aaa aaa aaa'
// output: '! aaa aaa'

// let str = 'aaa aaa aaa';
// console.log(str.replace(/^aaa/, '!'));

// Задание №3
// Дана строка 'a1a a2a a3a a4a a5a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними одна цифра и замените их на знак $.
// Пример:
// input: 'a1a a2a a3a a4a a5a aba aca'
// output: '$ $ $ $ $ aba aca'

// let str = 'a1a a2a a3a a4a a5a aba aca'

// console.log(str.replace(/a\da/g, '$'))

// Задание №4
// Дана строка 'a1a a22a a333a a4444a a55555a aba aca'. Напишите регулярку, которая найдет строки, в которых по краям стоят буквы 'a', а между ними любое количество цифр и замените их на слово Hy.
// Пример:
// input: 'a1a a22a a333a a4444a a55555a aba aca'
// output: 'Hy Hy Hy Hy Hy aba aca'

// let str = 'a1a a22a a333a a4444a a55555a aba aca'

// console.log(str.replace(/a\d+a/g, 'Hy'))

// Задание №5
// Дана строка 'aAXa aeffa aGha aza ax23a a3sSa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - маленькие латинские буквы, не затронув остальных. Замените их на слово Good.
// Пример:
// input: 'aAXa aeffa aGha aza ax23a a3sSa'
// output: 'aAXa Good aGha Good ax23a a3sSa'

// let str = 'aAXa aeffa aGha aza ax23a a3sSa'
// console.log(str.replace(/a[a-z]+a/g, 'Good'))

// Задание №6
// Дана строка 'ae1ea aeea a3544a a1a axxa axxxa'. Напишите регулярку, которая найдет строки следующего вида: по краям стоят буквы 'a', а между ними - или буква 'e' любое количество раз или по краям стоят буквы 'a', а между ними - буква 'x' любое количество раз. Замените их на слово many.
// Пример:
// input: 'ae1ea aeea a3544a a1a axxa axxxa'
// output: 'ae1ea many a3544a a1a many many'

// let str = 'ae1ea aeea a3544a a1a axxa axxxa'
// console.log(str.replace(/ae+a|ax+a/g, 'many'))

// Задание №7
// Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.
// Пример:
// input: '10 6 3 2'
// output: '100 36 9 4'

// const str1 = '10 6 3 2'.replace(/\d+/g, function (match) {
// 	return match * match;
// });
// console.log(str1);

// Задание №8
// Дана строка с целыми числами. Найдите числа, стоящие в кавычках и увеличьте их в два раза.
// Пример:
// input: "2aaa'3'bbb'4'"
// output: "2aaa'6'bbb'8'"

// let str1 = "2aaa'3'bbb'4'".replace(/\d+(?=')/g, function (str) {
// 	return str * 2;
// });
// console.log(str1);

// Задание №9
// Дана строка '23 + 35 ='. Числа могут быть любыми. Выведите на экран результат операции.
// Пример:
// input: '23 + 35 ='
// output: '23 + 35 =58'

// let arr = '23 + 35 = '.replace(/(\d+)\s\+\s(\d+)\s= /g, function (sum, sum1, sum2) {
// 	let res = parseInt(sum1) + parseInt(sum2);
// 	return sum + res;
// });
// console.log(arr);

// Задание №10
// С помощью test определите, что год находится в интервале от 1900 до 2100 с помощью одного только регулярного выражения.
// Пример:
// 1)  input: '1955'
//     output: true

// 2)  input: '2200'
//     output: false

// console.log(/^(19\d\d|20\d\d|2100)$/.test('1955'));
// console.log(/^(19\d\d|20\d\d|2100)$/.test('2200'));

// Задание №11
// С помощью test определите, что переданная строка является корректным временем вида '12:59', '23:41', '00:12', '00:00', '09:15'. Время '24.00', '25.00', '12.60', '12.93', '41.93' является некорректным.
// Пример:
// 1)  input: '09:15'
//     output: true

// 2)  input: '25.00'
//     output: false

// console.log(/^([01]\d|2[0-3]):[0-5]\d$/.test('21:00'));
// console.log(/^([01]\d|2[0-3]):[0-5]\d$/.test('29:00'));

// Задание №12
// С помощью test определите, что переданная строка является доменом. Примеры доменов: site.ru, site.com, my-site.com.
// Пример:
// 1)  input: 'google'
//     output: false

// 2)  input: 'google.com'
//     output: true

// let bool = /^([a-z.-_]+\.[a-z]{2,3})$/.test('site.ru');
// console.log(bool);

// Задание №13
// Удалите одной регуляркой все повторяющиеся слова из строки.
// Пример:
// 1)  input: 'dsf xxx xxx sd'
//     output: 'dsf xxx sd'

// 2)  input: 'dsf xxx xxx xxx sd'
//     output: 'dsf xxx sd'

// let input = 'dsf xxx xxx xxx sd'
// let res = input.replace(/\b(\w+)\b(?:\s+\1\b)+/g, "$1"); 
// console.log(res)


// Задание №14
// Напишите программу на JavaScript для подсчета количества слов в строке с помощью регулярного выражения.
// Примечание:
// - Удалите пробелы из начальной и конечной позиции.
// - Преобразовать 2 или более пробелов в 1
// Пример:
// input: 'this string has five words'
// output: 5



// Задание №15
// Напишите функцию JavaScript для печати целого числа с запятыми в качестве разделителей тысяч.
// Пример:
// 1)  input: '1000'
//     output: '1,000'

// 2)  input: '10000000000'
//     output: '10,000,000,000'
