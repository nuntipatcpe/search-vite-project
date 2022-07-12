import React from "react";

//css
import "./css/PostComponent.css";

//customHook
import useSearchPost from "../../ViewModel/useSearchPost";
import useQueryPost from "../../ViewModel/useQueryPost";

function Post() {
  let { data, error, isError, isLoading } = useQueryPost();
  let { getPost, setSearch } = useSearchPost();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div> Error {error.message}</div>;
  }
  
  return (
    <div className="container">
      <h1>Post API</h1>
      <input
        type="text"
        placeholder="search post"
        onChange={(e) => setSearch(e.target.value)}
      />

      {getPost(data).map((post, index) => {
        return (
          <div key={index} className="container-post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Post;
