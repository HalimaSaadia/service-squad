import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[500px]">
            <Outlet />
            </div>
            
           <Footer />
        </div>
    );
};

export default Root;