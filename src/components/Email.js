import React from 'react'
import Form from'react-bootstrap/Form'

const Email = () => {
  return (
    <div className='bg-success'>
        <p>Subscribe to our newsletter</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label>Your email</Form.Label>
            <Form.Text className="text-muted">
            100% free, Unsubscribe any time!
            </Form.Text>
      </Form.Group>
    </div>
  )
}

export default Email