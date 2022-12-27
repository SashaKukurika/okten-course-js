let favoriteUsers = localStorage.getItem('favorite');
let usersArr = JSON.parse(favoriteUsers);

for (const user of usersArr) {
    let div = document.createElement("div");
    document.body.appendChild(div);

    for (const userKey in user) {
        div.innerHTML += `${userKey}: ${user[userKey]}; `;
    }

}