import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDeatls/ServiceDetails/ServiceDetails";
import axios from "axios";
import useAxios from "../../Hooks/useAxios";
import ManageServices from "../pages/MangeServices/ManageServices";
import UpdateService from "../pages/UpdateService/UpdateService";
import Schedule from "../pages/Schedule/Schedule/Schedule";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/service-details/:id",
                element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
                // loader:  ({params}) => axios.get(`http://localhost:5000/api/v1/service/${params.id}`, {withCredentials: true})
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: "/my-services",
                element: <PrivateRoute><ManageServices /></PrivateRoute>,
            },
            {
                path: "/my-schedules",
                element:<PrivateRoute> <Schedule /></PrivateRoute>
            },
            {
                path: "/update-service/:id",
                element: <UpdateService />,
                loader: ({params}) => axios.get(`http://localhost:5000/api/v1/service/${params.id}`, {withCredentials: true})
            },
           
            {
                path: "/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register />
            }
        ]
    }
    
])
export default router