import SectionHeading from "../../../shared/SectionHeading";
import PopularServiceCard from "../PopularServiceCard/PopularServiceCard";

const PopularServices = () => {
  return (
    <div className="border">
      <SectionHeading text="Popular services" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <PopularServiceCard />
      </div>
    </div>
  );
};

export default PopularServices;
