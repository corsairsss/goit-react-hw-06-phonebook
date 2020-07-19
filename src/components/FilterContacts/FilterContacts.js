import React from 'react';
import { connect } from 'react-redux';

import phoneBookAction from '../../redux/phoneBookActions.js';

import s from './FilterContacts.module.css';

function FilterContacts({ value, onChangeFilter }) {
  return (
    <>
      <p className={s.filterTitle}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        className={s.filterInput}
        placeholder="Search..."
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onChangeFilter: phoneBookAction.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);
