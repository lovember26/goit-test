export const selection = (option, users) => {
  const data = JSON.parse(localStorage.getItem("following"));

  if (option === "all") {
    return users;
  } else if (option === "followings") {
    return users.reduce((acc, user) => {
      if (data.includes(user.id)) {
        acc.push(user);
      }
      return acc;
    }, []);
  } else if (option === "follow") {
    return users.reduce((acc, user) => {
      if (!data.includes(user.id)) {
        acc.push(user);
      }
      return acc;
    }, []);
  }
};
