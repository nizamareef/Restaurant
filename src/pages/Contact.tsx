import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact BelAfia | Fusion Restaurant in Chandler AZ – 480-361-9936</title>
        <meta name="description" content="Contact BelAfia at 3245 W Ray Rd #3, Chandler AZ 85226. Call us at 480-361-9936. Indian, Persian & Mediterranean fusion food, boba drinks and vegan ice creams." />
        <meta property="og:title" content="Contact BelAfia | Chandler AZ Fusion Restaurant" />
        <meta property="og:description" content="Visit BelAfia at 3245 W Ray Rd #3, Chandler AZ 85226 or call 480-361-9936." />
        <meta property="og:url" content="https://www.azbelafia.com/contact" />
        <link rel="canonical" href="https://www.azbelafia.com/contact" />
      </Helmet>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)",
        padding: "60px 24px 50px",
        textAlign: "center",
        color: "#fff"
      }}>
        <span style={{ fontSize: "48px" }}>📍</span>
        <h1 className="fw-bold mt-3 mb-3" style={{ fontSize: "clamp(1.6rem, 4vw, 2.6rem)" }}>
          Contact BelAfia
        </h1>
        <p style={{ maxWidth: "480px", margin: "0 auto", opacity: 0.9, fontSize: "1rem", lineHeight: 1.6 }}>
          We'd love to hear from you! Visit us, call us, or follow us on Instagram.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ padding: "40px 0 50px", background: "#f8f9fa" }}>
        <Container>
          <Row className="g-4 justify-content-center align-items-stretch">

            {/* Phone */}
            <Col xs={12} sm={10} md={4} className="d-flex">
              <div style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "40px 28px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                borderTop: "4px solid #1a6b3c",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
              }}>
                <div>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>📞</div>
                  <h2 className="fw-bold mb-2" style={{ fontSize: "1.2rem", color: "#1a6b3c" }}>Phone</h2>
                  <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Call us directly for orders, questions, or catering inquiries.
                  </p>
                </div>
                <div>
                  <a
                    href="tel:+14803619936"
                    className="btn btn-success rounded-pill px-4 py-2 fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    480-361-9936
                  </a>
                </div>
              </div>
            </Col>

            {/* Address */}
            <Col xs={12} sm={10} md={4} className="d-flex">
              <div style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "40px 28px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                borderTop: "4px solid #0d4a8f",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
              }}>
                <div>
                  <div style={{ fontSize: "48px", marginBottom: "16px" }}>🗺️</div>
                  <h2 className="fw-bold mb-2" style={{ fontSize: "1.2rem", color: "#0d4a8f" }}>Address</h2>
                  <p className="text-muted mb-2" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Located in Chandler AZ, near Whole Foods on W Ray Rd.
                  </p>
                  <p className="text-muted mb-4" style={{ fontSize: "0.85rem" }}>
                    3245 W Ray Rd #3, Chandler, AZ 85226
                  </p>
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/r4PrDiPm8YxPRFAMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                    style={{ fontSize: "1rem" }}
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Col>

            {/* Instagram */}
            <Col xs={12} sm={10} md={4} className="d-flex">
              <div style={{
                background: "#fff",
                borderRadius: "24px",
                padding: "40px 28px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                borderTop: "4px solid #e1306c",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "100%",
              }}>
                <div>
                  <div style={{ marginBottom: "16px" }}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                      alt="BelAfia Instagram"
                      width="48"
                    />
                  </div>
                  <h2 className="fw-bold mb-2" style={{ fontSize: "1.2rem", color: "#e1306c" }}>Instagram</h2>
                  <p className="text-muted mb-4" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
                    Follow us for daily specials, new items, and behind the scenes.
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/belafia3245?igsh=cXhpN3hia3Uydnhw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-pill px-4 py-2 fw-semibold text-white"
                    style={{
                      background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                      fontSize: "1rem",
                      border: "none"
                    }}
                  >
                    @belafia3245
                  </a>
                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* MAP */}
      <section style={{ padding: "0 0 50px" }}>
        <Container>
          <h2 className="text-center fw-bold mb-4">Find Us</h2>
          <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)" }}>
            <iframe
              title="BelAfia location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.5!2d-111.8773!3d33.3062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzIyLjMiTiAxMTHCsDUyJzM4LjMiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)",
        padding: "50px 24px"
      }}>
        <Container className="text-center text-white">
          <h2 className="fw-bold mb-3">Ready to Order or Book Catering?</h2>
          <p style={{ opacity: 0.9, maxWidth: "480px", margin: "0 auto 28px", lineHeight: 1.6 }}>
            Call us at 480-361-9936 or visit us at 3245 W Ray Rd #3, Chandler AZ.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a
              href="tel:+14803619936"
              className="btn btn-light btn-lg fw-semibold text-success rounded-pill px-4"
            >
              📞 Call Now
            </a>
            <a
              href="/catering"
              className="btn btn-outline-light btn-lg fw-semibold rounded-pill px-4"
            >
              View Catering Menu
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;