import React from "react";
import NavPc from "./NavPc";
import "./navbar.scss";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <nav>
      <NavPc />
      <NavMobile />
    </nav>
  );
};

export default Navbar;
