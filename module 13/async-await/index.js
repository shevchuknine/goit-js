const customFetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("asd");
        }, 1500);
    });
};

// promise
// const getData = () => {
//     customFetch()
//         .then((data) => {
//             console.log("data", data);
//         })
//         .catch(error => {
//             console.log("error", error);
//         });
// };


// async/await
// const getData2 = async () => {
//     try {
//         // const result = /* тут пауза */ await customFetch();
//         const result = await customFetch();
//
//         console.log(result);
//     } catch (e) {
//         console.log("error")
//     }
// };
//
// getData2();

// async function getData3 () {
//     await customFetch();
// }


// игнор ошибки промиса
// try {
//     customFetch();
// } catch (e) {
//     console.log("errr");
// }




