import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About BelAfia | Fusion Restaurant in Chandler AZ</title>
        <meta name="description" content="Learn about BelAfia — Chandler AZ's fusion restaurant serving Indian, Persian & Mediterranean food, boba drinks, matcha, milk teas, and vegan organic ice creams at 3245 W Ray Rd." />
        <meta property="og:title" content="About BelAfia | Fusion Restaurant in Chandler AZ" />
        <meta property="og:description" content="BelAfia is Chandler AZ's all-in-one fusion dining destination. Indian, Persian & Mediterranean food, boba, matcha, milk teas and vegan ice creams." />
        <meta property="og:url" content="https://www.azbelafia.com/about" />
        <link rel="canonical" href="https://www.azbelafia.com/about" />
      </Helmet>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "70px 0 60px" }}>
        <Container className="text-center text-white">
          <span style={{ fontSize: "52px" }}>🌍</span>
          <h1 className="fw-bold mt-3 mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            About BelAfia
          </h1>
          <p className="lead" style={{ maxWidth: "650px", margin: "0 auto", opacity: 0.9 }}>
            Chandler AZ's all-in-one fusion dining destination — where Indian, Persian
            & Mediterranean flavors meet handcrafted drinks and vegan ice creams.
          </p>
        </Container>
      </section>

      {/* INTRO */}
      <section style={{ background: "#f8f9fa", padding: "50px 0" }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="text-center">
              <p style={{ color: "#4993e2", fontSize: "1.1rem", fontWeight: 400, lineHeight: "1.8", fontStyle: "italic" }}>
                BelAfia is located at 3245 W Ray Rd, Chandler AZ 85226. We blend
                creativity, culture, and great taste in a warm, family-friendly
                atmosphere — serving bold fusion flavors you won't find anywhere else.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* WHAT WE OFFER */}
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2 className="text-center fw-bold mb-2">What Makes BelAfia Special</h2>
          <p className="text-center text-muted mb-5">Four reasons our guests keep coming back</p>

          <Row className="g-4">

            {/* Food */}
            <Col xs={12} md={6}>
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                height: "100%",
                borderTop: "4px solid #1a6b3c"
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🍛</div>
                <h2 className="fw-bold mb-3" style={{ fontSize: "1.2rem", color: "#1a6b3c" }}>
                  Indian, Persian & Mediterranean Fusion Food
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Our menu brings together the rich culinary traditions of India,
                  Persia, and the Mediterranean — from creamy curries and aromatic
                  rice plates to freshly baked breads and flavorful vegetarian options.
                  Every dish is prepared with fresh ingredients and bold seasonings
                  for an authentic dining experience in Chandler AZ.
                </p>
              </div>
            </Col>

            {/* Ice Cream */}
            <Col xs={12} md={6}>
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                height: "100%",
                borderTop: "4px solid #0d4a8f"
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🍦</div>
                <h2 className="fw-bold mb-3" style={{ fontSize: "1.2rem", color: "#0d4a8f" }}>
                  Vegan & Organic Ice Creams
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  For dessert lovers, we offer vegan and organic soft serve ice creams
                  blended with your favorite cereals — from Cinnamon Toast Crunch and
                  Oreos to Fruity Pebbles and more. Rich, playful, and nostalgic —
                  a fun treat for both kids and adults in Chandler AZ.
                </p>
              </div>
            </Col>

            {/* Drinks */}
            <Col xs={12} md={6}>
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                height: "100%",
                borderTop: "4px solid #1a6b3c"
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🧋</div>
                <h2 className="fw-bold mb-3" style={{ fontSize: "1.2rem", color: "#1a6b3c" }}>
                  Boba, Matcha & Specialty Drinks
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  Sip on our refreshing lineup of handcrafted drinks including premium
                  matcha lattes, classic boba milk teas, layered fruit teas, fresh
                  fruit crushes, and cold-brew coffee blends. Whether pairing with
                  your meal or grabbing a drink to-go — there's a flavor for every mood.
                </p>
              </div>
            </Col>

            {/* Experience */}
            <Col xs={12} md={6}>
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                height: "100%",
                borderTop: "4px solid #0d4a8f"
              }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>❤️</div>
                <h2 className="fw-bold mb-3" style={{ fontSize: "1.2rem", color: "#0d4a8f" }}>
                  The BelAfia Experience
                </h2>
                <p className="text-muted" style={{ lineHeight: "1.7" }}>
                  At BelAfia in Chandler AZ, we combine authentic fusion food,
                  creative desserts, and refreshing handcrafted drinks in a welcoming
                  space. Our goal is to create a place where families, friends, and
                  food lovers can gather, relax, and enjoy a memorable experience together.
                </p>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* STATS */}
      <section style={{ background: "#f8f9fa", padding: "50px 0" }}>
        <Container>
          <Row className="text-center g-4">
            {[
              { value: "4.3⭐", label: "Google Rating" },
              { value: "631+", label: "Happy Reviews" },
              { value: "100%", label: "Halal Certified" },
              { value: "3", label: "Cuisines Fused" },
            ].map((stat) => (
              <Col xs={6} md={3} key={stat.label}>
                <div style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "28px 16px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
                }}>
                  <div className="fw-bold" style={{ fontSize: "2rem", color: "#1a6b3c" }}>{stat.value}</div>
                  <div className="text-muted mt-1" style={{ fontSize: "0.9rem" }}>{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* PROMISE + CTA */}
      <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "60px 0" }}>
        <Container className="text-center text-white">
          <h2 className="fw-bold mb-3">Our Promise to You</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 32px", opacity: 0.9, lineHeight: "1.8" }}>
            Whether you're craving Indian, Persian or Mediterranean fusion food,
            a creamy vegan ice cream, or a refreshing boba drink — BelAfia is
            dedicated to delivering consistent quality, bold authentic flavors,
            and a memorable experience every time you visit us in Chandler AZ.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="/menu" className="btn btn-light btn-lg fw-semibold text-success rounded-pill px-4">
              View Our Menu
            </a>
            <a href="/contact" className="btn btn-outline-light btn-lg fw-semibold rounded-pill px-4">
              Visit Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;