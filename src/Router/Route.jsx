import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Contact from "../pages/Contact/Contact";
import Teams from "../pages/Teams/Teams";

const router = createBrowserRouter([{
    path:"/",
    element:<MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:"/",
            element:<Home></Home>

        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path: "/service/:id",
            element:<PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter> ,
            loader: () => fetch('/services.json')

        },
        {
            path:"/contact",
            element:<PrivateRouter><Contact></Contact></PrivateRouter>
        },
        {
            path: "/about",
            element:<PrivateRouter><Teams></Teams></PrivateRouter>,
            loader: () => fetch("teams.json")
        }
    ]
}])

export default router;