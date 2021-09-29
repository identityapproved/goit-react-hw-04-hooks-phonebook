import { DeleteBtn, Item, ListItem } from './ContactsListItem.styled';

export const ContactsListItem = ({ id, name, number, remove }) => {
  return (
    <ListItem>
      <Item>{name}</Item>
      <Item>{number}</Item>
      <DeleteBtn type="button" onClick={() => remove(id)}>
        remove
      </DeleteBtn>
    </ListItem>
  );
};
