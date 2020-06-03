const button = document.querySelector("button");
const input = document.querySelector("input");

const onClick = () => {
    input.focus();
};

button.addEventListener("click", onClick);

const onInput = (event) => {
    const target = event.target;
    const currentValue = target.value;
    if (currentValue.length >= 5) {
        target.blur();
    }
};

input.addEventListener("input", onInput);