// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css"

import Slider from "react-slick";
import SectionHeading from "../../../shared/SectionHeading";

var settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 1,
  responsive: [
   
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Reviews = () => {
  return (
    <div className="p-0">
     <SectionHeading text="Happy Client" />
      <Slider {...settings}>
        <div className="borderStyle border-t-0 border-b-0 border h-64">
          <div className=" flex justify-center mt-10 ">
            <div className="avatar  ">
              <div className="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
                <img src="https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Emily Johnson</h1>

            <p className="text-sm font-normal">
              I absolutely love this service! The quality is top-notch, and the
              customer service is outstanding.
            </p>
          </div>
        </div>
        <div className="borderStyle border-t-0 border-b-0 border h-64  grid justify-center items-center  ">
          <div className=" flex justify-center mt-10">
            <div className="avatar  ">
              <div className="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Michael Smith</h1>

            <p className="text-sm font-normal">
              This service has exceeded my expectations in every way. It's very
              easy to use, and I've already recommended it to several friends.
            </p>
          </div>
        </div>
        <div className="borderStyle border-t-0 border-b-0 border h-64  grid justify-center items-center  ">
          <div className=" flex justify-center mt-10">
            <div className="avatar  ">
              <div className="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
                <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Sophia Davis</h1>

            <p className="text-sm font-normal">
              I'm so happy I found this service! It's made a huge difference in
              my life, and I can't imagine being without it now.
            </p>
          </div>
        </div>
        <div className="borderStyle border-t-0 border-b-0 border h-64  grid justify-center items-center  ">
          <div className=" flex justify-center mt-10">
            <div className="avatar  ">
              <div className="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Olivia Wilson</h1>

            <p className="text-sm font-normal">
            The quality of this service is incredible! I've tried similar
                  services before, but this one is by far the best
            </p>
          </div>
        </div>
        <div className="borderStyle border-t-0 border-b-0 border h-64  grid justify-center items-center  ">
          <div className=" flex justify-center mt-10">
            <div className="avatar  ">
              <div className="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src="https://plus.unsplash.com/premium_photo-1669882305300-38b609862bee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">James Brown</h1>

            <p className="text-sm font-normal">
            The quality of this service is incredible! I've tried similar
                  services before, but this one is by far the best.
            </p>
          </div>
        </div>
        <div className="borderStyle border-t-0 border-b-0 border h-64  grid justify-center items-center  ">
          <div className=" flex justify-center mt-10">
            <div className="avatar  ">
              <div className="w-20 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">Ava Smith</h1>

            <p className="text-sm font-normal">
            I was skeptical at first, but this service has truly exceeded
                  my expectations. I'm so glad I decided to give it a try!
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Reviews;
