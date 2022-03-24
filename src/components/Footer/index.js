import { SocialIcon } from "react-social-icons";
import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <SocialIcon url="https://twitter.com/" bgColor="white" />
        </div>
        <div>
          <SocialIcon url="https://instagram.com/" bgColor="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
