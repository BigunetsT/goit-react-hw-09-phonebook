import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactForm from '../ContactForm';
import Notification from '../Notification';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import notification from '../Notification/transitions/notification.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
  message: null,
};
class AddContact extends Component {
  static propTypes = {
    INITIAL_STATE: PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      message: PropTypes.string,
    }),
    onSubmit: PropTypes.func,
  };
  state = { ...INITIAL_STATE };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  handleSubmit = e => {
    const { name } = this.state;
    e.preventDefault();
    if (
      this.props.contacts
        .map(item => item.name.toLowerCase())
        .includes(name.toLowerCase())
    ) {
      this.setState({
        message: `${name} is already in contacts`,
      });
      setTimeout(() => {
        this.setState(() => ({ message: null }));
      }, 2000);
      return;
    }
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
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
          textBtn="Додати контакт"
        />
      </>
    );
  }
}
const mapStateToPrope = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(contactsOperations.addContact({ name, number })),
});

export default connect(mapStateToPrope, mapDispatchToProps)(AddContact);
