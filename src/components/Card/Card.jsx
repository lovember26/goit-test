import { useState } from "react";
import { addFollower, removeFollower } from "../../services/api";
import logo from "../../img/Logo.svg";
import questionMark from "../../img/QuestionMark.svg";
import ellipse from "../../img/Ellipse.svg";
import rectangle from "../../img/Rectangle.svg";

import {
  Avatar,
  Container,
  Ellipse,
  Follow,
  Item,
  Logo,
  Rectangle,
  Text,
  TweetsContainer,
  Unfollow,
} from "./Card.styled";
const storageData = JSON.parse(localStorage.getItem("following")) || [];

export const Card = ({ user }) => {
  const [followers, setFollowers] = useState(user.followers);

  const handleButton = (id) => {
    const newFollowers = followers + 1;
    setFollowers(newFollowers);

    addFollower(id, newFollowers);
    storageData.push(id);

    localStorage.setItem("following", JSON.stringify(storageData));
  };

  const unfollow = (id) => {
    const removedFollowers = followers - 1;
    setFollowers(removedFollowers);

    removeFollower(id, removedFollowers);
    storageData.splice(storageData.indexOf(id), 1);
    localStorage.setItem("following", JSON.stringify(storageData));
  };
  return (
    <Item>
      <Logo src={logo} alt="logo" />
      <Container>
        <img src={questionMark} alt="question mark" />
        <div>
          <Avatar src={user.avatar} alt="avatar" />

          <Ellipse src={ellipse} alt="elipse" />
          <Rectangle src={rectangle} alt="rectangle" />
        </div>
        <TweetsContainer>
          <Text>{user.tweets.toLocaleString("en-US")} Tweets</Text>
          <Text>{followers.toLocaleString("en-US")} Followers</Text>
          {storageData.some((el) => el === user.id) ? (
            <Unfollow type="button" onClick={() => unfollow(user.id)}>
              Following
            </Unfollow>
          ) : (
            <Follow type="button" onClick={() => handleButton(user.id)}>
              Follow
            </Follow>
          )}
        </TweetsContainer>
      </Container>
    </Item>
  );
};
