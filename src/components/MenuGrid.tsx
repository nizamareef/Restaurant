// src/components/MenuGrid.tsx
import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";

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
{ name: "Chicken 65", description: "Bold and spicy fried chicken tossed with aromatic spices." },
{ name: "Falafel", description: "Crispy chickpea fritters packed with herbs." },
{ name: "Chicken Cheese Sandwich", description: "Grilled chicken sandwich with melted cheese." },
{ name: "Meat Ball Sandwich", description: "Savory meatballs served inside toasted bread." },
{ name: "Chicken Shawarma Wrap", description: "Flavorful chicken wrapped with fresh vegetables." },
{ name: "Gyro Wrap", description: "Mediterranean gyro wrapped with crisp vegetables." },
{ name: "Falafel Wrap", description: "Falafel wrap with creamy tahini sauce." },
{ name: "Greek Salad", description: "Fresh vegetables with olives and feta." },
{ name: "Chicken Salad", description: "Fresh greens topped with grilled chicken." },
{ name: "Butter Chicken Masala", description: "Creamy tomato chicken curry." },
{ name: "Chicken Tikka Masala", description: "Grilled chicken in bold masala sauce." },
{ name: "Plain Naan", description: "Soft traditional flatbread." },
{ name: "Paneer Butter Masala", description: "Creamy paneer curry with spices." },
{ name: "Garlic Naan", description: "Naan brushed with butter and garlic." },
{ name: "Goat & Chicken Haleem", description: "Slow cooked meat and lentil stew." },
{ name: "Goat Biryani", description: "Fragrant basmati rice with tender goat." },
{ name: "Shirazi Salad", description: "Persian cucumber and tomato salad." },
{ name: "Chicken Biryani", description: "Spiced basmati rice with chicken." },
],

"Ice Creams and Milk Shakes": [
{ name: "Minions Treats", description: "Soft serve topped with colorful cereal crunch." },
{ name: "Strawberry Shortcake", description: "Strawberry ice cream with cookie crumble." },
{ name: "Fruity Tooty", description: "Vanilla ice cream blended with fruity cereal." },
{ name: "Thunder Buddies", description: "Chocolate lovers soft serve delight." },
{ name: "Cookies & Cream", description: "Classic cookies and cream ice cream." },
{ name: "Caramel Apple", description: "Sweet caramel apple flavored treat." },
{ name: "Mint Chocolate", description: "Cool mint ice cream with chocolate chips." },
{ name: "Chocoholic", description: "Rich chocolate lovers dessert." },
{ name: "Cookie Crumble", description: "Ice cream topped with cookie crumbs." },
{ name: "Matcha Madness", description: "Creamy matcha flavored ice cream." },
],

"Milk Teas": [
{ name: "Thai Tea", description: "Sweet creamy Thai milk tea." },
{ name: "Brown Sugar Milk Tea", description: "Milk tea infused with caramelized brown sugar." },
{ name: "Pink Brush", description: "Creamy milk tea with fruity sweetness." },
{ name: "Jasmine Milk Tea", description: "Floral jasmine tea blended with milk." },
{ name: "Taro Milk Tea", description: "Smooth taro flavored milk tea." },
{ name: "Chai Latte", description: "Spiced chai blended with creamy milk." },
{ name: "Caramel Matcha Latte", description: "Matcha latte sweetened with caramel." },
],

Matchas: [
{ name: "Sweet Matcha", description: "Smooth ceremonial matcha with sweetness." },
{ name: "Strawberry Matcha Latte", description: "Layered strawberry and matcha drink." },
{ name: "Ube Coconut Matcha", description: "Matcha blended with ube coconut cream." },
{ name: "Jasmine Matcha Latte", description: "Matcha latte infused with jasmine." },
{ name: "Blueberry Matcha Lemonade", description: "Matcha lemonade with blueberries." },
],

"Crafted Teas": [
{ name: "Mango Black Tea", description: "Black tea infused with mango." },
{ name: "Jasmine Green Tea", description: "Light floral jasmine green tea." },
{ name: "Chrysanthemum Immuni-Tea", description: "Traditional chrysanthemum herbal tea." },
{ name: "Butterfly Rose Lemonade", description: "Color changing butterfly pea lemonade." },
],

"Blended Drinks": [
{ name: "Taro Crush", description: "Blended taro drink with creamy texture." },
{ name: "Strawberry Cream", description: "Creamy strawberry blended drink." },
{ name: "Brown Sugar Crush", description: "Sweet brown sugar blended beverage." },
{ name: "Thai Tea Crush", description: "Frozen Thai tea blended treat." },
],

"Caffeine-Free": [
{ name: "Rose Milk Latte", description: "Milk drink infused with rose flavor." },
{ name: "Blueberry Strawberry Lemonade", description: "Berry lemonade blend." },
{ name: "Honey Chrysanthemum", description: "Herbal tea sweetened with honey." },
{ name: "Butterfly Rose Lemonade", description: "Butterfly tea lemonade with rose." },
],

Coffees: [
{ name: "Signature House Coffee", description: "Our signature brewed coffee." },
{ name: "Matcha Coffee", description: "Fusion of matcha and coffee." },
{ name: "Lavender Coffee", description: "Coffee infused with lavender." },
{ name: "Basic House Coffee", description: "Classic house coffee." },
{ name: "Brewed Coffee", description: "Fresh brewed coffee." },
{ name: "Honey Chrysanthemum Americano", description: "Americano with floral honey notes." },
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

<div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
{categories.map((cat) => (
<Button
key={cat}
variant={selectedCategory === cat ? "success" : "outline-secondary"}
onClick={() => setSelectedCategory(cat)}
style={{ fontSize: "0.8rem", padding: "5px 10px" }}
>
{cat}
</Button>
))}
</div>

<h3 className="text-center mb-4 fw-bold">{selectedCategory}</h3>

<Row xs={2} sm={2} md={3} lg={4} className="g-3">

{menuItems[selectedCategory].map((item) => (

<Col key={item.name}>

<Card className="border-0 shadow-sm h-100">

<Card.Img
variant="top"
src={getImagePath(item.name, selectedCategory)}
alt={item.name}
onError={(e) => {
(e.target as HTMLImageElement).src =
"https://via.placeholder.com/300x200?text=Menu+Item";
}}
style={{
height: "clamp(110px, 22vw, 200px)",
objectFit: "contain",
background: "#f8f9fa",
padding: "8px",
}}
/>

<Card.Body style={{ padding: "8px", textAlign: "center" }}>

<Card.Title style={{ fontSize: "0.85rem", fontWeight: 600 }}>
{item.name}
</Card.Title>

<Card.Text style={{ fontSize: "0.72rem", color: "#6c757d" }}>
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