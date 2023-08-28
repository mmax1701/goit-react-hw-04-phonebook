import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'


export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts') ?? []));
  const [filter, setFilter] = useState('');
 

  const addContact = ({ dataUser }) => {
    const { name, number } = dataUser;
    const newContact = { name, number, id: nanoid(), };

    contacts.find(contact => contact.name === newContact.name) ?
      alert(`${newContact.name} is already in your contacts.`) : setContacts(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
  };

  const deleteContact = id => {
    setContacts({ contacts: contacts.filter(contact => contact.id !== id) });
  }

  const handleChangeFilter = e => {
    setFilter({ filter: e.target.value });
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList contactList={getVisibleContacts} deleteContact={deleteContact} />
    </div>
  )
}

