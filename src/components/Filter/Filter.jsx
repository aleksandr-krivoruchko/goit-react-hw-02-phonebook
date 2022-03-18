import PropTypes from 'prop-types';
import { Label, Input} from "../Form/FormStyle.styled"

export function Filter({ filter, contacts, onChange }) {
   

   return (<>
      <Label htmlFor="555">Find contacts by name</Label>
      <Input
         value={filter}
         onChange={e => console.log(e.target.value)}
         id="555"
         type="text" />
   </>);
}

Filter.propTypes = {
  name: PropTypes.string,
    number: PropTypes.string,
};