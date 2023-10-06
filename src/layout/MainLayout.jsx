import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="font-poppins">
            <h2>Main layout</h2>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;