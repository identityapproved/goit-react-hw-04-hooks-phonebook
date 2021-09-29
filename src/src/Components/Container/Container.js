import PropTypes from 'prop-types';
import { SectionMain, SectionTitle } from './Container.styled';

export const Container = ({ children, title }) => {
  return (
    <SectionMain>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionMain>
  );
};

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
