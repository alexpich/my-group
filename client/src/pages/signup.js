import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignupForm from "../components/auth/SignupForm";

class Signup extends Component {
  submit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <SignupForm onSubmit={this.submit} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Signup;
