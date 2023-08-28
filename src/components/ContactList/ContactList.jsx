import React from 'react';
import PropTypes from 'prop-types';
import ContactElement from '../ContactElement/ContactElement';

export const ContactList = ({ contactList, deleteContact }) => {
  return (
    <ul>
      {contactList.map(({ id, name, number }) => (
        <ContactElement
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired
}
