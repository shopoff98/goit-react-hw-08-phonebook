import { Input, Label } from "./styled/Common.styled";
import { FilterWrapper } from "./styled/Filter.styled";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/contacts/selectors";
import { filterSlice } from "../redux/contacts/contacts-reducer";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={(e) =>
            dispatch(filterSlice.actions.filter(e.currentTarget.value))
          }
        />
      </Label>
    </FilterWrapper>
  );
};

export default Filter;
