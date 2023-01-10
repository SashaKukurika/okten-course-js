// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let basket = localStorage.getItem('basket');
let productsArr = JSON.parse(basket);

let mainDiv = document.createElement('div');
mainDiv.className = 'deleteDiv';
document.body.appendChild(mainDiv);

for (const product of productsArr) {
    let productDiv = document.createElement('div');
    mainDiv.appendChild(productDiv);

    productDiv.innerHTML += `<h2>${product.name} - ${product.quantity} units</h2>`;
    productDiv.innerHTML += `<h3>Price: ${product.price} UAH</h3>`;
    productDiv.innerHTML += `<div style="width: 200px; height: 200px"><img src="${product.image}" alt="${product.name}"></div>`;

    let btn = document.createElement('button');
    btn.innerText = 'Remove this product from localStorage';
    productDiv.appendChild(btn);

    btn.onclick = function () {

        localStorage.removeItem('basket');
        let index = productsArr.indexOf(product);
        console.log(index);
        productsArr.splice(index, 1);
        console.log(productsArr);
        localStorage.setItem('basket', JSON.stringify(productsArr));
    }
}

let deleteButton = document.createElement('button');
document.body.appendChild(deleteButton);
deleteButton.style.width = '100%';
deleteButton.style.marginTop = '20px';
deleteButton.innerText = 'Remove ALL';

deleteButton.onclick = function () {
    localStorage.removeItem('basket');
    document.body.removeChild(document.body.querySelector('.deleteDiv'));
    let newArr = []
    localStorage.setItem('basket', JSON.stringify(newArr));

}

