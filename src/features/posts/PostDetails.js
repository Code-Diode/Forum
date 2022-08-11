import React from "react";
import ReactionButtons from "../../Components/ReactionButtons";
import { useParams } from "react-router-dom";
import { getPostById } from "../posts/postsSlice";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container'
function PostDetails() {
  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId));
  return (
    <Container fluid className="container post__details">
      <h2>{post.title}</h2>
      <section className="post__section">{post.content}</section>
      <section >
        <ReactionButtons post={post} />
      </section>
    </Container>
  );
}

export default PostDetails;
