const throttledOnClick = _.throttle(event => {
    console.log("что-то сделал минимум раз в секунду")
}, 1000);

document.querySelector("button")
    .addEventListener("click", throttledOnClick);

