import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbars = () => {
    return (
        <div>
            <Navbar expand="lg" className="sticky-top">
                <Container>
                    <Link to='/' className='fw-bold text-decoration-none text-white p-1'>ABDUL-LATEEF</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav bg-white">
                        <Nav className=" navss ms-auto gap-2 fs-6 navs">
                            <Link to='#' className="href text-decoration-none mx-lg-3 text-white">
                                Work
                            </Link>
                            <Link to='/about' className="href text-decoration-none mx-lg-3 text-white ">
                                About
                            </Link>
                            <Link to='#' className="href text-decoration-none mx-lg-3  text-white">
                                Contact
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbars