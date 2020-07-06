// const messages = {
//     "id_1": {
//         author: "author_1",
//         message: "message",
//         date: "Mon Jul 06 2020 19:46:03 GMT+0300 (Восточная Европа, летнее время)"
//     },
//     "id_2": {
//         author: "author_1",
//         message: "message 2",
//         date: "Mon Jul 06 2020 19:45:22 GMT+0300 (Восточная Европа, летнее время)"
//     },
//     "id_3": {
//         author: "author_1",
//         message: "message 2",
//         date: "Mon Jul 06 2020 19:47:10 GMT+0300 (Восточная Европа, летнее время)"
//     },
//     "id_4": {
//         author: "author_1",
//         message: "message 2",
//         date: "Mon Jul 06 2020 19:50:12 GMT+0300 (Восточная Европа, летнее время)"
//     },
//     "id_5": {
//         author: "author_1",
//         message: "message 2",
//         date: "Mon Jul 06 2020 19:48:22 GMT+0300 (Восточная Европа, летнее время)"
//     },
// };
//
// Object.entries(messages).sort(([id1, message1],[id2, message2]) => {
//     const date1 = new Date(message1.date);
//     const date2 = new Date(message2.date);
//
//     return date1.getTime() - date2.getTime();
// }).forEach(([id, message]) => {
//     console.log(id, message.date);
// });

// const messages = {
//     "id_1": {
//         author: "author_1",
//         message: "message",
//         date: 1594054759609
//     },
//     "id_2": {
//         author: "author_1",
//         message: "message 2",
//         date: 1594054739609
//     },
//     "id_3": {
//         author: "author_1",
//         message: "message 2",
//         date: 1594054759610
//     },
//     "id_4": {
//         author: "author_1",
//         message: "message 2",
//         date: 1594054759309
//     },
//     "id_5": {
//         author: "author_1",
//         message: "message 2",
//         date: 1594053759609
//     },
// };
//
// Object.entries(messages).sort(([id1, message1],[id2, message2]) => {
//     // const date1 = new Date(message1.date);
//     // const date2 = new Date(message2.date);
//     //
//     // return date1.getTime() - date2.getTime();
//     return message1.date - message2.date;
// }).forEach(([id, message]) => {
//     console.log(id, new Date(message.date));
// });

const date = new Date();
console.log(date.toISOString());