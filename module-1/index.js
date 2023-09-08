console.log("hello World");

const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContactById,
  addContact,
} = require("./db/contacts");



async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list":
        const contacts = await listContacts();
        console.table( contacts);
        break;

      case "get":
        if (!id) {
          console.error(`Search error or cant find contact whith ${id}`);
          
        } else {
          const contact = await getContactById(id);
          console.log(`Successfully found contact with id ${id}`, contact);
        }
        break;

      case "add":
        if (!name || !email || !phone) {
          console.error(`Error, tipe info about contact`);
          
        } else {
          const newContact = await addContact(name, email, phone);
          console.log("Successfully add a new contact", newContact);
        }
        break;

      case "remove":
        if (!id) {
          console.error(`Cant find contact whith ${id} to errase`);
        } else {
          const ereraseContact = await removeContactById(id);
          console.log(
            `Successfully errase contact with id ${id}`,
            ereraseContact
          );
        }
        break;

      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.error('Error', error);
 
  }
}
invokeAction(argv);




















































// const fs = require("node:fs/promises");
// const { Command } = require("commander");
// const { nanoid } = require("nanoid");
// const program = new Command();
// const path = require("node:path");
// const readJSONFromFile = require("./utils/readJSONFromFile");
// const writeJSONFromFile = require("./utils/writeJSONToFile");
// const ContactRepository = require('./db/contacts')
// const { list, get, remove, add } = require("./utils/contacts");


// const DB_PATH = path.join(__dirname, "./db/contacts.json");
// console.log(DB_PATH);

// program
//   .name("phone-book")
//   .description("CLI of some phone-book")
//   .version("1.0.0");


// // listContacts;
// program
//   .command("listContacts")
//   .description("Cheack contacts ")
//   .action(async () => {
//     try {
//       const contacts = await readJSONFromFile(DB_PATH);
//       console.log(`List of contacts ${JSON.stringify(contacts)},`);
//     } catch {
//       throw error;
//     }
//   })

//   // getContactById
// program
//   .command("getContactById")
//   .description("Search contact by id")
//   .option("--id <string>", "id of an contact we want to get")
//   .action(async ({ id }) => {
//     if (id) {
//       const contacts = await readJSONFromFile(DB_PATH);
//       const contact = contacts.find((contact) => contact.id === id);
//       console.log(`Successfully found contact with id ${id}`, contact);
//     } else {
//       throw error;
//     }
//   });


// // removeContactById
// program
//   .command("removeContactById")
//   .description("Remove contact by id")
//   .option("--id <string>", "id of an contact we want to get")
//   .action(async ({ id }) => {
//     if (id) {
//       contact = await ContactRepository.remove(id);
//       console.log(`Successfully errase contact with id ${id}`, contact);
//     } else {
//       throw error;
//     }
//   });


//   // addContact
// program
//   .command("addContact")
//   .description("Add a contacts to a list")
//   .argument("<string>", "JSON with contacts data")
//   .action(async ({str, option}) => {
//     const input = JSON.parse({ str });
//     contact = await ContactRepository.add(input);
//     console.log(`Successfully added an contact`, contact);
//   });

// program.parse(process.argv);










// program
//   .command("removeContactById")
//   .description("Remove contact by id")
//   .option("--id <string>", "id of an contact we want to get")
//   .action(async ({ id }) => {
//     if (id) {
//       const contacts = JSON.parse(
//         await readFile("./db/contacts.json"),
//         toString()
//       );
//       // const contact = contacts.find((contact) => contact.id === id);
//       console.log(
//         `Successfully found contact with index ${contacts.index}`,
//         contacts
//       );
//     } else {
//       throw error;
//     }
//   });
