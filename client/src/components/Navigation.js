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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
