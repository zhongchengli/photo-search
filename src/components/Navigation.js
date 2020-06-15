import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import SearchBar from '../constainers/SearchBar';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About Me">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <SearchBar />
    </Navbar>
  )
}

export default Navigation;