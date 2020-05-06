// function pushCustom() {
//     const paramsToAdd = Array.from(arguments);
//     for (let i = 0; i < paramsToAdd.length; i += 1) {
//         this.length += 1;
//         this[this.length - 1] = paramsToAdd[i];
//     }
//     return this.length;
// }

// function forEachCustom(callback) {
//     for (let i = 0; i < this.length; i += 1) {
//         callback(this[i], i, this);
//     }
// }

// const forEachCustom = function(callback) {
//     for (let i = 0; i < this.length; i += 1) {
//         callback(this[i], i, this);
//     }
// }

// стрелочная функция не подходит для этой задачи
// const forEachCustom = (callback) => {
//     for (let i = 0; i < this.length; i += 1) {
//         callback(this[i], i, this);
//     }
// };

// const array = [1,2,3];
// array.pushCustom = pushCustom;
// array.forEachCustom = forEachCustom;
//
// array.pushCustom(4, 5);
// // console.log(array);
//
// array.forEachCustom(function(item, index, array){
//     console.log(item, index, array);
// })

// const forEachObject = {
//     array: [1,2,3,4],
//     callback(item, index) {
//         console.log(this, item, index);
//     },
//     forEach() {
//         const {array} = this;
//         // const {callback} = this;
//         // const {array, callback} = this;
//         // const array = this.array;
//         const callback = this.callback;
//
//         for (let index = 0; index < array.length; index += 1 ) {
//             this.callback(array[index]);
//             // callback.call(this, array[index], index);
//             // callback.apply(this, [array[index], index]);
//             // const bindedCallback = callback.bind(this);
//             // bindedCallback(array[index], index);
//             // callback(array[index], index);
//         }
//
//         // for (const index in array) {
//         //     callback(array[index]);
//         // }
//     }
// };
//
// forEachObject.forEach();

// const db = {
//     items: [
//         {id: "id_1", name: "name_1", category: "category_1"},
//         {id: "id_2", name: "name_2", category: "category_2"},
//         {id: "id_3", name: "name_3", category: "category_3"},
//         {id: "id_4", name: "name_4", category: "category_4"},
//         {id: "id_5", name: "name_5", category: "category_5"},
//         {id: "id_6", name: "name_6", category: "category_6"},
//     ],
//     showItems() {
//         const showItem = function() {
//             const {id, name, category} = this;
//             console.log(`id: ${id}, name: ${name}, category: ${category}`);
//         };
//
//         const items = this.items;
//         for (let i = 0; i < items.length; i += 1) {
//             const item = items[i];
//
//             showItem.call(item);
//
//             // showItem.apply(item);
//
//             // const bindedShowItem = showItem.bind(item);
//             // bindedShowItem();
//
//             // showItem.bind(item)();
//
//             // не работает (не подходит)
//             // item.showItem();
//             // console.log(showItem);
//         }
//     }
// };
//
// db.showItems();

// function test () {
//     const array = Array.from(arguments);
//
//     method.call(context, array);
//     method.apply(context, array);
//
// }

// const customBind = function(newContext) {
//     // 1-й вариант
//     const func = this;
//     return function() {
//         return func.apply(newContext, Array.from(arguments));
//     };
//
//     // 2-й вариант
//     return (...args) => this.apply(newContext, args);
// };
//
// function showThis(a, b, c, d) {
//     console.log("my context: ", this, a, b, c, d);
//     return 3;
// }
// showThis.customBind = customBind;
//
// // const number = showThis();
// // console.log(number);
//
// // const bindedShowThis = showThis.customBind({hi: "hi"});
// // bindedShowThis();
//
// const bindedShowThis = showThis.customBind({hi: "hi"});
// const number = bindedShowThis(1, 2, 3, 4);

// function test(callback) {
//     callback();
// }
//
// let obj  = {
//     method() {
//         console.log(this);
//     }
// };
//
// test(obj.method.bind(obj));

















































