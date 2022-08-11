import React from "react";
import ReactionButtons from "../../Components/ReactionButtons";
import { useParams } from "react-router-dom";
import { getPostById } from "../posts/postsSlice";
import { useSelector } from "react-redux";
function PostDetails() {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));
  return (
    <article className="container">
      <h1>{post.title}</h1>
      <section>{post.content}</section>
      <section>
        <ReactionButtons post={post} />
      </section>
    </article>
  );
}

export default PostDetails;
