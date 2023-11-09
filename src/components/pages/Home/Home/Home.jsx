import React from "react";
import SectionHeading from "../../../shared/SectionHeading";
import Button from "../../../shared/Button";
import Slider from "../Slider/Slider";
import PopularServices from "../PopularServices/PopularServices";
import Contact from "../Contact/Contact";
import FrequentlyAskedQuestion from "../FrequentlyAskedQuestion/FrequentlyAskedQuestion";
import RewiewsContainer from "./ReveiwsContainer/RewiewsContainer";
import { dynamicTitle } from "../../../../utils/dynamicTitle";


const Home = () => {
  dynamicTitle("ServiceSquad")
  return (
    <div className="">
      <Slider />
      <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-0">
        <PopularServices />
        <RewiewsContainer />
       <Contact />
       <FrequentlyAskedQuestion/>
      
      </div>
     
    </div>
  );
};

export default Home;
