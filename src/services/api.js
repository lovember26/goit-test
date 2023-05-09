import axios from "axios";

axios.defaults.baseURL = "https://6458c4724eb3f674df7cbebc.mockapi.io";

export const getUsers = async () => {
  const { data } = await axios.get("/users");

  return data;
};

export const addFollower = (id, followers) => {
  axios.put(`/users/${id}`, { followers });
};

export const removeFollower = (id, followers) => {
  axios.put(`/users/${id}`, { followers });
};
