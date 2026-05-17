import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact BelAfia | Fusion Restaurant in Chandler AZ</title>
        <meta name="description" content="Contact BelAfia at 3245 W Ray Rd #3, Chandler AZ 85226. Call 480-361-9936." />
        <link rel="canonical" href="https://www.azbelafia.com/contact" />
      </Helmet>
      <Container className="mt-4">
        <h1 className="text-center mb-4">Contact BelAfia</h1>
        <p className="text-center text-muted mb-5">
          Visit us at 3245 W Ray Rd #3, Chandler AZ 85226. We'd love to hear from you!
        </p>
        <Row className="mb-5 text-center">
          <Col md={4} className="mb-3">
            <Card className="shadow-sm border-0 h-100 p-3">
              <Card.Body>
                <Card.Title as="h2" className="h5">📞 Phone</Card.Title>
                <Card.Text>
                  <a href="tel:+14803619936" className="text-dark text-decoration-none">
                    +1 480-361-9936
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="shadow-sm border-0 h-100 p-3">
              <Card.Body>
                <Card.Title as="h2" className="h5">📍 Address</Card.Title>
                <Card.Text>
                  <a href="https://maps.app.goo.gl/r4PrDiPm8YxPRFAMA" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                    3245 W Ray Rd #3, Chandler, AZ 85226
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-3">
            <Card className="shadow-sm border-0 h-100 p-3">
              <Card.Body>
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="40" className="mb-2" />
                <Card.Title as="h2" className="h5">Instagram</Card.Title>
                <Card.Text>
                  <a href="https://www.instagram.com/belafia3245?igsh=cXhpN3hia3Uydnhw" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">
                    @belafia
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;