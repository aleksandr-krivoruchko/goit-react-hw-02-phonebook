import PropTypes from 'prop-types';
import { Contact } from "../Contact/Contact";

export function ContactsList({ contacts }) {
  return (
    <ul>
      {contacts.map(item => (
      
          <Contact number={item.number} name={item.name} id={item.id}/>
        
      ))}
    </ul>
  );
}

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
		number: PropTypes.number.isRequired,
    })
  ),
};