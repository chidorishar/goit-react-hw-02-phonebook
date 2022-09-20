import { Component } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/Theme';
import { ContactForm, ContactList, Filter } from './AllComponents';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContactFormSubmit = ({ name, number, id }) => {
    this.setState(prevState => {
      const normName = name.trim();

      return {
        contacts: [...prevState.contacts, { name: normName, number, id }],
      };
    });
  };

  onRemoveContact = contactIdToRemove => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          ({ id }) => id !== contactIdToRemove
        ),
      };
    });
  };

  onContactsFiltering = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = filterString => {
    const { contacts } = this.state;
    const normalizedFilter = filterString.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
    );
  };

  render() {
    const {
      onAddContactFormSubmit,
      onContactsFiltering,
      onRemoveContact,
      getFilteredContacts,
      state: { contacts, filter },
    } = this;

    const filteredContacts = filter ? getFilteredContacts(filter) : contacts;

    return (
      <ThemeProvider theme={theme}>
        <>
          <h1>Phonebook</h1>
          <ContactForm onSubmitCallback={onAddContactFormSubmit} />

          <h2>Contacts</h2>
          <Filter value={filter} onInputCallback={onContactsFiltering} />
          <ContactList
            contacts={filteredContacts}
            onContactRemoveCallback={onRemoveContact}
          />
        </>
      </ThemeProvider>
    );
  }
}
