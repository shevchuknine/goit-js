// const toggleTheme = () => {
//     document.querySelector("html").classList.toggle("dark");
// };

const toggleTheme = () => {
    if (document.documentElement.style.getPropertyValue("--background") === "black") {
        // светлую
        document.documentElement.style.setProperty('--background', 'white');
        document.documentElement.style.setProperty('--text', 'black');
    } else {
        // темную
        document.documentElement.style.setProperty('--background', 'black');
        document.documentElement.style.setProperty('--text', 'white');
    }

};

document.querySelector(".body").addEventListener("click", () => console.log("1"))
document.querySelector(".body").addEventListener("click", () => console.log("2"))