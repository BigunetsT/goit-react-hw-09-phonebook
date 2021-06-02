import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import Notification from '../Notification';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import notification from '../Notification/transitions/notification.module.css';

export default function AddContact() {
  const [state, setState] = useState({
    name: '',
    number: '',
  });
  const [message, setMessage] = useState(null);
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  const { name, number } = state;
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.map(item => item.name.toLowerCase()).includes(name.toLowerCase())
    ) {
      setMessage(`${name} is already in contacts`);
      setTimeout(() => {
        setMessage(() => null);
      }, 2000);
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setState({
      name: '',
      number: '',
    });
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
        name={name}
        number={number}
        textBtn="Додати контакт"
      />
    </>
  );
}

AddContact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  message: PropTypes.string,
};
