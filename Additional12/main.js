// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => {
    for (const user of users) {

        let div = document.createElement('div');
        div.innerHTML = `<h2>${user.id} - ${user.name}</h2>`;

        let btn = document.createElement('button');
        btn.innerText = 'Posts';
        let divPost = document.createElement('div');
        div.appendChild(btn);

        let numOfClick = 0;
        btn.onclick = function () {

            ++numOfClick;
            if (numOfClick % 2 !== 0) {
                let id = user.id;
                fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts').then(value => value.json())
                    .then(posts => {
                        for (const post of posts) {

                            div.appendChild(divPost);
                            for (const postKey in post) {
                                divPost.innerHTML += `<h3>${postKey}: ${post[postKey]}</h3>`;
                            }

                            let btn2 = document.createElement('button');
                            divPost.appendChild(btn2);
                            btn2.innerText = `Comments`;
                            let divComments = document.createElement('div');
                            divPost.appendChild(divComments);

                            // як отримувати з батонна айді поста на якому клікнули щоб передати далі в фетч

                            let numOfClick = 0;
                            btn2.onclick = function () {

                                ++numOfClick;
                                if (numOfClick % 2 !== 0) {
                                    let id = post.id;
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(value => value.json())
                                        .then(comments => {
                                            for (const comment of comments) {

                                                divPost.appendChild(divComments);
                                                for (const commentKey in comment) {
                                                    divComments.innerHTML += `<h3>${commentKey}: ${comment[commentKey]}</h3>`;
                                                }
                                            }
                                        })
                                } else if (numOfClick % 2 === 0) {
                                    divComments.style.display = 'none';
                                }
                            }


                        }
                    })
            } else if (numOfClick % 2 === 0) {
                divPost.style.display = 'none';
            }
        }

        div.appendChild(btn);
        document.body.appendChild(div);

    }
})

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then(value => value.json()).then(posts => {
    for (const post of posts) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerText += `${post.id} - ${post.title}`;

        let btn = document.createElement('button');
        btn.innerText = 'Comments';
        let div2 = document.createElement('div');
        div.appendChild(btn);

        let numOfClick = 0;
        btn.onclick = function () {

            ++numOfClick;
            if (numOfClick % 2 !== 0) {
                let id = post.id;
                fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments').then(value => value.json())
                    .then(comments => {
                        for (const comment of comments) {

                            div.appendChild(div2);
                            for (const commentKey in comment) {
                                div2.innerHTML += `<h3>${commentKey}: ${comment[commentKey]}</h3>`;
                            }
                        }
                    })
            } else if (numOfClick % 2 === 0) {
                div2.style.display = 'none';
            }
        }
    }

})

// - Імітуємо наповнення інтернет магазину товарами :
//   Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар