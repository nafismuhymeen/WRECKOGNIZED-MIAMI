import React from "react";
import { useLocation } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { showNavDrawer, showNavDrawerDisplay } from "../../Recoil/navRecoil";
import "./navmobile.scss";
import NavMobileDrawer from "./NavMobileDrawer";

const NavMobile = () => {
  // Show Nav Drawer
  const setDrawer = useSetRecoilState(showNavDrawer);
  const setDrawerDisplay = useSetRecoilState(showNavDrawerDisplay);

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
    <div>
      <NavMobileDrawer />
      <div
        style={{ backgroundColor: `${changeColor()}` }}
        className="nav-mobile"
      >
        <h1>Wreckognized Miami</h1>

        <span
          onClick={() => {
            setDrawer("1");
            setDrawerDisplay("1");
          }}
        >
          &#9776;
        </span>
      </div>
    </div>
  );
};

export default NavMobile;
