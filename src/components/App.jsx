import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'






export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }


  addContact = ({ name, number }) => {
    const newContact = {
      name,
      number,
      id: nanoid(),
    }

    this.state.contacts.find(contact => contact.name === newContact.name) ?
      alert(`${newContact.name} is already in your contacts.`) :
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
  };

  deleteContact = id => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) });
  }

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  }

  getVisibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  


  render() {
    const visibleContactList = this.getVisibleContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList contactList={visibleContactList} deleteContact={this.deleteContact}  />
      </div>
    )
  }
}
