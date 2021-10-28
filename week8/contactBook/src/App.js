import './App.css';
import AddContact from './components/AddContact/AddContact';
import React, {useState} from 'react';
import ContactsList from './components/ContactsList/ContactsList.js'
import EditContacts from './components/EditContacts/EditContacts';

function App() {
  let [contacts, setContacts] = useState([])
  let [editContact, setEditContact] = useState({})
  let [isEdit, setIsEdit] = useState(false)

  function handleNewContact(newContact){

    let newContactsArray = [...contacts]
    newContactsArray.push(newContact)

    setContacts(newContactsArray)
  }
  function handleDeleteContact(id){
    let newContactsArray = contacts.filter(item =>{
      return item.id !== id
    })
    setContacts(newContactsArray)
  }
  function handleEditIndex(index){
    setIsEdit(true)
    setEditContact(contacts[index])
  }
  function nandleSaveEditedContact(newContact){
    let newContactsArray = contacts.map(item => {
      if(item.id === newContact.id){
        return newContact
      }
      return item
    })
    setContacts(newContactsArray)
    setIsEdit(false)
  }

  return (
    <div className="App">
      <AddContact 
        handleNewContact={handleNewContact}
      />
      {isEdit ? <EditContacts  
          editContact={editContact}
          nandleSaveEditedContact={nandleSaveEditedContact}
        /> : null}
        
      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEditIndex={handleEditIndex}
      />

    </div>
  );
}

export default App;
