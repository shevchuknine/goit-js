const fetchWrapper = async (url, config = {}) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com${url}`, {
        ...config
    });

    return response.json();
};

const userClickHandler = (event) => {
    const {target} = event;

    renderAlbums(target.closest("[data-id]").dataset.id);
};
const albumClickHandler = (event) => {
    const {target} = event;

    renderPhotos(target.closest("[data-id]").dataset.id);
};
const backToUsersHandler = (event) => {
    event.stopPropagation();

    renderUsers();
};
const backToAlbumsHandler = async (event) => {
    event.stopPropagation();

    const {target} = event;
    const albumId = target.dataset.id;

    const [{userId}] = await fetchWrapper(`/albums?id=${albumId}`);
    renderAlbums(userId);
};


// const clean = () => contentBlock.innerHTML = "";
const getContentBlock = () => document.querySelector("#content");
const clean = () => {
    const contentBlock = getContentBlock();
    contentBlock.parentNode.innerHTML = `<div id="content"></div>`;
};

const renderUsers = async () => {
    clean();
    const contentBlock = getContentBlock();

    const users = await fetchWrapper("/users");

    contentBlock.innerHTML = users.reduce((res, user) => {
        return res + `<div class="element" data-id="${user.id}">
            <p>${user.name}</p>
            <p>${user.email}</p>
        </div>`;
    }, "");

    contentBlock.addEventListener("click", userClickHandler);
};

const renderAlbums = async (id) => {
    clean();
    const contentBlock = getContentBlock();

    const albums = await fetchWrapper(`/albums?userId=${id}`);

    contentBlock.innerHTML = albums.reduce((res, album) => {
        return res + `<div class="element" data-id="${album.id}">
            <p>${album.title}</p>
        </div>`;
    }, `<p id="back">Back to users list</p>`);

    contentBlock.addEventListener("click", albumClickHandler);

    document.querySelector("#back").addEventListener("click", backToUsersHandler);
};

const renderPhotos = async (albumId) => {
    clean();
    const contentBlock = getContentBlock();

    const photos = await fetchWrapper(`/photos?albumId=${albumId}`);

    contentBlock.innerHTML = photos.reduce((res, image) => {
        return res + `<div class="image">
            <img src="${image.thumbnailUrl}" title="${image.title}"/>
        </div>`;
    }, `<p id="back" data-id="${albumId}">Back to albums list</p>`);

    document.querySelector("#back").addEventListener("click", backToAlbumsHandler);
};

renderUsers();