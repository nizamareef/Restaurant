// src/components/Navbar.tsx
import React from "react";
import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";
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
        <BsNavbar.Brand as={NavLink} to="/" className="brand-name">
          <span className="text-success">BEL</span>
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

            <div className="d-flex align-items-center gap-2">
              <Nav.Link as={NavLink} to="/contact" className="text-dark">
                Contact Us
              </Nav.Link>
              <img
                src="/images/Fusion_Food/Halal.jpg"
                alt="Halal Certified"
                className="halal-nav-logo"
              />
            </div>

            {/* Order Now Button -> External Site */}
            <a
              href="https://www.doordash.com/store/xrewind-soft-serve-+-tea-+-biryani-+-sandwich-chandler-23096655/688139/?pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <Button variant="success" className="px-4 rounded-pill">
                Order Now
              </Button>
            </a>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
