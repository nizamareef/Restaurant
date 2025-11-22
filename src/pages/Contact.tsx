import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Contact Us</h2>

      {/* Contact Info Row */}
      <Row className="mb-5 text-center">

        {/* Phone */}
        <Col md={4} className="mb-3">
          <Card className="shadow-sm border-0 h-100 p-3">
            <Card.Body>
              <Card.Title>📞 Phone</Card.Title>
              <Card.Text>+1 480-361-9936</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Address */}
        <Col md={4} className="mb-3">
          <Card className="shadow-sm border-0 h-100 p-3">
            <Card.Body>
              <Card.Title>📍 Address</Card.Title>
              <Card.Text>
                <a
                  href="https://maps.app.goo.gl/r4PrDiPm8YxPRFAMA"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  3245 W Ray Rd #3, Chandler, AZ 85226
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Instagram */}
        <Col md={4} className="mb-3">
          <Card className="shadow-sm border-0 h-100 p-3 d-flex align-items-center text-center">
            <Card.Body>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                width="40"
                className="mb-2"
              />
              <Card.Title>Instagram</Card.Title>
              <Card.Text>
                <a
                  href="https://www.instagram.com/x_rewind?igsh=cXhpN3hia3Uydnhw"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  @belafia
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Contact;
