import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "../posts/postsSlice";

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
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <textarea
          type="text"
          col="1"
          rows="1"
          name="title"
          value={item.title}
          onChange={handleChange}
        ></textarea>
        <label>content</label>
        <textarea
          type="text"
          name="content"
          value={item.content}
          onChange={handleChange}
        ></textarea>
       
        <button>Submit Post</button>
      </form>
    </div>
  );
}

export default AddPostForm;
