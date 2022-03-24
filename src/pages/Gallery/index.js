import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import Category from "../../components/Gallery/Category";
import Navbar from "../../components/Navbar";
import { navUnderLine } from "../../Recoil/navRecoil";
import images from "../../images.json";

import "./gallery.scss";
import ImageCard from "../../components/Gallery/ImageCard";
import Footer from "../../components/Footer";

const Gallery = () => {
  // Nav Underline
  const setUnderLine = useSetRecoilState(navUnderLine);

  // Selected Category
  const [category, setCategory] = useState("all");

  const filterByCategory = (el) => {
    if (category === "all") {
      return el;
    }
    return el.category === category;
  };

  // Page On Load
  useEffect(() => {
    setUnderLine("Gallery");
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <div className="gallery-container">
        <section className="gallery">
          <Category category={category} setCategory={setCategory} />
          <div className="gallery-images">
            {images.filter(filterByCategory).map((el) => (
              <ImageCard
                key={el.id}
                image={el.image}
                artist={el.artist}
                location={el.location}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;
