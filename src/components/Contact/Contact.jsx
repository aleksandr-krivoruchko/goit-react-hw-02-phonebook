import PropTypes from 'prop-types';
import { ContactStyle } from "./ContactStyle.styled";

export function Contact({name, id}) {
   return <ContactStyle id={id}>
      {name}
   </ContactStyle>
}

Contact.propTypes = {
  name: PropTypes.string,
};