// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     console.log(this)
// }

// let user1 = new User(5656, `anna`, `fsafsf`, `Vzdnfs@i.com`, `12543588785`)
// let user2 = new User(1324, `vlad`, `sfeafes`, `xfgnfng@sss.com`, `12528424586`)
// let user3 = new User(3456, `jo`, `safevsdv`, `aetjnfgc@i.com`, `76678468767`)
// let user4 = new User(5675, `anton`, `vsda`, `dsnfd@i.com`, `78676786786`)
// let user5 = new User(2462, `yana`, `svad`, `bxtfxs@i.com`, `78634534876`)
// let user6 = new User(4795, `kate`, `svadsvd`, `ztdf@i.com`, `2354887537`)
// let user7 = new User(8990, `jack`, `fsdn`, `rykmxz6@i.com`, `5164979355`)
// let user8 = new User(6876, `igor`, `,dfhs`, `arwge@i.com`, `7474554278`)
// let user9 = new User(2455, `sasha`, `ndg`, `stn@i.com`, `45474569268`)
// let user10 = new User(1435, `pasha`, `sgfn`, `ageijkwmeg@i.com`, `7124556875`)
//
// const arrayUsers = []
//
// arrayUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

// let filter = arrayUsers.filter(value => value.id % 2 === 0)
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arrayUsers.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const user1 = new Client(5656, `anna`, `fsafsf`, `Vzdnfs@i.com`, `12543588785`, [1, 2, 5, 9, 8, 7,])
// const user2 = new Client(1324, `vlad`, `sfeafes`, `xfgnfng@sss.com`, `12528424586`, [1, 5, 2, 6, 7, 2])
// const user3 = new Client(3456, `jo`, `safevsdv`, `aetjnfgc@i.com`, `76678468767`, [5, 6, 7, 9, 4, 3])
// const user4 = new Client(5675, `anton`, `vsda`, `dsnfd@i.com`, `78676786786`, [7, 8, 2, 9, 4, 3])
// const user5 = new Client(2462, `yana`, `svad`, `bxtfxs@i.com`, `78634534876`, [5, 6, 8, 2, 8, 2])
// const user6 = new Client(4795, `kate`, `svadsvd`, `ztdf@i.com`, `2354887537`, [2, 8, 2, 8, 2, 3, 5])
// const user7 = new Client(8990, `jack`, `fsdn`, `rykmxz6@i.com`, `5164979355`, [7, 9, 2, 3, 4, 6])
// const user8 = new Client(6876, `igor`, `,dfhs`, `arwge@i.com`, `7474554278`, [7, 2, 9, 4, 6, 2])
// const user9 = new Client(2455, `sasha`, `ndg`, `stn@i.com`, `45474569268`, [4, 7, 5, 9, 1, 3, 0])
// const user10 = new Client(1435, `pasha`, `sgfn`, `ageijkwmeg@i.com`, `7124556875`, [4, 6, 8, 5, 2])
//
// const arrayUsers = [];
// arrayUsers.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(arrayUsers.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, engine) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.engine = function () {
//         console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
//     }
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== `function`) {
//                 console.log(`${carKey}--${this[carKey]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
// const car = new Car(`volvo`, `USA`, `1999`, 250, 1.6)
// console.log(car);
// car.info();
// car.engine();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name:`Pit`});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//
//     constructor(model, producer, year, maxSpeed, carEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//     carEngine  () {
//         console.log((`їдемо зі швидкістю ${this.maxSpeed} на годину`));
//     }
//     info () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== `function`) {
//                 console.log(`${carKey}--${this[carKey]}`);
//             }
//         }
//     }
//     increaseMaxSpeed  (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     changeYear(newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
//
// }
// const car = new Car(`volvo`, `USA`, `1999`, 250, 1.6)
// console.log(car);
// car.info();
// car.carEngine();
// car.increaseMaxSpeed(50);
// car.changeYear(2020);
// car.addDriver({name:`Pit`});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

const cinderella1 = new Cinderella(`Anna`, 15, 35)
const cinderella2 = new Cinderella(`Dasha`, 27, 36)
const cinderella3 = new Cinderella(`Masha`, 40, 37)
const cinderella4 = new Cinderella(`Sasha`, 32, 39)
const cinderella5 = new Cinderella(`Lena`, 41, 38)
const cinderella6 = new Cinderella(`Nata`, 53, 40)
const cinderella7 = new Cinderella(`Sveta`, 26, 42)
const cinderella8 = new Cinderella(`Lili`, 18, 37)
const cinderella9 = new Cinderella(`Yana`, 16, 41)
const cinderella10 = new Cinderella(`Kate`, 29, 36)

const arrayCinderella = [];
arrayCinderella.push(cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10);

class Prince {

    constructor(name, age, findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }
}

const prince = new Prince(`Petya`, 45, 37);
const findCinderellas = (arr.boy)=>
{
    for (const item of arr) {
        if (item.footSize === boy.findFootSize){
            console.log(`My cinderella is ${item.name}`);
        }
    }
}
findCinderellas(arrayCinderella,prince)