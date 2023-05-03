import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("* Passwords do not match");
      return;
    }

    if (name && email && password && confirmPassword) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("");
      navigate("/dashboard/home");
    }
  };
  const nameRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    nameRef.current?.focus();
  }, []);
  return (
    <>
      <div className="row justify-content-center mt-5">
        <Card className="w-50 p-0">
          <Card.Header className="fw-semibold">Register</Card.Header>
          <Card.Body className="mx-4">
            <Form className="py-4" onSubmit={handleSubmit}>
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
                    ref={nameRef}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextConfirmPassword"
              >
                <Form.Label column sm="3">
                  Confirm Password
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="password"
                    minLength={8}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    required
                  />
                  {errorMessage && (
                    <div className="text-danger" style={{ fontSize: "0.9em" }}>
                      <small>{errorMessage}</small>
                    </div>
                  )}
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
};

export default Register;
