import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assets/Logo.jpg"
import Doctor from "../Assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.jpg";
import More from "../Assets/more.jpg";
import Settings from "../Assets/settings.jpg";

function AppNavbar() {
  return (
    <Navbar >
    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Navbar.Brand href="/home">
        <img src={Logo} width={"50%"} ></img>
      </Navbar.Brand>
      <Nav variant='pills'>
        <Nav.Link href="/">Overview</Nav.Link>
        <Nav.Link href="/patients">Patients</Nav.Link>
        <Nav.Link href="/schedule">Schedule</Nav.Link>
        <Nav.Link href="/message">Message</Nav.Link>
        <Nav.Link href="/transactions">Transactions</Nav.Link>
      </Nav>
      <Nav  style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={Doctor} ></img>
        <div>
          <b>Dr. Jose Simmons</b>
          <p>General Practitioner</p>
          </div>
          <img src={Settings} height={"30px"}></img>
          <img src={More} height={"30px"}></img>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default AppNavbar