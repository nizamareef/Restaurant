import React from "react";
import { useLocation } from "react-router-dom";
import MenuGrid from "../components/MenuGrid";

const Menu: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") as
    | "Food"
    | "Ice Creams"
    | "Milk Teas"
    | "Matchas"
    | "Crafted Teas"
    | "Blended Drinks"
    | "Caffeine-Free"
    | "Coffees"
    | null;

  return <MenuGrid initialCategory={category || "Food"} />;
};

export default Menu;
