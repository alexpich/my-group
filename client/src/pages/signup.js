import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Container fluid>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit(this.onSubmit)}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Field
                  name="first_name"
                  type="text"
                  component="input"
                  autoComplete="none"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Field
                  name="last_name"
                  type="text"
                  component="input"
                  autoComplete="none"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Field
                  name="email"
                  type="text"
                  component="input"
                  autoComplete="none"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Field
                  name="password"
                  type="password"
                  component="input"
                  autoComplete="none"
                />
              </Form.Group>
              <div>{this.props.errorMessage}</div>
              <Button type="submit">Sign Up</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
