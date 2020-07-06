// const debounce = (func, delay) => {
//     let id = null;
//     return function() {
//         const args = arguments;
//
//         if (id !== null) {
//             clearTimeout(id);
//         }
//
//         id = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// };
//
// const debouncedFunction = debounce((a,b) => {
//     console.log(a + b)
// }, 1000);
//
// debouncedFunction(1,2);
// debouncedFunction(2,2);
//
// setTimeout(() => {
//     debouncedFunction(3,2)
// }, 500);

const throttle = (func, delay) => {
    let busy = false;
    return function() {
        if (!busy) {
            func(...arguments);

            busy = true;
            setTimeout(() => {
                busy = false;
            }, delay);
        }
    }
};

const throttledFunction = throttle((a,b) => {
    console.log(a+b)
}, 10);

throttledFunction(1,1);
throttledFunction(1,2);
setTimeout(() => {
    throttledFunction(1,3);
}, 50);