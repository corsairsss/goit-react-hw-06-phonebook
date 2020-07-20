import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import phoneBookActions from './phoneBookActions.js';

const onAddContact = (state, { payload }) => [...state, payload.contact];

const onRemoveContact = (state, { payload }) =>
  state.filter(item => item.id !== payload);

const items = createReducer([], {
  [phoneBookActions.addContact]: onAddContact,
  [phoneBookActions.removeContact]: onRemoveContact,
});

const filter = createReducer('', {
  [phoneBookActions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({ items, filter });
