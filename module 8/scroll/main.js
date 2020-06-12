console.log("asd");

const throttledOnScroll = _.throttle(event => {
    const fullHeight = document.body.offsetHeight;
    const scrollPosition = document.documentElement.scrollTop;
    const heightOfWindow = document.documentElement.clientHeight;


    console.log(fullHeight - (scrollPosition + heightOfWindow));
    // console.log(fullHeight, scrollPosition, heightOfWindow);
    if (fullHeight - (scrollPosition + heightOfWindow) < 300) {
        document.body.innerHTML += `<p>asd</p><p>asd</p><p>asd</p><p>asd</p>`;
    }
}, 150);

window.addEventListener("scroll", throttledOnScroll);