import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import ServiceCard from "./ServiceCard";
import SectionHeading from "../../shared/SectionHeading";
import Button from "../../shared/Button";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/api/vi/services")
      .then((res) => {
        setServices(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <SectionHeading text="All Services" />
      <div className="grid gap-10">
        {showAll
          ? services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))
          : services
              ?.slice(0, 6)
              .map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
      </div>
      {services.length && (
        <div className={`flex justify-center my-10 ${showAll ? "hidden" : ""}`}>
          <div onClick={() => setShowAll(!showAll)}>
            <Button text="Show All" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
