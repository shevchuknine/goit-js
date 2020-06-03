// const form = document.querySelector("form");
//
// const onSubmit = (e) => {
//     e.preventDefault();
//
//     const inputs = [...event.target.querySelectorAll("input")];
//
//     let isFormValid = true;
//     inputs.forEach(input => {
//         const value = input.value;
//         const validationRule = input.dataset.validation;
//         const maxLength = parseInt(validationRule);
//
//         if (isFormValid && value.length > maxLength) {
//             isFormValid = false;
//         }
//     });
//
//     if (!isFormValid) {
//         alert("Данные введены неверно")
//     } else {
//         alert("Форма валидна, спасибо")
//     }
// };
//
// form.addEventListener("submit", onSubmit);

// 2-й вариант
const button = document.querySelector(".button");

const onClick = (event) => {
    const parent = event.target.parentNode;

    const inputs = [...parent.querySelectorAll("input")];

    let isFormValid = true;
    inputs.forEach(input => {
        const value = input.value;
        const validationRule = input.dataset.validation;
        const maxLength = parseInt(validationRule);

        if (isFormValid && value.length > maxLength) {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        alert("Данные введены неверно")
    } else {
        alert("Форма валидна, спасибо")
    }
};

button.addEventListener("click", onClick);
