import { Component } from "react";
import { Form } from "../Form/Form";
import { Section } from "../Section/Section";
import { ContactsList } from "../ContactsList/ContactsList";
import { Filter } from "../Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
    ],
    filter: "",
  }
  
  // Получение данных формы
  getSubmitData = (data) => {
this.setState(prev => {
	return prev.contacts.unshift(data);
})
  }
  
  // Запись значения фильтр в стейт
  setFilter = (e) => {
    console.log(e);
    this.setState({ filter: e.target.value.toLowerCase() });
  }



  render() {
    return <Section title="Phonebook">
      <Form onSubmit={this.getSubmitData}></Form>
      <Section title="Contacts">
        <Filter filter={this.state.filter} contacts={this.state.contacts} onChange={this.setFilter}></Filter>
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
