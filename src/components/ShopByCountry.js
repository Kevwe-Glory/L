import React from 'react'
import { NavDropdown } from'react-bootstrap'

const ShopByCountry = () => {
    return (
        <>
        <NavDropdown title="Shop by Country" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">
                    <p><a href="src/components/Baby.js">Nigeria</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                <p><a href="src/components/Bath.js">Ghana</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                    <p><a href="src/components/Bath.js">Cameroon</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    <p><a href="src/components/Bath.js">Liberia</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    <p><a href="src/components/Bath.js">Sierra Leone</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                    <p><a href="src/components/Bath.js">Kenya</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                    <p><a href="src/components/Bath.js">Morocco</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                    <p><a href="src/components/Bath.js">Ivory Coast</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                <p><a href="src/components/Bath.js">Jamaica</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action8">
                <p><a href="src/components/Bath.js">Haiti</a></p>
                </NavDropdown.Item>
        </NavDropdown>
        </>
    )
}
export default ShopByCountry