// Задание 3.

/*
Написать функцию, которая принимает число как аргумент и возвращает функцию,
которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function sum(x) {
  return function(y) {
      return x + y;
  };
}

let f = sum(5);
/*
f = function sum(x) {
  return function(y) {
      return 5 + y;
  };
}
*/



console.log( f(0), f(1), f(2) );

console.log( sum(1)(2), sum(2)(2), sum(40)(2) );



