import { Link } from "react-router-dom";
import { CardsList } from "../components/CardsList/CardsList";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { useState } from "react";

export const Tweets = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  return (
    <>
      <div>Tweets</div>
      <Link to="/">Back</Link>
      <Dropdown
        setSelectedOption={setSelectedOption}
        selectedOption={selectedOption}
      />
      <CardsList selectedOption={selectedOption} />
    </>
  );
};
