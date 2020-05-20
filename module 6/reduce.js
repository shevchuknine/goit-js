const arrayOfUsers = [
    {name: "Name1"},
    {name: "Name2", age: 21},
    {name: "Name3", age: 22},
    {name: "Name4", age: 23},
    {name: "Name5", age: 24},
    {name: "Name6", age: 25},
    {name: "Name7", age: 26},
    {name: "Name8", age: 27},
    {name: "Name5", age: 30},
];

// const result = arrayOfUsers.reduce((res, item, index, array) => {
//     console.log(res);
//     res.push(1);
//     return res;
// }, []);
//
// console.log(result);

// const result = arrayOfUsers.reduce((res, item, index) => {
//     if (index % 2 === 0) {
//         res.push(item.age);
//     }
//
//     return res;
// }, []);
//
// console.log(result);

// const user = arrayOfUsers.reduce((res, item) => {
//     // if (item.name !== "Name5") {
//     //     return res;
//     // }
//     //
//     // return item;
//     if (res) {
//         return res;
//     }
//
//     if (item.name === "Name4") {
//         return item;
//     } else {
//         return undefined;
//     }
// }, undefined);
//
// console.log(user);

// const [less25, more25] = arrayOfUsers.reduce((res, item) => {
//     if (item.age < 25) {
//         res[0].push(item);
//         return res;
//     } else {
//         const [less25, more25] = res;
//         return [less25, [...more25, item]];
//     }
// }, [[], []]);
//
// console.log(less25, more25);

// const amount = arrayOfUsers.reduce((res, item) => {
//     if (item.age < 26) {
//         return res + 1;
//     }
//
//     return res;
// }, 0);
// console.log(amount);

// проверка на положительные
// let arrayOfNumbers = [1,3,5, 1, 3, 10, 20, 4, 1];
// const isPositive = arrayOfNumbers.reduce((res, item) => {
//     if (res === false) {
//         return res;
//     }
//
//     if (item < 0) {
//         return false;
//     }
//
//     return true;
// }, true);
//
// console.log(isPositive);

// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let slicedNumbers = numbers.slice(0, 6);
// slicedNumbers.filter((item, index, array) => {
//     slicedNumbers.length;
// });
//
// console.log(array)

// let result = arrayOfUsers.reduce((res, item) => {
//     if (item.age !== undefined) {
//         return res + item.age;
//     }
//
//     return res;
// }, 0);
// console.log(result);

// let initial = [[10, 10], [11, 11], [12, 12], [13, 13]];
// let result = initial.reduce((res, item) => {
//     return [...res, {
//         lon: item[0], lat: item[1]
//     }]
// }, []);

// let result = initial.map(item => {
//     return {
//         lon: item[0],
//         lat: item[1]
//     };
// });
//
// console.log(result);

// const getFieldName = (index) => {
//     if (index === 0) {
//         return "latitude";
//     }
//
//     if (index === 1) {
//         return "lon";
//     }
//
//     if (index === 2) {
//         return "value";
//     }
// };
//
// let initial = ["Asd", 1, "qwe"];
// let result = initial.reduce((res, item, index) => {
//     return {
//         ...res,
//         [getFieldName(index)]: item
//     };
// }, {});
//
// console.log(result);

// let object = {
//     asd: "asd",
//     value: "asd",
//     value$: "asd",
//     asd$: "asd"
// };
//
// const result = Object.entries(object).reduce((res, item) => {
//     const [key, value] = item;
//
//     if (key.includes("$")) {
//         return res;
//     } else {
//         return {
//             ...res,
//             [key]: value
//         };
//     }
// }, {});
//
// console.log(result);


// let string = "hello, world";
// // let result = string.split("").join(";");
//
// let result = string.split("").reduce((res, item, index) => {
//     // return res + item + index;
//     return `${res}${item}${index % 2 === 0 ? index : ""}`;
// }, "");
//
// console.log(result);

// const plus5 = (value) => value + 5;
// const minus2 = (value) => value - 2;
//
// let array = [plus5, minus2];
//
// let result = array.reduce((res, item) => {
//     return item(res);
// }, 0);
//
// console.log(result);

// let string = "qweqefwefqwe";
// let result = string.split("").reduce((res, item) => {
//     return {
//         ...res,
//         [item]: (res[item] || 0) + 1
//     };
// }, {});
//
// console.log(result);

let numbers = [1,2,3,4,5,6];
let result = numbers.slice(0).reverse();
// let result = numbers.reduce((res, item, index, array) => {
//     return [...res, array[array.length - index - 1]];
// }, []);

console.log(numbers, result);
result.reverse();
console.log(result);

























































