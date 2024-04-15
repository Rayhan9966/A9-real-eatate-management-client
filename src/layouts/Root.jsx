
import {NavLink, Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/home/Home";
import Navber from "../components/Navber";

const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet><br /><br /><br />
            <Footer></Footer>
        </div>
    );
};

export default Root;