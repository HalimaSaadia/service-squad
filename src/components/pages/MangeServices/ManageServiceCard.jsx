import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageServiceCard = ({ service, services, setServices }) => {

  const axiosInstance = useAxios();
    const navigate = useNavigate();

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

  const handleDeleteService = (id) => {
    Swal.fire({
        title: "Are you sure?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
           
            axiosInstance.delete(`/api/v1/delete-service/${id}`)
            .then(res => {
                const result = res.data;
                console.log(result)
                if(result.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      
                }
                  
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    icon: "error"
                  });
            })

       
        }
      });
  };


  return (
    <div className="card card-compact rounded-none borderStyle border bg-base-100 shadow-xl">
      <figure>
        <img src={servicePhoto} alt="Shoes" className="h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title  md:text-3xl">{serviceName}</h2>
        <p className="text-base">
          {description?.slice(0, 50)} {description?.length > 50 && "..."}
        </p>
        <p className="text-base">{serviceArea}</p>
        <p className="text-base font-bold">Price : ${price}</p>
      </div>
      <div className="card-actions">
        <button
          onClick={() => handleDeleteService(_id)}
          className="btn borderStyle border bg-slate-100 border-b-0 border-l-0 rounded-none flex-1"
        >
          {" "}
          <AiFillDelete className="text-red-500 text-2xl" /> Delete{" "}
        </button>
        <button
          onClick={() => navigate(`/update-service/${_id}`)}
          className="btn borderStyle border bg-slate-100 border-b-0 border-r-0 rounded-none flex-1"
        >
          {" "}
          <AiFillEdit className="text-2xl" />
          Edit Service
        </button>
      </div>
    </div>
  );
};

export default ManageServiceCard;
