import './styles.css';

import {v4} from "uuid";

const getDataFromLS = () => {
  try {
    const data = localStorage.getItem("data");
    const parsedData = data === null ? {} : JSON.parse(data);

    return parsedData;
  } catch (e) {
    return {};
  }
};

const setDataToLS = (data) => {
  try {
    localStorage.setItem("data", JSON.stringify(data));
  } catch (e) {

  }
};

const addContact = (id, isActive, name) => {
  const contactsContainer = document.querySelector(".contacts");
  contactsContainer.insertAdjacentHTML("beforeend",
    `<div class="${`contact ${isActive ? "active" : ""}"`}
                data-id="${id}"
            >${name}</div>`
  );
};

const addMessage = (author, text) => {
  const messagesContainer = document.querySelector(".messages");
  messagesContainer.insertAdjacentHTML("beforeend",
    `<div class="${`message ${author === 1 ? "not-my" : ""}`}">${text}</div>`
  )
};

document.querySelector("#addContact").addEventListener("click", event => {
  event.stopPropagation();

  const newContact = {
    id: v4(),
    name: `Contact ${("" + Math.random()).slice(2, 5)}`,
    messages: []
  };

  const data = getDataFromLS();
  data.contacts.push(newContact);
  setDataToLS(data);

  addContact(newContact.id,false, newContact.name);
});

const loadData = () => {
  const parsedData = getDataFromLS();

  parsedData.contacts.forEach(contact => {
    const isActive = contact.id === parsedData.activeContact;
    addContact(contact.id, isActive, contact.name);
  });

  const activeContact = parsedData.contacts.find(contact => contact.id === parsedData.activeContact);
  activeContact.messages.forEach(message => {
    addMessage(message.author, message.text);
  });
};

loadData();

document.querySelector("input").addEventListener("keypress", event => {
  if (event.code === "Enter") {
    const newMessage = {
      id: v4(),
      author: 0,
      text: event.target.value
    };

    addMessage(newMessage.author, newMessage.text);
    event.target.value = "";

    const data = getDataFromLS();
    const activeContact = data.contacts.find(contact => contact.id === data.activeContact);
    activeContact.messages.push(newMessage);
    setDataToLS(data);
  }
});

window.answer = () => {
  const newMessage = {
    id: v4(),
    author: 1,
    text: "answer"
  };

  addMessage(newMessage.author, newMessage.text);

  const data = getDataFromLS();
  const activeContact = data.contacts.find(contact => contact.id === data.activeContact);
  activeContact.messages.push(newMessage);
  setDataToLS(data);
};

document.querySelector(".contacts").addEventListener("click", event => {
  const {target} = event;
  const activeContactId = target.dataset.id;

  Array.from(document.querySelectorAll(".contact")).forEach(i => {
    i.classList.remove("active");

    if (i.dataset.id === activeContactId) {
      i.classList.add("active");
    }
  });

  const data = getDataFromLS();
  data.activeContact = activeContactId;
  setDataToLS(data);
});
