export const Dropdown = ({ handleOptionChange, selectedOption }) => {
  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="all">All</option>
        <option value="follow">Follow</option>
        <option value="followings">Followings</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
};
