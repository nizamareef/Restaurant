import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const categories = [
  "Fusion Food",
  "Ice Creams and Milk Shakes",
  "Milk Teas",
  "Matchas",
  "Crafted Teas",
  "Blended Drinks",
  "Caffeine-Free",
  "Coffees",
] as const;

type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  description: string;
}

interface MenuGridProps {
  initialCategory?: Category;
}

const menuItems: Record<Category, MenuItem[]> = {
  "Fusion Food": [
    { name: "Fries", description: "Crispy golden fries served hot." },
    { name: "Samosa", description: "Fried pastry stuffed with spiced potatoes." },
    { name: "Cheese Stick", description: "Crunchy mozzarella sticks with dipping sauce." },
    { name: "Chicken 65", description: "Spicy fried chicken tossed with flavorful spices." },
    { name: "Falafel", description: "Crispy chickpea fritters served with dipping sauce." },
    { name: "Chicken Cheese Sandwich", description: "Grilled sandwich filled with chicken and cheese." },
    { name: "Meat Ball Sandwich", description: "Juicy meatballs served in a toasted sandwich." },
    { name: "Chicken Shawarma Wrap", description: "Seasoned chicken wrapped in soft bread with sauce." },
    { name: "Gyro Wrap", description: "Tender gyro meat with fresh vegetables and sauce." },
    { name: "Falafel Wrap", description: "Falafel wrapped with veggies and tahini sauce." },
  ],

  "Ice Creams and Milk Shakes": [
    { name: "Minions Treats", description: "Soft serve ice cream topped with cereal crunch." },
    { name: "Strawberry Shortcake", description: "Strawberry ice cream blended with cookie crumble." },
    { name: "Fruity Tooty", description: "Colorful cereal blended into creamy ice cream." },
    { name: "Thunder Buddies", description: "Chocolatey ice cream topped with crunchy treats." },
    { name: "Cookies & Cream", description: "Classic cookies blended with rich vanilla ice cream." },
  ],

  "Milk Teas": [
    { name: "Thai Tea", description: "Sweet creamy Thai tea with rich flavor." },
    { name: "Brown Sugar Milk Tea", description: "Milk tea infused with caramelized brown sugar." },
    { name: "Pink Brush", description: "Creamy milk tea with a fruity twist." },
    { name: "Jasmine Milk Tea", description: "Fragrant jasmine tea blended with milk." },
  ],

  Matchas: [
    { name: "Sweet Matcha", description: "Smooth ceremonial matcha with light sweetness." },
    { name: "Strawberry Matcha Latte", description: "Layered matcha and strawberry milk." },
    { name: "Ube Coconut Matcha", description: "Creamy coconut matcha with ube flavor." },
  ],

  "Crafted Teas": [
    { name: "Mango Black Tea", description: "Refreshing black tea infused with mango." },
    { name: "Jasmine Green Tea", description: "Light floral green tea." },
  ],

  "Blended Drinks": [
    { name: "Taro Crush", description: "Blended taro drink with creamy texture." },
    { name: "Strawberry Cream", description: "Smooth strawberry blended drink." },
  ],

  "Caffeine-Free": [
    { name: "Rose Milk Latte", description: "Creamy milk drink infused with rose." },
    { name: "Blueberry Strawberry Lemonade", description: "Fresh lemonade with berry flavors." },
  ],

  Coffees: [
    { name: "Signature House Coffee", description: "Our signature brewed coffee blend." },
    { name: "Matcha Coffee", description: "Unique fusion of matcha and coffee." },
    { name: "Lavender Coffee", description: "Smooth coffee infused with lavender aroma." },
  ],
};

const getImagePath = (item: string, category: string) => {
  const formattedName = item.replace(/\s+/g, "_").replace(/&/g, "and");
  const folderName = category.replace(/\s+/g, "_");
  return `/images/${folderName}/${formattedName}.png`;
};

const MenuGrid: React.FC<MenuGridProps> = ({ initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    initialCategory || "Fusion Food"
  );

  useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  return (
    <div className="container mt-4">

      {/* Category Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "success" : "outline-secondary"}
            onClick={() => setSelectedCategory(cat)}
            style={{
              fontWeight: 600,
              fontSize: "0.8rem",
              padding: "5px 10px",
              borderRadius: "8px",
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      <h3 className="text-center mb-4 fw-bold">{selectedCategory}</h3>

      {/* Menu Grid */}
      <Row xs={2} sm={2} md={3} lg={4} className="g-3">

        {menuItems[selectedCategory].map((item) => (
          <Col key={item.name}>

            <Card
              className="border-0 shadow-sm h-100"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >

              <Card.Img
                variant="top"
                src={getImagePath(item.name, selectedCategory)}
                alt={item.name}
                style={{
                  height: "clamp(110px, 22vw, 200px)",
                  objectFit: "contain",
                  background: "#f8f9fa",
                  padding: "8px",
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/250x150?text=${encodeURIComponent(
                    item.name
                  )}`;
                }}
              />

              <Card.Body
                style={{
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                <Card.Title
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                >
                  {item.name}
                </Card.Title>

                <Card.Text
                  style={{
                    fontSize: "0.72rem",
                    color: "#6c757d",
                    margin: 0,
                  }}
                >
                  {item.description}
                </Card.Text>
              </Card.Body>

            </Card>

          </Col>
        ))}

      </Row>
    </div>
  );
};

export default MenuGrid;