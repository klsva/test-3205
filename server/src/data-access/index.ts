import { User } from "../types";
import { dataJSON } from "../dataJSON";

export async function findData(payload: User): Promise<User | User[] | null> {
  let result;
  if (payload.number === null) {
    result = dataJSON.filter((item) => item.email === payload.email);
  } else {
    result = dataJSON.filter(
      (item) => item.email === payload.email && item.number === payload.number
    );
  }
  return result;
}
