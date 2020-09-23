import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Navbar.Collapse>
        <Nav className="m-auto">
          <Nav.Link to="/" as={Link}>
            <Navbar.Text>Home</Navbar.Text>
          </Nav.Link>
          <Nav.Link to="/categories" as={Link}>
            <Navbar.Text>Discover</Navbar.Text>
          </Nav.Link>
          <Nav.Link to="/feature" as={Link}>
            <Navbar.Text>Feature</Navbar.Text>
          </Nav.Link>
          {/* TODO: conditionally show signin/signout based on login */}
          <Nav.Link to="/signout" as={Link}>
            <Navbar.Text>Sign Out</Navbar.Text>
          </Nav.Link>
          <Nav.Link to="/signup" as={Link}>
            <Navbar.Text>Sign Up</Navbar.Text>
          </Nav.Link>
          <Nav.Link to="/signin" as={Link}>
            <Navbar.Text>Sign In</Navbar.Text>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
