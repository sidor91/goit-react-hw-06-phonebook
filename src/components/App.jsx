import Section from './Section';
import FormComponent from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';


const App = () => {
  const stateContacts = useSelector(state => state.contacts.contacts);

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
        <FormComponent />
      </Section>
      {stateContacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </div>
  );
};

export { App };
