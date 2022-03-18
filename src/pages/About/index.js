import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import Navbar from "../../components/Navbar";
import { navUnderLine } from "../../Recoil/navRecoil";
import "./about.scss";

const About = () => {
  // Nav Underline
  const setUnderLine = useSetRecoilState(navUnderLine);

  // Page On Load
  useEffect(() => {
    setUnderLine("About");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className="about-container">
        <section className="about">
          <div className="profile-image">
            <img src="/images/BIOPIC ORIGINAL.webp" alt="" />
          </div>
          <div className="profile-text">
            <div>
              <h1>About</h1>
              <h2>Gaston Salo</h2>
              <p>
                Gaston Salo is a university student who spends his leisure time
                taking photos of Miami's graffiti scene. He enjoys "benching", a
                term used to describe watching trains go by to look at the
                graffiti on that box carts. Using various elements of
                editing,production, photography, he combines them to polish his
                hobby. Here he shows you a tease of knowing Miami throuhg
                graffiti writers.
              </p>
              {/* <p>
              i was professionally trained in architecture with a master degree
              from the national university of singapore (nus) and then later a
              master of advanced studies degree in housing from the swiss
              federal institute of technology (eth). i was born and raised in
              vietnam, studied and worked in singapore, did an exchange semester
              in sheffield (uk), and currently living in (and loving) zurich,
              switzerland. i speak english, german, and vietnamese.
            </p>
            <p>
              lulu and isabelle studio is a platform to showcase the creative
              works that i do in my free time, namely, taking photos, painting
              and doing some graphic designs. my inspirations come from my
              travels, architecture, watercolor paintings, light and shadow, and
              colorful patterns and compositions.
            </p> */}
              <p>
                Hope you enjoy his works! If you have any question, or want to
                collaborate on some creative project, please don't hesitate to
                contact.
              </p>
              <p>Have a nice day!</p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default About;
