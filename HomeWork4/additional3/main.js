// 1. Створити пустий масив та :

let array = [];

//     a. заповнити його 50 парними числами за допомоги циклу.

for (let i = array.length; i < 50; i++) {
    array[i] = i * 2;
}

//     b. заповнити його 50 непарними числами за допомоги циклу.

for (let i = 0; i < 50; i++) {
    array[array.length] = array[i] + 1;

}

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    array[array.length] = Math.floor(Math.random() * 50);

}

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = 0; i < 20; i++) {
    array[array.length] = Math.floor(Math.random() * 732 + 8);

}

// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0; i < array.length; i += 3) {
    const arrayElement = array[i];
    console.log(arrayElement);
}

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0; i < array.length; i += 3) {
    const arrayElement = array[i];
    if (arrayElement % 2 === 0) {
        console.log(arrayElement);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let newArray = [];
for (let i = 0; i < array.length; i += 3) {
    const arrayElement = array[i];
    if (arrayElement % 2 === 0) {
        console.log(arrayElement);
        newArray[newArray.length] = arrayElement;
    }
}

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let newArray2 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < newArray2.length; i++) {
    let n = i - 1;
    if (newArray2[i] % 2 === 0) {
        console.log(newArray2[n]);
    }

}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let arr3 = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i = 0; i < arr3.length; i++) {
    const arr3Element = arr3[i];
    sum += arr3Element;
}
console.log(sum / arr3.length);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr4 = [];
let arr5 = [];
for (let i = 0; i < 10; i++) {
    arr4[i] = Math.floor(Math.random() * 100);
    arr4[i] *= 5;
    arr5[i] = arr4[i];
}
console.log(arr4);
console.log(arr5);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr6 = [1, 2, 'sdf', 'eth', true, false, 3, 4, 8, 10];
let arr7 = [];
for (let i = 0; i < arr6.length; i++) {
    if (typeof arr6[i] === "number") {
        arr7[arr7.length] = arr6[i];
    }
}
console.log(arr7);


//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

for (let i = 0; i < usersWithId.length; i++) {
    for (let n = 0; n < citiesWithId.length; n++) {
        if (usersWithId[i].id === citiesWithId[n].user_id) {
            usersWithId[i].address = citiesWithId[n];
        }
    }
}

console.log(usersWithId);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (i = 0; i < arr8.length; i++) {
    if (arr8[i] % 2 === 0) {
        console.log(arr8[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr9 = [];
for (let i = 0; i < arr8.length; i++) {
    arr9[i] = arr8[i];
}
console.log(arr9);

//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < abc.length; i++) {
    const abcElement = abc[i];
    word += abcElement;

}
console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i2 = 0;
let word2 = '';
while (i2 < abc.length) {
    word2 += abc[i2];
    i2++;
}
console.log(word2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc2 = ['a', 'b', 'c'];
let word3 = '';
for (const string of abc2) {
    word3 += string;
}
console.log(word3);