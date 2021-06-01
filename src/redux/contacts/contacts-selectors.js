import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;
const getContactsCount = state => state.contacts.items.length;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
const getSortContacts = createSelector([getVisibleContacts], contacts => {
  return contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
});

export default {
  getFilter,
  getContacts,
  getVisibleContacts,
  getSortContacts,
  getContactsCount,
};
