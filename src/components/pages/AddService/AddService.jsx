import { Link } from "react-router-dom";
import Button from "../../shared/Button";
import SectionHeading from "../../shared/SectionHeading";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxios from "../../../Hooks/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { dynamicTitle } from "../../../utils/dynamicTitle";

const AddService = () => {
  dynamicTitle("add service - ServiceSquad");
  const { user } = useContext(AuthContext);

  const [photoURL, setPhotoURL] = useState(
    "https://media.istockphoto.com/id/673723668/photo/handsome-auto-service-workers.webp?b=1&s=170667a&w=0&k=20&c=kQ5lo8bZZd0eyGy__W_5m6yKzU1XzXhjXGJqfBeYC8w="
  );

  const axiosInstance = useAxios();

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const servicePhoto = e.target.servicePhoto.value;
    const serviceName = e.target.serviceName.value;
    const providerName = e.target.providerName.value;
    const email = e.target.email.value;
    const price = e.target.price.value;
    const serviceArea = e.target.serviceArea.value;
    const description = e.target.description.value;
    const providerPhoto = user?.photoURL;
    const service = {
      servicePhoto,
      serviceName,
      providerName,
      providerPhoto,
      email,
      price,
      serviceArea,
      description,
    };
    const toastId = toast.loading("Loading...");
    axiosInstance
      .post("/api/vi/add-service", service)
      .then((res) => {
        const result = res.data;
        Swal.fire({
          icon: "success",
          title: "Successfully added Service",
        });
        toast.remove(toastId);
        setPhotoURL(
          "https://media.istockphoto.com/id/673723668/photo/handsome-auto-service-workers.webp?b=1&s=170667a&w=0&k=20&c=kQ5lo8bZZd0eyGy__W_5m6yKzU1XzXhjXGJqfBeYC8w="
        );
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops",
          text: error.message,
        });
      });

    form.reset();
  };
  return (
    <div className="py-10 max-w-7xl mx-auto px-5 md:px-10 xl:px-0">
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
                <form className="card-body" onSubmit={handleAddService}>
                  <div className="form-control">
                    <input
                      type="url"
                      placeholder="Photo URL"
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
                      defaultValue={user?.displayName}
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
                      defaultValue={user?.email}
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none "
                      required
                      readOnly
                    />
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      placeholder="service area"
                      name="serviceArea"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>
                  <div className="form-control relative">
                    <input
                      type="text"
                      placeholder="Description"
                      name="description"
                      className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control mt-6">
                    <Button text="Add Service" />
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

export default AddService;
