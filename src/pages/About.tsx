// src/pages/About.tsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center text-success fw-bold mb-5">About BelAfia</h2>

        {/* Intro */}
        <Row className="mb-5">
          <Col md={{ span: 10, offset: 1 }}>
            <p className="lead text-center fst-italic " style={{color:"#4993e2ff", fontSize: "1rem",fontWeight: "400"}}>
              BelAfia is your all-in-one destination for authentic Indian
              cuisine, cereal-infused ice cream, and refreshing specialty drinks
              — all under one roof. Located at 3245 W Ray Rd in Chandler, AZ, we
              blend comfort food, creativity, and culture in a warm,
              family-friendly atmosphere.
            </p>
          </Col>
        </Row>

        {/* Food & Dessert Sections */}
        <Row className="mb-5">
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Authentic Indian Cuisine
                </Card.Title>
                <Card.Text>
                  Our menu brings together the best of North and South Indian
                  flavors — creamy curries, aromatic biryanis, freshly baked
                  naan, and delicious vegetarian favorites. Every dish is made
                  with traditional spices, fresh ingredients, and time-honored
                  recipes that reflect the rich culinary heritage of India.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Cereal-Infused Ice Cream
                </Card.Title>
                <Card.Text>
                  For dessert lovers, we create premium ice cream blended with
                  your favorite cereals — from Cinnamon Toast Crunch and Oreos
                  to Fruity Pebbles and more. It’s rich, playful, and nostalgic,
                  making it a fun treat for both kids and adults.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Drinks Section */}
        <Row className="mb-5">
          <Col md={{ span: 8, offset: 2 }}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="text-success fw-bold">
                  Matcha, Boba & Specialty Drinks
                </Card.Title>
                <Card.Text>
                  Sip on our refreshing lineup of drinks: premium Japanese
                  matcha, classic boba milk teas, layered fruit teas, signature
                  chillers, and cold-brew coffee blends. Whether you’re pairing
                  it with your meal or grabbing a drink to-go, there’s a flavor
                  for every mood.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Experience & Promise Section */}
        <Row>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success fw-bold">The BelAfia Experience</Card.Title>
                <ul className="mt-3">
                  <li>The comfort of homemade Indian food</li>
                  <li>The fun and nostalgia of cereal-infused ice cream</li>
                  <li>The freshness of matcha, boba, and specialty drinks</li>
                  <li>A relaxed and welcoming environment for all</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="text-success fw-bold">Our Promise</Card.Title>
                <p className="mt-3">
                  Whether you're craving a rich Indian dinner, a creamy dessert, 
                  or a refreshing drink, BelAfia is dedicated to delivering 
                  consistent quality, bold flavors, and a memorable experience 
                  every time you walk through our doors.
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
