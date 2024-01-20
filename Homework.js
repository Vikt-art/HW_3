/*1. Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)*/

const hamburger = 4;
const fries = 1

if (hamburger&&fries){
    console.log("We ate")
} else {
    console.log ("We are going to another cafe")
}

/* 2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.*/

let number;

if (number>=1000&&number<=1900){
    console.log("Value in the range")
} else {
    console.log ("Value is not in a range")
}
/* 3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.*/

let number;

if (!(number >= 1000 && number <= 1900)) {
    console.log("Value is not in a range");
} else {
    console.log("Value in the range");
}

let number;

if (number< 1000 || number>1900) {
    console.log("Value is not in a range");
} else {
    console.log("Value in the range");
}


/* 4. За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.*/

let season;
if (season == 1) {
    console.log("Spring");
} else if (season == 2) {
    console.log("Summer");
} else if (season == 3) {
    console.log("Autumn");
} else if (season == 4) {
    console.log("Winter");
} else {
    console.log("Not a season");
}

/* 5. Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
(не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.*/

let a;
let b;
let c;
if (a > b) {
    if (b > c) {
        console.log("Average", b);
    } else if (a > c) {
        console.log("Average", c);
    } else {
        console.log("Average", a);
    }
} else {
    if (a > c) {
        console.log("Average", a);
    } else if (b > c) {
        console.log("Average", c);
    } else {
        console.log("Average", b);
    }
}

/* 6.Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.*/

let dayNumber = 7;

switch(dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Not a dayNumber");
}
/*7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.*/

let operation
let number1
let number2
let result;

switch (operation) {
    case "+":
        result = number1 + number2;
        console.log("Plus:", result);
        break;
    case "-":
        result = number1 - number2;
        console.log("Minus", result);
        break;
    case "*":
        result = number1 * number2;
        console.log("Multiply", result);
        break;
    case "/":
        result = number1 / number2;
        console.log("Division", result);
        break;
    default:
        console.log("Not a operation");
}
/*8.   Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.*/

let Arr = [];

for (let i = 1; i <= 5; i++) {
    Arr.push(i);
}
/*9.  Напишіть 2 цикли.
   За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
   За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
*/

//first
for (let i = 1; i <= 9; i++) {
    if (i % 2 === 0) {
        myArray.push(i);
    }
}
//second
for (var i = 1; i <= 9; i++) {
    if (i % 2 !== 0) {
        myArray.push(i);
    }
}

/*10. Оголоcіть та ініціалізуйте змінну total = 0.
Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.*/

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}
/*11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.*/
const arr = [ [1, 2], [3, 4], [5, 6] ];

for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];

    for (let j = 0; j < subArray.length; j++) {
        console.log(subArray[j]);
    }
}
/*12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
    Використайте для цього вкладені цикли for.

Наприклад:
    const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54

const arr = [[1, 2], [3, 4], [5, 6, 7]];

let product = 1;

// тут має бути ваше рішення*/
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
    }
}
console.log(product);

/*13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.*/
var word = "Viktoriia";
var vowels = /[aeiou]/gi;

var result = word.replace(vowels, "");

console.log(result);

/*14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закінченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
*/
var meters = 1000;
var kilometers;

if (meters >= 1000) {
    kilometers = meters / 1000;
    console.log(meters + " метрів це " + kilometers.toFixed(3) + " кілометра");
} else {
    console.log(meters + " метрів це " + meters + " метра");
}