import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Mi Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#about">Sobre mí</Nav.Link>
          <Nav.Link href="#projects">Proyectos</Nav.Link>
          <Nav.Link href="#contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
