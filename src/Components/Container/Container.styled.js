import styled from '@emotion/styled';

export const SectionMain = styled.section`
  margin: 0 auto;
  align-items: center;
  text-align: center;
  padding: 10vh 0;
  border: ${props => `1px solid ${props.theme.colors.secondaryText}`};
`;

export const SectionTitle = styled.h2`
  padding: 5px;
  font-weight: 900;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.06em;
  color: ${props => `${props.theme.colors.primaryText}`};
  text-transform: uppercase;
`;
