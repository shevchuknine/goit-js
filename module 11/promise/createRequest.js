function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const createRequest = (success, result) => {
    return new Promise((resolve, reject) => {
        // тело промиса
        setTimeout(() => {
            if (success) {
                resolve(result);
            } else {
                reject(result);
            }
        }, getRandomArbitrary(1500, 2000))
    });
};