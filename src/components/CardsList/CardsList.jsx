import { useState } from "react";
import { Card } from "../Card/Card";

import { Container, List, LoadMore } from "./CardList.styled";

export const CardsList = ({ filteredUsers }) => {
  const [cardsAmount, setCardsAmount] = useState(3);

  const onClick = () => {
    setCardsAmount(cardsAmount + 3);
  };
  return (
    <Container>
      <List>
        {filteredUsers.map((user) => {
          if (cardsAmount >= user.id) {
            return <Card key={user.id} user={user} />;
          }
        })}
      </List>
      {cardsAmount < filteredUsers.length && (
        <LoadMore type="button" onClick={onClick}>
          Load more
        </LoadMore>
      )}
    </Container>
  );
};
