import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

const ErrorPage = () => {
  return (
    <div
      
      className="w-full min-h-screen flex items-center justify-center"
    >
      <div className="card  bg-base-100 ">
        <figure className="relative">
          <img
            src="https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7903.jpg?size=626&ext=jpg&ga=GA1.2.609707985.1695651342&semt=ais"
            alt="Shoes"
          />
          <div className="absolute bottom-5 md:bottom-11 md:right-1/3">
          <Link to="/">
        {" "}
        <Button text="Go Back Home"/>
      
      </Link>
          </div>
        </figure>
        <div className="card-body">
  
          <div className="card-actions justify-end">
         
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ErrorPage;
