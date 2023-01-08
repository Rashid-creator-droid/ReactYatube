import axios from "axios";
import {getPagesOffset} from "../utils/pages";
import { URL } from "../utils/constants";

export default class PostService {
    static async getAll(limit = 10, offset = 0) {
        return await axios.get("http://127.0.0.1:8000/api/v1/posts/",
            {
                params: {
                    limit: limit,
                    offset: getPagesOffset(offset)
                }
            });
    }
}

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((err) => Promise.reject(err));
};
const headersWithContentType = { "Content-Type": "application/json" };

export const loginUser = (username, password) => {
  return fetch(`${URL}/api/v1/jwt/create/`, {
    method: "POST",
    headers: headersWithContentType,
    body: JSON.stringify({ username, password }),
  })
};

export const getUser = () => {
  return fetch(`${URL}/api/users/me/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Token ${localStorage.getItem("auth_token")}`,
    },
  }).then(checkResponse);
};