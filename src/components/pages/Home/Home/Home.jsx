import React from "react";
import SectionHeading from "../../../shared/SectionHeading";
import Button from "../../../shared/Button";
import Slider from "../Slider/Slider";
import PopularServices from "../PopularServices/PopularServices";
import Contact from "../Contact/Contact";

import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import RewiewsContainer from "./ReveiwsContainer/RewiewsContainer";

const Home = () => {
  return (
    <div className="">
      <Slider />
      <div className="max-w-7xl mx-auto">
        <PopularServices />
        <RewiewsContainer />
       <Contact />
       <FrequentlyAskedQuestion/>
      </div>
    </div>
  );
};

export default Home;
