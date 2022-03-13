import React from "react";
import { useSetRecoilState } from "recoil";
import { showNavDrawer } from "../../Recoil/navRecoil";
import "./navmobile.scss";
import NavMobileDrawer from "./NavMobileDrawer";

const NavMobile = () => {
  // Show Nav Drawer
  const setDrawer = useSetRecoilState(showNavDrawer);
  return (
    <React.Fragment>
      <NavMobileDrawer />
      <div className="nav-mobile">
        <h1>Wreckognized Miami</h1>

        <span onClick={() => setDrawer("0")}>&#9776;</span>
      </div>
    </React.Fragment>
  );
};

export default NavMobile;
