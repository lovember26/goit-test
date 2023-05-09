import { Select } from "./Dropdown.styled";

export const Dropdown = ({ handleOptionChange, selectedOption }) => {
  return (
    <div>
      <Select value={selectedOption} onChange={handleOptionChange}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </Select>
    </div>
  );
};
