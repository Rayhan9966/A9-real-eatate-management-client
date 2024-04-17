
import {NavLink, Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
import Navber from "../components/Navber";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="min-h-[calc(100vh-1640px)]">
            <Outlet></Outlet>
            </div>
           <div className="mb-2"><Footer></Footer></div> 
        </div>
    );
};

export default Root;