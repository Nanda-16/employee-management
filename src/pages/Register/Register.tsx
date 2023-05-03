import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Register() {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <Card className="w-50 p-0">
          <Card.Header className="fw-semibold">Register</Card.Header>
          <Card.Body className="mx-4">
            <Form className="py-4">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextName"
              >
                <Form.Label column sm="3">
                  Name
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Enter your Name"
                    required
                  />
                </Col>
              </Form.Group>
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
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="3">
                  Confirm Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    minLength={8}
                    placeholder="Confirm Password"
                    required
                  />
                </Col>
              </Form.Group>
              <div className="text-center">
                <Button variant="primary me-2" type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Register;
