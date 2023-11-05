import React from "react";

const PopularServiceCard = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:h-96">
      <figure className="lg:flex-1">
     
          <img
            src="https://plus.unsplash.com/premium_photo-1677681803908-1d2404bd24dc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZXBlcnxlbnwwfHwwfHx8MA%3D%3D"
            className="object-cover h-56 md:h-96 w-full lg:h-full"
            alt="Album"
          />
    
      </figure>
      <div className="card-body lg:flex-1">
        <h2 className="card-title">New album is released!</h2>
        <p className="flex-grow-0">
          Revolutionary software that streamlines workflows and boosts
          productivity for businesses of all sizes.
        </p>
        <div className="flex  gap-2">
          <div className="avatar">
            <div className="w-12 mask mask-squircle">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <p>Provider</p>
            <p>Halima Tus Sadia</p>
          </div>
        </div>
        <p>$: Price</p>

        <div className="card-actions">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
