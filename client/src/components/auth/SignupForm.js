import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";
import { Form, Button } from "react-bootstrap";

const SignupForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Field name="email" type="text" component="input" autoComplete="none" />
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
      {/* <div>{this.props.errorMessage}</div> */}
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default reduxForm({ form: "signup" })(SignupForm);
