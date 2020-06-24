const sessionNum = document.querySelector("#session_num");
const localNum = document.querySelector("#local_num");

let sessionValue = sessionStorage.getItem("value");
sessionNum.innerHTML = sessionValue === null ? 0 : sessionValue;
let localValue = localStorage.getItem("value");
localNum.innerHTML = localValue === null ? 0 : localValue;

const sessionButton = document.querySelector("#session_button");
sessionButton.addEventListener("click", event => {
    const currentValue = +sessionNum.innerHTML;
    const nextCurrentValue = currentValue + 1;
    sessionStorage.setItem("value", nextCurrentValue);
    sessionNum.innerHTML = nextCurrentValue;
});
const localButton = document.querySelector("#local_button");
localButton.addEventListener("click", event => {
    const currentValue = +localNum.innerHTML;
    const nextCurrentValue = currentValue + 1;
    localStorage.setItem("value", nextCurrentValue);
    localNum.innerHTML = nextCurrentValue;
});