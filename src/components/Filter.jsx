import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

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
Filter.propTypes = {
  filter: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
