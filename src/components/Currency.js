import React from 'react'
import { NavDropdown } from'react-bootstrap'

const Currency = () => {
  return (
    <>
        <h2>Currency</h2>
        <NavDropdown>
            <NavDropdown.Item href="#action1">
                USD
            </NavDropdown.Item>
            <NavDropdown.Item href="#action2">
                NGN
            </NavDropdown.Item>
            <NavDropdown.Item href="#action3">
                CAD
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
                EUR
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
                    GBP 
            </NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default Currency