import axios from "axios";

export async function getPostAPI() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
}
