import './styles.css';
import accountPage from "./templates/accountPage.hbs";

const user = {
    avatar: "http://fecore.net.ua/books/m5ph3r-javascript/module-10/images/templating.png",
    name: "Evgeniy",
    surname: "Shevchuk",
    email: "asdfasdfsdf@asdf.asd"
};
const markup = accountPage(user);


document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
