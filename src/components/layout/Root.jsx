import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import ProgressBar from "react-scroll-progress-bar"


import "./root.css"

const Root = () => {

  return (
    <div>
      <Navbar />
      <div className="min-h-[500px]">
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
      <ProgressBar bgcolor="#3F51B5" />
     
    </div>
  );
};

export default Root;
