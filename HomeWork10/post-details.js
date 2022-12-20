// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let apiURL = 'https://jsonplaceholder.typicode.com/posts/';

let url = new URL(location.href);
let postId = url.searchParams.get('postId');

fetch(apiURL+postId).then(value => value.json()).then(post =>{
    let postDiv = document.createElement('div');
    document.body.appendChild(postDiv);

    for (const postKey in post) {
        postDiv.innerHTML += `<h2>${postKey} -- ${post[postKey]}</h2>`;
    }
    fetch(apiURL+postId+'/comments').then(value => value.json()).then(comments => {
        for (const comment of comments) {
            for (const commentKey in comment) {
                if (commentKey === 'body') {
                    postDiv.innerHTML += `<h3>${commentKey} -- ${comment[commentKey]}`;
                }
            }
        }
    })
})

