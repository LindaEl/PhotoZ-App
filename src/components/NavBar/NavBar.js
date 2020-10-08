import React from "react"
import logo from "../../images/AppIcon.svg"
import { Link } from "react-router-dom"
import { Navbar, Button, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap"
import "./NavBar.scss"

function NavBar() {

    return (
        <Navbar className="NavbarTest">
            <img src={logo} alt="PhotoZ-Logo" className="SmallLogo"/>
            <h1 className="PhotoZHeader">PhotoZ</h1>
            <Button class="btn">Create new post</Button>

        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="JohnDoe">
                John Doe 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <div>
                    <Link to="/SignIn" className="SignOutLink">Sign Out</Link>
                    </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
        </Navbar>
    )
}

export default NavBar