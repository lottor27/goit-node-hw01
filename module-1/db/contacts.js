const { nanoid } = require("nanoid");
const path = require("node:path");

const fs = require("node:fs/promises");


const DB_PATH = path.join(__dirname, "./contacts.json");
console.log(DB_PATH);

// listContacts;
const listContacts = async () => {
  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    
    return JSON.parse(data);
  } catch {
    throw error;
  }
};

  // getContactById
const getContactById = async (contactId) => {
String(contactId);
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact;

};

// removeContactById
const removeContactById = async (contactId) => {
 const contacts = await listContacts();
    String(contactId);
    
    
  const IndexContact = contacts.findIndex(
      (contact) => contact.id === contactId
    );

    contacts.slice(IndexContact, 1);
    await fs.writeFile(DB_PATH, JSON.stringify(contacts, null, 2));
    return contacts[IndexContact];
  
};


  // addContact
const addContact = async (name, email, phone) => {
  try {
    const contacts = await listContacts();
    const newContact = {
      
      id: nanoid(),
      name,
      email,
      phone,
    };
  
    
    contacts.push(newContact);
    await fs.writeFile(DB_PATH, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContactById,
  addContact,
};
