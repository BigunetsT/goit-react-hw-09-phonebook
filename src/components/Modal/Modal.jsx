import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    children: PropTypes.node,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { children } = this.props;
    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <button
            type="button"
            className={styles.closeModalBtn}
            onClick={() => {
              this.props.onClose();
            }}
          >
            X
          </button>
          {children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
