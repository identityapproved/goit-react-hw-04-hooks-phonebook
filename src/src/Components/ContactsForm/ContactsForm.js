import React, { Component } from 'react';
import { Form, FormBtn, Input, Label } from './ContactsForm.styled';
import shortid from 'shortid';

const shId = shortid.generate();

export default class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { addContact } = this.props;
    addContact({ ...this.state, id: shId });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onHandleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.onHandleChange}
            value={this.state.name}
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
            onChange={this.onHandleChange}
            value={this.state.number}
            required
          />
        </Label>
        <FormBtn type="submit">Add</FormBtn>
      </Form>
    );
  }
}
