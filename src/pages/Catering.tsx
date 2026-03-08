// src/pages/Catering.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Catering: React.FC = () => {
  return (
    <section className="py-5 bg-light rounded shadow">
      <Container>

        {/* Heading */}
        <h2 className="fw-bold text-center text-success mb-4">
          BelAfia Catering Menu
        </h2>

        {/* Intro */}
        <p className="text-center text-muted lead mb-5">
          Bring the bold flavors of BelAfia to your next event.  
          We offer authentic halal catering perfect for weddings, family gatherings,
          corporate events, birthdays, and celebrations of all kinds.  
          Every dish is freshly prepared with traditional spices, rich aromas,
          and homemade care to make your event truly memorable.
        </p>

        {/* APPETIZERS */}
        <h4 className="text-primary fw-bold text-center mt-5 mb-4">
          Appetizers
        </h4>

        <Row className="text-center">
          <Col md={6}>
            <p>Samosa</p>
            <p>Falafel</p>
            <p>Chicken Nuggets</p>
            <p>Chicken 65</p>
            <p>Chilly Chicken</p>
            <p>Paneer Manchurian</p>
            <p>Gobi Manchurian</p>
          </Col>

          <Col md={6}>
            <p>Potato Balls</p>
            <p>Veg Puffs</p>
            <p>Egg Puffs</p>
            <p>Chicken Puffs</p>
            <p>Fries</p>
            <p>Cheesesticks</p>
            <p>Onion Rings</p>
          </Col>
        </Row>

        {/* GRILL */}
        <h4 className="text-primary fw-bold text-center mt-5 mb-4">
          Grill Specials
        </h4>

        <div className="text-center">
          <p>Tandoori Chicken</p>
          <p>Chicken Kabob</p>
          <p>Beef Kabob</p>
          <p>Chicken Koobideh</p>
          <p>Beef Koobideh</p>
        </div>

        {/* SANDWICHES */}
        <h4 className="text-primary fw-bold text-center mt-5 mb-4">
          Sandwiches & Wraps
        </h4>

        <Row className="text-center">
          <Col md={6}>
            <p>Chicken Shawarma</p>
            <p>Gyro Wrap</p>
            <p>Falafel Wrap</p>
          </Col>

          <Col md={6}>
            <p>Veg Burger</p>
            <p>Smash Burger</p>
            <p>Zinger Burger</p>
            <p>Afghan Burger</p>
          </Col>
        </Row>

        {/* CURRIES */}
        <h4 className="text-primary fw-bold text-center mt-5 mb-4">
          Signature Curries
        </h4>

        <Row className="text-center">
          <Col md={6}>
            <p>Chicken Korma</p>
            <p>Goat Korma</p>
            <p>Dum Ka Chicken</p>
            <p>Chicken Marag</p>
            <p>Goat Marag</p>
            <p>Chicken Makhmali</p>
            <p>Butter Chicken Masala</p>
          </Col>

          <Col md={6}>
            <p>Chicken Tikka Masala</p>
            <p>Chicken Haleem</p>
            <p>Goat Haleem</p>
            <p>Rajma</p>
            <p>Kaddu Ka Daalcha</p>
            <p>Dum Ka Kheema</p>
            <p>Bagara Baigan</p>
            <p>Daal</p>
            <p>Okra Curry</p>
          </Col>
        </Row>

        {/* BIRYANI */}
        <h4 className="text-primary fw-bold text-center mt-5 mb-4">
          Biryani & Rice
        </h4>

        <div className="text-center">
          <p>Hyderabadi Mutton Biryani</p>
          <p>Hyderabadi Chicken Biryani</p>
          <p>Vegetable Biryani</p>
          <p>Plain White Rice</p>
          <p>Bagara Rice</p>
          <p>Khichdi Rice</p>
          <p>Zeera Rice</p>
          <p>Yellow Rice</p>
        </div>

        {/* DESSERTS */}
        <h4 className="text-primary fw-bold text-center mt-5 mb-4">
          Desserts & Sweets
        </h4>

        <Row className="text-center">
          <Col md={6}>
            <p>Lab-e-Sheerin</p>
            <p>Kaddu Ki Kheer</p>
            <p>Double Ka Meetha</p>
            <p>Apricot Delight (Khubani)</p>
          </Col>

          <Col md={6}>
            <p>Fruit Mix Dessert</p>
            <p>Pineapple Bread Ka Meetha</p>
            <p>Irani Chai</p>
          </Col>
        </Row>

        {/* Footer / Contact */}
        <div className="text-center mt-5">
          <p className="text-muted fst-italic">
            Always Fresh • 100% Halal • Prepared with Passion
          </p>

          <p className="fw-semibold mt-3">
            For catering inquiries, custom menus, or event bookings,  
            please contact our store directly.  
            Our team will be happy to assist you in planning your event.
          </p>
        </div>

      </Container>
    </section>
  );
};

export default Catering;