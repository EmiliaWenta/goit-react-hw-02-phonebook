import React, { Component } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    initialValue: '',
    filter: '',
  };

  reset = form => {
    form.elements.name.value = this.state.initialValue;
    form.elements.number.value = this.state.initialValue;
  };

  handleSubmit = e => {
    e.preventDefault();
    const loginInputId = nanoid();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const tel = form.elements.number.value;

    const arrayOfName = this.state.contacts.map(contact =>
      contact.name.toLowerCase()
    );

    if (arrayOfName.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(prev => {
        const item = { name: name, id: loginInputId, number: tel };
        return { contacts: [...prev.contacts, item] };
      });
    }
    this.reset(form);
  };

  changeSubmit = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(cont => cont.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={css.container}>
        <h1 className={css.header}>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />
        <h2 className={css.header}>Contacts</h2>
        <Filter value={filter} onChange={this.changeSubmit} />
        <ContactList
          contacts={contacts}
          value={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
