import PropTypes from 'prop-types';
import { ContactStyle } from "./ContactStyle.styled";

export function Contact({ number, name, id }) {

   return (
      <ContactStyle id={id}>
      <p>{`${name}: ${number}`}</p>
      </ContactStyle>
   );
}

Contact.propTypes = {
  name: PropTypes.string,
    number: PropTypes.string,
};