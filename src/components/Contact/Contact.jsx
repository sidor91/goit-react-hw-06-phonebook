import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  ContactDeleteButton,
} from './Contact.styled';

const Contact = ({ name, number, id, handleDelete }) => (
  <ContactItem>
    <ContactName>{name}:</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <ContactDeleteButton type="button" onClick={() => handleDelete(id)} id={id}>
      Delete
    </ContactDeleteButton>
  </ContactItem>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Contact;
