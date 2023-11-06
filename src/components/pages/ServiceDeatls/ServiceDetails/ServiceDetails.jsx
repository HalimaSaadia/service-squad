import React, { useEffect, useState } from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../../shared/SectionHeading";
import useAxios from "../../../../Hooks/useAxios";
import ServiceCard from "../../../shared/ServiceCard/ServiceCard";
import UserServiceCard from "../userServiceCard/UserServiceCard";

const ServiceDetails = () => {
  const { data: loadedData } = useLoaderData();
  const [providerServices, setProviderServices] = useState([]);

  const axiosInstance = useAxios();
  console.log(loadedData);

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
  }, [providerServices]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <SectionHeading text={`${loadedData.serviceName}`} />
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
