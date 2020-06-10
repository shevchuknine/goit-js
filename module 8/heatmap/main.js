document.querySelector(".block").addEventListener("click", e => {
    e.stopPropagation();
})

let data = {};

document.querySelector(".parent").addEventListener("click", e => {
    const target = e.target;

    if (target.classList.contains("button")) {
        const id = target.dataset.id;
        data = {
            ...data,
            [id]: (data[id] || 0) + 1
        };

        console.log(data);
    }

}, true)