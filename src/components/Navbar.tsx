// src/components/Navbar.tsx
import React, { useState } from "react";
import { Navbar as BsNavbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // close navbar after click
  };

  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      bg="white"
      expanded={expanded}
      className="shadow-sm"
    >
      <Container>
        <BsNavbar.Brand
          as={NavLink}
          to="/"
          onClick={handleNavClick}
          className="fw-bold fs-4"
        >
          <span className="text-success">BEL</span>
          <span className="text-primary">AFIA</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center text-center text-lg-start">

            <Nav.Link as={NavLink} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>

            <Nav.Link as={NavLink} to="/menu" onClick={handleNavClick}>
              Menu
            </Nav.Link>

            <Nav.Link as={NavLink} to="/catering" onClick={handleNavClick}>
              Catering
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>
              About
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contact" onClick={handleNavClick}>
              Contact
            </Nav.Link>

            <div className="my-3 my-lg-0 mx-lg-2 text-center">
              <img
                src="/images/Fusion_Food/Halal.jpg"
                alt="Halal Certified"
                style={{ height: "40px" }}
              />
            </div>

            <div className="my-3 my-lg-0">
              <a
                href="https://www.doordash.com/store/xrewind-soft-serve-+-tea-+-biryani-+-sandwich-chandler-23096655/688139/?pickup=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
                onClick={handleNavClick}
              >
                <Button
                  variant="success"
                  className="px-4 rounded-pill w-100 w-lg-auto"
                >
                  Order Now
                </Button>
              </a>
            </div>

          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar