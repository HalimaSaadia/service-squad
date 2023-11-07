import {
  MapContainer,
  Marker,
  Popup,
  SVGOverlay,
  TileLayer,
} from "react-leaflet";
// import "./contact.css"
import "leaflet/dist/leaflet.css";
import Button from "../../../shared/Button";
import SectionHeading from "../../../shared/SectionHeading";

const Contact = () => {
  const position = [23.771, 90.3639];

  return (
   <div className="">
    <SectionHeading text="Stay With Us" />
     <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 gap-3 py-5 items-center md:-h-[500px] ">
      <div className=" h-[400px]">
        <h1 className="text-2xl md:text-4xl text-center md:text-start">Directions</h1>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-[300px] border -z-0 mt-5"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <p>123 Main Street Apartment 4B Shamoli, Dhaka 1207 Bangladesh</p>
      </div>
      <div className=" md:h-[400px] ">
        <h1 className="text-2xl md:text-4xl text-center md:text-start md:pl-10 ">Ask Your Query</h1>
        <form className="card-body md:h-[300px] px-0 md:px-10  flex-col justify-between py-0 mt-5">
          <div className="form-control">
            <input
              type="url"
              placeholder="Enter Your Name"
              name="servicePhoto"
              className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter Your Email"
              name="serviceName"
              className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <textarea
              type="text"
              name="Enter Your Message"
              placeholder="provider Name"
              className="bg-transparent input input-bordered text-white border-0 border-b-2 rounded-none borderStyle focus:outline-none "
              required
              readOnly
            />
          </div>

          <div className="form-control">
            <Button text="Submit" />
          </div>
        </form>
       
      </div>
    </div>
   </div>
  );
};

export default Contact;
