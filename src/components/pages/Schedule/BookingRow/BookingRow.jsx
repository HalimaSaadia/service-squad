const BookingRow = ({ booking }) => {
  const {
    servicePhoto,
    serviceName,
    serviceTakingDate,
    providerEmail,
    price,
  } = booking;
  return (
    <div className="card card-side rounded-none border-b-2 lg:border-l-2   borderStyle bg-base-100 shadow-xl">
      <figure className="w-1/3 ">
       
        <img src={servicePhoto} className="h-full" />
      </figure>
      <div className="card-body line  py-5 px-0 pl-2 md:px-10">
        <h2 className="card-title">{serviceName}</h2>
        <div className="flex">
          <div className="">
            <p>Price: ${price}</p>
            <p>{serviceTakingDate}</p>
          </div>
          <div>
            
          </div>
          
        </div>

    
      </div>
    </div>
  );
};

export default BookingRow;
