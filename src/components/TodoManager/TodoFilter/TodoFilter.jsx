import { FilterForm, FormName, FilterValue } from './TodoFilter.styled';

const TodoFilter = ({ value, onHandleChange }) => (
  <FilterForm>
    <FormName>
      Фільтер:
      <FilterValue type="text" value={value} onChange={onHandleChange} />
    </FormName>
  </FilterForm>
);

export default TodoFilter;
