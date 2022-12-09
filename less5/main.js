// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function S(a,b){
//     let result = a*b;
//     console.log(result)
// }
// S(10,15)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let squareCircle = (r) => Math.PI*Math.pow(r,2)
// console.log(squareCircle(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const cilindr = (r, h) => Math.PI+Math.pow(r,2) *h;
// console.log(cilindr(5,2))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [0, 1, 2];
// function arry(array){
//     for (const item of array) {
//         console.log(item)
//     }
// }
// arry(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function book(text){
//     document.write(`<p>${text}</p>`);
// }
// book(`Vlad`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// !!!!!!function book{
//     document.write(`<ul>`)
//     document.write(`</ul>`)
// }


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function book(text,num){
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// book(`Vlad`,5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr=[1,15,true,`dse`];
// function book(array){
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// book(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// const arr = [
//     {
//         name: "Anna",
//         age: 23,
//     },
//     {
//         name: "Vlad",
//         age: 40,
//     }
// ]
// let objArray = function (array) {
//     for (const item of array) {
//         document.write(`<div>${item.name} - ${item.age}</div>`)
//     }
// }
// objArray(arr);

// - створити функцію яка повертає найменьше число з масиву

// const arr = [1, 10, -1552, 0];
// const minItem = function (array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// console.log(minItem(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr=[1,2,10];
// function array(arr){
//
// }
