const arrayOfColors = ["black", "red"];

const onClick = (e) => {
    const currentColor = block.style.backgroundColor;
    console.log(currentColor);
    const indexOfCurrentColor = arrayOfColors.findIndex(item => item === currentColor);
    const nextColor = arrayOfColors[
        indexOfCurrentColor === arrayOfColors.length - 1 ? 0 : indexOfCurrentColor + 1
        ];

    block.style.backgroundColor = nextColor;
};

const block = document.querySelector(".block");
block.addEventListener("click", onClick);
block.removeEventListener("click", onClick);