import React from 'react';
import css from './Form.module.css';

const Form = ({ onSubmit }) => {
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.form__label}>
        Name
        <input
          className={css.form__input}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.form__label}>
        Number
        <input
          className={css.form__input}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.form__button}>
        Add contacts
      </button>
    </form>
  );
};

export default Form;
