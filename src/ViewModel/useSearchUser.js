import { useState } from "react";
import{getUser} from '../Model/database/index';

const useSearchUser = () => {
  const [search, setSearch] = useState([]);
  const key = ["firstname", "lastname", "email"];
  const searchAll = () => {
    return getUser().filter((user) => {
      return key.some(
        (key) =>
          user[key].toLocaleLowerCase().includes(search) ||
          user[key].toUpperCase().includes(search)
      );
    });
  };

  return { searchAll, setSearch};
};
export default useSearchUser;
