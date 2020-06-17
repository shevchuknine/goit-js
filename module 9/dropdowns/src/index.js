import createDropdown from "./dropdown";
import {v4 as uuid} from "uuid";

const data = [
    {id: uuid(), name: "Field 1"},
    {id: uuid(), name: "Field 2"},
    {id: uuid(), name: "Field 3"},
    {id: uuid(), name: "Field 4"},
];

createDropdown("body", data, "id", "name", event => {
    const {target} = event;

    console.log(target.options[target.selectedIndex].value);
});

createDropdown("body", data, "id", "name", event => {
    const {target} = event;

    console.log(target.options[target.selectedIndex].value);
});

createDropdown("body", data, "id", "name", event => {
    const {target} = event;

    console.log(target.options[target.selectedIndex].value);
});

createDropdown("body", data, "id", "name", event => {
    const {target} = event;

    console.log(target.options[target.selectedIndex].value);
});

createDropdown("body", data, "id", "name", event => {
    const {target} = event;

    console.log(target.options[target.selectedIndex].value);
});