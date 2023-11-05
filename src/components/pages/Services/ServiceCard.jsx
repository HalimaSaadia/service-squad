const ServiceCard = ({ service }) => {
  const {
    servicePhoto,
    serviceName,
    serviceArea,
    providerPhoto,
    providerName,
    price,
    description,
  } = service;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl md:p-10 rounded-none lg:h-80 border-2 ">
      <figure className="lg:flex-1 ">
        <img src={servicePhoto} className="w-full h-full  md:p-0" alt="Album" />
      </figure>
      <div className="card-body lg:flex-1 lg:py-0 pl-0 lg:pl-10  pr-0">
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
        <p className="flex-grow-0">
          {description}
        </p>
        <p className="flex-grow">$:{price}</p>
        <p className="flex-grow"><span className="font-bold">Service Area</span>:{serviceArea}</p>
      
        <div className="card-actions">
          <button className="borderStyle border-2 px-10 py-3 w-full  bg-slate-100"> Details</button>
          {/* <Button text="Details"/> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
