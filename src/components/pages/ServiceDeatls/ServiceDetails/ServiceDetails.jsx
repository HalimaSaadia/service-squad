import React, { useContext, useEffect, useState } from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import { useLoaderData, useParams } from "react-router-dom";
import SectionHeading from "../../../shared/SectionHeading";
import useAxios from "../../../../Hooks/useAxios";
import ServiceCard from "../../../shared/ServiceCard/ServiceCard";
import UserServiceCard from "../userServiceCard/UserServiceCard";
import { AuthContext } from "../../../Provider/AuthProvider";
import { dynamicTitle } from "../../../../utils/dynamicTitle";

const ServiceDetails = () => {
  dynamicTitle("details - ServiceSquad")
  const [providerServices, setProviderServices] = useState([]);
  const [loadedData, setLoadedData] = useState({})
  const {user} = useContext(AuthContext)
  const {id} = useParams()


  const axiosInstance = useAxios();
  console.log({loggedInUser:user.email});
  const loggedInUser =  user.email


  useEffect(() => {
    axiosInstance
      .post(`/api/v1/service/${id}?email=${loggedInUser}`)
      .then((res) => {
        setLoadedData(res.data)
      console.log(res.data)
      })
      .catch((err) => console.log(err.message));
  }, [id, loadedData]);

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/user-services?email=${loadedData.email}`)
      .then((res) => {
        const result = res.data;
        const remainingServices = result.filter(
          (service) => service._id !== loadedData._id
        );
        setProviderServices(remainingServices);
      })
      .catch((err) => console.log(err.message));
  }, [id, loadedData]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <SectionHeading text={`${loadedData?.serviceName || "" }`} />
        <DetailsCard service={loadedData} />
      </div>

      <div className="mb-10">
        {providerServices.length 
        ? 
        <div>
        <SectionHeading text={`${loadedData.providerName}'s Services`} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {providerServices?.map((service) => (
            <UserServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
        : ""}
     
      </div>
    </div>
  );
};

export default ServiceDetails;
