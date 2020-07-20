import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phoneBook/addContact', ({ name, phone }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      phone,
    },
  },
}));

const removeContact = createAction('phoneBook/removeContact');
const changeFilter = createAction('phoneBook/changeFilter');

const changeTheme = createAction('phoneBook/changeTheme');

export default {
  addContact,
  removeContact,
  changeFilter,
  changeTheme,
};
