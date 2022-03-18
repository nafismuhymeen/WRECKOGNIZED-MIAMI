import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { navUnderLine } from "../../Recoil/navRecoil";
import "./navpc.scss";

const NavPc = () => {
  // Nav Underline
  const underline = useRecoilValue(navUnderLine);

  const currentUnderlin = (currentRoute) => {
    if (currentRoute === underline) {
      return "white";
    }
    return "transparent";
  };

  // Location
  const location = useLocation();

  // Change Color
  const changeColor = () => {
    if (location.pathname === "/") {
      return "transparent";
    }
    return "#79b4b7";
  };
  return (
    <div style={{ backgroundColor: `${changeColor()}` }} className="nav-pc">
      <div className="logo">
        <Link to="/">
          <h1>Wreckognized Miami</h1>
        </Link>
      </div>
      <div className="navigation">
        <ul>
          <Link to="/">
            <li
              style={{
                borderColor: `${currentUnderlin("Home")}`,
              }}
            >
              Home
            </li>
          </Link>
          <Link to="/gallery">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("Gallery")}`,
              }}
            >
              Gallery
            </li>
          </Link>
          <Link to="/about">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("About")}`,
              }}
            >
              {" "}
              About Me
            </li>
          </Link>
          <Link to="/">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("Contact")}`,
              }}
            >
              Contact Me
            </li>
          </Link>
          <Link to="/quiz">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("Quiz")}`,
              }}
            >
              Quiz
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavPc;
