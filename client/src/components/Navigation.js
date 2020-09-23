import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = (props) => {
  const renderLinks = () => {
    if (props.authenticated) {
      return (
        <>
          <Nav.Link to="/signout" as={Link}>
            <Navbar.Text>Sign Out</Navbar.Text>
          </Nav.Link>
          <Nav.Link to="/feature" as={Link}>
            <Navbar.Text>Feature</Navbar.Text>
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <Nav.Link to="/signup" as={Link}>
            <Navbar.Text>Sign Up</Navbar.Text>
          </Nav.Link>
          <Nav.Link to="/signin" as={Link}>
            <Navbar.Text>Sign In</Navbar.Text>
          </Nav.Link>
        </>
      );
    }
  };

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
          {renderLinks()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Navigation);
