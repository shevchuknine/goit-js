// console.log("hello world");
// 1. пользовательский ввод и его разбор
// 2. вычисления
// 3. показать результат
// 4. сделать калькулятор бесконечным
// let userInput;
// let initialValue = 0;
//
// do {
//     userInput = prompt(`Текущий результат: ${initialValue}\nВведите операцию в формате <операнд><число>:`);
//     if (userInput !== null) {
//         const operation = userInput.slice(0, 1);
//
//         if (operation === "+" || operation === "-" || operation === "/" || operation === "*") {
//             const number = Number(userInput.slice(1, userInput.length));
//
//             if (isNaN(number)) {
//                 alert("Вы ввели неверное число");
//             } else {
//                 let result;
//
//                 if (operation === "+") {
//                     result = initialValue + number;
//                 } else if (operation === "-") {
//                     result = initialValue - number;
//                 } else if (operation === "/") {
//                     result = initialValue / number;
//                 } else if (operation === "*") {
//                     result = initialValue * number;
//                 }
//
//                 // alert("Результат операции 0" + operation + number + " = " + result);
//                 alert(`Результат операции ${initialValue} ${operation} ${number} = ${result}`);
//
//                 initialValue = result;
//             }
//         } else {
//             alert("операция недоступна");
//         }
//     }
// } while (userInput !== null);

console.log("Числа, кратные 3:")
for (let i = 0; i < 100; i += 1) {
    if (i % 3 == 0) {
        console.log(i);
    }
}
console.log("Цикл завершен");
