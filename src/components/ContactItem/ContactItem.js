import React from 'react';
import { connect } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './ContactList.module.css';

const ContactItem = ({ phone, name, id, removeContact }) => {
  const href = `tel:+38${phone}`;

  return (
    <li key={id} className={s.list__item}>
      <span>{name}:</span>
      <a href={href}>{phone}</a>
      <button type="button" onClick={removeContact}>
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(item => item.id === ownProps.id);

  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(phoneBookAction.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
