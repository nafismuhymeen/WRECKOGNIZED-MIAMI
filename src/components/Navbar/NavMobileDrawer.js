import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  navUnderLine,
  showNavDrawer,
  showNavDrawerDisplay,
} from "../../Recoil/navRecoil";
import "./navmobiledrawer.scss";

const NavMobileDrawer = () => {
  // Nav Underline
  const underline = useRecoilValue(navUnderLine);

  const currentUnderlin = (currentRoute) => {
    if (currentRoute === underline) {
      return "black";
    }
    return "transparent";
  };

  // Show Nav Drawer
  const [drawer, setDrawer] = useRecoilState(showNavDrawer);
  const [drawerDisplay, setDrawerDisplay] =
    useRecoilState(showNavDrawerDisplay);

  return (
    <div
      style={{ left: `${drawer}`, opacity: `${drawerDisplay}` }}
      className="nav-mobile-drawer"
    >
      <div>
        <div className="header">
          <h1>Menu</h1>
          <span
            onClick={() => {
              setDrawer("100%");
              setDrawerDisplay("0");
            }}
          >
            &#10006;
          </span>
        </div>
        <div className="nav-list">
          <Link to="/">
            <li style={{ borderBottomColor: `${currentUnderlin("Home")}` }}>
              Home
            </li>
          </Link>
          <Link to="/">
            <li style={{ borderBottomColor: `${currentUnderlin("Gallery")}` }}>
              Gallery
            </li>
          </Link>
          <Link to="/about">
            <li style={{ borderBottomColor: `${currentUnderlin("About")}` }}>
              About Me
            </li>
          </Link>
          <Link to="/">
            <li style={{ borderBottomColor: `${currentUnderlin("Contact")}` }}>
              Contact Me
            </li>
          </Link>
          <Link to="/">
            <li style={{ borderBottomColor: `${currentUnderlin("Quiz")}` }}>
              Quiz
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMobileDrawer;
