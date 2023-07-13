import React from 'react'
// import Create from './Create'
import Login from './Login'
import NavDropdown from'react-bootstrap/NavDropdown'

const Account = () => {
    return (
        <>
            <NavDropdown title="Login/Signup" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">
                    <Login />
                    <span>New customer?</span>
                    <span><a href="src={Create}">create an account</a> </span>
                    <p><span>Lost password?</span>
                    <span><a href="src/components/Create.js">Recover password</a> </span></p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                    {/* <Create /> */}
                </NavDropdown.Item>
            </NavDropdown>
        </>
    )
}

export default Account