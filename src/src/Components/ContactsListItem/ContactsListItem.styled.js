import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  /* border: ${props => `1px solid ${props.theme.colors.secondaryText}`}; */
`;

export const Item = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: ${props => `${props.theme.colors.primaryText}`};
`;

export const DeleteBtn = styled.button`
  margin: 10px;
  border: 1px solid grey;
  border-radius: 23px;
  padding: 12px 24px;
  color: ${props => `${props.theme.colors.black}`};
  transition: all 250ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
