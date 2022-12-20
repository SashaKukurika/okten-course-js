// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
// котра має детальну інфу про поточний пост.

let apiURL = 'https://jsonplaceholder.typicode.com/users/';

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(apiURL + id).then(value => value.json()).then(user => {

    let button = document.createElement('button');
    button.innerText = 'Post of current user';
    button.onclick = function () {
        let posts = 'https://jsonplaceholder.typicode.com/users/' + id + '/posts';

        fetch(posts).then(value => value.json()).then(posts => {
            console.log(posts);
            let div = document.createElement('div');

            for (const post of posts) {
                div.innerHTML += `<h3>${post.title}</h3>`

                let buttonUrl = document.createElement('button');

                let a = document.createElement('a');
                a.href = 'post-details.html?postId=' + post.id;
                a.innerText = `Post details`;

                buttonUrl.appendChild(a);
                div.appendChild(buttonUrl);
            }

            document.body.appendChild(div);

        })
    }


    document.body.appendChild(button);


    let div = document.createElement('div');
    console.log(user);

    for (const userKey in user) {

        if (userKey === 'address') {
            div.innerHTML += `<h2>${userKey}:</h2>`
            console.log(user[userKey]);

            for (const itemAddress in user[userKey]) {

                if (itemAddress === 'geo') {
                    div.innerHTML += `<h3>${itemAddress}:</h3>`

                    for (const latLng in user[userKey][itemAddress]) {
                        div.innerHTML += `<h4>${latLng} = ${user[userKey][itemAddress][latLng]}</h4>`
                    }
                } else {
                    div.innerHTML += `<h3>${itemAddress} - ${user[userKey][itemAddress]}</h3>`
                }
            }
        } else if (userKey === 'company') {
            div.innerHTML += `<h2>${userKey}:</h2>`

            for (const itemCompany in user[userKey]) {
                div.innerHTML += `<h3>${itemCompany} - ${user[userKey][itemCompany]}</h3>`
            }
        } else {
            div.innerHTML += `<h2>${userKey} - ${user[userKey]}</h2>`;
        }
    }

    document.body.appendChild(div);

})
