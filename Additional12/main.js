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
            if (numOfClick === 1) {
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
                            btn2.innerText = `Comments ${post.id}`;
                            btn2.id = post.id;
                            let divComments = document.createElement('div');
                            divPost.appendChild(divComments);

                            // як отримувати з батонна по якому клікнули його айді щоб передати далі в фетч??

                            let numOfClick = 0;
                            btn2.onclick = function (e) {

                                let postId = e.target.id
                                ++numOfClick;

                                if (numOfClick === 1) {
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments').then(value => value.json())
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
                                } else {
                                    divComments.style.display = 'block';
                                }
                            }


                        }
                    })
            } else if (numOfClick % 2 === 0) {
                divPost.style.display = 'none';
            } else {
                divPost.style.display = 'block';
            }
        }

        div.appendChild(btn);
        document.body.appendChild(div);

    }
})

// 2.
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
            if (numOfClick === 1) {
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
            } else {
                div2.style.display = 'block';
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
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари.

let arrOfProducts = [];
localStorage.setItem('basket', JSON.stringify(arrOfProducts));

document.querySelector('.btn').onclick = function () {
    let product = {
        name: document.querySelector('.name').value,
        quantity: document.querySelector('.numberOfProduct').value,
        price: document.querySelector('.price').value,
        image: document.querySelector('.logo').value
    }
    arrOfProducts.push(product);
    localStorage.setItem('basket', JSON.stringify(arrOfProducts));
}
