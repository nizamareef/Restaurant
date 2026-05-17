// src/pages/About.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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

      <section className="py-5 bg-light" aria-label="About BelAfia Restaurant">
        <Container>

          {/* Heading */}
          <h1 className="text-center text-success fw-bold mb-4 mb-md-5">
            About BelAfia
          </h1>

          {/* Intro */}
          <Row className="justify-content-center mb-4 mb-md-5">
            <Col xs={12} md={10} lg={8}>
              <p
                className="text-center fst-italic"
                style={{
                  color: "#4993e2",
                  fontSize: "1rem",
                  fontWeight: 400,
                  lineHeight: "1.7",
                }}
              >
                BelAfia is Chandler AZ's all-in-one fusion dining destination —
                serving Indian, Persian & Mediterranean comfort food, cereal-infused
                ice creams, and refreshing specialty drinks. Located at 3245 W Ray Rd,
                Chandler AZ 85226, we blend creativity, culture, and great taste in a
                warm, family-friendly atmosphere.
              </p>
            </Col>
          </Row>

          {/* Food & Dessert */}
          <Row className="g-4 mb-4 mb-md-5">
            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title as="h2" className="text-success fw-bold mb-3">
                    Indian, Persian & Mediterranean Fusion Food
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Our menu brings together the rich culinary traditions of India,
                    Persia, and the Mediterranean — from creamy curries and aromatic
                    rice plates to freshly baked breads and flavorful vegetarian options.
                    Every dish is prepared with fresh ingredients and bold seasonings
                    to deliver an authentic and memorable dining experience in Chandler AZ.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title as="h2" className="text-success fw-bold mb-3">
                    Vegan & Organic Ice Creams
                  </Card.Title>
                  <Card.Text className="text-muted">
                    For dessert lovers, we offer vegan and organic soft serve ice creams
                    blended with your favorite cereals — from Cinnamon Toast Crunch and
                    Oreos to Fruity Pebbles and more. Rich, playful, and nostalgic,
                    making it a fun treat for both kids and adults in Chandler AZ.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Drinks */}
          <Row className="justify-content-center mb-4 mb-md-5">
            <Col xs={12} md={10} lg={8}>
              <Card className="shadow-sm border-0">
                <Card.Body>
                  <Card.Title as="h2" className="text-success fw-bold mb-3">
                    Boba, Matcha & Specialty Drinks in Chandler AZ
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Sip on our refreshing lineup of handcrafted drinks including premium
                    matcha lattes, classic boba milk teas, layered fruit teas, fresh
                    fruit crushes, and cold-brew coffee blends. Whether you're pairing
                    it with your meal or grabbing a drink to-go, there's a flavor
                    for every mood at BelAfia Chandler.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Experience & Promise */}
          <Row className="g-4">
            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title as="h2" className="text-success fw-bold mb-3">
                    The BelAfia Experience
                  </Card.Title>
                  <p className="text-muted">
                    At BelAfia in Chandler AZ, we combine authentic fusion food,
                    creative desserts, and refreshing handcrafted drinks in a welcoming
                    space. Our goal is to create a place where families, friends, and
                    food lovers can gather, relax, and enjoy a memorable dining
                    experience together.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title as="h2" className="text-success fw-bold mb-3">
                    Our Promise to You
                  </Card.Title>
                  <p className="text-muted">
                    Whether you're craving Indian, Persian or Mediterranean fusion food,
                    a creamy vegan ice cream, or a refreshing boba drink, BelAfia is
                    dedicated to delivering consistent quality, bold authentic flavors,
                    and a memorable experience every time you visit us in Chandler AZ.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  );
};

export default About;