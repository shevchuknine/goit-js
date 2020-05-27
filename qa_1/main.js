// console.log("hi")
//
// test();
//
// function test() {
//     console.log("asd");
// }
//
// test();
//
// test2();
//
// const test2 = function() {
//     test2();
//
//     if (Math.random() > 0.5) {
//         return "asd";
//     }
// };
//
// test2();

// let object = {
//     key1: "value",
//     key2: {
//         key11: "asd",
//         key21: {
//             key111: "aSD"
//         }
//     }
// };
//
// const func = (object) => {
//     let result = {};
//     let keys = Object.keys(object);
//
//     for (let i = 0; i < keys.length; i += 1) {
//         let key = keys[i];
//         let newKey = `${key[0].toUpperCase()}${key.slice(1)}`;
//
//         if (typeof object[keys[i]] === "object") {
//             result[newKey] = func(object[keys[i]]);
//         } else {
//             result[newKey] = object[key];
//         }
//     }
//
//     return result;
// };
//
// console.log(func(object));

// let obj = {};
// obj["Asd"] = "asd";
// obj["Asd"] = "asd1";

// const {key1: {key11} = {}} = object;
//
// return [].filter()
//                 .map()
//                 .sort();
//
// let people = [
//     {name: "1", age: 10},
//     {name: "2", age: 15},
//     {name: "3", age: 20},
//     {name: "4", age: 25},
//     {name: "5", age: 30},
//     {name: "6", age: 35},
// ];
//
// console.log(
//     people.filter(item => item.age <= 25)
//         .map((item, index, array) => item.name)
// );

const string = "qweiruoyqweilruhasjkldfhalksjdhfuiyqhwekljhasdf";
// const amounts = string.split("").reduce((res, item) => {
//     return {
//         ...res,
//         [item]: (res[item] || 0) + 1
//     };
// }, {});
//
// const result = Object.entries(amounts).reduce((res, entry) => {
//     const [key, value] = entry;
//     return [...res, key, value];
// }, []);
//
// console.log(result);

const getPositionOfValue = (str, symbol, count) => {
    const result = str.split("").reduce((res, item, index) => {
        if (item === symbol) {
            if (res.count < count - 1) {
                return {
                    ...res,
                    count: res.count + 1
                };
            } else if (res.count === count - 1) {
                return {
                    ...res,
                    value: index,
                    count: res.count + 1
                };
            }
        }

        return res;
    }, {
        value: -1,
        count: 0
    });

    return result.value;
};

console.log(getPositionOfValue(string, "a", 4));




























