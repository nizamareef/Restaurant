import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const menuSections = [
  {
    title: "Appetizers",
    emoji: "🥙",
    items: [
      "Samosa", "Falafel", "Chicken Nuggets", "Chicken 65",
      "Chilly Chicken", "Paneer Manchurian", "Gobi Manchurian",
      "Potato Balls", "Veg Puffs", "Egg Puffs", "Chicken Puffs",
      "Fries", "Cheesesticks", "Onion Rings"
    ]
  },
  {
    title: "Grill Specials",
    emoji: "🔥",
    items: [
      "Tandoori Chicken", "Chicken Kabob", "Beef Kabob",
      "Chicken Koobideh", "Beef Koobideh"
    ]
  },
  {
    title: "Sandwiches & Wraps",
    emoji: "🌯",
    items: [
      "Chicken Shawarma", "Gyro Wrap", "Falafel Wrap",
      "Veg Burger", "Smash Burger", "Zinger Burger", "Afghan Burger"
    ]
  },
  {
    title: "Signature Curries",
    emoji: "🍛",
    items: [
      "Chicken Korma", "Goat Korma", "Dum Ka Chicken", "Chicken Marag",
      "Goat Marag", "Chicken Makhmali", "Butter Chicken Masala",
      "Chicken Tikka Masala", "Chicken Haleem", "Goat Haleem",
      "Rajma", "Kaddu Ka Daalcha", "Dum Ka Kheema",
      "Bagara Baigan", "Daal", "Okra Curry"
    ]
  },
  {
    title: "Biryani & Rice",
    emoji: "🍚",
    items: [
      "Hyderabadi Mutton Biryani", "Hyderabadi Chicken Biryani",
      "Vegetable Biryani", "Plain White Rice", "Bagara Rice",
      "Khichdi Rice", "Zeera Rice", "Yellow Rice"
    ]
  },
  {
    title: "Desserts & Sweets",
    emoji: "🍮",
    items: [
      "Lab-e-Sheerin", "Kaddu Ki Kheer", "Double Ka Meetha",
      "Apricot Delight (Khubani)", "Fruit Mix Dessert",
      "Pineapple Bread Ka Meetha", "Irani Chai"
    ]
  }
];

const Catering: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Halal Catering in Chandler AZ | BelAfia – Indian, Persian & Mediterranean</title>
        <meta name="description" content="BelAfia offers authentic halal catering in Chandler AZ for weddings, corporate events, and celebrations. Indian, Persian & Mediterranean food freshly prepared." />
        <meta property="og:title" content="Halal Catering Chandler AZ | BelAfia Restaurant" />
        <meta property="og:description" content="Authentic halal catering for weddings, corporate events and celebrations in Chandler AZ." />
        <meta property="og:url" content="https://www.azbelafia.com/catering" />
        <link rel="canonical" href="https://www.azbelafia.com/catering" />
      </Helmet>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "60px 0 50px" }}>
        <Container className="text-center text-white">
          <span style={{ fontSize: "48px" }}>🍽️</span>
          <h1 className="fw-bold mt-3 mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            BelAfia Catering
          </h1>
          <p className="lead mb-4" style={{ maxWidth: "650px", margin: "0 auto", opacity: 0.9 }}>
            Authentic Indian, Persian and Mediterranean halal catering for weddings,
            corporate events, birthdays, and celebrations in Chandler AZ.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-2 mt-3">
            <Badge bg="light" text="success" className="px-3 py-2 fs-6">✅ 100% Halal</Badge>
            <Badge bg="light" text="success" className="px-3 py-2 fs-6">🌿 Always Fresh</Badge>
            <Badge bg="light" text="success" className="px-3 py-2 fs-6">❤️ Made with Passion</Badge>
          </div>
        </Container>
      </section>

      {/* EVENTS */}
      <section style={{ background: "#f8f9fa", padding: "50px 0" }}>
        <Container>
          <h2 className="text-center fw-bold text-success mb-5">Perfect For Every Occasion</h2>
          <Row className="text-center g-4">
            {[
              { emoji: "💍", label: "Weddings" },
              { emoji: "🏢", label: "Corporate Events" },
              { emoji: "🎂", label: "Birthdays" },
              { emoji: "👨‍👩‍👧‍👦", label: "Family Gatherings" },
            ].map((event) => (
              <Col xs={6} md={3} key={event.label}>
                <div style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "24px 16px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  height: "100%"
                }}>
                  <div style={{ fontSize: "36px", marginBottom: "10px" }}>{event.emoji}</div>
                  <div className="fw-semibold text-dark">{event.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* MENU SECTIONS */}
      <section style={{ padding: "50px 0" }}>
        <Container>
          <h2 className="text-center fw-bold mb-2">Our Catering Menu</h2>
          <p className="text-center text-muted mb-5">Freshly prepared with traditional spices and homemade care</p>
          <Row className="g-4">
            {menuSections.map((section) => (
              <Col xs={12} md={6} key={section.title}>
                <div style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  height: "100%",
                  borderTop: "4px solid #1a6b3c"
                }}>
                  <h3 className="fw-bold mb-4" style={{ color: "#1a6b3c", fontSize: "1.1rem" }}>
                    {section.emoji} {section.title}
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span key={item} style={{
                        background: "#f0f7f3",
                        color: "#1a6b3c",
                        borderRadius: "20px",
                        padding: "4px 14px",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        border: "1px solid #c8e6d4"
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "50px 0" }}>
        <Container className="text-center text-white">
          <h2 className="fw-bold mb-3">Ready to Book Your Event?</h2>
          <p className="mb-4" style={{ opacity: 0.9, maxWidth: "500px", margin: "0 auto 24px" }}>
            Contact us for custom menus, pricing, and event planning.
            Our team is happy to make your celebration unforgettable.
          </p>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="tel:+14803619936" className="btn btn-light btn-lg fw-semibold text-success rounded-pill px-4">
              📞 Call Us
            </a>
            <a href="/contact" className="btn btn-outline-light btn-lg fw-semibold rounded-pill px-4">
              Get in Touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Catering;