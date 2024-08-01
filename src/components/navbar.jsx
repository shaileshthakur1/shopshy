import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import "./navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">SHOPSHY</div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}> Shop </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}> Contact </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
