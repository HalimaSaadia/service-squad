import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";
import SectionHeading from "../../shared/SectionHeading";
import Button from "../../shared/Button";

const Services = () => {
  const [services, setServices] = useState([]);
  const [displayServices, setDisplayServices] = useState([])
  const [showAll, setShowAll] = useState(false);
  const [searchedName, setSearchedName] = useState("")
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get(`/api/vi/services`)
      .then((res) => {
        setServices(res.data);
        setDisplayServices(res.data)
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("services",services)
  const handleSearch = e => {
    e.preventDefault()
    const search = e.target.search.value;
    axiosInstance
    .get(`/api/vi/services?name=${search}`)
    .then(res => {
        setDisplayServices(res.data)
    })
     .catch((err) => {
        console.log(err.message);
      });
 
    // const searchResult = services.filter(service => service.serviceName.toLowerCase().includes(search.toLowerCase()))
   
    // setDisplayServices(searchResult)
  }

  const handleShowAll = ()=> {
    setDisplayServices(services)
    setShowAll(true)
  }
console.log(displayServices)
  return (
    services.length && 
    <div className="max-w-7xl mx-auto mb-10">
      <SectionHeading text="All Services" />
      <div className="mb-5 ">
       <form onSubmit={handleSearch}>
       <div className="join border-2">
          <div>
            <div>
              <input
                className="input focus:outline-none join-item"
                placeholder="Search"
                name="search"
                type="text"
              />
            </div>
          </div>

          <div className="indicator ">
            <button type="submit" className="btn join-item">Search</button>
          </div>
        </div>
       </form>
      </div>
      <div className="grid gap-10">
        {showAll
          ? displayServices.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))
          : displayServices
              ?.slice(0, 6)
              .map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
      </div>
      {services.length  > 6 && (
        <div className={`flex justify-center my-10 ${showAll ? "none": "bock"}`}>
          <div>
            <Button text="Show All" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
