// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// let arr = ['недоразвите', 'бовдур', 'нікчема', 'рахіт'];
//
// let input = document.createElement('input');
// let btn = document.createElement("button");
// btn.innerText = 'Check for bad word';
// document.body.append(input, btn);
//
// btn.onclick = function () {
//
//     console.log(input.value);
//     for (const string of arr) {
//
//         if (string === input.value) {
//             alert('It is bad word');
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// let br = document.createElement("br");
// let inputSentence = document.createElement("input");
// let buttonSentence = document.createElement("button");
// buttonSentence.innerText = 'Check for bad word';
// document.body.append(br, inputSentence, buttonSentence);
//
// buttonSentence.onclick = function () {
//     let valueArr = inputSentence.value.split(' ');
//
//     for (const string of valueArr) {
//         for (const badWord of arr) {
//             if (string === badWord) {
//                 alert('It is bad word in your sentence');
//             }
//         }
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let br2 = document.createElement("br");
// let menuDiv = document.createElement("div");
// menuDiv.style.textAlign = 'center';
// menuDiv.innerText = 'Menu';
// menuDiv.style.background = 'silver';
// menuDiv.style.height = '20px';
// menuDiv.style.width = '150px';
// document.body.append(br2, menuDiv);
// let numOfClicks = 0;
// let element = document.createElement("div");
//
// menuDiv.onclick = function () {
//     numOfClicks++;
//     console.log(numOfClicks);
//
//     if (numOfClicks === 1) {
//
//         menuDiv.appendChild(element);
//         element.style.background = 'blue';
//         element.style.height = 'auto';
//         element.style.width = 'auto';
//
//         for (let i = 1; i < 5; i++) {
//             let li = document.createElement('li');
//             element.appendChild(li);
//             li.innerText = `Section ${i}`;
//         }
//     } else if (numOfClicks % 2 === 0) {
//         element.style.display = 'none';
//     } else {
//         element.style.display = 'block';
//     }
//
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentsArr = [
    {
        title: "dignissimos et",
        body: "exercitationem et id quae cum omnis\nvoluptatibus accusantium et quidem\nut ipsam sint\ndoloremque illo ex atque necessitatibus sed"
    },
    {
        title: "rerum commodi",
        body: "occaecati laudantium ratione non cumque\nearum quod non enim soluta nisi velit similique voluptatibus\nesse laudantium consequatur voluptatem rem eaque voluptatem aut ut\net sit quam"
    },
    {
        title: "consequatur animi",
        body: "illum et alias quidem magni voluptatum\nab soluta ea qui saepe corrupti hic et\ncum repellat esse\nest sint vel veritatis officia consequuntur cum"
    },
    {
        title: "rerum placeat",
        body: "id est iure occaecati quam similique enim\nab repudiandae non\nillum expedita quam excepturi soluta qui placeat\nperspiciatis optio maiores non doloremque aut iusto sapiente"
    },
    {
        title: "dolorum soluta",
        body: "eum accusamus aut delectus\narchitecto blanditiis quia sunt\nrerum harum sit quos quia aspernatur vel corrupti inventore\nanimi dicta vel corporis"
    }
]

function commentsStructure(arr) {

    for (const comment of arr) {
        let mainDiv = document.createElement("div");
        let titleDiv = document.createElement("div");
        let bodyDiv = document.createElement("div");

        titleDiv.innerText = `Title: ${comment.title}`;
        bodyDiv.innerText = `Body: ${comment.body}`;

        mainDiv.append(titleDiv, bodyDiv);

        let btn = document.createElement("button");
        btn.innerText = 'Hide body';
        mainDiv.appendChild(btn);
        let counter = 0;
        btn.onclick = function () {
            counter++
            if (counter % 2 !== 0) {
                bodyDiv.style.display = 'none';
            } else {
                bodyDiv.style.display = 'block';
            }
        }
        document.body.appendChild(mainDiv);
    }
}

// commentsStructure(commentsArr);

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

function btnForDisappear() {
    let btn = document.createElement("button");
    btn.innerText = `I\'ll disappear`;
    document.body.appendChild(btn);
    btn.onclick = function () {
        this.style.display = 'none';
    }
}

// btnForDisappear();

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = function (ev) {
        console.log(`Назва тегу: ${ev.target.localName}. Список класів: ${ev.target.className}. Список ід: ${ev.target.id}. Розмір: ${ev.target.offsetHeight * ev.target.offsetWidth}`);
}

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

document.onclick = function (ev) {
    alert(`Назва тегу: ${ev.target.localName}. Список класів: ${ev.target.className}. Список ід: ${ev.target.id}. Розмір: ${ev.target.offsetHeight * ev.target.offsetWidth}`);
}

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ




// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
