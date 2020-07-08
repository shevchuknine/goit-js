document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();

    const data = {};
    new FormData(event.currentTarget).forEach((value, name) => {
        data[name] = value;
    });

    console.log(data);

    // createRequest(false, `Field "name" is incorrect`)
    createRequest(false, {fields: ["name", "surname"]})
        .then((response) => {
            alert("Форма валидна, спасибо!");
        })
        // .catch((errorMessage) => {
        //     document.querySelector(".error").innerHTML = errorMessage;
        // })
        .catch(errors => {
            const {fields} = errors;

            // const errorMessage = fields.map(fieldName => {
            //     return `Field "${fieldName}" is incorrect`;
            // }).join("<br/>");
            //
            // document.querySelector(".error").innerHTML = errorMessage;

            fields.forEach(fieldName => {
                const input = document.querySelector(`input[name=${fieldName}]`);
                input.insertAdjacentHTML("afterend", "<span style='color: red;'>This field is not valid</span>")
            })
        })
});