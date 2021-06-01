import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import Notification from '../Notification';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import notification from '../Notification/transitions/notification.module.css';

class UpdateContact extends Component {
  static propTypes = {
    INITIAL_STATE: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      message: PropTypes.string,
    }),
    onSubmit: PropTypes.func,
  };
  state = {
    name: this.props.name,
    number: this.props.number,
    id: this.props.id,
    message: null,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  handleSubmit = e => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    e.preventDefault();
    if (
      contacts
        .map(item => item.name.toLowerCase())
        .includes(name.toLowerCase()) &&
      contacts[
        contacts
          .map((item, index) => (item.name === name ? index : null))
          .filter(item => item !== null)
          .join('')
      ].number === number
    ) {
      this.setState({
        message: 'This contact is already in list',
      });
      setTimeout(() => {
        this.setState(() => ({ message: null }));
      }, 2000);
      return;
    }
    this.props.onSubmit(this.state);
  };

  render() {
    const { name, number, message } = this.state;
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
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          name={name}
          number={number}
          textBtn="Зберегти зміни"
        />
      </>
    );
  }
}
const mapStateToPrope = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ id, name, number }) =>
    dispatch(contactsOperations.updateContact({ id, name, number })),
});

export default connect(mapStateToPrope, mapDispatchToProps)(UpdateContact);
