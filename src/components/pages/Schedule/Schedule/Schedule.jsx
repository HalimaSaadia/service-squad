import { dynamicTitle } from "../../../../utils/dynamicTitle";
import MyBookings from "../MyBookings/MyBookings";
import PendingWork from "../PendingWork/PendingWork";

const Schedule = () => {
  dynamicTitle("my schedule - ServiceSquad")
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <MyBookings />
        <PendingWork />
      </div>
    </div>
  );
};

export default Schedule;
