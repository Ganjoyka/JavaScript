// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 21;
// if (x !== 0) {
//     console.log(true)
// } else {
//     console.log(false)
// }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = 70;
// if (time >= 0 && time <= 15) {
//     console.log("first")
// } else if (time >= 16 && time <= 30) {
//     console.log("second")
// } else if (time >= 31 && time <= 45) {
//     console.log("third")
// } else if (time >= 46 && time <= 60) {
//     console.log("fourth")
// } else {
//     console.log("error")
// }
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 2
// day > 1 && day < 10 ? console.log("first decade") : day > 11 && day < 21 ? console.log("second decade")
//     : day > 21 && day < 31 ? console.log("third decade") : console.log("err");


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let d = +prompt();
// switch (d) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("err")
//         break;
// }

// - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let a=1;
// let b=15;
// if (a>b){
//     console.log(a)
// }
// else if(b>a){
//     console.log(b)
// }
// else if(a===b){
//     console.log("equal")
// }
// else {
//     console.log("err")
// }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподыбне, тобто кастується до false)
let x=+prompt()