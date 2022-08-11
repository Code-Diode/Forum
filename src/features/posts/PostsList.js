import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import ReactionButtons from "../../Components/ReactionButtons";
import { Link, useLocation } from "react-router-dom";
import AddPostForm from "./AddPostForm";
import { getUserStatus } from "../user/userSlice";
import { Col, Row } from "react-bootstrap";
import LoginAlert from "../../Components/LoginAlert";

function PostsList() {
  const location = useLocation();
  const isLoggedIn = useSelector(getUserStatus);
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>
          <Link className="post__link" to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <p>{post.content.substring(0, 100) + "..."}</p>
        <ReactionButtons post={post} />
      </article>
    );
  });

  return (
    <Row className="container">
      <Col lg={4} className="add__item__form">
        <h2>Add Post: </h2>
        {isLoggedIn ? <AddPostForm /> : <LoginAlert location={location} />}
      </Col>
      <Col className="posts__list">
        <h2>Posts</h2>
        {renderedPosts}
      </Col>
    </Row>
  );
}
export default PostsList;
