// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class User {

    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyname, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;

        this.address = {
            street,
            suite,
            city,
            zipcode,
            geo: {
                lat,
                lng
            }
        }

        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyname,
            catchPhrase,
            bs
        }

    }


}

let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough',
    '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class tagObject {

    constructor(titleOfTag, action, titleOfAttr1, actionOfAttr1, titleOfAttr2, actionOfAttr2) {
        this.titleOfTag = titleOfTag;
        this.action = `Тег <${titleOfTag}> ${action}`;
        this.attrs = [
            {
                titleOfAttr1,
                actionOfAttr1
            },
            {
                titleOfAttr2,
                actionOfAttr2
            }
        ]

    }
}

let tagObjectA = new tagObject('a', 'является одним из важных элементов HTML и предназначен для создания ссылок',
    'name ', 'Устанавливает имя якоря внутри документа', 'href', 'Задает адрес документа, на который следует перейти');
let tagObjectDiv = new tagObject('div', 'является блочным элементом и предназначен для выделения фрагмента документа' +
    ' с целью изменения вида содержимого', 'align', 'Задает выравнивание содержимого тега <div>', 'title',
    'Добавляет всплывающую подсказку к содержимому');
let tagObjectH1 = new tagObject('h1', 'представляет собой наиболее важный заголовок первого уровня',
    'align', 'Определяет выравнивание заголовка', 'accesskey',
    'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш');
let tagObjectSpan = new tagObject('span', 'предназначен для определения строчных элементов документа', 'hidden',
    'Скрывает содержимое элемента от просмотра', 'spellcheck', 'Указывает браузеру проверять или нет правописание и грамматику в тексте');
let tagObjectInput = new tagObject('input', 'является одним из разносторонних элементов формы и позволяет создавать' +
    ' разные элементы интерфейса и обеспечить взаимодействие с пользователем',
    'readonly', 'Устанавливает, что поле не может изменяться пользователем', 'required', 'Обязательное для заполнения поле');
let tagObjectForm = new tagObject('form', 'устанавливает форму на веб-странице', 'accept-charset',
    'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные',
    'autocomplete', 'Включает автозаполнение полей формы');
let tagObjectOption = new tagObject('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера' +
    ' <select>', 'disabled', 'Заблокировать для доступа элемент списка', 'label',
    'Указание метки пункта списка');
let tagObjectSelect = new tagObject('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а' +
    ' также список с одним или множественным выбором, как показано далее', 'multiple',
    'Позволяет одновременно выбирать сразу несколько элементов списка', 'required',
    'Список обязателен для выбора перед отправкой формы');

const arr = [];
arr.push(tagObjectA, tagObjectDiv, tagObjectH1, tagObjectSpan, tagObjectInput, tagObjectForm, tagObjectOption, tagObjectSelect);
console.log(arr);