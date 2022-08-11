import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserStatus, sign_out } from "../features/user/userSlice";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getUserStatus);

  const handleClick = (e) => {
    dispatch(sign_out());
    navigate("/");
  };

  return (
    <Navbar className="d-flex nav__bar" fixed="top" expand="md">
      <Navbar.Brand className="nav__brand mr-auto">
        <NavLink className="nav__link" to="/">
          Food Forum
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="justify-content-end flex-grow-1 p-2">
          <NavLink to="/posts" className="nav__link">
            Posts
          </NavLink>
          <NavLink to="/nutrition-facts" className="nav__link">
            Nutrition facts
          </NavLink>
          {!isLoggedIn && (
            <NavLink className="nav__link" to="/login">
              Login
            </NavLink>
          )}
          {isLoggedIn && (
            <NavDropdown
              className="drop__down nav__link"
              title="Profile"
              id="basic-nav-dropdown"
            >
              {isLoggedIn && (
                <NavDropdown.Item
                  className="drop__down__link"
                  onClick={handleClick}
                >
                  Logout
                </NavDropdown.Item>
              )}
            </NavDropdown>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
