import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
      deleteContact: (state, action) => {
    return state.contacts.filter(contact => contact.id !== action.payload);
    },
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, addFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
