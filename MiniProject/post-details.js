// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let apiURL = 'https://jsonplaceholder.typicode.com/posts/';
let url = new URL(location.href);
let postId = url.searchParams.get('postId');

fetch(apiURL + postId).then(value => value.json()).then(post => {

    let div = document.createElement('div');
    div.classList.add('wrap');
    document.body.appendChild(div);

    let postDiv = document.createElement('div');
    postDiv.classList.add('postDiv');

    for (const postKey in post) {
        postDiv.innerHTML += `<h2>${postKey} - ${post[postKey]}</h2>`;
    }
    div.appendChild(postDiv);

    fetch(apiURL + postId + '/comments').then(value => value.json()).then(comments => {

        let commentDiv = document.createElement('div');
        commentDiv.classList.add('commentDiv');

        for (const comment of comments) {

            for (const commentKey in comment) {

                if (commentKey === 'body') {
                    commentDiv.innerHTML += `<h3>${commentKey} - ${comment[commentKey]}`;
                }
            }
        }
        div.appendChild(commentDiv);
    })
})

