import React from "react";
import SectionHeading from "../../../shared/SectionHeading";
import Button from "../../../shared/Button";
import Slider from "../Slider/Slider";
import PopularServices from "../PopularServices/PopularServices";
import Contact from "../Contact/Contact";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import RewiewsContainer from "./ReveiwsContainer/RewiewsContainer";
import { dynamicTitle } from "../../../../utils/dynamicTitle";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  dynamicTitle("ServiceSquad")
  return (
    <div className="">
      <Slider />
      <div className="max-w-7xl mx-auto">
        <PopularServices />
        <RewiewsContainer />
       <Contact />
       <FrequentlyAskedQuestion/>
      
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default Home;
