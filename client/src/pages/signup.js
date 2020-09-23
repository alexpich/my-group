import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupForm from "../components/auth/SignupForm";

class Signup extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <SignupForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
