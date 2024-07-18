import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authentication.context';
import { Navigate, useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/api/useLogin';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { token, onLogin } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error } = useLogin((token: string) => {
    onLogin(token);
    navigate('/');
  });

  if (token) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ name, password });
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Form onSubmit={handleSubmit} className="login-form">
            <h2 className="text-center">Login</h2>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

            <Button variant="primary" type="submit" className="w-100 mt-3" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
