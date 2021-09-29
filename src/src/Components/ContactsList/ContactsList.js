import { ContactsListItem } from 'Components/ContactsListItem/ContactsListItem';
import { List } from './ContactsList.styled';

export const ContactsList = ({ contacts, remove }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ContactsListItem key={id} id={id} name={name} number={number} remove={remove} />
    ))}
  </List>
);
