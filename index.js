const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');

const { program } = require('commander');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const contacts = await listContacts();
      return console.log(contacts);
    case 'id':
      const contact = await getContactById(id);
      return console.log(contact);
    case 'delete':
      const deletedContact = await removeContact(id);
      return console.log(deletedContact);
    case 'add':
      const addedContact = await addContact(name, email, phone);
      return console.log(addedContact);

    default:
      console.log('Unknown action');
  }
};

program
  .option('--a, --action, <type>')
  .option('--i, --id, <type>')
  .option('--n, --name, <type>')
  .option('--e, --email, <type>')
  .option('--p, --phone, <type>');

program.parse(process.argv);
const options = program.opts();

invokeAction(options);
