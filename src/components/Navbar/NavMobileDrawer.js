import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navUnderLine, showNavDrawer } from "../../Recoil/navRecoil";
import "./navmobiledrawer.scss";

const NavMobileDrawer = () => {
  // Nav Underline
  const [underline, setUnderline] = useRecoilState(navUnderLine);

  const currentUnderlin = (currentRoute) => {
    if (currentRoute === underline) {
      return "black";
    }
    return "transparent";
  };

  // Show Nav Drawer
  const [drawer, setDrawer] = useRecoilState(showNavDrawer);

  return (
    <div style={{ left: `${drawer}` }} className="nav-mobile-drawer">
      <div>
        <div className="header">
          <h1>Menu</h1>
          <span onClick={() => setDrawer("100%")}>&#10006;</span>
        </div>
        <div className="nav-list">
          <Link to="/">
            <li
              style={{ borderBottomColor: `${currentUnderlin("Home")}` }}
              onClick={() => setUnderline("Home")}
            >
              Home
            </li>
          </Link>
          <Link to="/">
            <li
              style={{ borderBottomColor: `${currentUnderlin("Gallery")}` }}
              onClick={() => setUnderline("Gallery")}
            >
              Gallery
            </li>
          </Link>
          <Link to="/about">
            <li
              style={{ borderBottomColor: `${currentUnderlin("About")}` }}
              onClick={() => setUnderline("About")}
            >
              About Me
            </li>
          </Link>
          <Link to="/">
            <li
              style={{ borderBottomColor: `${currentUnderlin("Contact")}` }}
              onClick={() => setUnderline("Contact")}
            >
              Contact Me
            </li>
          </Link>
          <Link to="/">
            <li
              style={{ borderBottomColor: `${currentUnderlin("Quiz")}` }}
              onClick={() => setUnderline("Quiz")}
            >
              Quiz
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMobileDrawer;
