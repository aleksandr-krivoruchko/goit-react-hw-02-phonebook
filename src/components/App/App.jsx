import { Component } from "react";
import { Form } from "../Form/Form";
import { Section } from "../Section/Section";
import { ContactsList } from "../ContactsList/ContactsList";
import { Filter } from "../Filter/Filter";


export class App extends Component {
  state = {
    contacts: [
		 {id:'id-1', name:'Тарас Шевченко', number:'+6666666'},
		{id:'id-2', name:'Ліна костенко', number:'+6666666'},
		{id:'id-3', name:'Михайло Коцюбинський', number:'+6666666'},
		 {id:'id-4', name:'Іван Франко', number:'+6666666'},
		 {id:'id-5', name:'Іван Котляревський', number:'+7777777'},
		 {id:'id-6', name:'Григір Тютюнник', number:'+7777777'},
		 {id:'id-7', name:'Павло Загребельний', number:'+7777777'},
    ],
    filter: "",
  }

  // Получение данных формы
  getSubmitData = (data) => {
if(this.checkExistingContact(data.name)) { return };

this.setState(prev => {
	return prev.contacts.unshift(data);
})
  }
  
  // Запись значения фильтра в свойство состояния
  setFilter = (name) => {
    this.setState({ filter: name });
  }

//Фильтрация контактов по имени 
filterContacts = () => {
	 const normalizedFilter = this.state.filter.toLowerCase();
	 const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
	 return visibleContacts;
}

  // Проверка на существующий контакт
checkExistingContact = (newName) => {
		  const existingСontact = this.state.contacts.find(contact => contact.name === newName);

	  if (existingСontact) {
		  alert(`${existingСontact.name} is already in contacts`)
		  return true;
	  }
}

// Удаление контакта
deleteContact = (contactId) => {
	this.setState((prevState)=>({contacts: prevState.contacts.filter(contact => contact.id !== contactId),
}))
}

  render() {
    return <Section title="Phonebook">
      <Form onSubmit={this.getSubmitData}></Form>
      <Section title="Contacts">
        <Filter filter={this.state.filter}  setFilter={this.setFilter} ></Filter>
      <ContactsList contacts={this.filterContacts()} deleteContact={this.deleteContact}></ContactsList>
    </Section>
    </Section>
  }
}


