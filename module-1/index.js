



console.log("hello World");

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
