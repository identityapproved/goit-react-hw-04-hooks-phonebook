import React, { useState } from 'react';
import { Form, FormBtn, Input, Label } from './ContactsForm.styled';
import shortid from 'shortid';

const shId = shortid.generate();

export default function ContactsForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onHandleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: shId,
      name,
      number,
    };
    addContact(newContact);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={onHandleChange}
          value={name}
          required
        />
      </Label>
      <Label>
        Phone:
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер должен состоять цифр, и может содержать пробелы, тире, круглые скобки и может начинаться с +."
          onChange={onHandleChange}
          value={number}
          required
        />
      </Label>
      <FormBtn type="submit">Add</FormBtn>
    </Form>
  );
}
