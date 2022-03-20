import { Component } from "react";
import {Btn, FormStyle, Label, Input} from "./FormStyle.styled"
import { nanoid } from 'nanoid'

export class Form extends Component {
state = {
	id: "",
	name: "",
	number:"",
}


handleChange = (e) => {
	const {name, value} = e.currentTarget;
	const newId = nanoid();

this.setState({
	 [name]: value,
	id: newId,
	});
}


handleSubmit = (e) => {
	e.preventDefault();

this.props.onSubmit(this.state);

this.reset();
}


reset = () => {
	this.setState({name:"", number:""})
}


  render () {
	  const {name, number} = this.state;
	const inputId1 = nanoid();
		const inputId2 = nanoid();

	  return (<FormStyle onSubmit={this.handleSubmit}>
		<Label htmlFor={inputId1}>Name</Label>
		<Input
			id={inputId1}
			value={name}
			onChange={this.handleChange}
			type="text"
			name="name"
			pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
			title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
            />

		<Label htmlFor={inputId2}>Number</Label>
		<Input
			id={inputId2}
			onChange={this.handleChange}
			value={number}
			type="tel"
			name="number"
			pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
			title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
			required
		/>

		<Btn type="submit" >Add contact</Btn>
			</FormStyle>);
  }
}

