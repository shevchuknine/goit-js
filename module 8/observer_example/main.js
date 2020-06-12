// const observer = new IntersectionObserver((entries) => {
//     console.log(entries);
// }, {
//     // root: document.querySelector(".block"),
//     threshold: 0.5
// });
//
// document.querySelectorAll("p")
//     .forEach(p => observer.observe(p));

const observer = new IntersectionObserver((intances) => {
    const visibleImages = intances.filter(i => i.isIntersecting);

    visibleImages
        .map(i => i.target)
        .forEach(image => {
            image.setAttribute("src", image.dataset.src);
        })
}, {
    threshold: 0,
    rootMargin: "0px 0px 200px 0px"
});

document.querySelectorAll("img").forEach(i => {
    observer.observe(i);
})