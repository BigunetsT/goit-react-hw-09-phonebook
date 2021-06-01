import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.scss';

const ContactForm = ({ name, number, onSubmit, onChange, textBtn }) => {
  return (
    <form onSubmit={onSubmit} className={styles.contactForm}>
      <h2 className={styles.title}>Дані контакту: </h2>
      <label className={styles.label}>
        Ім'я
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          placeholder="введіть ім'я"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
        />
      </label>
      <label className={styles.label}>
        Номер телефону
        <input
          className={styles.input}
          type="tel"
          name="number"
          placeholder="XXX-XX-XX"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChange}
        />
      </label>
      <button type="submit" className={styles.addContactBtn}>
        {textBtn}
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  textBtn: PropTypes.string,
};
export default ContactForm;
