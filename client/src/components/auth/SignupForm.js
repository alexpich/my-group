import React from "react";
import { reduxForm, Field } from "redux-form";
import { Form, Button } from "react-bootstrap";

const SignupForm = () => {
  return (
    // <form onSubmit={handleSubmit(this.onSubmit)}>
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        {/* <Field name="email" type="text" component="input" autoComplete="none" /> */}
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        {/* <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        /> */}
      </Form.Group>
      {/* <div>{this.props.errorMessage}</div> */}
      <Button>Sign Up</Button>
    </Form>
  );
};

export default SignupForm;
