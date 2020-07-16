const fetchWrapper = (url, config = {}) => {
    return fetch(`http://jsonplaceholder.typicode.com${url}`, {
        ...config,
        headers: {
            "content-type": "application/json",
            ...config.headers
        }
    }).then(response => response.json());
};

const showContainer = (container) => {
    container.style.display = "block";
};

const hideContainer = (container) => {
    container.style.display = "none";
};

const todosContainer = document.querySelector("#todos");
const usersContainer = document.querySelector("#users");
const searchContainer = document.querySelector("#search_container");
const userInfoContainer = document.querySelector("#user_info");

document.querySelector("body").addEventListener("click", event => {
    const {target} = event;
    if (target.id === "back") {
        showContainer(usersContainer);
        showContainer(searchContainer);
        hideContainer(todosContainer);
        hideContainer(userInfoContainer);
    } else if (target.id === "search_button") {
        hideContainer(todosContainer);
        hideContainer(userInfoContainer);

        usersContainer.innerHTML = "";

        const filterValue = document.querySelector("#search").value.toLowerCase();

        fetchWrapper(`/users`)
            .then(data => {
                const usersHTML = data
                    .filter(user => {
                        return user.email.toLowerCase().includes(filterValue);
                    })
                    .map(filteredUser => {
                        return `<div class="user" data-id="${filteredUser.id}">
                        ${filteredUser.email}
                    </div>`;
                    }).join("");

                usersContainer.insertAdjacentHTML("afterbegin", usersHTML);
            });
    } else if (target.id === "show_todos") {
        if (todosContainer.style.display === "none") {
            target.innerHTML = "Hide todos";

            showContainer(todosContainer);

            const userId = target.dataset.userid;
            fetchWrapper(`/todos?userId=${userId}`).then(todos => {
                const todosHTML = todos.map(todo => {
                    const {id, title, completed} = todo;
                    return `
                    <div class="todo">
                        <input type="checkbox" ${completed ? "checked" : ""} data-id="${id}">
                        <span>${title}</span>
                    </div>
                `
                }).join("");

                todosContainer.innerHTML = `${todosHTML}`;
            });
        } else {
            todosContainer.innerHTML = "";
            hideContainer(todosContainer);
            target.innerHTML = "Show todos";
        }
    }
})

todosContainer.addEventListener("input", event => {
    const {target} = event;
    const todoId = target.dataset.id;

    fetchWrapper(`/todos/${todoId}`, {
        method: "PATCH",
        body: JSON.stringify({
            completed: target.checked
        })
    })
    //     .then(() => {
    //     throw Error("asdasd")
    // }).catch((e) => {
    //     alert("Ошибка сохранения данных");
    //     // не сохранилось
    //     target.checked = !target.checked;
    // })
});

usersContainer.addEventListener("click", event => {
    hideContainer(usersContainer);
    hideContainer(searchContainer);

    showContainer(userInfoContainer);

    const {target} = event;
    const userId = target.dataset.id;

    fetchWrapper(`/users/${userId}`)
        .then(data => {
            const {id, name, phone, email, address: {city, street}} = data;
            userInfoContainer.innerHTML = `
                <div id="back">Back</div>
                <p>Name: ${name}</p>
                <p>Phone: ${phone}</p>
                <p>Email: ${email}</p>
                <p>Address: ${city} - ${street}</p>
                <button id="show_todos" data-userid="${id}">Show todos</button>
            `;
        });
});

