// const addNote = (noteText) => {
//     const container = document.querySelector(".notes");
//     const index = container.children.length + 1;
//
//     const note = document.createElement("p");
//     note.classList.add("note");
//     note.textContent = `#${index} ${noteText}`;
//
//     container.append(note);
// };

// const addNote = (noteText) => {
//     const container = document.querySelector(".notes");
//     const index = container.children.length + 1;
//     container.innerHTML = `<p class="note">#${index} ${noteText}</p>`
// };

const addNote = (noteText) => {
    const container = document.querySelector(".notes");
    const index = container.children.length + 1;

    container.insertAdjacentHTML("beforeend", `<p class="note">#${index} ${noteText}</p>`);
    // container.innerHTML =
};

const removeNote = (indexToDelete) => {
    const container = document.querySelector(".notes");

    container.children[indexToDelete].remove();
};