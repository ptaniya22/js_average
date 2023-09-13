// console.log() - вывод информацию в консоли браузера
//console.log('Zafar'); // строковый тип данных
//console.log(10); // числовой тип данных
//console.log(true); // логический тип данных
//console.log(false); // логический тип данных

//var imya = 'QQ';
//var age = 24;

// склеивание ( конкатенация)

//var myInfo = 'Я ' + imya + ' мне ' + age + ' лет';

// prompt() - функция которая выводит нам поле для ввода
// alert() - функция которая выводит данные в окошке

//var word = +prompt('Введите кто вы такой?');

//alert(word)

// console.log('10 + 5 = ' + (10 + 5));
// console.log('10 - 5 = ' + (10 - 5));
// console.log('10 * 5 = ' + 10 * 5);
// console.log('10 / 5 = ' + 10 / 5);
// console.log('10 % 5 = ' + 5 % 5);

//askNumber переменная для хранения кол-ва чисел
let askNumber = prompt('Введите количество чисел');
let arr = [askNumber];
let testString = 0;
let average = 0;

let i = 0;
while (i < askNumber) {
  console.log(i);
  testString = 'Введите ' + (i + 1) + 'й эллемент';
  let a = prompt(testString);
  arr[i] = +a;
  average += arr[i];
  console.log(average);
  console.log(i, 'й эллемент массива -', arr[i]);
  i++;
}
average = average / askNumber;
console.log('среднее арифметическое', askNumber, ' чисел =', average);
