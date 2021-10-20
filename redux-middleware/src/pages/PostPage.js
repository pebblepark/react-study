import React from "react";
import PostContainer from "../containers/PostContainer";

function PostPage({ match }) {
  const { id } = match.params;

  return <PostContainer id={parseInt(id, 10)} />;
}

export default PostPage;
