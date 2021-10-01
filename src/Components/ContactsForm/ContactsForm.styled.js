import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-weight: 700;
  color: ${props => props.theme.colors.primaryText};
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-left: 10px;
`;

export const FormBtn = styled.button`
  margin: 10px;
  border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
  border-radius: 23px;
  cursor: pointer;
  padding: 12px 24px;
  color: ${props => `${props.theme.colors.black}`};
  transition: all 250ms ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
