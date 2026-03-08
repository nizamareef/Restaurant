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

    const elements = document.querySelectorAll(".fade-section");

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="fade-section py-4">

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            backgroundColor: "#fff"
          }}
        >

          <div className="position-relative">

            <img
              src="/images/Fusion_Food/Home1.jpg"
              alt="BelAfia Food"
              className="img-fluid w-100"
              style={{
                height: "clamp(420px, 70vh, 750px)",
                objectFit: "cover"
              }}
            />

            <div
              className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
              style={{ width: "100%", maxWidth: "700px" }}
            >

              <h1 className="fw-bold display-5">
                Welcome to{" "}
                <span className="text-success">Bel</span>
                <span className="text-primary">Afia</span>
              </h1>

              <p className="lead">
                Handcrafted drinks, delicious bites, and unforgettable experiences.
              </p>

              <Link
                to="/menu?category=Fusion%20Food"
                className="btn btn-success btn-lg mt-3"
              >
                Explore Menu
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <Container className="py-5">

        <Row className="text-center g-4 fade-section">

          {/* Drinks */}
          <Col xs={12} sm={6} md={4}>
            <Link
              to="/menu?category=Blended%20Drinks"
              className="text-decoration-none"
            >

              <img
                src="/images/Fusion_Food/Drinks.png"
                className="img-fluid rounded shadow-sm mb-3"
                alt="Refreshing Drinks"
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />

              <h5 className="text-success">Refreshing Drinks</h5>

              <p className="text-muted">
                Vibrant handcrafted beverages to lift your spirits.
              </p>

            </Link>
          </Col>

          {/* Ice Cream */}
          <Col xs={12} sm={6} md={4}>
            <Link
              to="/menu?category=Ice%20Creams%20and%20Milk%20Shakes"
              className="text-decoration-none"
            >

              <img
                src="/images/Ice_Creams_and_Milk_Shakes/Ice_cream.png"
                className="img-fluid rounded shadow-sm mb-3"
                alt="Ice Cream"
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />

              <h5 className="text-success">Delicious Ice Creams</h5>

              <p className="text-muted">
                Creamy, crunchy, and customizable soft-serve treats.
              </p>

            </Link>
          </Col>

          {/* Food */}
          <Col xs={12} sm={6} md={4}>
            <Link
              to="/menu?category=Fusion%20Food"
              className="text-decoration-none"
            >

              <img
                src="/images/Fusion_Food/Home2.jpg"
                className="img-fluid rounded shadow-sm mb-3"
                alt="Delightful Bites"
                style={{
                  height: "220px",
                  width: "100%",
                  objectFit: "cover"
                }}
              />

              <h5 className="text-success">Delightful Bites</h5>

              <p className="text-muted">
                Flavor-packed wraps, snacks, and savory favorites.
              </p>

            </Link>
          </Col>

        </Row>

      </Container>

    </div>
  );
};

export default Home;