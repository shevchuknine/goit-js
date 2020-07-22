// 1. поле ввода -> сокращение
// 2. логика с "знакомыми" ссылками;
// 3. изменение короткой ссылки
// 4. удаление ссылки

const API_TOKEN = "lOGqQ6luHniN8mcX5H7NCzWDA0QIHcpqlA0avhUviPaBJL1ZakioKmsJpJPM";
const fetchWrapper = async (url, config = {}) => {
    const response = await fetch(`https://t.ly/api/v1/link${url}`, {
        ...config,
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    });

    return response.json();
};

const searchButton = document.querySelector("#search_btn");
const searchField = document.querySelector("#search_fld");
const contentBlock = document.querySelector("#content");

contentBlock.addEventListener("click", async ({target}) => {
    const viewsField = document.querySelector("#views_fld");
    const short_url = target.dataset.url;

    if (target.id === "update_btn") {
        const expire = viewsField.value;

        const putUpdatesResponse = await fetchWrapper("/", {
            method: "PUT",
            body: JSON.stringify({
                short_url,
                expire_at_views: expire,
                api_token: API_TOKEN
            })
        });

        alert(`Link ${putUpdatesResponse.short_url} updated`);
    } else if (target.id === "delete_btn") {
        const enteredValue = prompt(`Please, type URL of link to delete:`);
        if (enteredValue === short_url) {
            try {
                await fetchWrapper("", {
                    method: "DELETE",
                    body: JSON.stringify({
                        short_url,
                        api_token: API_TOKEN
                    })
                });

                alert(`Link successfully deleted`);
            } catch (e) {
                alert(`Oppps, something happen`);
            }
        } else {
            alert("Sorry, not today");
        }
    }
});

const buildMainHTML = (short_url, long_url, created_at) => {
    return `
        <p>Short URL: <a href="${short_url}">${short_url}</a></p>
        <p>Long URL: ${long_url}</p>
        <p>Created at: ${new Date(created_at)}</p>
    `;
};

const showInfoByExistedLink = (response) => {
    const {data: {short_url, long_url, created_at} = {}, clicks, browsers} = response;

    let html = `
        ${buildMainHTML(short_url, long_url, created_at)}
        <p>Clicks: ${clicks}</p>
        <ul>
    `;

    browsers.forEach(({browser, total}) => {
        html += `<li>${browser} - ${total}</li>`;
    });

    html += `
        </ul>
        <div>
            <input type="number" id="views_fld"/>
            <button id="update_btn" data-url="${short_url}">Update</button>
            <button id="delete_btn" data-url="${short_url}">Delete</button>
        </div>
    `;

    contentBlock.innerHTML = html;


};

const showInfoByNewLink = ({short_url, long_url, created_at}) => {
    contentBlock.innerHTML = buildMainHTML(short_url, long_url, created_at);
};

searchButton.addEventListener("click", async _ => {
    const value = searchField.value;

    const statisticResponse = await fetchWrapper(`/stats?short_url=${value}&api_token=${API_TOKEN}`);

    searchField.value = "";

    const {data} = statisticResponse;

    if (data) {
        showInfoByExistedLink(statisticResponse);
    } else {
        // второй запрос на сокращение
        const sortenResponse = await fetchWrapper("/shorten", {
            method: "POST",
            body: JSON.stringify({
                long_url: value,
                api_token: API_TOKEN
            })
        });

        showInfoByNewLink(sortenResponse);
    }
});