const input = document.querySelector("input");

let leftOperand;
let operation;

document.querySelector(".numbers").addEventListener("click", event => {
    const button = event.target;
    const number = button.dataset.number;

    if (number) {
        input.value += number;
    }
});

document.querySelector(".operations").addEventListener("click", event => {
    const button = event.target;
    const oper = button.dataset.operation;

    if (!oper) {
        return;
    }

    if (oper === "=") {
        input.value = eval(`${leftOperand}${operation}${Number(input.value)}`)
    } else {
        leftOperand = Number(input.value);
        operation = oper;
        input.value = "";
    }
});
