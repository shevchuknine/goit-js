const user = {
    avatar: "http://fecore.net.ua/books/m5ph3r-javascript/module-10/images/templating.png",
    name: "Evgeniy",
    surname: "Shevchuk",
    email: "asdfasdfsdf@asdf.asd"
};

const templateString = document.querySelector("#user_card").innerHTML.trim();
const template = Handlebars.compile(templateString);
const markup = template(user);

document.querySelector("body").insertAdjacentHTML("afterbegin", markup);


