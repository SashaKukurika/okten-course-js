// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (string, num) => {
    let str = '';
    for (let i = 0; i < string.length; i += 3) {
        str += `${string.slice(i, num)},`;
        num += 3;
    }
    return str;

}
document.writeln(cutString('наслаждение', 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

const delete_characters = (str, length) => str.slice(0, length);

document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
let str2 = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insert_dash = (str) => str.replaceAll(' ', `-`).toUpperCase();

document.writeln(insert_dash(str2));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let str3 = 'joker one love';

const firstToUpperCase = (str) => str[0].toUpperCase() + str.slice(1);
console.log(firstToUpperCase(str3));


// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

const normalizeStr = (str) => str.replaceAll(/[-._]/g, ' ').replace(/ +(?= )/g, '');
console.log(normalizeStr(n1));
console.log(normalizeStr(n2));
console.log(normalizeStr(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const randomArr = () => {
    const arr = [];
    for (let i = 0; i < 50; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
};

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log(randomArr().sort(function (a, b) {
    return a - b;
}));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
// залишивши тільки парні числа (без 0!)

console.log(randomArr().filter(value => value % 2 === 0 && value !== 0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let str4 = 'Каждый охотник желает знать';

const capitalize = (str) => {
    const wordsArr = str.split(' ');
    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i][0].toUpperCase() + wordsArr[i].substring(1);
    }
    return wordsArr.join(' ');
}
console.log(capitalize(str4));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

const validEmail = (emailAddress) => {
    if (emailAddress.indexOf('@') > 0) {
        if (emailAddress.lastIndexOf('.') > emailAddress.indexOf('@') + 2) {
            return console.log('It is good email');
        } else {
            return console.log('It is bad email');
        }
    }
}
validEmail('someemail@gmail.com');
validEmail('someeMAIL@gmail.com');
validEmail('someeMAIL@i.ua');
validEmail('some.email@gmail.com');


// - є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort(function (a, b) {
    return a.modules.length - b.modules.length;
}));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о"
let str5 = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

const count = (str, stringSearch) => {
    let numOfSearch = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === stringSearch) {
            numOfSearch++;
        }
    }
    return numOfSearch.toString();
}
document.writeln(count(str5, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str6 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

const cutString2 = (str, n) => str.split(' ', n).join(' ');
console.log(cutString2(str6, 5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let bookArr = [{
    title: 'The Churchill factor',
    pageCount: 6222,
    genre: ['Biography'],
    authors: ['Boris']
},
    {
        title: 'Surgeon',
        pageCount: 105,
        genre: ['Thriller', 'Detective'],
        authors: ['Tess']
    },
    {
        title: 'Angels and demons',
        pageCount: 321,
        genre: ['Detective'],
        authors: ['Dan', 'Alex']
    },
    {
        title: 'Angels',
        pageCount: 3241,
        genre: ['Detective', 'Drama', 'Comedy'],
        authors: ['Dan', 'Alex', 'Brony']
    }
];
// -знайти наібльшу книжку.

let biggestBook = bookArr[0];
for (i = 1; i < bookArr.length; i++) {
    if (biggestBook.pageCount < bookArr[i].pageCount) {
        biggestBook = bookArr[i];
    }
}
console.log(biggestBook);

// - знайти книжку/ки з найбільшою кількістю жанрів

let biggestBookGenre = bookArr[0];
for (i = 1; i < bookArr.length; i++) {
    if (biggestBookGenre.genre.length < bookArr[i].genre.length) {
        biggestBookGenre = bookArr[i];
    }
}
console.log(biggestBookGenre);

// - знайти книжку/ки з найдовшою назвою

let longestNameOfBook = bookArr[0];
for (i = 1; i < bookArr.length; i++) {
    if (longestNameOfBook.title.length < bookArr[i].title.length) {
        longestNameOfBook = bookArr[i];
    }
}
console.log(longestNameOfBook);

// - знайти книжку/ки які писали 2 автори

console.log(bookArr.filter(value => value.authors.length === 2));

// - знайти книжку/ки які писав 1 автор

console.log(bookArr.filter(value => value.authors.length === 1));

// - вісортувати книжки по кількості сторінок по зростанню

console.log(bookArr.sort(function (a, b) {
    return a.pageCount - b.pageCount;
}));
