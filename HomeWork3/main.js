// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x;
x = +prompt('enter x');
if (x === 0) {
    console.log('Невірно');
    document.write('<h1>Невірно</h1>');
} else {
    console.log('Вірно');
    document.write('<h1>Вірно</h1>');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time;
time = +prompt('enter number from 0 to 59');
if (time >= 0 && time < 15) {
    console.log('First quarter of an hour');
} else if (time >= 15 && time < 30) {
    console.log('Second quarter of an hour');
} else if (time >= 30 && time < 45) {
    console.log('Third quarter of an hour');
} else if (time >= 45 && time < 60) {
    console.log('Fourth quarter of an hour');
} else {
    console.log('I said from 0 to 59')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

let day;
day = +prompt('Enter today\'s date');
if (time > 0 && time <= 10) {
    console.log('First ten days of the month');
} else if (time > 10 && time <= 20) {
    console.log('Second decade of the month');
} else if (time > 20 && time <= 31) {
    console.log('Third decade of the month');
} else {
    console.log('There are 31 days in a month, if you didn\'t know')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekDay;
weekDay = +prompt('Enter weekday serial number');
switch (weekDay) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let a;
let b;
a = +prompt('Enter first number');
b = +prompt('Enter second number');
if (a > b) {
    console.log('First number are bigger than second');
} else if (a < b) {
    console.log('Second number are bigger than first');
} else if (a === b) {
    console.log('Numbers are the same');
} else {
    console.log('I said number');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let falsy = prompt() || 'default';
console.log(falsy);