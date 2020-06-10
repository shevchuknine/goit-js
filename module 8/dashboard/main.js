function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const body = document.body;

let IS_MOUSE_DOWN = false;
let INITIAL_X = false;
let INITIAL_Y = false;

const onClick = (event) => {
    const {target} = event;

    if (!target.classList.contains("element")) {
        const {clientX, clientY} = event;

        const div = document.createElement("div");
        div.classList.add("element");
        div.style.top = `${clientY - 50}px`;
        div.style.left = `${clientX - 50}px`;
        div.style.backgroundColor = getRandomColor();

        div.addEventListener("dblclick", event => {
            event.target.remove();
        });

        body.insertAdjacentElement("beforeend", div);
    }
};

body.addEventListener("click", onClick);

const onMouseDown = (event) => {
    const {clientX, clientY} = event;
    IS_MOUSE_DOWN = true;
    INITIAL_X = clientX;
    INITIAL_Y = clientY;
};

const onMouseUp = (event) => {
    IS_MOUSE_DOWN = false;
    INITIAL_X = null;
    INITIAL_Y = null;
};

const onMouseMove = event => {
    if (IS_MOUSE_DOWN) {
        const {style: {top: topPx, left: leftPx}} = event.target;
        const {clientX, clientY} = event;
        const top = parseInt(topPx);
        const left = parseInt(leftPx);

        const deltaX = clientX - INITIAL_X;
        const deltaY = clientY - INITIAL_Y;

        INITIAL_X = clientX;
        INITIAL_Y = clientY;

        event.target.style.top = `${top + deltaY}px`;
        event.target.style.left = `${left + deltaX}px`;
    }
};

body.addEventListener("mousedown", onMouseDown);
body.addEventListener("mouseup", onMouseUp);
body.addEventListener("mousemove", onMouseMove);