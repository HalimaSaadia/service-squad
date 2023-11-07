import { useEffect, useState } from "react";
import SectionHeading from "../../../shared/SectionHeading";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";
import useAxios from "../../../../Hooks/useAxios";
import Button from "../../../shared/Button";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/api/vi/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [services]);

  return (
    <div className="mb-10">
      <SectionHeading text="Popular services" />
      {loading ? (
        <div className="w-full flex justify-center">
          {" "}
          <FadeLoader
            loading={true}
            size={150}
            color="#3F51B5"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {services?.slice(0, 4).map((service) => (
              <PopularServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/services">
              <Button text="All services" />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularServices;
