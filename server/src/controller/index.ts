import to from "await-to-js";
import { User } from "../types";
import { findData } from "../data-access";

export async function getData(payload: User): Promise<User | User[] | null> {
  const [err, data] = await to(findData(payload));
  if (err || !data) {
    throw "Cannot get user data";
  }
  return data;
}
