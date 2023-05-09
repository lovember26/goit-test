import { useState } from "react";
import { Card } from "../Card/Card";

import { Container, List, LoadMore } from "./CardList.styled";

export const CardsList = ({ filteredUsers, pageUpdate }) => {
  const onClick = () => {
    pageUpdate();
  };
  return (
    <Container>
      <List>
        {filteredUsers.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </List>
      {filteredUsers.length < 12 && (
        <LoadMore type="button" onClick={onClick}>
          Load more
        </LoadMore>
      )}
    </Container>
  );
};
