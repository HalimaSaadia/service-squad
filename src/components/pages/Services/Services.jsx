import { useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";
import SectionHeading from "../../shared/SectionHeading";
import Button from "../../shared/Button";
import { FadeLoader } from "react-spinners";

const Services = () => {
  const [services, setServices] = useState([]);
  const [displayServices, setDisplayServices] = useState(services)
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true)
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get(`/api/vi/services`)
      .then((res) => {
        setServices(res.data);
        setDisplayServices(res.data)
        setLoading(false)
        
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("services",services)
  const handleSearch = e => {
    e.preventDefault()
    setLoading(true)
    const search = e.target.search.value;
    axiosInstance
    .get(`/api/vi/services?name=${search}`)
    .then(res => {
        setDisplayServices(res.data)
        setLoading(false)
        console.log(res.data.length)
        if(res.data.length < 6){
          setShowAll(true)
        }else{
          setShowAll(false)
        }
    })
     .catch((err) => {
        console.log(err.message);
      });
 
    // const searchResult = services.filter(service => service.serviceName.toLowerCase().includes(search.toLowerCase()))
   
    // setDisplayServices(searchResult)
  }


console.log(displayServices)


  return (
   
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
      {loading ? <FadeLoader loading={true} size={150} color="#3F51B5" aria-label="Loading Spinner" data-testid="loader" /> :
        <div className="grid gap-10">
        {showAll
          ? displayServices.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))
          : displayServices
              ?.slice(0,6)
              .map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
      </div>
      }
      {services.length  > 6 && !loading && (
        <div className={`flex justify-center my-10 ${showAll ? "hidden" : "block"}`}>
          <div onClick={()=> setShowAll(true)}>
            <Button text="Show All" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
