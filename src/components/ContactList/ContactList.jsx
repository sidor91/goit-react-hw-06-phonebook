import React from 'react';
import { ListOfContacts } from './ContactList.styled';
import Contact from '../Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const stateContacts = useSelector(state => state.contacts.contacts);
  const stateFilterValue = useSelector(state => state.contacts.filter);

  const showFilteredContacts = () => {
    return stateContacts.filter(contact =>
      contact.name.toLowerCase().includes(stateFilterValue.toLowerCase())
    );
  };

  const filteredContacts = showFilteredContacts();

  return (
    <ListOfContacts>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </ListOfContacts>
  );
};

export default ContactList;
