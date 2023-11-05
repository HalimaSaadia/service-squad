import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/AddService/AddService";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                path: "/add-service",
                element: <AddService />
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