import { Link } from "react-router-dom";
import { CardsList } from "../components/CardsList/CardsList";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { selection } from "../services/dropdown";
import { getUsers } from "../services/api";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilteredUsers(selection(selectedOption, users));
  }, [selectedOption, users]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div>Tweets</div>
      <Link to="/">Back</Link>
      <Dropdown
        handleOptionChange={handleOptionChange}
        selectedOption={selectedOption}
      />
      <CardsList filteredUsers={filteredUsers} />
    </>
  );
};
