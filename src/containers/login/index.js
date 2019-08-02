import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import './index.scss'

class Login extends Component {
  render(){
    return (
      <div className="mx-auto pb-form-wrapper">
        <div className="pb-brand">
          <h1 className="pb-title text-center">PB</h1>
        </div>
        <Form action="/">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}
export default Login
