import { useContext } from "react";
import Button from "../../../shared/Button";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxios from "../../../../Hooks/useAxios";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ service }) => {
  const axiosInstance = useAxios()
  const navigate = useNavigate()
  const {
    _id,
    servicePhoto,
    serviceName,
    serviceArea,
    providerPhoto,
    providerName,
    price,
    email,
  } = service;
  const { user } = useContext(AuthContext);
  const userEmail = user?.email
  


  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const instruction = form.instruction.value;
    const serviceTakingDate = form.date.value;
    const toastId = toast.loading("loading...")

    const bookedService = {
      serviceName,
      servicePhoto,
      providerEmail:email,
      userEmail,
      serviceTakingDate,
      instruction,
      price,
    }

    axiosInstance.post("/api/v1/add-booking", bookedService)
    .then(res => {

      Swal.fire({
        icon: "success",
        title: "Booked Successfully"
      })
      navigate("/")
      toast.remove(toastId)
      
    })
    .catch(error => {
      console.log(error.message)
      toast.remove(toastId)
    })
    
    form.instruction.value= ""
    form.date.value=""
  };
  
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
   
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-0 rounded-none">
          <div
            style={{ backgroundImage: "url('https://svgshare.com/i/zHf.svg')" }}
            className="card-body p-0  bg-no-repeat bg-cover"
          >
            <div className="bg-[#1E293BEE] h-full w-full ">
              <div className=" h-full p-0 flex flex-col justify-center items-center ">
                {/* <SectionHeading text="Add Service" /> */}
                <div className="card flex-shrink-0 w-full rounded-none ">
                  <form method="dialog" className="card-body "  onSubmit={handleBookService}>
                    <div className="form-control">
                      <input
                        type="text"
                        defaultValue={serviceName}
                        name="serviceName"
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                        required
                        readOnly
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="url"
                        placeholder="Photo URL"
                        name="servicePhoto"
                        defaultValue={servicePhoto}
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-control">
                      <input
                        type="email"
                        name="providerEmail"
                        defaultValue={`Provider: ${email}`}
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none "
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-control">
                      <input
                        type="email"
                        name="userEmail"
                        defaultValue={`User: ${user?.email}`}
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none "
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-control">
                      <input
                        type="date"
                        name="date"
                        placeholder="Service Taking Date"
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                        required
                      />
                    </div>

                    <div className="form-control">
                      <textarea
                        type="text"
                        placeholder="Special Instruction (address , area, customized service plan or anything you want)"
                        name="instruction"
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none  h-24"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <input
                        type="text"
                        defaultValue={`Price: ${price}`}
                        name="price"
                        className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                        required
                        readOnly
                      />
                    </div>

                    <div className="form-control mt-6 btn bg-transparent border-none hover:bg-transparent">
                      <Button text="Confirm purchase" />
                    </div>
                  </form>
                  <div className="flex justify-center"></div>
                </div>
              </div>
            </div>
          </div>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white">
              ✕
            </button>
          </form>
        </div>
       
      </dialog>
    </>
  );
};

export default BookingForm;
