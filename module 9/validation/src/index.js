import Schema from "form-schema-validation";

const validation = new Schema({
    name: {
        type: String,
        validators: [{
            validator: value => {
                return value.length > 5;
            },
            errorMessage: "name is incorrect"
        }]
    },
    surname: {
        type: String,
        validators: [{
            validator: value => {
                const firstSymbol = value.slice(0, 1);
                return firstSymbol.toUpperCase() === firstSymbol;
            },
            errorMessage: "surname is incorrect"
        }]
    }
});

document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

    const data = {};
    new FormData(event.currentTarget).forEach((value, name) => {
        data[name] = value;
    })

    console.log(validation.validate(data));
})