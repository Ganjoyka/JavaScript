const url = new URL(location.href);
const id = url.searchParams.get(`data`);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(info => info.json())
    .then(info => {
        for (const user in info) {

            const userDiv = document.createElement(`div`)
            if (typeof info[user] !== `object`) {

                userDiv.innerText = `${user} ${info[user]}`;
            } else {
                userDiv.innerText = `${user} `;

                for (const key in info[user]) {
                    const userInnerDiv = document.createElement(`div`);
                    if (typeof info[user][key] !== `object`){
                        userInnerDiv.innerText =`${key} - ${info[user][key]}`
                    }
                    userDiv.append(userInnerDiv);
                }
            }

            document.body.append(userDiv);
        }
    });