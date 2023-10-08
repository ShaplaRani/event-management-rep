import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Contact from "../pages/Contact/Contact";

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
            element:<Contact></Contact>
        }
    ]
}])

export default router;