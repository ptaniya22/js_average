//округление до сотых
var rounded = function (number) {
  return +number.toFixed(2);
};
//----------------

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
average = rounded(average / askNumber);

console.log('среднее арифметическое', askNumber, ' чисел =', average);
testString = 'среднее арифметическое ' + askNumber + ' чисел = ' + average;
alert(testString);
