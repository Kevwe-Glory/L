import React from 'react'
import { NavDropdown } from'react-bootstrap'

const ShopByIsle = () => {
    return (
        <>
            <NavDropdown title="Shop Aisle" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">
                    <p><a href="src/components/Baby.js">Baby</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                <p><a href="src/components/Bath.js">Beauty, Bath & Body</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                    <p><a href="src/components/Bath.js">Drinks & Beverages</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    <p><a href="src/components/Bath.js">Frozen</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    <p><a href="src/components/Bath.js">Health & Wealth</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                    <p><a href="src/components/Bath.js">Pantry</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                    <p><a href="src/components/Bath.js">BGrains, Rice & Cereal</a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">
                    <p><a href="src/components/Bath.js">Seasonings & Spices</a></p>
                </NavDropdown.Item>
                </NavDropdown>
        </>
    )
}

export default ShopByIsle