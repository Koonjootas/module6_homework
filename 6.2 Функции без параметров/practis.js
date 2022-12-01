// Задание 1.
/*
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
*/
let arraySecond = [6, 1, 2, "три", true, 4, 0, null];
function getTypeNumbers () {
let arrayEven = arraySecond.filter(item => item % 2 == 0 && item !== null && item !== 0  );
let arrayOdd = arraySecond.filter(item => item % 2 !== 0 && item !== null && item !== 0  );
let arrayNull = arraySecond.filter(item => item === 0 || item === null );

console.log(arrayEven);
console.log(arrayOdd);
console.log(arrayNull);
};

getTypeNumbers ();