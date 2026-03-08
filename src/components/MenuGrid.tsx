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
{ name: "Fries", description: "Golden crispy fries perfectly seasoned and served hot." },
{ name: "Samosa", description: "Crispy pastry pockets filled with spiced potatoes." },
{ name: "Cheese Stick", description: "Crunchy mozzarella sticks with gooey cheese center." },
{ name: "Chicken 65", description: "Spicy fried chicken tossed with bold aromatic spices." },
{ name: "Falafel", description: "Crispy chickpea fritters packed with herbs and flavor." },
{ name: "Chicken Cheese Sandwich", description: "Grilled sandwich filled with tender chicken and melted cheese." },
{ name: "Meat Ball Sandwich", description: "Savory meatballs served inside toasted bread." },
{ name: "Chicken Shawarma Wrap", description: "Flavorful marinated chicken wrapped with veggies and sauce." },
{ name: "Gyro Wrap", description: "Mediterranean gyro meat wrapped with fresh vegetables." },
{ name: "Falafel Wrap", description: "Falafel wrapped with crisp vegetables and creamy tahini." },
{ name: "Greek Salad", description: "Fresh vegetables tossed with olives and feta cheese." },
{ name: "Chicken Salad", description: "Fresh greens topped with tender grilled chicken." },
{ name: "Butter Chicken Masala", description: "Rich creamy tomato curry with tender chicken." },
{ name: "Chicken Tikka Masala", description: "Grilled chicken simmered in bold masala sauce." },
{ name: "Plain Naan", description: "Soft fluffy traditional flatbread baked fresh." },
{ name: "Paneer Butter Masala", description: "Creamy paneer curry with aromatic spices." },
{ name: "Garlic Naan", description: "Fresh naan bread brushed with butter and garlic." },
{ name: "Goat & Chicken Haleem", description: "Slow cooked blend of meat, lentils and spices." },
{ name: "Goat Biryani", description: "Fragrant basmati rice cooked with tender goat." },
{ name: "Shirazi Salad", description: "Refreshing Persian cucumber and tomato salad." },
{ name: "Chicken Biryani", description: "Spiced basmati rice layered with tender chicken." },
],

"Ice Creams and Milk Shakes": [
{ name: "Minions Treats", description: "Fun soft serve topped with colorful cereal crunch." },
{ name: "Strawberry Shortcake", description: "Strawberry ice cream blended with cookie crumble." },
{ name: "Fruity Tooty", description: "Vanilla ice cream loaded with fruity cereal flavor." },
{ name: "Thunder Buddies", description: "Chocolate lover’s soft serve topped with crunchy treats." },
{ name: "Cookies & Cream", description: "Creamy vanilla ice cream filled with cookie pieces." },
{ name: "Caramel Apple", description: "Sweet caramel blended with apple flavor." },
{ name: "Mint Chocolate", description: "Cool mint ice cream with chocolate chips." },
{ name: "Chocoholic", description: "Rich chocolate ice cream for chocolate lovers." },
{ name: "Cookie Crumble", description: "Velvety ice cream topped with cookie crumbs." },
{ name: "Matcha Madness", description: "Creamy ice cream infused with matcha flavor." },
],

"Milk Teas": [
{ name: "Thai Tea", description: "Sweet creamy Thai tea with bold flavor." },
{ name: "Brown Sugar Milk Tea", description: "Milk tea infused with caramelized brown sugar." },
{ name: "Pink Brush", description: "Creamy milk tea with fruity sweetness." },
{ name: "Jasmine Milk Tea", description: "Floral jasmine tea blended with milk." },
{ name: "Taro Milk Tea", description: "Smooth taro flavored milk tea." },
{ name: "Chai Latte", description: "Warm spiced chai blended with creamy milk." },
{ name: "Caramel Matcha Latte", description: "Matcha latte sweetened with caramel." },
],

Matchas: [
{ name: "Sweet Matcha", description: "Smooth ceremonial matcha with gentle sweetness." },
{ name: "Strawberry Matcha Latte", description: "Layered strawberry and matcha latte." },
{ name: "Ube Coconut Matcha", description: "Matcha blended with creamy ube coconut." },
{ name: "Jasmine Matcha Latte", description: "Matcha latte infused with jasmine tea." },
{ name: "Blueberry Matcha Lemonade", description: "Refreshing lemonade with matcha and blueberries." },
],

"Crafted Teas": [
{ name: "Mango Black Tea", description: "Black tea infused with tropical mango." },
{ name: "Jasmine Green Tea", description: "Light green tea with floral jasmine aroma." },
{ name: "Chrysanthemum Immuni-Tea", description: "Traditional herbal chrysanthemum tea." },
{ name: "Butterfly Rose Lemonade", description: "Color changing lemonade with butterfly pea flower." },
],

"Blended Drinks": [
{ name: "Taro Crush", description: "Blended taro drink with creamy texture." },
{ name: "Strawberry Cream", description: "Creamy strawberry blended beverage." },
{ name: "Brown Sugar Crush", description: "Sweet brown sugar blended drink." },
{ name: "Thai Tea Crush", description: "Frozen Thai tea blended into a creamy treat." },
],

"Caffeine-Free": [
{ name: "Rose Milk Latte", description: "Milk drink infused with delicate rose flavor." },
{ name: "Blueberry Strawberry Lemonade", description: "Berry lemonade bursting with fresh flavor." },
{ name: "Honey Chrysanthemum", description: "Herbal tea sweetened with honey." },
{ name: "Butterfly Rose Lemonade", description: "Butterfly tea lemonade with floral rose notes." },
],

Coffees: [
{ name: "Signature House Coffee", description: "Our signature smooth brewed coffee blend." },
{ name: "Matcha Coffee", description: "Unique fusion of matcha and coffee." },
{ name: "Lavender Coffee", description: "Coffee infused with calming lavender aroma." },
{ name: "Basic House Coffee", description: "Classic house brewed coffee." },
{ name: "Brewed Coffee", description: "Fresh brewed coffee with rich aroma." },
{ name: "Honey Chrysanthemum Americano", description: "Americano sweetened with honey chrysanthemum." },
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