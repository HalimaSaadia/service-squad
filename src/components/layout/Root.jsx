import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
import { motion, useScroll } from "framer-motion";
import "./root.css"

const Root = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
    
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <div className="min-h-[500px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
