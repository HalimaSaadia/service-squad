import React from "react";
import Button from "../../../shared/Button";

const PopularServiceCard = ({service}) => {
  const {servicePhoto, serviceName, serviceArea, providerPhoto, providerName, price, description} = service
  return (
    <div className="card lg:card-side rounded-none border bg-base-100  shadow-xl lg:h-80">
      <figure className="lg:flex-1">
     
          <img
            src={servicePhoto}
            className="h-full w-full"
            alt="Album"
          />
    
      </figure>
      <div className="card-body lg:flex-1">
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
          {description}
        </p>
        <p className="">$:{price}</p>
      
       

        <div className="card-actions">
          <Button text="Details"/>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
