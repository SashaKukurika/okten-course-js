// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr1 = [true, false, 58, 'css', -25, 89, 'left', 'right', 11235];
let arr;
arr = ['cool'];
arr[1] = true;
arr[2] = false;
arr[3] = 58;
arr[4] = 'css';
arr[5] = -25;
arr[6] = 89;
arr[7] = 'left';
arr[8] = 'right';
arr[9] = 11235;
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj1 = {
    title: 'The Churchill factor',
    pageCount: 62,
    genre: 'Biography'
}
let obj2 = {
    title: 'Surgeon',
    pageCount: 105,
    genre: 'Thriller'
}
let obj3 = {
    title: 'Angels and demons',
    pageCount: 321,
    genre: 'Detective'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age

let object1 = {
    title: 'The Churchill factor',
    pageCount: 62,
    genre: 'Biography',
    authors: [{name: 'Boris', age: 58}]
}
let object2 = {
    title: 'Surgeon',
    pageCount: 105,
    genre: 'Thriller',
    authors: [{name: 'Tess', age: 69}]
}
let object3 = {
    title: 'Angels and demons',
    pageCount: 321,
    genre: 'Detective',
    authors: [{name: 'Dan', age: 58}]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

let arr2 = [
    {
        name: 'Sasha',
        username: 'Gydini13',
        password: 2354987
    },
    {
        name: 'Vasya',
        username: 'Imperio',
        password: 'imP248'
    },
    {
        name: 'Igor',
        username: 'fast25',
        password: 84597
    },
    {
        name: 'Sveta',
        username: 'lover89',
        password: 'foreve21'
    },
    {
        name: 'Ala',
        username: 'bayraktar200',
        password: 'forPrutyla'
    },
    {
        name: 'Andriy',
        username: 'an250',
        password: 5987456
    },
    {
        name: 'Ivan',
        username: 'workmonster',
        password: 112358
    },
    {
        name: 'Kate',
        username: 'Gydini89',
        password: 898989
    },
    {
        name: 'Dan',
        username: 'ferarri',
        password: 'monza2021'
    },
    {
        name: 'Masha',
        username: 'marii',
        password: 69874
    }
];

console.log(arr2[0].password);
console.log(arr2[1].password);
console.log(arr2[2].password);
console.log(arr2[3].password);
console.log(arr2[4].password);
console.log(arr2[5].password);
console.log(arr2[6].password);
console.log(arr2[7].password);
console.log(arr2[8].password);
console.log(arr2[9].password);
