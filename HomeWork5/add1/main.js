// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const calc = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < a && c < b) {
        console.log(c);
    }
}
calc(55, 22, 33);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const calc2 = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > a && c > b) {
        console.log(c);
    }
}
calc2(55, 22, 33);

// - створити функцію яка повертає найбільше число з масиву

const arr1 = [22, 1, 3, 4, 89, 57, 68];

function lowestNumInArr(array) {
    let max = array[0];
    for (const arrayElement of array) {
        if (arrayElement > max) {
            max = arrayElement;
        }
    }
    return max;
}

console.log(lowestNumInArr(arr1));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function middleNumOfArr(arrayName) {
    let sum = 0;
    for (const arrayNameElement of arrayName) {
        sum += arrayNameElement;
    }
    return sum / arrayName.length;
}

console.log(middleNumOfArr(arr1));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);

function minAndMax(...arguments) {
    let max = arguments[0];
    let min = arguments[0];
    for (const item of arguments) {
        if (max < item) {
            max = item;
        }
        if (min > item) {
            min = item;
        }
    }
    console.log(max);
    return min;
}

minAndMax(22, 59, 86, 74, 59, 2, 54, 56);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let arr2 = [];

function randomArray(arrayName, arrayLen) {
    for (let i = 0; i < arrayLen; i++) {
        arrayName[i] = Math.round(Math.random() * 100);
    }
    console.log(arrayName);
}

randomArray(arr2, 9);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

function randomArray2(arrayName, arrayLen, range) {
    for (let i = 0; i < arrayLen; i++) {
        arrayName[i] = Math.round(Math.random() * range);
    }
    console.log(arrayName);
}

randomArray2(arr2, 9, 50);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arr3 = [1, 2, 3];

function revers(arrayName) {
    let newArray = [];
    for (let i = 0, n = arrayName.length - 1; i < arrayName.length; i++, n--) {
        newArray[n] = arrayName[i];
    }
    console.log(newArray);
}

revers(arr3);

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

const foo = (...arguments) => arguments.length === 2 ? arguments[0] + arguments[1] : arguments[0];
console.log(foo(1, 'a'));
console.log(foo(8));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

const arr4 = [1, 2, 3, 4];
const arr5 = [2, 3, 4, 5];

function sumTwoArrays(arrayName1, arrayName2) {
    let sumArr = [];
    for (let i = 0; i < arrayName1.length; i++) {
        sumArr[i] = arrayName1[i] + arrayName2[i];
    }
    return sumArr;
}

console.log(sumTwoArrays(arr4, arr5));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

const arrObf = [
    {
        name: 'Dima',
        age: 13
    },
    {
        model: 'Camry'
    }
];

function foo2(arrayName) {
    let keyArr = [];
    i = 0;
    for (const arrayNameElement of arrayName) {
        for (const arrayNameElementKey in arrayNameElement) {
            keyArr[i++] = arrayNameElementKey;
        }
    }
    return keyArr;
}

console.log(foo2(arrObf));
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function foo3(arrayName) {
    let fieldArr = [];
    for (let i = 0, j = 0; i < arrayName.length; i++) {
        for (const field in arrayName[i]) {
            fieldArr[j++] = arrayName[i][field];
        }
    }
    return fieldArr;
}

console.log(foo3(arrObf));
