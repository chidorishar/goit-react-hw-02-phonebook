import { Component } from 'react';
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitCallback={this.onContactFormSubmit} />
      </div>
    );
  }
}
