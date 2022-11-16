// --створити масив з:
// - з 5 числових значень

let fiveNumbers = [1, 2, 3, 4, 5];

// - з 5 стічкових значень

let fiveStrings = ['asd', 'fgh', 'jkl', 'qwe', 'rty'];

// - з 5 значень стрічкового, числового та булевого типу

let allFive = ['asd', 'fgh', 'jkl', 'qwe', 'rty', 1, 2, 3, 4, 5, true, false, true, false, true];

// - та вивести його в консоль

console.log(allFive);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let nonArr = [];
nonArr[nonArr.length] = 3;
nonArr[nonArr.length] = 'sdf';
nonArr[nonArr.length] = true;
nonArr[nonArr.length] = 8;
nonArr[nonArr.length] = 22;
nonArr[nonArr.length] = 365;
nonArr[nonArr.length] = false;
nonArr[nonArr.length] = 'sdfhhth';
console.log(nonArr);

//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :

let newArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i = 0;
while (i < newArr.length) {
    console.log(newArr[i]);
    i++;
}

// 2. перебрати його циклом for

for (const number of newArr) {
    console.log(number);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i2 = 1;
while (i2 < newArr.length) {
    console.log(newArr[i2]);
    i2 += 2;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (i = 1; i < newArr.length; i += 2) {
    console.log(newArr[i]);
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i3 = 0;
while (i3 < newArr.length) {
    if (newArr[i3] % 2 === 0) {
        console.log(newArr[i3]);
    }
    i3++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (const number of newArr) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (i = 0; i < newArr.length; i++) {
    let number = newArr[i];
    if (number % 3 === 0) {
        number = 'okten';
    }
}

// 8. вивести масив в зворотньому порядку.

for (let j = newArr.length - 1; j >= 0; j--) {
    const newArrElement = newArr[j];
    console.log(newArrElement);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let i4 = newArr.length - 1;
while (i4 >= 0) {
    console.log(newArr[i4]);
    i4--;
}

for (let j = newArr.length - 1; j >= 0; j--) {
    const reversArr = newArr[j];
    console.log(reversArr);
}

let i5 = newArr.length - 1;
while (i5 >= 0) {
    if (i5 % 2 !== 0)
        console.log(newArr[i5]);
    i5--;
}

for (i = newArr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0)
        console.log(newArr[i]);
}

let i6 = newArr.length - 1;
while (i6 >= 0) {
    if (newArr[i6] % 2 === 0) {
        console.log(newArr[i6]);
    }
    i6--;
}

for (i = newArr.length - 1; i >= 0; i--) {
    if (newArr[i] % 2 === 0) {
        console.log(newArr[i]);
    }
}

for (i = newArr.length - 1; i >= 0; i--) {
    let number = newArr[i];
    if (number % 3 === 0) {
        number = 'okten';
    }
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let tenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of tenArr) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let sringTenArr = ['adf', 'ghj', 'dwfyjuyk', 'task', 'are', 'sow', 'boring', '8', 'hhh', 'last'];
for (const string of sringTenArr) {
    console.log(string);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let allTenArr = [1, 'adf', 'ghj', 'dwfyjuyk', 5, true, false, 8, 9, 10];
for (const allTenArrElement of allTenArr) {
    console.log(allTenArrElement);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//   За допомогою if та typeof вивести тільки булеві елементи

let allTenArr2 = [1, 'adf', 'ghj', 'dwfyjuyk', false, true, false, 8, 9, true];
for (const allTenArr2Element of allTenArr2) {
    if (typeof allTenArr2Element === "boolean") {
        console.log(allTenArr2Element);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

let allTenArr3 = [1, 'adf', 'ghj', 'dwfyjuyk', false, true, false, 8, 9, true];
for (const allTenArr3Element of allTenArr3) {
    if (typeof allTenArr3Element === "number") {
        console.log(allTenArr3Element);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

let allTenArr4 = [1, 'adf', 'ghj', 'dwfyjuyk', false, true, false, 8, 9, true];
for (const allTenArr4Element of allTenArr4) {
    if (typeof allTenArr4Element === 'string') {
        console.log(allTenArr4Element);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let nonArr2 = [];
nonArr2[nonArr2.length] = 3;
nonArr2[nonArr2.length] = 8;
nonArr2[nonArr2.length] = 'sdf';
nonArr2[nonArr2.length] = true;
nonArr2[nonArr2.length] = false;
nonArr2[nonArr2.length] = true;
nonArr2[nonArr2.length] = 888;
nonArr2[nonArr2.length] = 325;
nonArr2[nonArr2.length] = 'sdfgg';
nonArr2[nonArr2.length] = 'rrey';

for (const nonArr2Element of nonArr2) {
    console.log(nonArr2Element);
}

// - Створити цикл for на 10  ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій з кроком 1.
// Вивести поточний номер кроку через console.log та document.write

for (i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій з кроком 2.
// Вивести поточний номер кроку через console.log та document.write

for (i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`<p>${i}</p>`);
}

// - Створити цикл for на 100 ітерацій.
// Вивести тільки парні кроки. через console.log + document.write

for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}

// - Створити цикл for на 100 ітерацій.
// Вивести тільки непарні кроки. через console.log + document.write

for (i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(`<p>${i}</p>`);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

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

for (const bookArrElement of bookArr) {
    if (bookArrElement.authors.length === 2){
        console.log(bookArrElement);
    }
}

// - знайти книжку/ки які писав 1 автор

for (const bookArritem of bookArr) {
    if (bookArritem.authors.length === 1){
        console.log(bookArritem);
    }

}