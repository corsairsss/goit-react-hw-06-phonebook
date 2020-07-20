import React from 'react';
import { connect } from 'react-redux';

import Section from './Section/Section.js';
import ContactForm from './ContactForm/ContactForm.js';
import ContactList from './ContactList/ContactList.js';
import FilterContacts from './FilterContacts/FilterContacts.js';
import Button from './Button/Button.js';

const App = ({ state }) => {
  const isContacts = state.contacts.items.length;
  return (
    <>
      <Button />
      <Section title={'Phonebook'}>
        <ContactForm />
        {isContacts >= 2 && <FilterContacts />}
        {isContacts !== 0 && <ContactList />}
      </Section>
    </>
  );
};

const mapStateToprops = state => {
  return {
    state,
  };
};

export default connect(mapStateToprops)(App);
