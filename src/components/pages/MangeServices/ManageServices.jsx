import { useContext, useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import ManageServiceCard from "./ManageServiceCard";
import SectionHeading from "../../shared/SectionHeading";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/user-services?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setServices(res.data);
      });
  }, [services]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid justify-center my-10">
        <div className="avatar mx-auto">
          <div className="w-24 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
       
       <div className="flex flex-col justify-center ">
       <h1 className="card-title text-2xl mx-auto  md:text-4xl">{user?.displayName}</h1>
       <h1 className="card-title text-2xl mx-auto  md:text-4xl textPrimary">MANAGE YOUR SERVICES</h1>
       </div>
       
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <ManageServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
