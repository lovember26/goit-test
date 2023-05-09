import { useState } from "react";
import { Card } from "../Card/Card";

import { List, LoadMore } from "./CardList.styled";

export const CardsList = ({ filteredUsers }) => {
  const [cardsAmount, setCardsAmount] = useState(3);

  const onClick = () => {
    setCardsAmount(cardsAmount + 3);
  };
  return (
    <>
      <List>
        {filteredUsers.map((user) => {
          if (cardsAmount >= user.id) {
            return <Card key={user.id} user={user} />;
          }
        })}
      </List>
      {cardsAmount < 12 && (
        <LoadMore type="button" onClick={onClick}>
          Load more
        </LoadMore>
      )}
    </>
  );
};
