import './styles.css';

import form from "./templates/form.hbs";

const formConfig = [
  {label: "Name", name: "name", type: "string"},
  {label: "Surname", name: "surname", type: "string"},
  {label: "Age", name: "age", type: "number"},
  {label: "Region", name: "region", type: "string"},
];

const schema = {};

document.querySelector("body")
  .insertAdjacentHTML("afterbegin", form(formConfig));

document.querySelector("form")
  .addEventListener("submit", event => {
    event.preventDefault();

    const data = {};
    new FormData(event.currentTarget).forEach((value, name) => {
      data[name] = value;
    });

    console.log(data);
  });

