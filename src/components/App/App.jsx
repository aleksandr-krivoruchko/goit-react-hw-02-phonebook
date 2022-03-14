import { Component } from "react";
import { Form } from "../Form/Form";
import { Section } from "../Section/Section";
import { ContactsList } from "../ContactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [
	],
  }
  
  getSubmitData = (data) => {

this.setState(prev => {
	return prev.contacts.unshift(data);
})

}



  render() {
    return <Section title="Phonebook">
      <Form onSubmit={this.getSubmitData}></Form>
      <Section title="Contacts">
      <ContactsList contacts={this.state.contacts}></ContactsList>
    </Section>
    </Section>
  }
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       Putin huilo
//     </div>
//   );
// };
