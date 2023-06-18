const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');

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

// invokeAction({ action: 'read' });
// invokeAction({ action: 'id', id: 'vza2RIzNGIwutCVCs4mCL' });
// invokeAction({ action: 'delete', id: 'vza2RIzNGIwutCVCs4mCL' });
// invokeAction({
//   action: 'add',
//   name: 'Pupu',
//   email: 'pupu@nail.com',
//   phone: '555',
// });
const indexOf = process.argv.indexOf('--action');
if (indexOf !== -1) {
  const action = process.argv[indexOf + 1];
  invokeAction({ action });
}
