const runIntervalNTimes = (callback, delay, n) => {
    let counter = 0;
    const id = setInterval(() => {
        callback();

        counter += 1;
        if (counter === n) {
            clearInterval(id);
        }
    }, delay);
};

runIntervalNTimes(() => console.log("asd"), 100, 10);