// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let areaOfRectangle = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let areaOfCircle = (r) => 3.14 * r ** 2;

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let areaOfCylinder = (r, h) => 6.28 * (r ** 2 + r * h);

// - створити функцію яка приймає масив та виводить кожен його елемент

function showArray(arrayName) {
    for (const arrayNameElement of arrayName) {
        console.log(arrayNameElement);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writeParagraf(arguments) {
    return document.write(`<p>${arguments}</p>`);
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlWith3Li(textInLi) {
    document.write(`
            <ul>
                <li>${textInLi}</li>
                <li>${textInLi}</li>
                <li>${textInLi}</li>
            </ul>
`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlWithLi(textInLi, numberOfLi) {
    document.write(`<ul>`);
    for (i = 0; i < numberOfLi; i++) {
        document.write(`<li>${textInLi}</li>`);
    }
    document.write(`</ul>`);
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listFromArray(arrayName) {
    document.write(`<ol>`);
    for (const innerArray of arrayName) {
        document.write(`<li>${innerArray}</li>`);
    }
    document.write(`</ol>`);
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function createBlockFromArray(arrayName) {
    for (const arrayNameElement of arrayName) {
        document.write(`<div>${arrayNameElement.id} ${arrayNameElement.name} ${arrayNameElement.age}</div>`);
    }
}

// - створити функцію яка повертає найменьше число з масиву

function lowestNumberInArray(arrayName) {
    let min = arrayName[0];
    for (i = 1; i < arrayName.length; i++) {
        if (arrayName[i] < min) {
            min = arrayName[i];
        }
    }
    return min;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfArray(arrayName) {
    let summ = 0;
    for (i = 0; i < arrayName.length; i++) {
        summ = summ + arrayName[i];
    }
    return summ;
}