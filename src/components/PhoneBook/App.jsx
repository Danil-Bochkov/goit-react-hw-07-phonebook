import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectContacts,
  selectFilterContact,
  selectIsLoading,
  selectError,
} from '../../redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { updateFilter } from '../../redux/filterSlice';

import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loader from 'components/Loader';

import './PhoneBook.scss';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterContact);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filterContacts = contacts => {
    return contacts?.filter(contact =>
      contact.name?.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleChange = evt => {
    dispatch(updateFilter(evt.currentTarget.value));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        // height: '100vh',
        zoom: '1.5',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        padding: '15px 0',
        color: '#010101',
      }}
    >
      <div className="PhoneBook">
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter handleChange={handleChange} filter={filter} />
          {isLoading && !error && <Loader />}
          <ContactList contacts={filterContacts(contacts)} />
        </Section>
      </div>
    </div>
  );
};
