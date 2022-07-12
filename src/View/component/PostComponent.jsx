import React from "react";

//css
import "../../Styles/PostComponent.css";

//custom Hook
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
      {getPost(data).length !== 0 ? getPost(data).map((post, index) => {
        return (
          <div key={index} className="container-post">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      }) :<h3>No data !</h3> }

    
    </div>
  );
}
export default Post;
