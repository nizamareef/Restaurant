import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>BelAfia | Fusion Restaurant in Chandler AZ – Indian, Persian & Mediterranean</title>
        <meta name="description" content="BelAfia in Chandler AZ serves Indian, Persian & Mediterranean fusion food, boba drinks, matcha, milk teas, soft serve, and vegan organic ice creams. Visit us at 3245 W Ray Rd." />
        <meta property="og:title" content="BelAfia | Fusion Restaurant in Chandler AZ" />
        <meta property="og:description" content="Indian, Persian & Mediterranean fusion food plus boba drinks, matcha, milk teas, soft serve and vegan ice creams in Chandler AZ." />
        <meta property="og:url" content="https://www.azbelafia.com/" />
        <link rel="canonical" href="https://www.azbelafia.com/" />
      </Helmet>

      <div>

        {/* HERO SECTION */}
        <section className="fade-section" aria-label="Welcome to BelAfia">
          <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <img
              src="/images/Fusion_Food/Home1.jpg"
              alt="BelAfia fusion restaurant in Chandler AZ - Indian Persian Mediterranean food"
              className="w-100"
              style={{
                height: "clamp(480px, 80vh, 800px)",
                objectFit: "cover",
                display: "block"
              }}
            />
            {/* Dark overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)"
            }} />
            {/* Hero content */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#fff",
              width: "100%",
              maxWidth: "750px",
              padding: "0 20px"
            }}>
              <div style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(8px)",
                borderRadius: "50px",
                padding: "6px 20px",
                fontSize: "0.85rem",
                marginBottom: "20px",
                border: "1px solid rgba(255,255,255,0.3)"
              }}>
                📍 Chandler, AZ · 3245 W Ray Rd #3
              </div>
              <h1 className="fw-bold" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", lineHeight: 1.2, marginBottom: "16px" }}>
                Welcome to{" "}
                <span style={{ color: "#4ade80" }}>Bel</span>
                <span style={{ color: "#93c5fd" }}>Afia</span>
              </h1>
              <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", opacity: 0.9, marginBottom: "32px", lineHeight: 1.6 }}>
                Indian, Persian & Mediterranean fusion food, handcrafted boba drinks, and vegan ice creams in Chandler, AZ.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3">
                <Link to="/menu?category=Fusion%20Food" className="btn btn-success btn-lg rounded-pill px-4 fw-semibold">
                  Explore Menu
                </Link>
                <Link to="/catering" className="btn btn-outline-light btn-lg rounded-pill px-4 fw-semibold">
                  Catering
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* BADGES */}
        <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "20px 0" }}>
          <Container>
            <div className="d-flex justify-content-center flex-wrap gap-4 text-white text-center">
              {[
                { emoji: "✅", text: "100% Halal" },
                { emoji: "⭐", text: "4.3 Google Rating" },
                { emoji: "🌿", text: "Vegan Options" },
                { emoji: "🍽️", text: "Dine In & Takeout" },
              ].map((b) => (
                <div key={b.text} style={{ fontSize: "0.9rem", fontWeight: 500 }}>
                  {b.emoji} {b.text}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* WHAT WE OFFER */}
        <section style={{ padding: "70px 0", background: "#fff" }}>
          <Container>
            <div className="text-center mb-5">
              <h2 className="fw-bold" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>What We Offer</h2>
              <p className="text-muted">Something for everyone at BelAfia</p>
            </div>

            <Row className="g-4 fade-section">

              {/* Drinks */}
              <Col xs={12} sm={6} md={4}>
                <Link to="/menu?category=Blended%20Drinks" className="text-decoration-none">
                  <div style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s",
                    background: "#fff"
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src="/images/Fusion_Food/Drinks.png"
                        className="w-100"
                        alt="Boba drinks, matcha, milk teas and crushes at BelAfia Chandler AZ"
                        style={{ height: "220px", objectFit: "cover", display: "block" }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#1a6b3c",
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 600
                      }}>🧋 Drinks</div>
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h3 className="h5 fw-bold text-success mb-2">Boba, Matcha & Milk Teas</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        Handcrafted boba drinks, matcha lattes, milk teas, and fresh fruit crushes made to order.
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>

              {/* Ice Cream */}
              <Col xs={12} sm={6} md={4}>
                <Link to="/menu?category=Ice%20Creams%20and%20Milk%20Shakes" className="text-decoration-none">
                  <div style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s",
                    background: "#fff"
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src="/images/Ice_Creams_and_Milk_Shakes/Ice_cream.png"
                        className="w-100"
                        alt="Vegan and organic soft serve ice creams at BelAfia Chandler AZ"
                        style={{ height: "220px", objectFit: "cover", display: "block" }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#0d4a8f",
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 600
                      }}>🍦 Ice Cream</div>
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h3 className="h5 fw-bold text-success mb-2">Vegan & Organic Ice Creams</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        Creamy soft serve, vegan and organic ice creams — customizable and made fresh daily.
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>

              {/* Food */}
              <Col xs={12} sm={6} md={4}>
                <Link to="/menu?category=Fusion%20Food" className="text-decoration-none">
                  <div style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "transform 0.2s",
                    background: "#fff"
                  }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <img
                        src="/images/Fusion_Food/Home2.jpg"
                        className="w-100"
                        alt="Indian Persian Mediterranean fusion food at BelAfia Chandler AZ"
                        style={{ height: "220px", objectFit: "cover", display: "block" }}
                      />
                      <div style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#1a6b3c",
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "4px 12px",
                        fontSize: "0.75rem",
                        fontWeight: 600
                      }}>🍛 Fusion Food</div>
                    </div>
                    <div style={{ padding: "20px" }}>
                      <h3 className="h5 fw-bold text-success mb-2">Indian, Persian & Mediterranean Fusion</h3>
                      <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                        Authentic flavors from India, Persia, and the Mediterranean — wraps, rice dishes, and savory favorites.
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>

            </Row>
          </Container>
        </section>

        {/* WHY BELAFIA */}
        <section style={{ background: "#f8f9fa", padding: "70px 0" }}>
          <Container>
            <h2 className="text-center fw-bold mb-5">Why Chandler Loves BelAfia</h2>
            <Row className="g-4 text-center fade-section">
              {[
                { emoji: "🌍", title: "3 Cuisines, 1 Place", desc: "Indian, Persian & Mediterranean — all under one roof in Chandler AZ." },
                { emoji: "🌱", title: "Vegan & Halal", desc: "100% halal certified with vegan and organic options available." },
                { emoji: "🧋", title: "Handcrafted Drinks", desc: "Boba, matcha, milk teas, crushes — all made fresh to order." },
                { emoji: "⭐", title: "4.3 Stars · 631 Reviews", desc: "Loved by the Chandler community with hundreds of 5-star reviews." },
              ].map((item) => (
                <Col xs={12} sm={6} md={3} key={item.title}>
                  <div style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "28px 20px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                    height: "100%"
                  }}>
                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.emoji}</div>
                    <h3 className="h6 fw-bold text-success mb-2">{item.title}</h3>
                    <p className="text-muted mb-0" style={{ fontSize: "0.875rem" }}>{item.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "60px 0" }}>
          <Container className="text-center text-white">
            <h2 className="fw-bold mb-3">Ready to Experience BelAfia?</h2>
            <p style={{ opacity: 0.9, maxWidth: "500px", margin: "0 auto 32px" }}>
              Visit us at 3245 W Ray Rd #3, Chandler AZ 85226 or explore our full menu online.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link to="/menu" className="btn btn-light btn-lg fw-semibold text-success rounded-pill px-4">
                View Full Menu
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg fw-semibold rounded-pill px-4">
                Get Directions
              </Link>
            </div>
          </Container>
        </section>

      </div>
    </>
  );
};

export default Home;