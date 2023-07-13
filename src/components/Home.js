import React from 'react'
import Store from './Store'
import Footer from './Footer'
import NavDropdown from'react-bootstrap/NavDropdown'


const Home = () => {
  return (
    <>
    {/* <div>Home</div> */}
    {/* <Footer /> */}
    {/* <Store /> */}
      <NavDropdown title="Home" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action4">
                    <p><a href="src/components/Bath.js">
                      <Store />
                    </a></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                    <p><a href="src/components/Bath.js">
                      <Footer />
                    </a></p>
                </NavDropdown.Item>
        </NavDropdown>
    </>
  )
}

export default Home