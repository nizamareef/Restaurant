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
{ name: "Fries", description: "Golden crispy fries perfectly seasoned and served hot — the ultimate comfort snack." },
{ name: "Samosa", description: "Crispy pastry pockets filled with spiced potatoes and herbs, fried to golden perfection." },
{ name: "Cheese Stick", description: "Crunchy on the outside, gooey mozzarella on the inside — the perfect cheesy bite." },
{ name: "Chicken 65", description: "Bold and spicy fried chicken tossed in aromatic spices for a fiery flavor kick." },
{ name: "Falafel", description: "Crispy chickpea fritters packed with herbs and spices, served with a flavorful dip." },
{ name: "Chicken Cheese Sandwich", description: "Tender chicken layered with melted cheese inside perfectly toasted bread." },
{ name: "Meat Ball Sandwich", description: "Juicy seasoned meatballs nestled in warm bread with rich savory flavor." },
{ name: "Chicken Shawarma Wrap", description: "Flavorful marinated chicken wrapped with fresh veggies and creamy sauce." },
{ name: "Gyro Wrap", description: "Classic Mediterranean gyro with tender meat, fresh veggies, and signature sauce." },
{ name: "Falafel Wrap", description: "Crispy falafel wrapped with crunchy vegetables and creamy tahini." },
{ name: "Greek Salad", description: "A refreshing mix of crisp vegetables, olives, and feta cheese with a light dressing." },
{ name: "Chicken Salad", description: "Fresh greens topped with tender grilled chicken and vibrant vegetables." },
{ name: "Butter Chicken Masala", description: "Rich and creamy tomato curry with tender chicken simmered in aromatic spices." },
{ name: "Chicken Tikka Masala", description: "Grilled chicken pieces cooked in a bold, flavorful masala sauce." },
{ name: "Plain Naan", description: "Soft, fluffy traditional flatbread baked fresh and perfect for dipping." },
{ name: "Paneer Butter Masala", description: "Creamy butter curry with soft paneer cubes and fragrant spices." },
{ name: "Garlic Naan", description: "Warm naan bread brushed with butter and topped with roasted garlic." },
{ name: "Goat & Chicken Haleem", description: "Slow-cooked blend of meat, lentils, and spices creating a rich comforting dish." },
{ name: "Goat Biryani", description: "Fragrant basmati rice layered with tender goat meat and aromatic spices." },
{ name: "Shirazi Salad", description: "A bright Persian salad of chopped cucumbers, tomatoes, and herbs." },
{ name: "Chicken Biryani", description: "Classic spiced basmati rice cooked with tender chicken and fragrant herbs." },
],

"Ice Creams and Milk Shakes": [
{ name: "Minions Treats", description: "Playful soft serve loaded with colorful cereal crunch and sweet surprises." },
{ name: "Strawberry Shortcake", description: "Creamy strawberry ice cream swirled with buttery cookie crumble." },
{ name: "Fruity Tooty", description: "A fun burst of fruity cereal mixed into smooth vanilla soft serve." },
{ name: "Thunder Buddies", description: "Chocolate lover’s dream topped with crunchy chocolate treats." },
{ name: "Cookies & Cream", description: "Classic vanilla ice cream packed with rich chocolate cookie pieces." },
{ name: "Caramel Apple", description: "Sweet caramel swirls blended with fresh apple flavor." },
{ name: "Mint Chocolate", description: "Cool mint ice cream with decadent chocolate bits." },
{ name: "Chocoholic", description: "A rich chocolate indulgence made for true chocolate fans." },
{ name: "Cookie Crumble", description: "Velvety ice cream topped with irresistible cookie crumbs." },
{ name: "Matcha Madness", description: "Smooth creamy ice cream infused with vibrant matcha flavor." },
],

