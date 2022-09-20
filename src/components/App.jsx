import { Component } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/Theme.styled';
import { ContactForm } from './AllComponents';

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

  onContactFormSubmit = ({ name, number, id }) => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id }],
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

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmitCallback={this.onContactFormSubmit} />

          <h2>Contacts</h2>
          {/* <Filter ... />
      <ContactList ... /> */}
        </div>
      </ThemeProvider>
    );
  }
}
