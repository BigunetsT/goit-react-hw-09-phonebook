import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import styles from './Filter.module.scss';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(
    e => dispatch(changeFilter(e.target.value)),
    [dispatch],
  );
  return (
    <div className={styles.filter}>
      <label className={styles.label}>
        Пошук контакта за ім'ям
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
