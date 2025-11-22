// src/pages/Meat.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Meat: React.FC = () => {
  return (
    <section className="py-5 bg-light text-center rounded shadow">
      <Container>
        <h2 className="fw-bold mb-5 text-success">Our Meat Specials</h2>
        <p className="lead text-muted ">
          At <strong><span className="text-success">Bel</span><span className="text-primary">Afia</span></strong>, we believe real flavor starts with purity. Our meats are
          <strong> 100% Halal</strong>,freshly sourced, and seasoned with our signature blend of authentic spices — bringing you
           the comfort and taste of true homemade cooking.
        </p>

        <Row className="align-items-center g-3 mt-5">
          <Col md={6}>
            <img
              src="/images/Food/Chicken_Legs.png"
              alt="Halal Meat Platter"
              className="img-fluid rounded shadow mt-3"
              style={{ maxHeight: "320px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
                <h4 className="fw-semibold mb-3 text-primary">Fresh, Hand-Slaughtered Halal Chicken</h4>
                <p className="mt-4 text-muted fst-italic">     
                <p>
                Our chicken is hand-slaughtered every week by a Muslim butcher, 
                following the proper Halal method. With each slaughter, the words 
                <em>“Bismillahi Allahu Akbar”</em> are spoken — ensuring that our process 
                aligns with faith, respect, and purity.
                </p >
                <p>
                Every chicken is naturally raised on a balanced, FDA-approved diet 
                with no antibiotics, no animal fat feed, and no chemical injections.
                They are healthy, clean, and grown the natural way — just as nature intended.
                </p>
                <p>
                Our chicken is delivered fresh the same day it’s slaughtered to maintain 
                peak quality and flavor.
                </p>
                </p> 

          </Col>
        </Row>

        <Row className="align-items-center g-3 mt-5">
            <Col>
           <h4 className="fw-semibold mb-3 text-primary mt-5">Fresh Halal Meats, Crafted with Care</h4>
            <p className="text-muted fst-italic">
            Each cut is 100% Halal, handled with care, and prepared fresh daily.  
            From tender goat to juicy beef, our meats deliver rich taste without compromising quality.
            </p>

            </Col>
          <Col md={6}>
            <img
              src="/images/Food/Goat.jpg"
              alt="Grilled Meat Variety"
              className="img-fluid rounded shadow-sm"
              style={{ maxHeight: "320px", objectFit: "cover", width :"450px"}}
            />
          </Col>
        </Row>

        <p className="mt-4 text-muted fst-italic">
          🔥 Always fresh. Always Halal. Always made with love.
        </p>
      </Container>
    </section>
  );
};

export default Meat;
