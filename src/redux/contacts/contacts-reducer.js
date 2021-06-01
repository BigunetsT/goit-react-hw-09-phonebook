import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
  updateContactSuccess,
  fetchContactSuccess,
} from './contacts-actions';

const itemsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [fetchContactSuccess]: (_, { payload }) => payload,
  [updateContactSuccess]: (state, { payload }) =>
    state.map(contact =>
      contact.id === payload.id
        ? { ...contact, name: payload.name, number: payload.number }
        : contact,
    ),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
