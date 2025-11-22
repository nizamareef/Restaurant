// src/components/Navbar.tsx
import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar: React.FC = () => {
  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      className="shadow-sm navbar-custom"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Container>
        {/* Brand */}
        <BsNavbar.Brand
          as={NavLink}
          to="/"
          className="brand-name"
        >
          <span className="text-success" >BEL</span>
          <span className="text-primary">AFIA</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="gap-4 fw-semibold align-items-center">
            <Nav.Link as={NavLink} to="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/menu" className="text-dark">
              Menu
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" className="text-dark">
              About
            </Nav.Link>
            {/* Contact + Halal Logo */}
            <div className="d-flex align-items-center gap-2">
              <Nav.Link as={NavLink} to="/contact" className="text-dark">
                Contact Us
              </Nav.Link>
              <img
                src="/images/Food/Halal.jpg"
                alt="Halal Certified"
                className="halal-nav-logo"
              />
            </div>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
