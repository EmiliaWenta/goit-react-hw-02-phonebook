import React from 'react';
import css from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        className={css.filter__input}
        type="text"
        name="nametofilter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
