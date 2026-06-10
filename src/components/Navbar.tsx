// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", emoji: "🏠" },
    { to: "/menu", label: "Menu", emoji: "🍛" },
    { to: "/catering", label: "Catering", emoji: "🍽️" },
    { to: "/about", label: "About", emoji: "ℹ️" },
    { to: "/contact", label: "Contact", emoji: "📍" },
  ];

  return (
    <>
      {/* ── TOP NAVBAR (desktop + mobile header) ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          boxShadow: scrolled
            ? "0 2px 20px rgba(0,0,0,0.12)"
            : "0 1px 8px rgba(0,0,0,0.07)",
          transition: "all 0.3s ease",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <Container>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 0",
          }}>

            {/* LOGO */}
            <NavLink to="/" style={{ textDecoration: "none" }} aria-label="BelAfia Home">
              <span style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.5px", lineHeight: 1 }}>
                <span style={{ color: "#1a6b3c" }}>BEL</span>
                <span style={{ color: "#0d4a8f" }}>AFIA</span>
              </span>
            </NavLink>

            {/* DESKTOP LINKS */}
            <div className="d-none d-lg-flex" style={{ alignItems: "center", gap: "4px" }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#1a6b3c" : "#495057",
                    background: isActive ? "#f0f7f3" : "transparent",
                    transition: "all 0.2s",
                  })}
                >
                  {link.label}
                </NavLink>
              ))}

              <img
                src="/images/Fusion_Food/Halal.jpg"
                alt="Halal Certified"
                style={{ height: "36px", marginLeft: "8px", marginRight: "4px", borderRadius: "4px" }}
              />

              <a
                href="https://www.doordash.com/store/xrewind-soft-serve-+-tea-+-biryani-+-sandwich-chandler-23096655/688139/?pickup=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", marginLeft: "4px" }}
                aria-label="Order on DoorDash"
              >
                <button
                  style={{
                    background: "linear-gradient(135deg, #1a6b3c, #0d4a8f)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    padding: "10px 22px",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  🛵 Order Now
                </button>
              </a>
            </div>

            {/* MOBILE — Order button only in top bar */}
            <div className="d-flex d-lg-none" style={{ alignItems: "center", gap: "10px" }}>
              <img
                src="/images/Fusion_Food/Halal.jpg"
                alt="Halal Certified"
                style={{ height: "32px", borderRadius: "4px" }}
              />
              <a
                href="https://www.doordash.com/store/xrewind-soft-serve-+-tea-+-biryani-+-sandwich-chandler-23096655/688139/?pickup=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button style={{
                  background: "linear-gradient(135deg, #1a6b3c, #0d4a8f)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  padding: "9px 18px",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}>
                  🛵 Order
                </button>
              </a>
            </div>

          </div>
        </Container>
      </nav>

      {/* ── MOBILE BOTTOM TAB BAR ── */}
      <nav
        className="d-lg-none"
        aria-label="Mobile bottom navigation"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "#fff",
          borderTop: "1px solid #e9ecef",
          boxShadow: "0 -4px 20px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "6px 0 10px",
        }}
      >
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to ||
            (link.to !== "/" && location.pathname.startsWith(link.to));

          return (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ textDecoration: "none", flex: 1 }}
              aria-label={link.label}
            >
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                padding: "4px 0",
                position: "relative",
              }}>
                {/* Active indicator dot */}
                {isActive && (
                  <div style={{
                    position: "absolute",
                    top: "-6px",
                    width: "32px",
                    height: "3px",
                    borderRadius: "0 0 4px 4px",
                    background: "linear-gradient(135deg, #1a6b3c, #0d4a8f)",
                  }} />
                )}

                {/* Icon circle */}
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.3rem",
                  background: isActive ? "#f0f7f3" : "transparent",
                  transition: "all 0.2s",
                }}>
                  {link.emoji}
                </div>

                {/* Label */}
                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? "#1a6b3c" : "#9ca3af",
                  transition: "all 0.2s",
                  letterSpacing: "0.2px",
                }}>
                  {link.label}
                </span>
              </div>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom padding so content doesn't hide behind tab bar on mobile */}
      <div className="d-lg-none" style={{ height: "70px" }} />
    </>
  );
};

export default Navbar;