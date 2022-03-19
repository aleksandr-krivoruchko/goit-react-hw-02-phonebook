import PropTypes from 'prop-types';
import { Label, Input} from "../Form/FormStyle.styled"

export function Filter({ filter, setFilter }) {

   return (<>
      <Label htmlFor="555">Find contacts by name</Label>
      <Input
         value={filter}
         onChange={(e) => setFilter(e.target.value)}
         id="555"
         type="text" />
   </>);
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};