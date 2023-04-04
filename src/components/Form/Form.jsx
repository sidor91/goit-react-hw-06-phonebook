import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormElement,
  Label,
  InputField,
  Submit,
  LabelName,
} from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const initialValues = { name: '', number: '' };
const schema = yup.object({
  name: yup.string().required(),
  number: yup.string().required(),
});

const FormComponent = () => {
  const stateContacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isNameTaken = stateContacts.find(
      contact => contact.name === values.name
    );
    if (isNameTaken) {
      return alert(`${isNameTaken.name} is already in contacts`);
    }
    dispatch(addContact({ ...values, id: nanoid() }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormElement>
        <Label>
          <LabelName>Name</LabelName>
          <InputField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </Label>
        <Label>
          <LabelName>Number</LabelName>
          <InputField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </Label>
        <Submit type="submit">Add contact</Submit>
      </FormElement>
    </Formik>
  );
};

export default FormComponent;
