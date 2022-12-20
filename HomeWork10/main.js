// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

// Стилизація проєкта -

//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {

            let div = document.createElement('div');
            div.innerHTML = `<h2>${user.id} - ${user.name}</h2>`;

            let button = document.createElement('button');

            let a = document.createElement('a');
            a.innerHTML = `Details about user ${user.id}`;
            a.href = 'user-details.html?id=' + user.id;

            div.appendChild(button);
            button.appendChild(a);
            document.body.appendChild(div);

        }
    })