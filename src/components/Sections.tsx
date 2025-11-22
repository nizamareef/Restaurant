import { Container, Tab, Tabs, Card, Row, Col, Button } from "react-bootstrap";

const sections = [
  {
    title: "Food",
    items: [
      { name: "Hyderabadi CHicken  Biryani", description: "Cheesy and delicious", img: "https://via.placeholder.com/200x150?text=Pizza" },
      { name: "Burger", description: "Juicy and tasty", img: "https://via.placeholder.com/200x150?text=Burger" },
    ],
  },
  {
    title: "Ice Creams",
    items: [
      { name: "Vanilla", description: "Classic flavor", img: "https://via.placeholder.com/200x150?text=Vanilla" },
      { name: "Chocolate", description: "Rich and creamy", img: "https://via.placeholder.com/200x150?text=Chocolate" },
    ],
  },
  {
    title: "Milkshakes",
    items: [
      { name: "Strawberry", description: "Sweet and refreshing", img: "https://via.placeholder.com/200x150?text=Strawberry" },
      { name: "Banana", description: "Healthy & delicious", img: "https://via.placeholder.com/200x150?text=Banana" },
    ],
  },
  {
    title: "Ice Teas & Crushes",
    items: [
      { name: "Lemon Iced Tea", description: "Refreshing", img: "https://via.placeholder.com/200x150?text=Lemon+Iced+Tea" },
      { name: "Mango Crush", description: "Sweet and tangy", img: "https://via.placeholder.com/200x150?text=Mango+Crush" },
    ],
  },
];

const Sections: React.FC = () => {
  return (
    <Container className="py-5 text-center">
      <h1 className="mb-5">Our Specialties</h1>

      {/* Tabs with spacing */}
      <Tabs
        defaultActiveKey="Food"
        id="restaurant-tabs"
        className="mb-4 justify-content-center"
        mountOnEnter
        unmountOnExit
      >
        {sections.map((section) => (
          <Tab eventKey={section.title} title={section.title} key={section.title}>
            <Row className="justify-content-center mt-4">
              {section.items.map((item, idx) => (
                <Col md={6} lg={4} key={idx} className="mb-4">
                  <Card className="h-100 shadow-sm">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <Button variant="primary">Order Now</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default Sections;
