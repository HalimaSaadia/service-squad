import React from "react";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";

const PopularServiceCard = ({service}) => {
  const {_id, servicePhoto, serviceName, serviceArea, providerPhoto, providerName, price, description} = service
  return (
    <div className="card lg:card-side rounded-none border bg-base-100  shadow-xl lg:max-h-64 xl:h-72">
      <figure className="lg:flex-1">
          <img
            src={servicePhoto}
            className="h-full w-full"
            alt="Album"
          />
      </figure>
      <div className="card-body lg:flex-1 lg:py-2 pl-0 lg:pl-10">
        <h2 className="card-title font-bold">{serviceName}</h2>
        <div className="flex  gap-2">
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src={providerPhoto} />
            </div>
          </div>
          <div>
            <p className="font-bold">Provider</p>
            <p>{providerName}</p>
          </div>
        </div>
        <p className="flex-grow-0">
          {description.slice(0,50)} {description.length > 50 && "..."}
        </p>
        <p className="">$:{price}</p>
      
       

        <div className="card-actions">
          <Link to={`/service-details/${_id}`}><button className="borderStyle border-2 px-10 py-3   bg-base-100"> Details</button></Link>
          {/* <Button text="Details"/> */}
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
