import ContactsForm from 'Components/ContactsForm/ContactsForm';
import { ContactsList } from 'Components/ContactsList/ContactsList';
import { Container } from 'Components/Container/Container';
import { Filter } from 'Components/Filter/Filter';
import React, { useEffect, useState } from 'react';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    parsedContacts ? setContacts(parsedContacts) : setContacts(initialState);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    const addingContact = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase(),
    );
    if (addingContact) {
      alert(`${contact.name} is already in contacts`);
    }

    setContacts(prev => [...prev, contact]);
  };

  const removeContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  return (
    <>
      <Container title="Phonebook">
        <ContactsForm addContact={addContact} />
      </Container>

      <Container title="Contacts">
        <Filter onChange={onChangeFilter} value={filter} />
        <ContactsList contacts={getFilteredContacts()} remove={removeContact} />
      </Container>
    </>
  );
}
