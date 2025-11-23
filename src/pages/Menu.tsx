import React from "react";
import { useLocation } from "react-router-dom";
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
  const category: Category = validCategories.includes(param as Category)
    ? (param as Category)
    : "Fusion Food";

  return <MenuGrid initialCategory={category} />;
};

export default Menu;
