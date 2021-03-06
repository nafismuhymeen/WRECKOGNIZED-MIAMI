import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import Navbar from "../../components/Navbar/index";
import { navUnderLine } from "../../Recoil/navRecoil";
import "./home.scss";

const Home = () => {
  // History
  const navigate = useNavigate();

  // Nav UnderLine
  const setUnderLine = useSetRecoilState(navUnderLine);

  // Page On LOad
  useEffect(() => {
    setUnderLine("Home");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <section className="home">
        <h1 data-aos="zoom-in" data-aos-duration="500">
          Know Miami With Graffiti.
        </h1>

        <button
          onClick={() => navigate("gallery")}
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="700"
        >
          View Gallery
        </button>
      </section>
    </React.Fragment>
  );
};

export default Home;
