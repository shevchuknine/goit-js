// fetch(`/path-to-server`)
//     .then((answerFromServer) => {
//         console.log(answerFromServer);
//     })
//     .catch(() => {
//         alert()
//     });

// const headers = new Headers();
// headers.append("text", "value");

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         // "asdfasfsdf": "asdfasdfasdf"
//     },
//     credentials: "include",
//     cache: "no-cache"
//     // body: JSON.stringify({
//     //     title: "test",
//     //     asdfasdf: "adf"
//     // })
// })
//     .then(response => {
//         // return response.text();
//         return response.json();
//     })
//     .then(data => console.log(data));

// создание комментария
// const sendRequest = (postId, body) => {
//     return fetch("https://jsonplaceholder.typicode.com/comments", {
//         method: "POST",
//         body: JSON.stringify({
//             postId,
//             email: "asd@asd.asd",
//             name: "name",
//             body
//         })
//     }).then(response => response.json())
// };

// sendRequest(1, "comment 1")
//     .then(data => {
//         console.log(data);
//         const {id, value} = data;
//
//         if (id) {
//             return sendRequest(1, "comment 2")
//         }
//     }).then((data) => {
//         if (data) {
//             console.log(data);
//         }
//     })

// Promise.all([
//     sendRequest(1, "comment 1"),
//     sendRequest(2, "comment 2")
// ]).then((result) => {
//     console.log(result);
// })

// удаление комментария с последующим обновлением поста

const fetchJSON = (url, config = {}) => {
    return fetch(url, {
        ...config,
        headers: {
            "content-type": "application/json",
            ...config.headers
        }
    }).then(res => res.json());
};

fetchJSON("https://jsonplaceholder.typicode.com/comments/20")
    .then(commentData => {
        const {id, postId} = commentData;
        return {id, postId};
    })
    .then(data => {
        const {id, postId} = data;

        return Promise.all([
            fetchJSON(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: "PATCH",
                headers: {
                    test: "value"
                },
                body: JSON.stringify({
                    title: "new title"
                })
            }),
            fetchJSON(`https://jsonplaceholder.typicode.com/comments/${id}`, {
                method: "DELETE"
            })
        ])
    })
    .then(data => console.log(data[0]));
