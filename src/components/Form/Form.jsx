import { Component } from "react";
import PropTypes from 'prop-types';
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
	  return <FormStyle onSubmit={this.handleSubmit}>
    <Label htmlFor="111">Name</Label>
    <Input
	 id="111"
	 value={this.state.name}
	 onChange={this.handleChange}
  className="form__input"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />

    <Label htmlFor="222">Number</Label>
<Input
id="222"
	 onChange={this.handleChange}
	 value={this.state.number}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

    <Btn type="submit" >Add contact</Btn>
  </FormStyle>}
}

Form.propTypes = {
  label: PropTypes.string,
  btnText: PropTypes.string,
}