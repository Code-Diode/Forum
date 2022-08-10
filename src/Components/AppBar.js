import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserStatus, sign_out } from "../features/user/userSlice";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getUserStatus);

  const handleClick = (e) => {
    dispatch(sign_out());
    navigate("/");
  };

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      
        <Navbar.Brand href="/">Food Forum</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto justify-content-end">
            <NavLink to='/posts' className='nav__link'>posts</NavLink>
            <NavLink  to="/nutrition-facts" className='nav__link'>Nutrition facts</NavLink>
            {isLoggedIn && <button onClick={handleClick}>Logout</button>}
            {!isLoggedIn && <NavLink to="/login" className='nav__link'>Login</NavLink>}
          </Nav>
        </Navbar.Collapse>

    </Navbar>
  

  );
}

 

export default NavBar;
