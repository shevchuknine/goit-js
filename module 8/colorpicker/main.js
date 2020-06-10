// const picker = document.querySelector(".picker");
//
// picker.style.backgroundColor = "rgb(0,0,0)";
//
// document.querySelector(".inputs").addEventListener("input", event => {
//     const input = event.target;
//     const chanel = input.dataset.chanel;
//
//     const background = picker.style.backgroundColor;
//     const chanelR = parseInt(background.slice(4))
//     const chanels = background.split(",");
//     const chanelG = chanels[1];
//     const chanelB = parseInt(chanels[2]);
//
//     if (chanel === "r") {
//         picker.style.backgroundColor = `rgb(${input.value},${chanelG},${chanelB})`;
//     }
//     if (chanel === "g") {
//         picker.style.backgroundColor = `rgb(${chanelR},${input.value},${chanelB})`;
//     }
//     if (chanel === "b") {
//         picker.style.backgroundColor = `rgb(${chanelR},${chanelG},${input.value})`;
//     }
// })


const picker = document.querySelector(`.picker`);
const inputR = document.querySelector(`[data-chanel="r"]`);
const inputG = document.querySelector(`[data-chanel="g"]`);
const inputB = document.querySelector(`[data-chanel="b"]`);
picker.style.backgroundColor = `rgb(${inputR.value},${inputG.value},${inputB.value})`;

document.querySelector(".inputs").addEventListener("input", event => {
    const input = event.target;
    const chanel = input.dataset.chanel;

    if (chanel === "r") {
        picker.style.backgroundColor = `rgb(${input.value},${inputG.value},${inputB.value})`;
    }
    if (chanel === "g") {
        picker.style.backgroundColor = `rgb(${inputR.value},${input.value},${inputB.value})`;
    }
    if (chanel === "b") {
        picker.style.backgroundColor = `rgb(${inputR.value},${inputG.value},${input.value})`;
    }
})