// contacts.js
// В корне проекта создай файл contacts.js.

// Сделай импорт модулей fs (в версии, работающей с промисами – fs/promises) и path для работы с файловой системой.

const fs = require("node:fs");
// const path = require("path");

// Создай переменную contactsPath и запиши в нее путь к файлу contacts.json. Для составления пути используй методы модуля path.
// const contactsPath = require("./db/contacts.json");

fs.readFile("./db/contacts.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("data", data);
});

// // TODO: задокументировать каждую функцию
// function listContacts() {
//   // ...твой код. Возвращает массив контактов.
// }

// function getContactById(contactId) {
//   // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
// }

// function removeContact(contactId) {
//   // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
// }

// function addContact(name, email, phone) {
//   // ...твой код. Возвращает объект добавленного контакта.
// }

 module.exports = { listContacts, getContactById, removeContact, addContact };