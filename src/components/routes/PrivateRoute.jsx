import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { FadeLoader } from "react-spinners";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    

   
        if(loading){
            return <div className="flex justify-center">
                <FadeLoader loading={true} size={150} color="#3F51B5" aria-label="Loading Spinner" data-testid="loader" />
            </div>
       }else{
        if(user){
            return children
        }
        return <Navigate to="/login" state={location.pathname}  />
       }
};

export default PrivateRoute;