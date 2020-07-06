// const toPrettyValue = (value) => `${value < 10 ? "0" : ""}${value}`;
const toPrettyValue = (value, n = 2) => ("" + value).padStart(n, "0");

let flag = true;

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    flag = !flag;
    btn.innerHTML = flag ? "Stop" : "Start";
});

setInterval(() => {
    if (flag) {
        const date = new Date();

        document.querySelector("#hour").innerHTML = toPrettyValue(date.getHours());
        document.querySelector("#minute").innerHTML = toPrettyValue(date.getMinutes());
        document.querySelector("#second").innerHTML = toPrettyValue(date.getSeconds());
        document.querySelector("#milisecond").innerHTML = toPrettyValue(date.getMilliseconds(), 3);
    }
}, 10);