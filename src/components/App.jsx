import { Component } from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'utils/Theme.styled';
import { ContactForm } from './AllComponents';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onContactFormSubmit = ({ name, number, id }) => {
    console.log(name, number, id);
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
