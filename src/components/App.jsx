import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css'


export class App extends Component {
  state = {
    contacts: [],
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

  
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({ contacts: JSON.parse(contacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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
