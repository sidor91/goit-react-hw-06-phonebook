import React from 'react';
import PropTypes from 'prop-types';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';

const ContactList = ({ data, onContactDelete }) => {
  return (
  <ListOfContacts>
    {data.map(contact => (
      <Contact
        key={contact.id}
        name={contact.name}
        number={contact.number}
        id={contact.id}
        handleDelete={onContactDelete}
      />
    ))}
  </ListOfContacts>
)};

Contact.ContactList = {
  data: PropTypes.arrayOf(PropTypes.object),
  onContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
