// src/pages/Home.tsx
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

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

    document.querySelectorAll(".fade-section").forEach((el) =>
      observer.observe(el)
    );
  }, []);

  return (
    <section>
      {/* Hero Section */}
      <div className="hero-section position-relative fade-section">
        <img
          src="/images/Fusion_Food/Home1.jpg"
          alt="Hero"
          className="background-video"
        />
        <div className="overlay-text">
          <h1>
            Welcome to <span className="text-success">Bel</span>
            <span className="text-primary">Afia</span>
          </h1>
          <p>Handcrafted drinks, delicious bites, and unforgettable experiences.</p>

          <Link
            to="/menu#Coffees"
            className="btn btn-success btn-lg cta-btn mt-3"
          >
            Explore Menu
          </Link>
        </div>
      </div>

      <Container className="py-5">
        {/* Feature Highlights */}
        <Row className="text-center mb-5 g-4 fade-section">

          {/* Drinks */}
          <Col md={4}>
            <Link to="/menu#Blended_Drinks" className="text-decoration-none">
              <img
                src="/images/Fusion_Food/Drinks.png"
                className="img-fluid rounded shadow-sm mb-2"
                alt="Refreshing Drinks"
              />
              <h5 className="mt-2 text-success">Refreshing Drinks</h5>
              <p className="text-muted">
                Vibrant, handcrafted beverages to lift your spirits.
              </p>
            </Link>
          </Col>

          {/* Ice Creams */}
          <Col md={4}>
            <Link to="/menu#Ice_Creams" className="text-decoration-none">
              <img
                src="/images/Ice_Creams_and_Milk_Shakes/Ice_cream.png"
                className="img-fluid rounded shadow-sm mb-2"
                alt="Delicious Ice Creams"
              />
              <h5 className="mt-2 text-success">Delicious Ice Creams</h5>
              <p className="text-muted">
                Vegan, regular, or signature soft-serve — build your swirl!
              </p>
            </Link>
          </Col>

          {/* Food / Snacks */}
          <Col md={4}>
            <Link to="/menu#Food" className="text-decoration-none">
              <img
                src="/images/Fusion_Food/Home2.jpg"
                className="img-fluid rounded shadow-sm mb-2"
                alt="Delightful Bites"
              />
              <h5 className="mt-2 text-success">Delightful Bites</h5>
              <p className="text-muted">
                From fries to wraps — flavor-packed snacks for everyone.
              </p>
            </Link>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Home;
