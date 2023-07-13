import React from 'react'
import { Form } from'react-bootstrap'

const Delivery = () => {
  return (
      <>
      <div>
        Delivery
      </div>
      <h4>Contact Us</h4>
      <p>If you have any questions or concerns, you can reach us by filling out the form on this page and we will get back to you as soon as possible.</p>
      <span>We can also be reached @</span>
      <span>Phone: (302) 324-1642</span>
      <span>Email: africanfoodsupermarket@yahoo.com</span>

      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        {/* <Form.Label>Example textarea</Form.Label> */}
        <Form.Control as="textarea" placeholder='Your message'/>
      </Form.Group>
      <button type="button">Send message</button>
    </Form>
      </>
    
  )
}

export default Delivery