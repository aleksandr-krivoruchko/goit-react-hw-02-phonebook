import { Component } from "react";
import { Form } from "../Form/Form";
import { Section } from "../Section/Section";
import { ContactsList } from "../ContactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [
      { id: "1", name: "Putin huilo" },
      { id: "2", name: "Zelya krasav4ik" },
      { id: "2", name: "yanik debil" }],
  name: ''
  }
  
  render() {
    return <Section title="Phonebook">
      <Form
        label="Name"
        btnText="Add contact"
      ></Form>
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
