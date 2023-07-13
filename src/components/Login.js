import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function HorizontalExample() {
  return (
    <Form>
        <h3>Login to my Account</h3>

        < Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
            <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
            </Col>
        </Form.Group>

        <fieldset>

        </fieldset>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
            </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-5">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Login</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default HorizontalExample;