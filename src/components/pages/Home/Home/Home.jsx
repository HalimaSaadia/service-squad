import React from "react";
import SectionHeading from "../../../shared/SectionHeading";
import Button from "../../../shared/Button";
import Slider from "../Slider/Slider";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="max-w-7xl mx-auto">
        <PopularServices />
      </div>
    </div>
  );
};

export default Home;
