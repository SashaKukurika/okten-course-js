// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let classArr = [];

function findClassName(htmlElement) {

    let children = htmlElement.children;

    if (children.length !== 0) {

        for (const child of children) {

            if (child.className.length > 0) {

                let classNameArr = child.className.split(' ');

                for (const item of classNameArr) {
                    classArr.push(item);
                }

            }
            findClassName(child);
        }

    }
    return classArr;
}

findClassName(document.body);
console.log(classArr);