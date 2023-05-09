import { useState } from "react";
import { addFollower, removeFollower } from "../../services/api";
import logo from "../../img/Logo.svg";
import questionMark from "../../img/QuestionMark.svg";
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
    <li>
      <img src={logo} alt="logo" />
      <img src={questionMark} alt="question mark" />
      <p>{user.tweets} Tweets</p>
      <p>{followers} Followers</p>
      <button
        type="button"
        onClick={
          storageData.some((el) => el === user.id)
            ? () => unfollow(user.id)
            : () => handleButton(user.id)
        }
      >
        {storageData.some((el) => el === user.id) ? "Following" : "Follow"}
      </button>
    </li>
  );
};
