import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';
import { Contact } from './Contact';

const ContactList = ({ contacts }) => {
  return (
    <div className="contactsField">
      {contacts?.length < 0 ? (
        <Notification message="You don't have any contact 😓" />
      ) : (
        <ul className="contactsList">
          {contacts.map(({ id, name, phone }) => (
            <li key={id}>
              <Contact id={id} name={name} phone={phone} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
