import React from "react";
import { Navbar, Container} from "react-bootstrap";
import LOGO from '../assets/img/logo.png'

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={LOGO}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Crypocurrency predictor
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;