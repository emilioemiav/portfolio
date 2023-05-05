import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top" m="4">
      <Navbar.Brand href="#">My Porfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#my">Sobre mí</Nav.Link>
          <Nav.Link href="#proyectos">Proyectos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
