import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import Notification from '../Notification';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import notification from '../Notification/transitions/notification.module.css';

export default function UpdateContact({ name, number, id }) {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const [message, setMessage] = useState(null);
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setNewName(value);
        break;
      case 'number':
        setNewNumber(value);
        break;
      default:
        console.log('Error');
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts
        .map(item => item.name.toLowerCase())
        .includes(newName.toLowerCase()) &&
      contacts[
        contacts
          .map((item, index) => (item.name === newName ? index : null))
          .filter(item => item !== null)
          .join('')
      ].number === newNumber
    ) {
      setMessage('This contact is already in list');
      setTimeout(() => {
        setMessage(() => null);
      }, 2000);
      return;
    }
    dispatch(contactsOperations.updateContact({ id, newName, newNumber }));
  };
  return (
    <>
      <CSSTransition
        in={Boolean(message)}
        timeout={250}
        classNames={notification}
        unmountOnExit
      >
        <Notification message={message} />
      </CSSTransition>

      <ContactForm
        onSubmit={handleSubmit}
        onChange={handleChange}
        name={newName}
        number={newNumber}
        textBtn="Зберегти зміни"
      />
    </>
  );
}

UpdateContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  message: PropTypes.string,
  id: PropTypes.string,
};
