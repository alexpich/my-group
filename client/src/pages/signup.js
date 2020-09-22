import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
