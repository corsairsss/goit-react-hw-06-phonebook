import React from 'react';
import { connect } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './ContactList.module.css';

function ContactList({ list, removeContact }) {
  return (
    <ul className={s.list}>
      {list.map(elem => {
        const href = `tel:+38${elem.phone}`;
        return (
          <li key={elem.id} className={s.list__item}>
            <span>{elem.name}:</span>
            <a href={href}>{elem.phone}</a>
            <button
              type="button"
              onClick={() => removeContact(elem.id)}
              data-key={elem.id}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => {
  const filtredList = state.contacts.items.filter(item =>
    item.name
      .toLocaleLowerCase()
      .includes(state.contacts.filter.toLocaleLowerCase()),
  );
  return {
    list: filtredList,
  };
};

const mapDispatchToProps = {
  removeContact: phoneBookAction.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
