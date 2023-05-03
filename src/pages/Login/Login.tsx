import React from "react";
import { Card } from "react-bootstrap";
import { Button, Col, Form, Row } from "react-bootstrap";

function Login() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <Card className="w-50 p-0">
          <Card.Header className="fw-semibold">Login</Card.Header>
          <Card.Body className="mx-4">
            <Form className="py-4">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextEmail"
              >
                <Form.Label column sm="3">
                  E-mail Address
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="email"
                    placeholder="Enter your E-mail"
                    required
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    minLength={8}
                    placeholder="Password"
                    required
                  />
                </Col>
              </Form.Group>
              <div className="text-center">
                <input type="checkbox" />
                <label className="ms-1 form-label">Remember Me</label>
              </div>
              <div className="text-center mt-3">
                <Button variant="primary me-2" type="submit">
                  Login
                </Button>
                <Card.Link href="#">Forgot Password</Card.Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Login;
