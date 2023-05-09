import { CardsList } from "../components/CardsList/CardsList";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { selection } from "../services/dropdown";
import { getUsers } from "../services/api";
import { Header, StyledLink } from "../components/Home/Home.styled";

export const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getUsers(page)
      .then((data) => {
        setUsers((prevState) => {
          return page === 1 ? data : [...prevState, ...data];
        });
      })
      .catch((error) => console.log(error));
  }, [page]);

  useEffect(() => {
    setFilteredUsers(selection(selectedOption, users));
  }, [selectedOption, users]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const pageUpdate = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header>Tweets</Header>
      <StyledLink to="/">&larr;back</StyledLink>
      <Dropdown
        handleOptionChange={handleOptionChange}
        selectedOption={selectedOption}
      />
      <CardsList filteredUsers={filteredUsers} pageUpdate={pageUpdate} />
    </>
  );
};
