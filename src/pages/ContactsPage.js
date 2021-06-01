import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Button } from 'react-bootstrap';
import AddContact from '../components/AddContact';
import Modal from '../components/Modal';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { contactsOperations } from '../redux/contacts';
import { contactsSelectors } from '../redux/contacts';
import popTransition from '../components/ContactList/transitions/pop.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss';

const countVisibleContacts = 26;

class ContactsPage extends Component {
  state = {
    showModal: false,
    firstIndex: 0,
    secondIndex: Number(`${countVisibleContacts}`),
  };
  openModal = () => {
    this.setState({
      ...this.state,
      showModal: true,
    });
  };
  closeModal = () => {
    this.setState({ ...this.state, showModal: false });
  };

  componentDidMount() {
    this.props.fetchContacts();
  }
  prevContacts = () => {
    this.setState(prevState => ({
      ...this.state,
      firstIndex: prevState.firstIndex - Number(`${countVisibleContacts}`),
      secondIndex: prevState.secondIndex - Number(`${countVisibleContacts}`),
    }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  nextContacts = () => {
    this.setState(prevState => ({
      ...this.state,
      firstIndex: prevState.firstIndex + Number(`${countVisibleContacts}`),
      secondIndex: prevState.secondIndex + Number(`${countVisibleContacts}`),
    }));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  render() {
    const { contactsCount, contacts, filter } = this.props;
    const { showModal, firstIndex, secondIndex } = this.state;
    const showPrevBtn = secondIndex > `${countVisibleContacts}`;
    const showNextBtn = contactsCount - secondIndex > 0;
    return (
      <div className="container__page container__page-contacts">
        <h1 className="title">Контакти</h1>
        <div className="contacts">
          <div className="contacts__operations">
            <h3 className="contacts__count">
              {contactsCount
                ? `Всього контактів: ${contactsCount}`
                : 'У Вас ще немає контактів'}
            </h3>
            <Button
              variant="secondary"
              onClick={this.openModal}
              className="addBtn"
            >
              Додати контакт
              <svg
                className="contacts__addBtnImg"
                id="_x31__px"
                enableBackground="new 0 0 24 24"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m9.02 21h-6.52c-1.378 0-2.5-1.121-2.5-2.5v-16c0-1.379 1.122-2.5 2.5-2.5h12c1.378 0 2.5 1.121 2.5 2.5v6.06c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-6.06c0-.827-.673-1.5-1.5-1.5h-12c-.827 0-1.5.673-1.5 1.5v16c0 .827.673 1.5 1.5 1.5h6.52c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m9.5 13h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m8.5 5h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                <path d="m17.5 24c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zm0-12c-3.033 0-5.5 2.468-5.5 5.5s2.467 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.467-5.5-5.5-5.5z" />
                <path d="m17.5 21c-.276 0-.5-.224-.5-.5v-6c0-.276.224-.5.5-.5s.5.224.5.5v6c0 .276-.224.5-.5.5z" />
                <path d="m20.5 18h-6c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h6c.276 0 .5.224.5.5s-.224.5-.5.5z" />
              </svg>
            </Button>

            {showModal && (
              <Modal onClose={this.closeModal}>
                <AddContact />
              </Modal>
            )}
            <CSSTransition
              in={Number(contactsCount) > 1}
              timeout={250}
              classNames={popTransition}
              unmountOnExit
            >
              <Filter />
            </CSSTransition>
          </div>
          <div className="contacts__info">
            {filter && (
              <ContactList
                contacts={contacts.slice(0, Number(`${countVisibleContacts}`))}
                className="contact__list"
              />
            )}
            <ContactList
              contacts={contacts.slice(firstIndex, secondIndex)}
              className="contact__list"
            />
            <div className="pagination">
              {showPrevBtn && (
                <button
                  type="button"
                  className="pagination-btn"
                  onClick={this.prevContacts}
                >
                  Попередня сторінка
                </button>
              )}
              {showNextBtn && (
                <button
                  type="button"
                  className="pagination-btn"
                  onClick={this.nextContacts}
                >
                  Наступна сторінка
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="footer">GoIt-2021 React#27</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contactsCount: contactsSelectors.getContactsCount(state),
  contacts: contactsSelectors.getSortContacts(state),
  filter: contactsSelectors.getFilter(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
