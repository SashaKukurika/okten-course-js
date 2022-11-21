// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

const fooMin = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a);
    } else if (b < a && b < c) {
        console.log(b);
    } else if (c < b && c < b) {
        console.log(c);
    }
}
fooMin(5, 9, 22);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

const fooMax = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a);
    } else if (b > a && b > c) {
        console.log(b);
    } else if (c > b && c > b) {
        console.log(c);
    }
}
fooMax(55, 89, 236);

// - створити функцію яка повертає найбільше число з масиву

const arr1 = [5, 6, 9, 300, 7, 23, 56, 89, 125];
const maxFromArray = (arrayName) => {
    let max = arrayName[0];
    for (const arrayNameElement of arrayName) {
        if (max < arrayNameElement) {
            max = arrayNameElement;
        }
    }
    return max;
}

console.log(maxFromArray(arr1));

// - створити функцію яка повертає найменьше число з масиву

const minFromArray = (arrayName) => {
    let min = arrayName[0];
    for (const arrayNameElement of arrayName) {
        if (min > arrayNameElement) {
            min = arrayNameElement;
        }
    }
    return min;
}

console.log(minFromArray(arr1));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sumArr = (arrayName) => {
    let sum = 0;
    for (const arrayNameElement of arrayName) {
        sum += arrayNameElement;
    }
    return sum;
}

console.log(sumArr(arr1));

// - Дано натуральное число n. Выведите все числа от 1 до n.

const from1ToN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);

    }
}
from1ToN(8);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

const fromAtoB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
            console.log(i);

        }
    } else {
        console.log('They are the same');
    }
}

fromAtoB(7, 10);
fromAtoB(8, 2);
fromAtoB(5, 5);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const arr2 = [9, 8, 0, 4];
const changeInArr = (arrName, index) => {
    let memory;
    for (let j = 0; j < arrName.length; j++) {
        if (j === index) {
            memory = arrName[j];
            arrName[j] = arrName[++j];
            arrName[j] = memory;
        }

    }
}

changeInArr(arr2, 1);
console.log(arr2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

const arr3 = [0, 1, 2, 3, 4];
const arr4 = [0, 0, 1, 0];
const arr5 = [1, 0, 6, 0, 3];

function zeroFoo(arrayName) {
    const newArray = [];
    let zeroNum = 0;
    let index = 0;
    for (let i = 0; i < arrayName.length; i++) {
        if (arrayName[i]) {
            newArray[index++] = arrayName[i];
        } else {
            zeroNum++;
        }
    }
    const num = newArray.length;
    for (let i = num; i < num + zeroNum; i++) {
        newArray[i] = 0;
    }
    return newArray;
}

console.log(zeroFoo(arr3));
console.log(zeroFoo(arr4));
console.log(zeroFoo(arr5));