// createRequest(true, ["country1", "country2", "country3", "country4"])
//     .then((allCountries) => {
//         console.log("передаем allCountries в запрос дальше");
//         return createRequest(true, allCountries.filter((item, index) => index % 2 !== 0));
//     })
//     .then((allowedCountries) => {
//         console.log(allowedCountries);
//     });

createRequest(false, "string")
    .catch((error) => {
        console.log("произошла какая-то ошибка", error);
        return "default string";
    })
    .then((result) => {
        console.log(result);
        return result.split("").filter((item, index) => index % 2 !== 0);

        // реализация под капотом
        // return new Promise((resolve) => {
        //     resolve(result.split("").filter((item, index) => index % 2 !== 0));
        // })
    })
    .then((splittedSymbols) => {
        console.log(splittedSymbols, asd);
    })
    .catch((errorMessage) => {
        console.log("произошла какая-то ошибка еще раз", errorMessage);
    });

// new Promise((resolve, reject) => {
//     // resolve("data");
//     reject("error");
// });
//
// Promise.resolve("data");
// Promise.reject("error");
//
// Promise.all([
//     createRequest(true, "1"),
//     createRequest(false, "2"),
//     createRequest(false, "3")
// ]).then(([result1, result2]) => {
//     console.log(result1, result2)
// }).catch(console.log);

Promise.race([
    createRequest(true, "1"),
    createRequest(false, "2"),
]).then((first) => {
    console.log(first);
}).catch(console.warn)



const func = (a, b) => a + b;
func(1, 2)











