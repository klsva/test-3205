import axios from "axios";
import { User } from "../types";

const path = "http://localhost:5000/api/data";

export default class APIService {
  static async get(data: User) {
    return axios
      .post<User[]>(path, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
}
