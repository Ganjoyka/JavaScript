// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит 4 (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

const box = document.createElement(`div`);
document.body.append(box);

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(info => info.json())
    .then(info => {
            for (const item of info) {
                const usersDiv = document.createElement(`div`);
                usersDiv.innerText=`${item.id} - ${item.name} `;
                box.append(usersDiv);

                const anchor=document.createElement(`a`);
                anchor.innerText=`Click`;
                usersDiv.append(anchor);
                anchor.href=`details.html?data=${item.id}`
            }
        }
    );
