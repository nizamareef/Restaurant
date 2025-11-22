import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-dark text-white text-center p-4 mt-4">
    &copy; {new Date().getFullYear()} My Restaurant. All rights reserved.
  </footer>
);

export default Footer;
