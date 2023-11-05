import { useEffect, useState } from "react";
import SectionHeading from "../../../shared/SectionHeading";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";
import useAxios from "../../../../Hooks/useAxios";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([])
  const axiosInstance = useAxios()

  useEffect(()=> {
    axiosInstance.get("/api/vi/services")
    .then(res => {
      setServices(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  },[])
  console.log(services)
  return (
    <div className="mb-10">
      <SectionHeading text="Popular services" />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
       {services?.slice(0,4).map(service =>  <PopularServiceCard key={service._id} service={service} />)}
      </div>
      <div className="flex justify-center mt-10">
       <Link to="/services">
       <Button text="All services"/>
       </Link>
      </div>
    </div>
  );
};

export default PopularServices;
