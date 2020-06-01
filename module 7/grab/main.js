// работа с сайтом книги

const getTitles = () => {
    const section = document.body.firstElementChild
        .children[1].children[0].lastElementChild
        .firstElementChild.firstElementChild
        .firstElementChild.firstElementChild;

    const sectionArray = Array.from(section.children);
    const titles = sectionArray
        .filter(node => node.nodeName === "H1")
        .map(node => node.textContent);

    return titles;
};

const getTitlesWithQuerySelector = () => {
    return Array.from(document.querySelectorAll("section > h1"))
        .map(i => i.textContent);
};

// преобразовть псевдомассив в массив
// Array.from(pseudo)
// [...pseudo]

// stylus.ua
const getPhoneInfoFromStylus = () => {
    const contentBlocks = [...document.querySelectorAll(".content-block")];

    const arrayOfData = contentBlocks.map(block => {
        const name = block.querySelector(".name-block > a").textContent;
        const price = block.querySelector(".regular-price").textContent;

        return {name, price};
    });

    return arrayOfData;
};
