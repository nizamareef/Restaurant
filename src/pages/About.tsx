// src/pages/About.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>

        {/* Heading */}
        <h2 className="text-center text-success fw-bold mb-4 mb-md-5">
          About BelAfia
        </h2>

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
              BelAfia is your all-in-one destination for flavorful comfort
              foods, cereal-infused ice cream, and refreshing specialty drinks
              — all under one roof. Located at 3245 W Ray Rd in Chandler, AZ, we
              blend creativity, culture, and great taste in a warm,
              family-friendly atmosphere.
            </p>
          </Col>
        </Row>

        {/* Food & Dessert */}
        <Row className="g-4 mb-4 mb-md-5">
          <Col xs={12} md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success fw-bold mb-3">
                  Flavorful Comfort Food
                </Card.Title>
                <Card.Text className="text-muted">
                  Our menu brings together a variety of rich and satisfying
                  flavors — from creamy dishes and aromatic rice plates to
                  freshly baked breads and delicious vegetarian options. Every
                  dish is prepared with fresh ingredients and bold seasonings
                  to deliver a memorable dining experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success fw-bold mb-3">
                  Cereal-Infused Ice Cream
                </Card.Title>
                <Card.Text className="text-muted">
                  For dessert lovers, we create premium ice cream blended with
                  your favorite cereals — from Cinnamon Toast Crunch and Oreos
                  to Fruity Pebbles and more. It’s rich, playful, and nostalgic,
                  making it a fun treat for both kids and adults.
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
                <Card.Title className="text-success fw-bold mb-3">
                  Matcha, Boba & Specialty Drinks
                </Card.Title>
                <Card.Text className="text-muted">
                  Sip on our refreshing lineup of drinks including premium
                  matcha, classic boba milk teas, layered fruit teas, signature
                  chillers, and cold-brew coffee blends. Whether you’re pairing
                  it with your meal or grabbing a drink to-go, there’s a flavor
                  for every mood.
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
                <Card.Title className="text-success fw-bold mb-3">
                  The BelAfia Experience
                </Card.Title>
                <p className="text-muted">
                  At BelAfia, we combine great food, creative desserts, and
                  refreshing drinks in a welcoming space. Our goal is to create
                  a place where families, friends, and food lovers can gather,
                  relax, and enjoy a memorable dining experience together.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success fw-bold mb-3">
                  Our Promise
                </Card.Title>
                <p className="text-muted">
                  Whether you're craving a satisfying meal, a creamy dessert, or
                  a refreshing drink, BelAfia is dedicated to delivering
                  consistent quality, bold flavors, and a memorable experience
                  every time you visit.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default About;