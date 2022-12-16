let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в
// інший порожній масив.

const getAddressFromArr = (arrayName) => {
    let arr = [];
    for (const user of arrayName) {
        let addressCopy = JSON.parse(JSON.stringify(user.address));
        arr.push(addressCopy);
    }
    console.log(arr);
}
getAddressFromArr(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.

const divsOfUsers = (arr) => {

    for (const item of arr) {
        let div = document.createElement('div');
        for (const itemKey in item) {

            if (typeof item[itemKey] !== 'object') {
                div.innerHTML += `<h3>${itemKey} - ${item[itemKey]}</h3>`;

            } else {
                div.innerHTML += `<h3>${itemKey}:</h3>`;

                for (const itemKeyKey in item[itemKey]) {
                    div.innerHTML += `<h4>${itemKeyKey} - ${item[itemKey][itemKeyKey]}</h4>`;
                }

            }
        }

        document.body.appendChild(div);
    }
}
divsOfUsers(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

const divsOfUsers2 = (arr) => {

    for (const item of arr) {
        let div = document.createElement('div');
        for (const itemKey in item) {
            let innerDiv = document.createElement("div");

            if (typeof item[itemKey] !== 'object') {
                innerDiv.innerHTML += `<h3>${itemKey} - ${item[itemKey]}</h3>`;

            } else {
                innerDiv.innerHTML += `<h3>${itemKey}:</h3>`;

                for (const itemKeyKey in item[itemKey]) {
                    innerDiv.innerHTML += `<h4>${itemKeyKey} - ${item[itemKey][itemKeyKey]}</h4>`;
                }

            }
            div.appendChild(innerDiv);
        }

        document.body.appendChild(div);
    }
}
divsOfUsers2(users);

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

const divsOfUsers3 = (arr) => {

    for (const item of arr) {
        let div = document.createElement('div');
        for (const itemKey in item) {
            let innerDiv = document.createElement("div");

            if (typeof item[itemKey] !== 'object') {
                innerDiv.innerHTML += `<h3>${itemKey} - ${item[itemKey]}</h3>`;

            } else {
                innerDiv.innerHTML += `<h3>${itemKey}:</h3>`;

                for (const itemKeyKey in item[itemKey]) {
                    let addressDiv = document.createElement('div');
                    innerDiv.appendChild(addressDiv);
                    addressDiv.innerHTML += `<h4>${itemKeyKey} - ${item[itemKey][itemKeyKey]}</h4>`;
                }

            }
            div.appendChild(innerDiv);
        }

        document.body.appendChild(div);
    }
}
divsOfUsers3(users);


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту
//  яка вказана в параграфі.
//  створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//  який буде змістом того, що знаходиться на сторінці.
//  Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

const listOfH2 = () => {
    let listOf = document.querySelectorAll('h2');

    let listDiv = document.querySelector('#content');
    let ul = document.createElement('ul');
    listDiv.appendChild(ul);

    for (const item of listOf) {
        let rule = item.innerText;
        let li = document.createElement('li');
        li.innerText = rule;
        ul.appendChild(li);

    }
};
listOfH2();

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

const structureFromArr = (arrName) => {
    let wrapDiv = document.createElement('div');
    wrapDiv.id = 'wrap';
    document.body.appendChild(wrapDiv);

    for (let i = 0; i < arrName.length; i++) {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('rules', `rule${i+1}`);

        let numDiv = document.createElement('div');
        numDiv.innerHTML = `<h2>${arrName[i].title}</h2>`;

        let textDiv = document.createElement('div');
        textDiv.innerHTML = `<p>${arrName[i].body}</p>`;

        mainDiv.append(numDiv, textDiv);
        wrapDiv.appendChild(mainDiv);

    }
}
structureFromArr(rules);