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

