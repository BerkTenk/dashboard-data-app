import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assets/Logo.jpg"
import Doctor from "../Assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.jpg";
import More from "../Assets/more.jpg";
import Settings from "../Assets/settings.jpg";
import { FaUser } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiSketchLogoLight } from "react-icons/pi";

function AppNavbar() {
  return (
    <Navbar >
    <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Navbar.Brand href="/home">
      <PiSketchLogoLight color='gold' size={70} />
      </Navbar.Brand>
      <Nav variant='pills'>
        <Nav.Link href="/">Overview</Nav.Link>
        <Nav.Link href="/schedule">Schedule</Nav.Link>
        <Nav.Link href="/message">Message</Nav.Link>
        <Nav.Link href="/transactions">Transactions</Nav.Link>
      </Nav>
      <Nav  style={{ display: 'flex', justifyContent: 'space-between', alignItems:"center" }}>
        <FaUser size={28} className='mx-1'/>
        <div className='mx-1'>
          <b>Username</b>
          <p>User Title</p>
          </div>
          <CiSettings className='mx-1' size={28}/>
          <BsThreeDotsVertical size={28} />
      </Nav>
    </Container>
  </Navbar>
  )
}

export default AppNavbar