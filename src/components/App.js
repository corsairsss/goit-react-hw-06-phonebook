import React, { Component } from 'react';

import { connect } from 'react-redux';

import Section from './Section/Section.js';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import FilterContacts from './FilterContacts/FilterContacts.js';

// import getLocalStorage from './getLocalStorage.js';

class App extends Component {
  // componentDidMount() {
  //   const localStorageValue = getLocalStorage('contacts');
  //   this.setState({ contacts: localStorageValue });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (prevState.contacts !== contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }
  render() {
    const isContacts = this.props.state.contacts.items.length;
    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm />
          {isContacts >= 2 && <FilterContacts />}
          {isContacts !== 0 && <ContactList />}
        </Section>
      </>
    );
  }
}

const mapStateToprops = state => {
  return {
    state,
  };
};

export default connect(mapStateToprops)(App);
