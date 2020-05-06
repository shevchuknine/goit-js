// вариант без callback-ов
// function plus(a, b, typeOfLogging) {
//     const result = a + b;
//
//     if (typeOfLogging === "log") {
//         console.log(result);
//     } else if (typeOfLogging === "logWithCalculation") {
//         console.log(`${a} + ${b} == ${result}`);
//     } else if (typeOfLogging === "warn") {
//         console.warn(result);
//     } else if (typeOfLogging === "alert") {
//         alert(result);
//     }
//
//     // console.log(result);
//     // console.warn(result);
// }

// console.log(plus(1,2, "log"));
// console.log(plus(1,2, "logWithCalculation"));
// console.log(plus(1,2, "warn"));
// console.log(plus(1,2, "alert"));

// function plus(asd, asde, func) {
//     let result = asd + asde;
//
//
//     func(result);
// }
//
// // plus(2, 5, console.log);
// // plus(2, 5, console.warn);
// // plus(2, 5, console.error);
// // plus(2, 5, alert);
//
// const a = 2;
// const b = 5;
// const callback = function(result){
//     console.log(`${a} + ${b} = ${result}`);
// };
// plus(a, b, callback);

// function plus(a,b) {
//     let result = a + b;
//     return result;
// }
//
// const resultOfCalculations = plus(2,5);
// console.log(resultOfCalculations);


// function forEach(array, callback) {
//     for (let i = 0; i < array.length; i += 1) {
//         callback(i, array[i], array, Math.random());
//     }
// }

// const consoleArray = function(elementOfArray) {console.log(elementOfArray)};
// forEach([1,2,3], consoleArray);

// let result = 0;
// const callback = function (indexOfElement, elementOfArray, array, randomValue) {
//     console.log(`element[${indexOfElement}]: ${elementOfArray} - ${randomValue}`);
//     result += elementOfArray;
// };
//
// forEach([1,2,3,4,5], callback);
//
// console.log(`result: ${result}`);


// function find(array, callback) {
//     for (let i = 0; i < array.length; i += 1) {
//         let resultOfCallback = callback(array[i]);
//         if (resultOfCallback) {
//             return array[i];
//         }
//     }
//
//     return null;
// }

// const callback = function(element) {
//     return element.a === "str";
// };
// let array = [{test: 1}, {test: 2, a: "str"}, {test: 3}, {b: 0}];
// const ourElement = find(array, callback);
// console.log(ourElement);

// let number = [1,2,3,4,5];
// const callback2 = function(element) {
//     return element === 6;
// };
// const ourElement2 = find(number, callback2);
// console.log(ourElement2);

// const repeatAction = function(array, callback) {
//     for (let i = 0; i < array.length; i += 1) {
//         callback(array[i], i, array);
//     }
// };

// function logEveryElement(array) {
//     repeatAction(array, function(element) {
//         console.log(element);
//     });
// };
//
// logEveryElement([1,2,3]);

// function find(array, callback) {
//     let result = null;
//
//     let callbackForRepeatAction = function (elementOfArray) {
//         if (result === null) {
//             let resultOfFindCallback = callback(elementOfArray);
//             if (resultOfFindCallback) {
//                 result = elementOfArray;
//             }
//         }
//     };
//
//     repeatAction(array, callbackForRepeatAction);
//
//     return result;
// }
//
// const result = find([{a: 1, i: 0}, {a: 2, i: 1}, {a: 1, i: 2}], function(element) {
//     return element.a === 1;
// });
// console.log(result);

// const variable = 1;
//
// const test = function() {
//     console.log(variable);
// };

function find(array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        let resultOfCallback = callback(array[i]);
        if (resultOfCallback) {
            return array[i];
        }
    }

    return null;
}

const array = [{a: 1}, {a: 2}, {a: 3}, {b: 1}];

const byFieldName = function(fieldName, fieldValue) {
    return function innerCallback(elementOfArray) {
        // elementOfArray[fieldName]["test"];
        return elementOfArray[fieldName] === fieldValue;
    };
};

const callback = byFieldName("b", 1);

const element = find(array, callback);
console.log(element);


//
// const createCounter = function() {
//
//     let privateValue = 0;
//
//     const increment = function() {
//         privateValue += 1;
//         console.log(privateValue);
//     };
//
//     return increment;
// };
//
// const counterA = createCounter();
// counterA();




















