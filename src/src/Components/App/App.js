import ContactsForm from 'Components/ContactsForm/ContactsForm';
import { ContactsList } from 'Components/ContactsList/ContactsList';
import { Container } from 'Components/Container/Container';
import { Filter } from 'Components/Filter/Filter';
import React, { Component } from 'react';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    parsedContacts
      ? this.setState({ contacts: parsedContacts })
      : this.setState({ contacts: initialState });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = contact => {
    const addingContact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    );
    if (addingContact) {
      alert(`${contact.name} is already in contacts`);
    }

    this.setState(prev => ({ contacts: [...prev.contacts, contact] }));
  };

  removeContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    return (
      <>
        <Container title="Phonebook">
          <ContactsForm addContact={this.addContact} />
        </Container>

        <Container title="Contacts">
          <Filter onChange={this.onChangeFilter} value={this.state.filter} />
          <ContactsList contacts={this.getFilteredContacts()} remove={this.removeContact} />
        </Container>
      </>
    );
  }
}
