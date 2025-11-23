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

interface MenuGridProps {
  initialCategory?: Category;
}

const menuItems: Record<Category, string[]> = {
  "Fusion Food": [
    "Fries",
    "Samosa",
    "Cheese Stick",
    "Chicken 65",
    "Falafel",
    "Chicken Cheese Sandwich",
    "Meat Ball Sandwich",
    "Chicken Shawarma Wrap",
    "Gyro Wrap",
    "Falafel Wrap",
    "Greek Salad",
    "Chicken Salad",
    "Butter Chicken Masala",
    "Chicken Tikka Masala",
    "Plain Naan",
    "Paneer Butter Masala",
    "Garlic Naan",
    "Goat & Chicken Haleem",
    "Goat Biryani",
    "Shirazi Salad",
    "Chicken Biryani",
  ],

  "Ice Creams and Milk Shakes": [
  
    // Signature Soft-Serve Ice Creams
    "Minions Treats",
    "Strawberry Shortcake",
    "Fruity Tooty",
    "Thunder Buddies",
    "Cookies & Cream",
    "Caramel Apple",
    "Mint Chocolate",
    "Chocoholic",
    "Cookie Crumble",
    "Matcha Madness",
  ],

  "Milk Teas": [
    "Thai Tea",
    "Brown Sugar Milk Tea",
    "Pink Brush",
    "Jasmine Milk Tea",
    "Taro Milk Tea",
    "Chai Latte",
    "Caramel Matcha Latte",
  ],

  Matchas: [
    "Sweet Matcha",
    "Strawberry Matcha Latte",
    "Ube Coconut Matcha",
    "Jasmine Matcha Latte",
    "Blueberry Matcha Lemonade",
  ],

  "Crafted Teas": [
    "Mango Black Tea",
    "Jasmine Green Tea",
    "Chrysanthemum Immuni-Tea",
    "Butterfly Rose Lemonade",
  ],

  "Blended Drinks": [
    "Taro Crush",
    "Strawberry Cream",
    "Brown Sugar Crush",
    "Thai Tea Crush",
  ],

  "Caffeine-Free": [
    "Rose Milk Latte",
    "Blueberry Strawberry Lemonade",
    "Honey Chrysanthemum",
    "Butterfly Rose Lemonade",
  ],

  Coffees: [
    "Signature House Coffee",
    "Matcha Coffee",
    "Lavender Coffee",
    "Basic House Coffee",
    "Brewed Coffee",
    "Honey Chrysanthemum Americano",
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
      <div
        className="d-flex justify-content-center flex-wrap gap-2 mb-4"
        style={{ rowGap: "6px" }}
      >
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "success" : "outline-white"}
            onClick={() => setSelectedCategory(cat)}
            style={{
              color: selectedCategory === cat ? "white" : "black",
              fontWeight: 600,
              fontSize: "0.85rem",
              minWidth: 100,
              padding: "6px 10px",
              borderRadius: "8px",
            }}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Ice Cream Info Box */}
      {selectedCategory === "Ice Creams and Milk Shakes" && (
        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            marginBottom: "25px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h4>🍦 Ice Creams</h4>
          <p style={{ margin: 0, color: "#333" }}>
            We offer a variety of <strong>Vegan</strong> and{" "}
            <strong>Regular Ice Creams</strong>, along with our{" "}
            <strong>Signature Soft Serves</strong>. You can also{" "}
            <strong>customize or build your own swirl</strong> — choose your
            favorite cereals, toppings, and mix-ins to create the perfect treat!
          </p>
        </div>
      )}

      <h3 className="text-center mb-4 fw-bold">{selectedCategory}</h3>

      <Row xs={1} md={4} className="g-4">
        {menuItems[selectedCategory].length === 0 ? (
          <Col>
            <p className="text-center text-muted">No items available yet.</p>
          </Col>
        ) : (
          menuItems[selectedCategory].map((item) => (
            <Col key={item}>
              <Card className="shadow-sm border-0 h-100">
                <Card.Img
                  variant="top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                  src={getImagePath(item, selectedCategory)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/300x150?text=${encodeURIComponent(
                      item
                    )}`;
                  }}
                  alt={item}
                />
                <Card.Body className="d-flex flex-column justify-content-center p-0">
                  <Card.Title className="text-center fw-bold">
                    {item}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default MenuGrid;
