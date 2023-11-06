import React from 'react';
import { Link } from 'react-router-dom';

const UserServiceCard = ({service}) => {
    const {
        _id,
        servicePhoto,
        serviceName,
        serviceArea,
        providerPhoto,
        providerName,
        price,
        description,
      } = service
      console.log(service)
    return (
        <div className="card  bg-base-100 shadow-xl md:p-10 rounded-none   border-2 ">
        <figure className="h-64">
          <img src={servicePhoto} className="w-full h-full  md:p-0" alt="Album" />
        </figure>
        <div className="card-body lg:py-0 pl-0   pr-0">
          <h2 className="card-title font-bold md:text-3xl">{serviceName}</h2>
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
          <p className="">
            {description}
          </p>
          <p className="flex-grow-0">$:{price}</p>
          <p className=""><span className="font-bold">Service Area</span>:{serviceArea}</p>
        
          <div className="card-actions">
            <Link to={`/service-details/${_id}`}><button className="borderStyle border-2 px-10 py-3 w-full  bg-slate-100"> Details</button></Link>
            {/* <Button text="Details"/> */}
          </div>
        </div>
      </div>
    );
};

export default UserServiceCard;