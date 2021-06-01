import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
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
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
