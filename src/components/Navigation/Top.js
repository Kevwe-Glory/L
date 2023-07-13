import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Form} from'react-bootstrap'
import Currency from '../Currency'
import Account from '../Account'

const Top = () => {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          Olori Ebi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* search bar */}
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search...."
              className="me-2"
              aria-label="Search"
            />
            <NavDropdown title="All categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Form>

          <Nav.Link href="#action2">
            <Currency />
          </Nav.Link>
            <Nav.Link href="#action1">
              <Account />
            </Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
)
}

export default Top