"Milk Teas": [
{ name: "Thai Tea", description: "Sweet and creamy Thai tea with bold tea flavor and silky milk." },
{ name: "Brown Sugar Milk Tea", description: "Milk tea infused with rich caramelized brown sugar." },
{ name: "Pink Brush", description: "A vibrant milk tea with fruity sweetness and creamy finish." },
{ name: "Jasmine Milk Tea", description: "Floral jasmine tea blended with smooth milk." },
{ name: "Taro Milk Tea", description: "Creamy taro milk tea with signature nutty sweetness." },
{ name: "Chai Latte", description: "Warm spiced chai blended with creamy milk for a comforting drink." },
{ name: "Caramel Matcha Latte", description: "Earthy matcha paired with smooth caramel sweetness." },
],

Matchas: [
{ name: "Sweet Matcha", description: "Smooth ceremonial matcha with a naturally sweet finish." },
{ name: "Strawberry Matcha Latte", description: "Beautiful layered drink combining fresh strawberry and matcha." },
{ name: "Ube Coconut Matcha", description: "Creamy coconut matcha blended with vibrant ube flavor." },
{ name: "Jasmine Matcha Latte", description: "Floral jasmine notes meet rich matcha in this elegant latte." },
{ name: "Blueberry Matcha Lemonade", description: "Refreshing lemonade infused with matcha and sweet blueberries." },
],

"Crafted Teas": [
{ name: "Mango Black Tea", description: "Bold black tea infused with tropical mango sweetness." },
{ name: "Jasmine Green Tea", description: "Light, fragrant green tea with delicate jasmine aroma." },
{ name: "Chrysanthemum Immuni-Tea", description: "Traditional herbal tea known for its soothing taste." },
{ name: "Butterfly Rose Lemonade", description: "Magical color-changing lemonade with butterfly pea flower and rose." },
],

"Blended Drinks": [
{ name: "Taro Crush", description: "Blended taro drink with creamy texture and nutty sweetness." },
{ name: "Strawberry Cream", description: "Refreshing strawberry blended drink with smooth creamy finish." },
{ name: "Brown Sugar Crush", description: "Sweet brown sugar blended drink with rich caramel flavor." },
{ name: "Thai Tea Crush", description: "Frozen Thai tea blended into a refreshing creamy treat." },
],

"Caffeine-Free": [
{ name: "Rose Milk Latte", description: "Creamy milk drink delicately infused with fragrant rose." },
{ name: "Blueberry Strawberry Lemonade", description: "Bright lemonade bursting with blueberry and strawberry flavor." },
{ name: "Honey Chrysanthemum", description: "Soothing herbal tea naturally sweetened with honey." },
{ name: "Butterfly Rose Lemonade", description: "Floral lemonade with butterfly pea flower and rose essence." },
],

Coffees: [
{ name: "Signature House Coffee", description: "Our carefully brewed house blend with smooth bold flavor." },
{ name: "Matcha Coffee", description: "A unique fusion of rich coffee and earthy matcha." },
{ name: "Lavender Coffee", description: "Smooth coffee delicately infused with calming lavender." },
{ name: "Basic House Coffee", description: "Classic freshly brewed coffee, simple and satisfying." },
{ name: "Brewed Coffee", description: "Freshly brewed coffee with rich aroma and smooth taste." },
{ name: "Honey Chrysanthemum Americano", description: "Americano coffee sweetened with floral honey chrysanthemum." },
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

<Row xs={2} sm={2} md={3} lg={4} className="g-3">

{menuItems[selectedCategory].map((item) => (

<Col key={item.name}>

<Card className="border-0 shadow-sm h-100" style={{ borderRadius: "12px", overflow: "hidden" }}>

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
/>

<Card.Body style={{ padding: "8px", textAlign: "center" }}>

<Card.Title style={{
fontSize: "0.85rem",
fontWeight: 600,
marginBottom: "4px",
}}>
{item.name}
</Card.Title>

<Card.Text style={{
fontSize: "0.72rem",
color: "#6c757d",
margin: 0,
}}>
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