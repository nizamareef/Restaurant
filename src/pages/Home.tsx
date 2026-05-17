// src/pages/Home.tsx
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
        <section className="fade-section py-4" aria-label="Welcome to BelAfia">

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
                alt="BelAfia fusion restaurant in Chandler AZ - Indian Persian Mediterranean food"
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
                  Indian, Persian & Mediterranean fusion food, handcrafted boba drinks, and vegan ice creams in Chandler, AZ.
                </p>

                <Link
                  to="/menu?category=Fusion%20Food"
                  className="btn btn-success btn-lg mt-3"
                  aria-label="Explore BelAfia fusion food menu"
                >
                  Explore Menu
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURES SECTION */}
        <Container className="py-5">

          <h2 className="text-center fw-bold mb-4">What We Offer</h2>

          <Row className="text-center g-4 fade-section">

            {/* Drinks */}
            <Col xs={12} sm={6} md={4}>
              <Link
                to="/menu?category=Blended%20Drinks"
                className="text-decoration-none"
                aria-label="View our boba drinks, matcha and milk teas menu"
              >

                <img
                  src="/images/Fusion_Food/Drinks.png"
                  className="img-fluid rounded shadow-sm mb-3"
                  alt="Boba drinks, matcha, milk teas and crushes at BelAfia Chandler AZ"
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover"
                  }}
                />

                <h3 className="h5 text-success">Boba, Matcha & Milk Teas</h3>

                <p className="text-muted">
                  Handcrafted boba drinks, matcha lattes, milk teas, and fresh fruit crushes made to order.
                </p>

              </Link>
            </Col>

            {/* Ice Cream */}
            <Col xs={12} sm={6} md={4}>
              <Link
                to="/menu?category=Ice%20Creams%20and%20Milk%20Shakes"
                className="text-decoration-none"
                aria-label="View our vegan and organic ice cream menu"
              >

                <img
                  src="/images/Ice_Creams_and_Milk_Shakes/Ice_cream.png"
                  className="img-fluid rounded shadow-sm mb-3"
                  alt="Vegan and organic soft serve ice creams at BelAfia Chandler AZ"
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover"
                  }}
                />

                <h3 className="h5 text-success">Vegan & Organic Ice Creams</h3>

                <p className="text-muted">
                  Creamy soft serve, vegan and organic ice creams — customizable and made fresh daily.
                </p>

              </Link>
            </Col>

            {/* Food */}
            <Col xs={12} sm={6} md={4}>
              <Link
                to="/menu?category=Fusion%20Food"
                className="text-decoration-none"
                aria-label="View our Indian Persian Mediterranean fusion food menu"
              >

                <img
                  src="/images/Fusion_Food/Home2.jpg"
                  className="img-fluid rounded shadow-sm mb-3"
                  alt="Indian Persian Mediterranean fusion food at BelAfia Chandler AZ"
                  style={{
                    height: "220px",
                    width: "100%",
                    objectFit: "cover"
                  }}
                />

                <h3 className="h5 text-success">Indian, Persian & Mediterranean Fusion</h3>

                <p className="text-muted">
                  Authentic flavors from India, Persia, and the Mediterranean — wraps, rice dishes, and savory favorites.
                </p>

              </Link>
            </Col>

          </Row>

        </Container>

      </div>
    </>
  );
};

export default Home;