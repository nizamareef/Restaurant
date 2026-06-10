// src/components/MenuGrid.tsx
import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

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
  price: string;
}

interface MenuGridProps {
  initialCategory?: Category;
}

const categoryEmojis: Record<Category, string> = {
  "Fusion Food": "🍛",
  "Ice Creams and Milk Shakes": "🍦",
  "Milk Teas": "🧋",
  "Matchas": "🍵",
  "Crafted Teas": "🍃",
  "Blended Drinks": "🥤",
  "Caffeine-Free": "🌸",
  "Coffees": "☕",
};

const menuItems: Record<Category, MenuItem[]> = {
  "Fusion Food": [
    { name: "Fries", description: "Golden crispy fries perfectly seasoned and served hot.", price: "$3.99" },
    { name: "Nuggets", description: "Crispy fried chicken nuggets served with dipping sauce.", price: "$4.99" },
    { name: "Samosa", description: "Crispy pastry pockets filled with spiced potatoes and herbs.", price: "$1.99" },
    { name: "Cheese Stick", description: "Crunchy mozzarella sticks with a gooey melted cheese center.", price: "$4.99" },
    { name: "Chicken 65", description: "Bold and spicy fried chicken tossed with aromatic Indian spices.", price: "$9.99" },
    { name: "Falafel", description: "Crispy chickpea fritters packed with herbs and Middle Eastern spices.", price: "$8.99" },
    { name: "Onion Rings", description: "Crispy golden battered onion rings served fresh and hot.", price: "$4.99" },
    { name: "Smash Burger", description: "Juicy smashed beef patty with melted cheese and fresh toppings.", price: "$12.99" },
    { name: "Zinger Burger", description: "Crispy spiced fried chicken burger with fresh lettuce and sauce.", price: "$11.99" },
    { name: "Shami Burger", description: "Tender shami kebab patty served in a toasted bun with toppings.", price: "$12.99" },
    { name: "Chicken Kabob Wrap", description: "Grilled chicken kabob wrapped with fresh vegetables and sauce.", price: "$11.99" },
    { name: "Chicken Shawarma Wrap", description: "Flavorful marinated chicken wrapped with fresh vegetables and garlic sauce.", price: "$11.99" },
    { name: "Falafel Wrap", description: "Crispy falafel wrapped with fresh veggies and creamy tahini sauce.", price: "$10.99" },
    { name: "Veg Wrap", description: "Fresh vegetable wrap with hummus and Mediterranean flavors.", price: "$9.99" },
    { name: "Gyro Wrap", description: "Mediterranean gyro meat wrapped with crisp vegetables and tzatziki.", price: "$12.99" },
    { name: "Beef Kabob Wrap", description: "Grilled beef kabob wrapped in flatbread with fresh toppings.", price: "$13.99" },
    { name: "Beef Wrap", description: "Seasoned beef wrapped with fresh vegetables and house sauce.", price: "$12.99" },
    { name: "Egg Wrap", description: "Freshly made egg wrap with vegetables and seasoning.", price: "$9.99" },
    { name: "Plain Naan", description: "Soft traditional flatbread baked fresh in a tandoor oven.", price: "$1.99" },
    { name: "Garlic Naan", description: "Fluffy naan brushed generously with butter and garlic.", price: "$2.49" },
    { name: "Chicken Over Rice", description: "Tender chicken served over fragrant basmati rice with sauce.", price: "$12.99" },
    { name: "Butter Chicken Masala", description: "Classic creamy tomato-based chicken curry with aromatic spices.", price: "$12.99" },
    { name: "Chicken Tikka Masala", description: "Grilled chicken in a bold smoky masala sauce.", price: "$12.99" },
    { name: "Paneer Butter Masala", description: "Soft paneer cheese in a rich creamy tomato and butter sauce.", price: "$11.99" },
    { name: "Chana Masala", description: "Hearty chickpea curry cooked with bold Indian spices.", price: "$11.99" },
    { name: "Rajma Masala", description: "Slow-cooked red kidney beans in a rich tomato-onion masala.", price: "$11.99" },
    { name: "Haleem", description: "Traditional slow-cooked meat and lentil stew with caramelized onions.", price: "$16.99" },
    { name: "Goat Dum Biryani", description: "Slow-cooked tender goat with fragrant basmati rice and saffron.", price: "$16.99" },
    { name: "Chicken Dum Biryani", description: "Aromatic dum-cooked chicken biryani with caramelized onions.", price: "$15.99" },
    { name: "Chicken Koobideh", description: "Persian ground chicken kabob grilled to perfection on skewers.", price: "$15.99" },
    { name: "Beef Koobideh", description: "Persian ground beef kabob seasoned with herbs and grilled fresh.", price: "$16.99" },
    { name: "Veg Biryani", description: "Fragrant basmati rice cooked with fresh vegetables and whole spices.", price: "$13.99" },
    { name: "Greek Salad", description: "Fresh cucumbers, tomatoes, olives, and feta with olive oil dressing.", price: "$8.99" },
    { name: "Shirazi Salad", description: "Persian fresh cucumber, tomato, and onion salad with lemon dressing.", price: "$8.99" },
    { name: "Chicken Salad", description: "Fresh greens topped with grilled chicken, vegetables, and dressing.", price: "$9.99" },
  ],

  "Ice Creams and Milk Shakes": [
    
    { name: "Minions Treats", description: "Soft serve topped with colorful cereal crunch — a fan favorite!", price: "From $7.30" },
    { name: "Strawberry Shortcake", description: "Strawberry soft serve with cookie crumble and strawberry drizzle.", price: "From $7.30" },
    { name: "Fruity Tooty", description: "Vanilla soft serve blended with fruity pebbles cereal.", price: "From $7.30" },
    { name: "Thunder Buddies", description: "Chocolate soft serve with cocoa puffs and chocolate drizzle.", price: "From $7.30" },
    { name: "Cookies & Cream", description: "Classic cookies and cream ice cream with Oreo mix-in.", price: "From $7.30" },
    { name: "Caramel Apple", description: "Vanilla soft serve with caramel drizzle and apple-inspired mix-ins.", price: "From $7.30" },
    { name: "Mint Chocolate", description: "Cool mint soft serve with chocolate chips.", price: "From $7.30" },
    { name: "Chocoholic", description: "Chocolate soft serve loaded with brownie and chocolate toppings.", price: "From $7.30" },
    { name: "Cookie Crumble", description: "Soft serve topped with cookie dough and biscoff cookie crumble.", price: "From $7.30" },
    { name: "Matcha Madness", description: "Creamy matcha flavored soft serve with matcha green tea topping.", price: "From $7.30" },
  ],

  "Milk Teas": [
    { name: "Thai Tea", description: "Sweet and creamy Thai-style milk tea with rich orange color.", price: " $6.95" },
    { name: "Brown Sugar Milk Tea", description: "Milk tea infused with caramelized brown sugar and tiger stripes.", price: " $6.95" },
    { name: "Pink Blush", description: "Creamy blush-colored milk tea with a fruity floral sweetness.", price: "$6.95" },
    { name: "Jasmine Milk Tea", description: "Fragrant jasmine tea gently blended with fresh creamy milk.", price: "$6.95" },
    { name: "Taro Milk Tea", description: "Smooth purple taro flavored milk tea — creamy and naturally sweet.", price: "$6.95" },
    { name: "Chai Latte", description: "Warm spiced chai tea blended with steamed creamy milk.", price: " $6.95" },
    { name: "Caramel Matcha Latte", description: "Earthy matcha latte sweetened with rich caramel flavor.", price: " $6.95" },
    { name: "Caramel Latte", description: "Smooth latte sweetened with rich caramel sauce.", price: " $6.95" },
  ],

  "Matchas": [
    { name: "Sweet Matcha", description: "Smooth ceremonial grade matcha with the perfect level of sweetness.", price: "$7.95" },
    { name: "Matcha Coconut", description: "Earthy matcha paired with refreshing coconut milk.", price: "$7.95" },
    { name: "Matcha Latte", description: "Classic creamy matcha latte made with steamed milk.", price: "$7.95" },
    { name: "Matcha Coffee", description: "Unique fusion of earthy matcha and rich espresso.", price: "$7.95" },
    { name: "Brown Sugar Matcha Latte", description: "Matcha latte sweetened with rich caramelized brown sugar.", price: "$7.95" },
    { name: "Strawberry Matcha Latte", description: "Beautiful layered strawberry and creamy matcha latte.", price: " $7.95" },
    { name: "Lavender Matcha Latte", description: "Floral lavender infused into a creamy matcha latte.", price: "$7.95" },
  ],

  "Crafted Teas": [
    { name: "Mango Black Tea", description: "Bold black tea infused with sweet tropical mango flavor.", price: "$6.50" },
    { name: "Lychee Peach Green Tea", description: "Light green tea with sweet lychee and fresh peach.", price: "$6.50" },
    { name: "Mountain Green Tea", description: "Refreshing high-altitude green tea with a clean crisp taste.", price: "$6.50" },
    { name: "Jasmine Tea", description: "Delicate jasmine-scented green tea, light and floral.", price: "$6.50" },
    { name: "Matcha Green Tea", description: "Immune-boosting ceremonial matcha green tea blend.", price: "$6.50" },
    { name: "Chrysanthemum Tea", description: "Traditional caffeine-free chrysanthemum herbal tea.", price: "$6.50" },
  ],

  "Blended Drinks": [
    { name: "Brown Sugar Crush", description: "Blended brown sugar drink with caramel sweetness and creamy texture.", price: "$8.00" },
    { name: "Matcha Crush", description: "Blended iced matcha drink with a smooth creamy finish.", price: "$7.50" },
    { name: "Thai Tea Crush", description: "Frozen blended Thai tea — sweet, creamy, and refreshing.", price: "$7.50" },
    { name: "Coffee Crush", description: "Blended iced coffee drink with a rich bold flavor.", price: "$7.50" },
    { name: "Taro Crush", description: "Blended taro drink with a creamy purple hue and sweet taste.", price: "$7.50" },
    { name: "Strawberry Charm", description: "Blended fresh strawberry drink with a sweet fruity charm.", price: "$7.50" },
    { name: "Mango Colada", description: "Tropical blended mango colada with creamy coconut notes.", price: "$7.50" },
    { name: "Watermelon Cooler", description: "Refreshing blended watermelon drink — cool and fruity.", price: "$7.50" },
  ],

  "Caffeine-Free": [
    { name: "Butterfly Rose", description: "Color-changing butterfly pea tea with rose flavor.", price: " $6.50" },
    { name: "Butterfly Mango", description: "Vibrant butterfly pea tea with tropical mango sweetness.", price: "$6.50" },
    { name: "Butterfly Peach", description: "Beautiful butterfly pea lemonade with fresh peach flavor.", price: "$6.50" },
    { name: "Butterfly Lychee", description: "Floral butterfly pea tea with sweet lychee notes.", price: " $6.50" },
    { name: "Butterfly Blueberry", description: "Rich butterfly pea tea blended with blueberry flavor.", price: "$6.50" },
    { name: "Butterfly Raspberry", description: "Tart and sweet butterfly pea tea with raspberry.", price: " $6.50" },
    { name: "Butterfly Strawberry", description: "Sweet butterfly pea lemonade with fresh strawberry.", price: "$6.50" },
    { name: "Rose Milk Latte", description: "Caffeine-free creamy milk latte infused with rose flavor.", price: "$6.50" },
    { name: "Honey Chrysanthemum", description: "Traditional caffeine-free chrysanthemum herbal tea with honey.", price: "$6.50" },
  ],

  "Coffees": [
    { name: "Signature House Coffee", description: "Our signature house blend coffee — bold, smooth, and aromatic.", price: "$6.45" },
    { name: "English Toffee Latte", description: "Rich espresso latte sweetened with English toffee flavor.", price: "$6.45" },
    { name: "Brown Sugar Cinnamon Coffee", description: "Warm brown sugar and cinnamon espresso drink.", price: "$6.45" },
    { name: "Lavender Coffee", description: "Smooth espresso coffee infused with floral lavender.", price: "$6.45" },
    { name: "Cold Brew", description: "Slow-steeped cold brew coffee — smooth and low acidity.", price: "$5.25" },
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
    <div>

      {/* HEADER */}
      <section style={{ background: "linear-gradient(135deg, #1a6b3c 0%, #0d4a8f 100%)", padding: "40px 0 30px" }}>
        <div className="text-center text-white">
          <span style={{ fontSize: "42px" }}>{categoryEmojis[selectedCategory]}</span>
          <h1 className="fw-bold mt-2 mb-1" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}>
            Our Menu
          </h1>
          <p style={{ opacity: 0.85, fontSize: "0.95rem" }}>
            Fresh, handcrafted, and made to order in Chandler AZ
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ background: "#f8f9fa", padding: "20px 0", borderBottom: "1px solid #e9ecef", position: "sticky", top: "0", zIndex: 100 }}>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  fontSize: "0.8rem",
                  padding: "8px 16px",
                  borderRadius: "50px",
                  border: selectedCategory === cat ? "none" : "1.5px solid #dee2e6",
                  background: selectedCategory === cat ? "linear-gradient(135deg, #1a6b3c, #0d4a8f)" : "#fff",
                  color: selectedCategory === cat ? "#fff" : "#495057",
                  fontWeight: selectedCategory === cat ? 600 : 400,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap"
                }}
              >
                {categoryEmojis[cat]} {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MENU ITEMS */}
      <section style={{ padding: "40px 0 60px" }}>
        <div className="container">

          <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="fw-bold mb-0" style={{ fontSize: "1.3rem", color: "#1a6b3c" }}>
              {categoryEmojis[selectedCategory]} {selectedCategory}
            </h2>
            <span style={{
              background: "#f0f7f3",
              color: "#1a6b3c",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "0.8rem",
              fontWeight: 600,
              border: "1px solid #c8e6d4"
            }}>
              {menuItems[selectedCategory].length} items
            </span>
          </div>

          <Row xs={2} sm={2} md={3} lg={4} className="g-3">
            {menuItems[selectedCategory].map((item) => (
              <Col key={item.name}>
                <div style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column"
                }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
                  }}
                >
                  <div style={{ background: "#f8f9fa", padding: "8px" }}>
                    <img
                      src={getImagePath(item.name, selectedCategory)}
                      alt={`${item.name} at BelAfia Chandler AZ`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://via.placeholder.com/300x200?text=Menu+Item";
                      }}
                      style={{
                               width: "100%",
                               height: "clamp(110px, 22vw, 180px)",
                               objectFit: "contain",
                               display: "block",
                               borderRadius: "10px"
                             }}
                    />
                    
                  </div>
                  <div style={{ padding: "12px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px" }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#6c757d", lineHeight: "1.4", marginBottom: "8px" }}>
                        {item.description}
                      </div>
                    </div>
                    <div style={{
                      display: "inline-block",
                      background: "linear-gradient(135deg, #1a6b3c, #0d4a8f)",
                      color: "#fff",
                      borderRadius: "20px",
                      padding: "3px 12px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}>
                      {item.price}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

        </div>
      </section>

    </div>
  );
};

export default MenuGrid;