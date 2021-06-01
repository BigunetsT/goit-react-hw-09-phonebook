import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.scss';

const Notification = ({ message }) => {
  return (
    <>
      <div className={styles.notification}>{message}</div>;
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
