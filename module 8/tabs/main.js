
document.querySelector(".tabs").addEventListener("click", event => {
    const tab = event.target;
    const id = tab.dataset.page;

    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".page.active").classList.remove("active");

    tab.classList.add("active");
    document.querySelector(`#${id}`).classList.add("active");
});