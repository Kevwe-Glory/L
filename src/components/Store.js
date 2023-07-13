import React from 'react'
import { Container, Row, Col } from'react-bootstrap'

const Store = () => {
    return (
        <>
            <p>Our Stores</p>
            <Container>
            <Row>
                <Col sm={4}>
                    <p>Bear Location</p>
                    <p>715 Pulaski Hwy, Bear, Delaware 19701</p>
                    <p>Monday - Saturday: 9AM - 8PM</p>
                    <p>Sunday: 12PM - 6PM</p>
                </Col>
                <Col sm={8}>sm=4</Col>
            </Row>
            </Container>
        </>
    )
}

export default Store