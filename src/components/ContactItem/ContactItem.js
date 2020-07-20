import React from 'react';
import { connect } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './ContactListItem.module.css';

const ContactItem = ({ phone, name, id, theme, removeContact }) => {
  const href = `tel:+38${phone}`;
  return (
    <li key={id} className={s.list__item}>
      <span>{name}:</span>
      <a href={href} className={theme === 'light' ? s.dark : s.light}>
        {phone}
      </a>
      <button className={s.btn_delete} type="button" onClick={removeContact}>
        X
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = state.contacts.items.find(item => item.id === ownProps.id);

  return {
    ...contact,
    theme: state.PhBookTheme.theme,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(phoneBookAction.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
