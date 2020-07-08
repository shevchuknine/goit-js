createRequest(true, "Контент страницы")
    .then((content) => {
        document.querySelector(".content").innerHTML = content;
        // document.querySelector(".spinner").classList.remove("active");
    })
    .catch(() => {
        document.querySelector(".content").innerHTML =
            "Ошибка сервера, попробуйте позже";
        // document.querySelector(".spinner").classList.remove("active");
    })
    .finally(() => {
        document.querySelector(".spinner").classList.remove("active");
    });

// createRequest(true, "Контент страницы")
//     .then((content) => {
//         document.querySelector(".content").innerHTML = content;
//         // document.querySelector(".spinner").classList.remove("active");
//     }, () => {
//         document.querySelector(".content").innerHTML =
//             "Ошибка сервера, попробуйте позже";
//         // document.querySelector(".spinner").classList.remove("active");
//     })
//     .then(null, () => {console.log("error")}) // <-- catch
//     .finally(() => {
//         document.querySelector(".spinner").classList.remove("active");
//     });


