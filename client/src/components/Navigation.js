import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  IoIosHome,
  IoIosSearch,
  IoIosChatbubbles,
  IoIosPeople,
} from "react-icons/io";

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Navbar.Collapse>
        <Nav className="m-auto">
          <Nav.Link to="/" as={Link}>
            <IoIosHome size={24} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
