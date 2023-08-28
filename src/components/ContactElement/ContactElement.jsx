import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

const ContactElement = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.list}>
      <span>{name}: {number}</span>
      <button type='button' onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactElement;
