import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Navbar from "../../components/Navbar/index";
import { navUnderLine } from "../../Recoil/navRecoil";
import "./home.scss";

const Home = () => {
  const setUnderLine = useSetRecoilState(navUnderLine);

  // Page On LOad
  useEffect(() => {
    setUnderLine("Home");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <section className="home">
        <h1>Know Miami With Graffiti.</h1>

        <button data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700">
          View Gallery
        </button>
      </section>
    </React.Fragment>
  );
};

export default Home;
