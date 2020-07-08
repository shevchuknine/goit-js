// createRequest(true, "hello, world").then((value) => {
//     console.log(value);
// });

createRequest(false, "error").catch((error) => {
    console.log("поймали ошибку", error);
});