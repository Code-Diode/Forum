import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../posts/postsSlice";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddPostForm() {
  const dispatch = useDispatch();

  const [item, setItem] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((item) => ({ ...item, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      dispatch(
        postAdded(
          item.title,
          item.content,
        )
      );

      setItem({
        title: "",
        content: ""
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
      <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          col="1"
          rows="1"
          name="title"
          value={item.title}
          onChange={handleChange}
        ></Form.Control>
      </Form.Group>
    <Form.Group>
      
    <Form.Label>content</Form.Label>
        <Form.Control
        as='textarea'
          type="text"
          name="content"
          value={item.content}
          onChange={handleChange}
          rows={10}
        ></Form.Control>
    </Form.Group>
       
        <Button className="mt-3" type="submit">Submit Post</Button>
      </Form>
    </div>
  );
}

export default AddPostForm;
