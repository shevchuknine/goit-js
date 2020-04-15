// let a = [1,2,3];
// a.push(4,5,6);
// console.log(a);

// метод массива push
// let array = [1,2,3,4,5,6];
// array.length += 1;
// array[array.length - 1] = "new value";
// console.log(array);

// pop
// let array = [];
// const nextLengthOfArray = array.length - 1;
// if (nextLengthOfArray >= 0) {
//     array.length = nextLengthOfArray;
// }
// console.log(array);

// shift
// let array = [1,2,3];
// // 1-й вариант
// // for (let i = 0; i < array.length - 1; i += 1) {
// //     array[i] = array[i + 1];
// // }
// // конец 1-го варианта
// // 2-й вариант
// for (let i = 1; i< array.length; i += 1) {
//     array[i - 1] = array[i];
// }
// // конец второго варианта
// array.length -= 1;
// console.log(array);

// unshift
// let array = [1,2,3];
// array.length += 1;
// for (let i = array.length - 1; i > 0; i -= 1) {
//     array[i] = array[i - 1];
// }
// array[0] = "new value";
// console.log(array);

// join
// let array = [1,true, "b", false, 3, "c"];
// let result = "";
// const delimiter = false;
// for (let i = 0; i < array.length; i += 1) {
//     // result += delimiter;
//     // result += array[i];
//
//     const currentDelimiter = i === 0 ? "" : (delimiter === undefined ? "," : delimiter);
//     result += `${currentDelimiter}${array[i]}`;
// }
// console.log(result);

// split
// let string = "a b c";
// const delimiter = "";
// let result = [];
// let currentPart = "";
// for (let i = 0; i < string.length; i += 1) {
//     if (delimiter === "") {
//         result.push(string[i]);
//     } else {
//         if (string[i] === delimiter) {
//             result.push(currentPart);
//             currentPart = "";
//         } else {
//             currentPart += string[i];
//         }
//     }
// }
// if (delimiter !== "") {
//     result.push(currentPart);
// }
// console.log(result);

// indexOf
// let array = ["a", "b", "c", "d", "e"];
// const elementToFind = "f";
// let positionOfElement = -1;
//
// for (let i = 0; i < array.length; i += 1) {
//     console.log(`iteration ${i}`);
//     if (array[i] === elementToFind) {
//         positionOfElement = i;
//         break;
//     }
// }
//
// console.log(`position of element: ${positionOfElement}`);

// includes
// let array = ["a", "b", "c", "d", "e"];
// const elementToFind = "f";
//
// console.log(array.indexOf(elementToFind) !== -1);



// let variable = "f";

// if (variable === "a") {
//     console.log("variable is a");
// } else if (variable === "b") {
//     console.log("variable is b");
// } else if (variable === "c") {
//     console.log("variable is c");
// } else {
//     console.log("variable is unknown");
// }

// switch (variable) {
//     case "a":
//         console.log("variable is a");
//         break;
//     case "b":
//         console.log("variable is b");
//         break;
//     case "c":
//         console.log("variable is c");
//         break;
//     default:
//         console.log("variable is unknown");
//         break;
// }

// let variable = "d";

// if (variable === "a" || variable === "b" || variable === "c") {
//     console.log("a || b || c");
// } else {
//     console.log("unknown");
// }

// switch (variable) {
//     case "a":
//     case "b":
//     case "c":
//         console.log("a || b || c");
//         break;
//     default:
//         console.log("unknown");
//         break;
// }









































