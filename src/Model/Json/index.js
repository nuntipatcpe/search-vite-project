import name from "./name.json";
import { v4 as uuidv4 } from "uuid";

export function getUser() {
  const data = [...name];
  data.map((item) => {
    item.id = uuidv4();
  });

  return data;
}
