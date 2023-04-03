import { useState, useEffect } from 'react';
import Section from './Section';
import FormComponent from './Form';
import ContactList from './ContactList';
import Filter from './Filter';

const localStorageData = JSON.parse(localStorage.getItem('contacts')) || [];

const App = () => {
  const [contacts, addContatcs] = useState(localStorageData);
  const [filter, addFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactDeleteHandler = id => {
    const updatedArr = contacts.filter(contact => contact.id !== id);
    addContatcs([...updatedArr]);
  };

  const showFilteredContacts = () => {
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  const filteredContacts = showFilteredContacts();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        paddingLeft: 200,
        paddingRight: 200,
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <h1>Phonebook</h1>
      <Section title="Add a contact">
        <FormComponent
          onFormSubmit={data => {
            addContatcs([...contacts, data]);
          }}
          contacts={contacts}
        />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter
            value={filter}
            onChange={e => {
              addFilter(e.target.value);
            }}
          />
          <ContactList
            data={filteredContacts}
            onContactDelete={contactDeleteHandler}
          />
        </Section>
      )}
    </div>
  );
};

export { App };
