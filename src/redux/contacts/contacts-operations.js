import axios from 'axios';

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactError,
  fetchContactSuccess,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from './contacts-actions';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error));
  }
};
const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = { name, number };
    dispatch(addContactRequest());
    try {
      const { data } = await axios.post('/contacts', contact);
      dispatch(addContactSuccess(data));
    } catch (error) {
      dispatch(addContactError(error));
    }
  };
const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

const updateContact =
  ({ id, name, number }) =>
  async dispatch => {
    const update = { name, number };
    dispatch(updateContactRequest());
    try {
      const { data } = await axios.patch(`/contacts/${id}`, update);
      dispatch(updateContactSuccess(data));
    } catch (error) {
      dispatch(updateContactError(error));
    }
  };

export default { fetchContacts, addContact, deleteContact, updateContact };
