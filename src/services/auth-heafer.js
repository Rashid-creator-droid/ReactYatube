import { URL } from "../utils/constants";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
};
const headersWithContentType = { "Content-Type": "application/json" };


export const loginUser = (username, password) => {
  return fetch(`${URL}/api/v1/jwt/create/`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify({ username, password }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data.access) {
        localStorage.setItem("access", data.access);
        return data;
      }
      return null;
    });
};

export const getUser = () => {
  return fetch(`${URL}/api/v1/auth/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  }).then(checkResponse);
};