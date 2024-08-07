import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiSketchLogoLight } from "react-icons/pi";

function AppNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand href="/home">
          <PiSketchLogoLight color='gold' size={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Overview</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/message">Message</Nav.Link>
            <Nav.Link href="/transactions">Transactions</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            <FaUser size={28} className='mx-1' />
            <div className='mx-1'>
              <b>Username</b>
              <p>User Title</p>
            </div>
            <CiSettings className='mx-1' size={28} />
            <BsThreeDotsVertical size={28} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar