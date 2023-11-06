import {AiFillDelete, AiFillEdit} from "react-icons/ai"
const ManageServiceCard = ({service}) => {
      const {
    _id,
    servicePhoto,
    serviceName,
    serviceArea,
    providerPhoto,
    providerName,
    price,
    description,
  } = service;
  return (
    <div className="card card-compact rounded-none borderStyle border bg-base-100 shadow-xl">
      <figure>
        <img
          src={servicePhoto}
          alt="Shoes"
          className="h-72"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title  md:text-3xl">{serviceName}</h2>
        <p className="text-base">{description}</p>
        <p className="text-base">{serviceArea}</p>
        <p className="text-base font-bold">Price : ${price}</p>
        
      </div>
      <div className="card-actions">
          <button className="btn borderStyle border bg-slate-100 border-b-0 border-l-0 rounded-none flex-1"> <AiFillDelete className="text-red-500 text-2xl" /> Delete </button>
          <button  className="btn borderStyle border bg-slate-100 border-b-0 border-r-0 rounded-none flex-1"> <AiFillEdit className="text-2xl" />Buy Now</button>
        </div>
    </div>
  );
};

export default ManageServiceCard;
