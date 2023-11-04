import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Root from "../layout/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path:"/register",
        element: <Register />
    }
])
export default router