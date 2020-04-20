// метод массива push
// let array = [1,2,3,4,5,6];
//
// console.log(array);

function push() {
    const argsArray = Array.from(arguments);
    const paramsToAdd = argsArray.slice(1);
    let array = argsArray[0];
    // array.length += paramsToAdd.length;

    for (let i = 0; i < paramsToAdd.length; i += 1) {
        array.length += 1;
        array[array.length - 1] = paramsToAdd[i];
    }

    return array.length;
}
//
// let a = [1,2];
// let result = push(a, 3, 4, 5, 6);
// console.log(a, result);

// let a = [1,2,3];
// let b = a.slice();
// console.log(a, b, a === b);

// let c = [1,2,3];
// let d = c;
// console.log(c, d, c === d);
// push(d, 4);
// console.log(c, d, c === d);

// let a = [1];
// let b = a;
//
// a.push(2);
//
// console.log(a, "previous value:", b);

// let adf = [1,2,3,4,5];
// let b = ourFunctionSlice(adf, 0, adf.length);
// console.log(adf,b, adf === b);

// function ourFunctionSlice(array, start = 0, end = array.length) {
//     console.log(array, start, end);
//     // let result = [];
//     //
//     // for (let i = start; i < end; i += 1) {
//     //     result.push(array[i]);
//     // }
//     //
//     // return result;
// }
//
//
// let b = ourFunctionSlice([1,2,3,4,5], null, 2);
// console.log(b);


// console.log(a);
// let a = 1;
//
// console.log(add(1, 3));
//
//
// const add = function (a = 1,b = 2) {
//     return a + b;
// };

// 100500 строк

// function add(a = 1, b = 2) {
//     return a + b;
// }

// name();
//
// function name() {
//
// }
//
// const a = function(){};
// const b = () => {};

function hugeScript() {
    //
    //
    //


    const logging = (status, message) => {
        if (status === "normal") {
            console.log(message);
        } else if (status === "warning") {
            console.warn(message);
        } else if (status === "error") {
            console.error(message);
        }
    };

    logging("warning", "he have warning");
    logging("error", "he have error");


    // const add2 = (a,b) => a + b;
}

hugeScript();





function test() {

    if (b === 1) {
        // console.log();
        return;
    }

    if (time === "12" || time == "15" || pet === "god") {
        time + 4;
        return;
    }

    if (age > 30) {

    }

}



































