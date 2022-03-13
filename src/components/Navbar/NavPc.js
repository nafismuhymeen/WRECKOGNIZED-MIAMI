import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { navUnderLine } from "../../Recoil/navRecoil";
import "./navpc.scss";

const NavPc = () => {
  // Nav Underline
  const [underline, setUnderline] = useRecoilState(navUnderLine);

  const changeUnderline = (currentRoute) => {
    setUnderline(currentRoute);
  };

  const currentUnderlin = (currentRoute) => {
    if (currentRoute === underline) {
      return "wite";
    }
    return "transparent";
  };
  return (
    <div className="nav-pc">
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
              onClick={() => changeUnderline("Home")}
            >
              Home
            </li>
          </Link>
          <Link to="/">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("Gallery")}`,
              }}
              onClick={() => changeUnderline("Gallery")}
            >
              Gallery
            </li>
          </Link>
          <Link to="/about">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("About")}`,
              }}
              onClick={() => changeUnderline("About")}
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
              onClick={() => changeUnderline("Contact")}
            >
              Contact Me
            </li>
          </Link>
          <Link to="/">
            <li
              style={{
                borderBottomColor: `${currentUnderlin("Quiz")}`,
              }}
              onClick={() => changeUnderline("Quiz")}
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
