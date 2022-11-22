// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let srt1 = 'hello world';
let srt2 = 'lorem ipsum';
let srt3 = 'javascript is cool';
console.log(srt1.length);
console.log(srt2.length);
console.log(srt3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(srt1.toUpperCase());
console.log(srt2.toUpperCase());
console.log(srt3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str4 = 'HELLO WORLD';
let str5 = 'LOREM IPSUM';
let str6 = 'JAVASCRIPT IS COOL';
console.log(str4.toLowerCase());
console.log(str5.toLowerCase());
console.log(str6.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str7 = ' dirty string   ';
console.log(str7.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str8 = 'Ревуть воли як ясла повні';

// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    return str.split(' ');
}

let arr = stringToArray(str8);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
// перетворити всі об'єкти в масиві на стрінгові.

const arr1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

console.log(arr1.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (array, direction) => {
    return array.sort(function (a, b) {
        if (direction === 'ascending') {
            if (a > b) {
                return 1;
            }
            if (b > a) {
                return -1;
            }
            if (b === a) {
                return 0;
            }
        }
        if (direction === 'descending') {
            if (a < b) {
                return 1;
            }
            if (b < a) {
                return -1;
            }
            if (b === a) {
                return 0;
            }
        }
    })
}
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((value1, value2) => value1.monthDuration - value2.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
// піка буби чирва хреста
const cardSuit = ['spade', 'diamond', 'heart', 'clubs'];
const value = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
const color = ['red', 'black'];
let cards = [];

for (const itemSuit of cardSuit) {
    for (const itemValue of value) {
        if (itemSuit === 'spade' || itemSuit === 'clubs') {
            let card = {cardSuit: itemSuit, value: itemValue, color: color[1]};
            cards.push(card);
        } else if (itemSuit === 'diamond' || itemSuit === 'heart') {
            let card = {cardSuit: itemSuit, value: itemValue, color: color[0]};
            cards.push(card);
        }
    }
}
cards.push({value: 'joker', color: color[0]});
cards.push({value: 'joker', color: color[1]});
console.log(cards);

// - знайти піковий туз

console.log(cards
    .filter(value => value.cardSuit === 'spade')
    .filter(value => value.value === 'ace'));

// - всі шістки

console.log(cards.filter(value => value.value === '6'));

// - всі червоні карти

console.log(cards.filter(value => value.color === 'red'));

// - всі буби

console.log(cards.filter(value => value.cardSuit === 'diamond'));

// - всі трефи від 9 та більше

console.log(cards
    .filter(value => value.cardSuit === 'clubs' && (value.value > 8 || value.value.length > 2)));

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;

}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(reduce);