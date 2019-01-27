// -------------------------- Home work --------------------------
// -------------------------- Chernov Andrew Vasylyovych --------------------------
//----Преобразование примитивов. Задачи:
/**
 * Чему равно а, почему?
 * let a = 0 || 'string';
 * let a = 1 && 'string';
 * let a = null || 25;
 *  let a = null && 25;
 * let a = null || 0 || 35;
 * let a = null && 0 && 35;
 * Что отобразится в консоли. Почему?
 * 12 + 14 + '12'
 * 3 + 2 - '1'
 * '3' + 2 - 1
 * true + 2
 * +'10' + 1
 * undefined + 2
 * null + 5
 * true + undefined
 */
//---Чему равно а, почему?
//  || запинается на «правде»,
//  && запинается на «лжи».
let a = 0 || "string"; //----string-(true)
console.log("|| запинается на «правде»", a);
a = 1 && "string"; //----string-(true) и (true) выведится то что справа (true)
console.log("|| запинается на «правде»", a);
a = null || 25; //----25 (true)
console.log("|| запинается на «правде»", a);
a = null && 25; //----null (false),не выводит 25 так как левый оперант не (true) a (false)
console.log("&& запинается на «лжи»", a);
a = null || 0 || 35; //----35 (true)
console.log("|| запинается на «правде»", a);
a = null && 0 && 35; //----null (false)
console.log("&& запинается на «лжи»", a);
//---Что отобразится в консоли. Почему?
a = 12 + 14 + "12"; //---2612 склеивание строки
console.log("склеивание строки", a);
a = 3 + 2 - "1"; //---4 при минусе  строка cтанет числом
console.log("при минусе  строка cтанет числом-", a);
a = "3" + 2 - 1; //---31 склеивание строки
console.log("склеивание строки", a);
a = true + 2; //---3 true-всегда = 1
console.log("true-всегда = 1 ", a);
а = +"10" + 1; //---31 
console.log("", a);
a = undefined + 2; //---NaN
console.log("NaN", a);
a = null + 5; //---5 null-представляющим нулевое или «пустое»
console.log("null-представляющим нулевое или «пустое»", a);
a = true + undefined; //---NaN
console.log("NaN", a);
//--------------------If else. Задачи:
/**
 * 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
 * 2. Используя if, записать условие:если переменная равна нулю, присвоить ей 1;если меньше нуля - строку “less then zero”;если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
 * 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
 * 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
 * 5. Дан следующий код:let product = {  name: “Яблоко”, price: “10$”};let min = 10; // минимальная цена,let max = 20; // максимальная цена.Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
 */
//---1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let h = 'hidden';
if (h === 'hidden') {
    h = 'visible';
} else {
    h = 'hidden';
}
console.log(h);
//---2. Используя if, записать условие:если переменная равна нулю, присвоить ей 1;если меньше нуля - строку “less then zero”;если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись). 
h = 0;
if (h === 0) {
    h = 1;
} else if (h < 0) {
    h = 'less then zero';
} else if (h > 0) {
    h *= 10; //<--- краткая запись---->полная(h = h *10)
}
console.log(h);
//---3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
};
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}
//---4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.Написать условие если у item есть поле discount и там есть значение то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = {
    name: 'Intel core i7',
    price: '100$',
    discount: '15%'
};
//if (item.discount !== undefined && item.discount !== '') {
if (item.discount) {
    item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.price) * parseFloat(item.discount) / 100) + '$';
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}
//---5. Дан следующий код:let product = {  name: “Яблоко”, price: “10$”};let min = 10; // минимальная цена,let max = 20; // максимальная цена.Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10;
let max = 20;
product.price = parseFloat(product.price);
if (product.price >= min && product.price <= max) {
    console.log(product.name);
} else {
    console.log('товаров не найдено');
}
//----Тернарный оператор. Switch case. Задачи:
/**
 * 1. Записать в виде switch case следующее условие:if (a === ‘block’) {console.log(‘block’)} else if (a === ‘none’) {console.log(‘none’)} else if (a === ‘inline’) {console.log(‘inline’)} else {console.log(‘other’)}Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
 *  2.Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
 */
//---1. Записать в виде switch case следующее условие:if (a === ‘block’) {console.log(‘block’)} else if (a === ‘none’) {console.log(‘none’)} else if (a === ‘inline’) {console.log(‘inline’)} else {console.log(‘other’)}Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

a = 'inline';
switch (a) {
    case 'block':
        console.log(a);
        break;
    case 'none':
    case 'inline':
        console.log(a);
        break;
    default:
        console.log('other');
}
//---2.Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.
// console.log('before', h);
h = 'hidden';
h = (h === 'hidden') ? 'visible' : 'hidden';
// console.log('hidden/visible', h);
let x = 0;
x = (x === 0) ? 1 : (x < 0) ? 'less then zero' : x * 10;
// console.log('amount', x);
(car.age > 5) ? car.needRepair = true: car.needRepair = false;
// console.log('car', car.needRepair);
