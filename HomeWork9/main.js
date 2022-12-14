// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

for (const simpson of simpsons) {
    let divElement = document.createElement('div');
    divElement.classList.add('member');
    divElement.innerHTML = `<h2>${simpson.name} ${simpson.surname} | age: ${simpson.age}</h2>
                            <p>${simpson.info}</p>
                            <img src="${simpson.photo}" alt="${simpson.name} ${simpson.surname}">`
    document.body.append(divElement);

}

// Цикл в циклі
// - Є масив
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------

for (const coursesArrayElement of coursesArray) {
    let div = document.createElement('div');
    document.body.append(div);
    div.classList.add('wrap');

    for (const inner in coursesArrayElement) {
        let innerDiv = document.createElement('div');
        div.append(innerDiv);

        if (inner === 'modules') {
            let ul = document.createElement('ul');
            innerDiv.append(ul);
            ul.classList.add('ulList')
            innerDiv.classList.add('modules');

            for (i = 0; i < coursesArrayElement.modules.length; i++) {
                let element = document.createElement('li');
                ul.append(element);
                element.innerHTML = `${coursesArrayElement[inner][i]}`;
                element.classList.add('li');
            }
        } else if (inner === 'title') {
            innerDiv.innerHTML = `${coursesArrayElement[inner]}`
            innerDiv.classList.add('title');
        } else if (inner === 'monthDuration') {
            innerDiv.innerHTML = `${coursesArrayElement[inner]}`
            innerDiv.classList.add('monthDuration');
        } else if (inner === 'hourDuration') {
            innerDiv.innerHTML = `${coursesArrayElement[inner]}`
            innerDiv.classList.add('hourDuration');
        }

    }
}


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'Some text';
div.style.background = 'silver';
div.style.color = 'gold';
div.style.fontSize = 'large';
document.body.appendChild(div);
let copyDiv = div.cloneNode(true);
document.body.appendChild(copyDiv);


// - Є масив:
const arr = ['Main', 'Products', 'About us', 'Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.

let ul = document.querySelector('.menu');
for (const element of arr) {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `${element}`;

}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerHTML = `${element.title} - ${element.monthDuration}`;
    document.body.appendChild(div);

}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');
    let h1 = document.createElement('h1');
    h1.innerHTML = `${element.title}`;
    h1.classList.add('heading');
    let p = document.createElement('p');
    p.innerHTML = `${element.monthDuration}`;
    p.classList.add('heading');
    div.append(h1, p);

    document.body.appendChild(div);

}

// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
//     зникав елемент з id="text".

let div2 = document.createElement('div');
div2.id = 'text';
div2.style.background = 'silver';
div2.style.height = '200px';
div2.style.width = '200px';
document.body.appendChild(div2);
let button = document.createElement('button');
document.body.appendChild(button);
button.style.width = '100px';
button.style.height = '50px';
button.innerText = 'Click to disappear';
button.onclick = function () {
    document.querySelector('#text').remove();
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.createElement('form');
let input = document.createElement("input");
input.type = 'number';
input.id = 'age';
let inputButton = document.createElement("input");
inputButton.type = 'submit';
document.body.appendChild(form);
form.append(input,inputButton);
inputButton.onclick = function () {
    const val = document.getElementById('age').value;
    if (val>=18){
        alert('Go');
    } else if (val<18){
        alert('stop');
    } else if (val<=0 && val>121){
        alert('Error');
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let inputElement1 = document.createElement('input');
let inputElement2 = document.createElement('input');
let inputElement3 = document.createElement('input');
let buttonElement = document.createElement('button');
inputElement1.type = 'number';
inputElement2.type = 'number';
inputElement3.type = 'text';
buttonElement.innerText = 'click';
document.body.append(inputElement1, inputElement2, inputElement3, buttonElement);

buttonElement.onclick = () => {
    let tr = inputElement1.value;
    let td = inputElement2.value;
    let text = inputElement3.value;
    let table = document.createElement('table');
    table.style.border = '1px solid silver';
    document.body.append(table);

    const createTable = (tr, td, text) => {

        for (let i = 0; i < tr; i++) {
            let rowElement = document.createElement('tr');
            table.append(rowElement);

            for (let j = 0; j < td; j++) {
                let cellElement = document.createElement('td');
                rowElement.append(cellElement);
                cellElement.innerHTML = `${text}`;
                cellElement.style.border = '1px solid silver';

            }

        }
    }

    createTable(tr, td, text);
}