import PropTypes from 'prop-types';
import { ContactStyle } from "./ContactStyle.styled";

export function Contact({number, name, id}) {
   return <ContactStyle id={id}>
      {name}: {number}
   </ContactStyle>
}

Contact.propTypes = {
  name: PropTypes.string,
    number: PropTypes.number,

};