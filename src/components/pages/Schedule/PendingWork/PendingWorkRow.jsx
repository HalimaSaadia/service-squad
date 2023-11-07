import { useState } from "react";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const PendingWorkRow = ({ pendingWork }) => {
  const { _id, servicePhoto, serviceName, userEmail,  serviceTakingDate, price } =
    pendingWork;
    const defaultStatus = pendingWork?.status || "pending"
    console.log(defaultStatus)

    const [status, setStatus] = useState(defaultStatus)
    const axiosInstance = useAxios()

    const handleStatusChange = e => {
      const toastId = toast.loading("Updating...")
        const newStatus = e.target.value
        setStatus(newStatus)
        axiosInstance.patch(`/api/v1/update-status/${_id}`, {newStatus})
        .then(res => {
          const result = res.data;
        if(result.modifiedCount > 0){
          Swal.fire({
            icon: "success",
            title: "Successfully Updated Service",
          });
        }else{
          Swal.fire({
            icon: "info",
            title: "You update nothing",
          });
        }
       
        toast.remove(toastId);
        })

    }

  return (
    <div className="card card-side rounded-none border-b-2 lg:border-l-2  borderStyle bg-base-100 shadow-xl">
      <figure className="w-1/3 ">
        <img src={servicePhoto} className="h-full" />
      </figure>
      <div className="card-body line  py-5 px-0 pl-2 md:pl-5 xl:px-10">
        <h2 className="card-title">{serviceName}</h2>
        <div className="">
          <div className="flex gap-5">
            <p className="flex-grow-0">{serviceTakingDate}</p>
            <select className={` font-bold focus:outline-none ${status === "In progress" ? "text-blue-500" : "text-green-500"} ${status === "pending" && "text-yellow-500"}`} onChange={handleStatusChange} name="status" defaultValue={status} >
              <option className="font-bold text-yellow-500" value="pending">pending</option>
              <option className="font-bold text-blue-500" value="In progress">In Progress</option>
              <option className="font-bold text-green-500" value="Completed">Completed</option>
            </select>
          </div>

          <div>
            <p>client: {userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingWorkRow;
