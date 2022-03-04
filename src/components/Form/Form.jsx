import PropTypes from 'prop-types';
import {Btn, FormStyle, Label, Input} from "./FormStyle.styled"

export function Form({ label, btnText }) {
  return <FormStyle>
    <Label>{label}</Label>
    <Input
  className="form__input"
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      autoFocus
    />
    <Btn type="submit">{btnText}</Btn>
  </FormStyle>
}

Form.propTypes = {
  label: PropTypes.string,
  btnText: PropTypes.string,
}