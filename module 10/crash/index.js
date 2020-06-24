// const data = {
//     id: "qweqweqwe",
//     name: {
//         a: 1,
//         b: "asdasd"
//     }
// };
//
// const str = JSON.stringify(data).slice(1);
// console.log(JSON.parse(str));

let str = "";
for (let i = 0; i < 10000000; i += 1) {
    str += "1";
}

try {
    localStorage.setItem("test", str);
    console.log("ok")
} catch (e) {
    console.log("sorry")
}

console.log("next code");
