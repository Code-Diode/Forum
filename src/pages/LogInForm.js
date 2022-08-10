import React, { useState } from "react";
import checkCredentials from "../features/user/checkCredentials";
import { useDispatch } from "react-redux";
import { sign_in } from "../features/user/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function LogInForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();
  let from = location.state?.from?.pathname || '';


  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((currentUser) => {
      return { ...currentUser, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkCredentials(user)) {
      dispatch(sign_in());
      if ( from !== '') {
        navigate(from, { replace: true });
      } else {
        navigate('/');
      }
    } else {
      console.log("login failed");
    }
  };

  return (
    <div
      style={{
        width: 300,
        height: 300,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
    { from === '' ? null : <p>You must log in to view the page at {from}</p>}
      <h2>Login here: </h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control
          type="email"
          placeholder="email"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      
        <Form.Group className='mt-1'>
          <Form.Label>Password:</Form.Label>
          <Form.Control
          type="password"
          placeholder="password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        </Form.Group>
        
        <Button
          type="submit"
          className="p-1 mt-4"
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default LogInForm;
