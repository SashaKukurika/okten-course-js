// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

const usersArr = [];

let user1 = new User(1, 'igor', 'Pupkin', 'ssdgdfg@gmail.com', 380642922314);
let user2 = new User(2, 'vasya', 'frank', 'ssdg@gmail.com', 380642925614);
let user3 = new User(3, 'petya', 'Pupkin', 'ssdgdfg@gmail.com', 380648922314);
let user4 = new User(4, 'taras', 'frank', 'ssdgdffgg@gmail.com', 380656922314);
let user5 = new User(5, 'sdg', 'Pupkin', 'ssdgdfg@gmail.com', 380642969314);
let user6 = new User(6, 'iuilsgor', 'frank', 'ssdbnmnbgdfg@gmail.com', 380592922314);
let user7 = new User(7, 'nat', 'Pupkin', 'ssdgdfg@gmail.com', 380642922354);
let user8 = new User(8, 'anya', 'frank', 'ssdgd585fg@gmail.com', 380642969314);
let user9 = new User(9, 'gor', 'Pupkin', 'ssd78gdfg@gmail.com', 380642923614);
let user10 = new User(10, 'metr', 'frank', 'ssdgdfg05@gmail.com', 380646542314);

usersArr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(usersArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = usersArr.filter(value => value.id % 2 === 0);
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = usersArr.sort((a, b) => a.id - b.id);
console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clientsArr = [];

let client1 = new Client(1, 'igor', 'Pupkin', 'ssdgdfg@gmail.com', 380642922314, ['milk', 'soda']);
let client2 = new Client(2, 'vasya', 'frank', 'ssdg@gmail.com', 380642925614, ['milk']);
let client3 = new Client(3, 'petya', 'Pupkin', 'ssdgdfg@gmail.com', 380648922314, ['milk', 'soda', 'tea']);
let client4 = new Client(4, 'taras', 'frank', 'ssdgdffgg@gmail.com', 380656922314, ['milk', 'soda', 'tea', 'coffee']);
let client5 = new Client(5, 'sdg', 'Pupkin', 'ssdgdfg@gmail.com', 380642969314, ['milk', 'soda']);
let client6 = new Client(6, 'iuilsgor', 'frank', 'ssdbnmnbgdfg@gmail.com', 380592922314, ['milk', 'soda']);
let client7 = new Client(7, 'nat', 'Pupkin', 'ssdgdfg@gmail.com', 380642922354, ['milk']);
let client8 = new Client(8, 'anya', 'frank', 'ssdgd585fg@gmail.com', 380642969314, ['soda']);
let client9 = new Client(9, 'gor', 'Pupkin', 'ssd78gdfg@gmail.com', 380642923614, ['milk', 'soda', 'tea']);
let client10 = new Client(10, 'metr', 'frank', 'ssdgdfg05@gmail.com', 380646542314, ['milk', 'soda']);

clientsArr.push(client10, client1, client2, client3, client4, client5, client6, client7, client8, client9);
console.log(clientsArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sort1 = clientsArr.sort((a, b) => a.order.length - b.order.length);
console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, maker, graduationYear, maxSpeed, engineVolume) {
    this.model = model;
    this.maker = maker;
    this.graduationYear = graduationYear;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    };

    this.info = function () {
        for (const carKey in this) {
            if (typeof this[carKey] !== "function") {
                console.log(`${carKey} - ${this[carKey]}`);
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed += newSpeed;
    }

    this.changeYear = function (newValue) {
        return this.graduationYear = newValue;
    }
    this.addDriver = function (driver) {
        this.dirverName = driver;
    }
}

let car1 = new Car('Supra', 'Toyota', 1997, 320, 3.5);
console.log(car1);
car1.drive();
car1.info();
console.log(car1.increaseMaxSpeed(50));
console.log(car1.changeYear(2002));
car1.addDriver('Sasha');
console.log(car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car11 {
    constructor(model, maker, graduationYear, maxSpeed, engineVolume) {
        this.model = model;
        this.maker = maker;
        this.graduationYear = graduationYear;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (const carsKey in this) {
            console.log(`${carsKey} - ${this[carsKey]}`);
        }
    }

    increaseMaxSpeed(newSpeed) {
        return this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        return this.graduationYear = newValue;
    }

    addDriver(driver) {
        this.dirverName = driver;
    }
}

let car11 = new Car11('Supra', 'Toyota', 1997, 320, 3.5);
console.log(car11);
car11.drive();
car11.info();
console.log(car11.increaseMaxSpeed(100));
console.log(car11.changeYear(2020));
car11.addDriver('Igor');
console.log(car11);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellaArr = [];
let cinderella1 = new Cinderella('Tanya', 23, 31);
let cinderella2 = new Cinderella('Anya', 23, 32);
let cinderella3 = new Cinderella('Olya', 23, 33);
let cinderella4 = new Cinderella('Masha', 23, 21);
let cinderella5 = new Cinderella('Dasha', 23, 35);
let cinderella6 = new Cinderella('Katya', 23, 36);
let cinderella7 = new Cinderella('Ira', 23, 38);
let cinderella8 = new Cinderella('Olena', 23, 39);
let cinderella9 = new Cinderella('Vika', 23, 30);
let cinderella10 = new Cinderella('Nastya', 23, 45);

cinderellaArr.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);

class Prince {
    constructor(name, age, bootSize) {
        this.name = name;
        this.age = age;
        this.bootSize = bootSize;
    }
}

let prince = new Prince('Sasha', 25, 36);

for (const cinderellaArrElement of cinderellaArr) {
    if (cinderellaArrElement.footSize === prince.bootSize) {
        console.log(cinderellaArrElement);
    }
}

let findCinderella = cinderellaArr.find(value => value.footSize === prince.bootSize);
console.log(findCinderella);