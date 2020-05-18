// const arrayOfUsers = [
//     {name: "Name1", age: 20},
//     {name: "Name2", age: 21},
//     {name: "Name3", age: 22},
//     {name: "Name4", age: 23},
//     {name: "Name5", age: 24},
//     {name: "Name6", age: 25},
//     {name: "Name7", age: 26},
//     {name: "Name8", age: 27},
//     {name: "Name5", age: 30},
// ];

// выборка данных
// 1-й вариант
// let result = [];
// arrayOfUsers.forEach((item, index, array) => {
//     result.push(item.age);
// });

// 2-й вариант (правильный)
// let result = arrayOfUsers.map((item) => {
//     return item.age;
// });

// console.log(arrayOfUsers, result);

// поиск элемента
// 1-й вариант
// let user;
// arrayOfUsers.forEach((item) => {
//     if (!user && item.name === "Name5") {
//         user = item;
//     }
// });

// 2-й вариант
// let user = arrayOfUsers.filter(item => item.name === "Name5")[0];

// 3-й вариант (правильный)
// let user = arrayOfUsers.find(item => item.name === "Name5");

// console.log(user);

// распределение
// 1-й вариант
// let usersLess25 = [];
// let usersMore25 = [];
// arrayOfUsers.forEach(item => {
//     if (item.age < 25) {
//         usersLess25.push(item);
//     } else {
//         usersMore25.push(item);
//     }
// });

// 2-й вариант (правильный)
// let usersLess25 = arrayOfUsers.filter(item => item.age < 25);
// let usersMore25 = arrayOfUsers.filter(item => item.age >= 25);
//
// // 3-й вариант
// let usersLess25 = arrayOfUsers.filter(item => item.age < 25);
// let usersMore25 = arrayOfUsers.filter(item => !usersLess25.includes(item));
//
// console.log(usersLess25, usersMore25);

// посчитать удовлетворяющие условия
// 1-й вариант
// let count = 0;
// arrayOfUsers.forEach(item => {
//     if (item.age >= 20 && item.age <= 25) {
//         count += 1;
//     }
// });

// 2-й вариант (правильный)
// let count = arrayOfUsers.filter(item => item.age >= 20 && item.age <= 25).length;
//
// console.log(count);

// проверка на положительные
// let arrayOfNumbers = [1,3,5, 1, 3, -10, 20, 4, 1];
// 1-й вариант
// let result = true;
// arrayOfNumbers.forEach(item => {
//     if (item < 0) {
//         result = false;
//     }
// });

// 2-й вариант (приоритетный)
// let result = arrayOfNumbers.every(item => item > 0);

// 3-й вариант (приоритетный)
// let result = !arrayOfNumbers.some(item => item < 0);

// 4-й вариант
// let result = arrayOfNumbers.filter(item => item > 0).length === arrayOfNumbers.length;

// 5-й вариант
// let result = arrayOfNumbers.filter(item => item < 0).length === 0;

// 6-й вариант
// let result = arrayOfNumbers.find(item => item < 0) === undefined;
// console.log(result);

// let data = [
//     {id: "123", name: "Name 1", other: {field: "asd"}},
//     {id: "124", name: "Name 2", other: {field: "qwe"}},
//     {id: "125", name: "Name 3", other: {field: "zxc"}},
// ];

// const getDataByParameter = (array, fieldName, fieldValue) => {
//     return array.find(item => item[fieldName] === fieldValue);
// };

// console.log(getDataByParameter(data, "other.field", "125"));

// const getDataByParameter = (array, callback, fieldValue) => {
//     return array.find(item => callback(item) === fieldValue);
// };
//
// // getDataByParameter(data, (item) => item.name, "qwe");
// console.log(getDataByParameter(data, (item) => item.other.field, "qwe"));

// const getDataByParameter = (array, callback) => {
//     return array.find(item => callback(item));
// };
//
// // getDataByParameter(data, (item) => item.name, "qwe");
// console.log(getDataByParameter(data, (item) => item.other.field === "asd"));
//
// data.find((item) => item.other.field === "asd");


// let array = ["a", "c", "d", "b"];
// array.sort();
//
// console.log(array);

// let array = [1,3,2,4,5];
// array.sort((a, b) => {
//     console.log(a, b);
//     return a - b;
// });
//
// console.log(array);

// console.log([1,2,3,4,5].reverse())

// console.log([1,2,3]
//     .sort((a,b) => b - a)
//     .filter(item => item > 1)
//     .reverse());




















