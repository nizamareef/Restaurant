// src/pages/Menu.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MenuGrid from "../components/MenuGrid";

const Menu: React.FC = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const validCategories = [
    "Fusion Food",
    "Ice Creams and Milk Shakes",
    "Milk Teas",
    "Matchas",
    "Crafted Teas",
    "Blended Drinks",
    "Caffeine-Free",
    "Coffees",
  ] as const;

  type Category = (typeof validCategories)[number];

  const param = params.get("category");

  const category: Category =
    validCategories.includes(param as Category)
      ? (param as Category)
      : "Fusion Food";

  const categoryMeta: Record<Category, { title: string; description: string }> = {
    "Fusion Food": {
      title: "Fusion Food Menu | Indian, Persian & Mediterranean – BelAfia Chandler AZ",
      description: "Explore BelAfia's fusion food menu featuring Indian, Persian and Mediterranean dishes. Wraps, rice dishes and savory favorites in Chandler AZ.",
    },
    "Ice Creams and Milk Shakes": {
      title: "Vegan & Organic Ice Creams | Soft Serve – BelAfia Chandler AZ",
      description: "Try BelAfia's vegan and organic ice creams, soft serve, and milkshakes in Chandler AZ. Creamy, fresh, and customizable.",
    },
    "Milk Teas": {
      title: "Milk Teas Menu – BelAfia Chandler AZ",
      description: "Handcrafted milk teas made fresh at BelAfia in Chandler AZ. Classic and creative flavors available daily.",
    },
    "Matchas": {
      title: "Matcha Drinks Menu – BelAfia Chandler AZ",
      description: "Premium matcha lattes and matcha drinks at BelAfia in Chandler AZ. Made fresh with quality ingredients.",
    },
    "Crafted Teas": {
      title: "Crafted Teas Menu – BelAfia Chandler AZ",
      description: "Handcrafted specialty teas at BelAfia in Chandler AZ. Unique blends made fresh daily.",
    },
    "Blended Drinks": {
      title: "Boba & Blended Drinks Menu – BelAfia Chandler AZ",
      description: "Fresh boba drinks, fruit crushes and blended beverages at BelAfia in Chandler AZ. Handcrafted to order.",
    },
    "Caffeine-Free": {
      title: "Caffeine-Free Drinks Menu – BelAfia Chandler AZ",
      description: "Delicious caffeine-free drink options at BelAfia in Chandler AZ. Perfect for all ages.",
    },
    "Coffees": {
      title: "Coffee Menu – BelAfia Chandler AZ",
      description: "Specialty coffees and coffee drinks at BelAfia in Chandler AZ. Crafted fresh for every order.",
    },
  };

  const { title, description } = categoryMeta[category];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://www.azbelafia.com/menu?category=${encodeURIComponent(category)}`} />
        <link rel="canonical" href={`https://www.azbelafia.com/menu?category=${encodeURIComponent(category)}`} />
      </Helmet>

      <MenuGrid initialCategory={category} />
    </>
  );
};

export default Menu;