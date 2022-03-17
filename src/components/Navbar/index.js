import React from "react";
import NavPc from "./NavPc";
import "./navbar.scss";
import NavMobile from "./NavMobile";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // Location
  const location = useLocation();

  // Chage Position
  const position = () => {
    if (location.pathname === "/") {
      return "absolute";
    }
    return "static";
  };

  return (
    <nav style={{ position: `${position()}` }}>
      <NavPc />
      <NavMobile />
    </nav>
  );
};

export default Navbar;
