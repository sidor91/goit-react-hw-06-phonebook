import PropTypes from 'prop-types';
import { FilterLabel, FilterInput, FilterLabelName } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      <FilterLabelName>Find contacts by name</FilterLabelName>
      <FilterInput
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
