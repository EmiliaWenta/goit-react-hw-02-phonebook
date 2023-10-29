import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, value, deleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts
        .filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
        .map(item => (
          <li className={css.contactList__item} key={item.id}>
            {item.name}: {item.number}
            <button
              className={css.contactList__button}
              type="button"
              onClick={() => {
                deleteContact(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  value: PropTypes.string,
  deleteContacts: PropTypes.func,
};

export default ContactList;
