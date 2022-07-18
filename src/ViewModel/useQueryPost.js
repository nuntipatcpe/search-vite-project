import { useQuery } from "react-query";
import { getPostAPI } from "../Model/Api/postApi";

const useQueryPost = () => {
  const { data, error, isError, isLoading } = useQuery("posts", getPostAPI);

  
  return { data, error, isError, isLoading };
};
export default useQueryPost;
