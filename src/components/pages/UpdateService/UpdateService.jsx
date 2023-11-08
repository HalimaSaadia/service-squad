import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { dynamicTitle } from "../../../utils/dynamicTitle";

const UpdateService = () => {
  dynamicTitle("update service - ServiceSquad")
  const { data: loadedService } = useLoaderData();
  const {
    _id,
    servicePhoto,
    serviceName,
    serviceArea,
    providerPhoto,
    providerName,
    price,
    description,
  } = loadedService;

  const { user } = useContext(AuthContext);
  const [photoURL, setPhotoURL] = useState(servicePhoto)
  const axiosInstance = useAxios();
  const navigate = useNavigate()

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const newServicePhoto = form.servicePhoto.value;
    const newServiceName = form.serviceName.value;
    const newEmail = user?.email;
    const newPrice = form.price.value;
    const newServiceArea = form.serviceArea.value;
    const newDescription = form.description.value;
  

    const newService = {
      servicePhoto:newServicePhoto ,
      serviceName: newServiceName,
      providerName: providerName,
      providerPhoto:providerPhoto,
      email:newEmail ,
      price: newPrice,
      serviceArea: newServiceArea,
      description:newDescription,
    };
    console.log(newService)
    const toastId = toast.loading("Loading...");
    axiosInstance
      .put(`/api/vi/update-service/${_id}`, newService)
      .then((res) => {
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
        // navigate(`/service-details/${_id}`)
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops",
          text: error.message,
        });
        toast.remove(toastId)
      });

    
  };
  return (
    <div className="py-10 max-w-6xl mx-auto ">
      <div className="card lg:card-side  borderStyle border-4 bg-base-100 rounded-none  lg:h-[550px]">
        <figure className="lg:flex-1 relative">
          <img
            src={photoURL}
            className="object-cover h-full w-full"
            alt="Album"
          />
          {/* <div className="absolute top-1/3">
              
            </div> */}
        </figure>
        <div
          style={{ backgroundImage: "url('https://svgshare.com/i/zHf.svg')" }}
          className="card-body p-0 lg:flex-1 bg-no-repeat bg-cover"
        >
          <div className="bg-[#1E293BEE] h-full w-full ">
            <div className=" h-full p-0 flex flex-col justify-center items-center">
              {/* <SectionHeading text="Add Service" /> */}
              <div className="card flex-shrink-0 md:w-[500px] ">
                <form className="card-body" onSubmit={handleUpdateService}>
                  <div className="form-control">
                    <input
                      type="url"
                      placeholder="Photo URL"
                      defaultValue={servicePhoto}
                      name="servicePhoto"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      onChange={(e) => setPhotoURL(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Enter Your Service Name"
                      defaultValue={serviceName}
                      name="serviceName"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="providerName"
                      placeholder="provider Name"
                      defaultValue={providerName}
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none "
                      required
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      defaultValue={providerPhoto}
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none "
                      required
                      readOnly
                    />
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      placeholder="Price"
                      defaultValue={price}
                      name="price"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      placeholder="service area"
                      defaultValue={serviceArea}
                      name="serviceArea"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      placeholder="Description"
                      defaultValue={description}
                      name="description"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <Button text="Update Service" />
                  </div>
                </form>
                <div className="flex justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
