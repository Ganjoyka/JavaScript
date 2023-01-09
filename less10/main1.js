const url = new URL(location.href);
const id = url.searchParams.get(`data`);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(info => info.json())
    .then(info => {
        for (const userDiv in info) {
            const userDiv = document.createElement(`div`)
            userDiv.innerText=`${userDiv} ${info[userDiv]}`;
            document.body.append(userDiv);
        }
    });