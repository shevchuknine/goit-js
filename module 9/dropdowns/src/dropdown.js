const createDropdown = (selector, data, idField, labelField, onChange) => {
    const parent = document.querySelector(selector);
    if (!parent) {
        return;
    }

    if (!Array.isArray(data)) {
        return;
    }

    const options = data.map((item) => {
        return `<option value=${item[idField]}>${item[labelField]}</option>`;
    });


    const dropdown = document.createElement("select");
    dropdown.innerHTML = options.join("");
    dropdown.addEventListener("change", onChange);

    parent.append(dropdown);
};

export default createDropdown;