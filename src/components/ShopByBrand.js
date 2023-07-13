import React from 'react'
import { NavDropdown } from'react-bootstrap'

const ShopByBrand = () => {
    return (
        <>
            <NavDropdown title="Shop Aisle" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action1">
                        <p><a href="src/components/Baby.js">Nina International</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action2">
                    <p><a href="src/components/Bath.js">JKUB</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                        <p><a href="src/components/Bath.js">Princess International</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        <p><a href="src/components/Bath.js">Goya</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                        <p><a href="src/components/Bath.js">Nestla</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                        <p><a href="src/components/Bath.js">Heinz</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                        <p><a href="src/components/Bath.js">La fe</a></p>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action7">
                        <p><a href="src/components/Bath.js">lberia</a></p>
                    </NavDropdown.Item>
                    </NavDropdown>
        </>
    )
}

export default ShopByBrand