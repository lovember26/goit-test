import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { getUsers } from "../../services/api";

export const CardsList = ({ selectedOption }) => {
  const [users, setUsers] = useState([]);
  const [cardsAmount, setCardsAmount] = useState(3);
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);
  const onClick = () => {
    setCardsAmount(cardsAmount + 3);
  };
  return (
    <>
      <ul>
        {users.map((user) => {
          if (cardsAmount >= user.id) {
            return <Card key={user.id} user={user} />;
          }
        })}
      </ul>
      {cardsAmount <= 12 && (
        <button type="button" onClick={onClick}>
          Load more
        </button>
      )}
    </>
  );
};
