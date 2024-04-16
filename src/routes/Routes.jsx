

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";
import Estates from "../pages/Estates";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../components/Login";
import Register from "../components/Register";
import EstatesDetails from "../pages/EstatesDetails";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([

{

    path:'/',
    element:<Root></Root>,
    children:[
        {

            path:'/',
            element:<Home></Home>
        },
        {

            path:'/estates',
            element:<Estates></Estates>
        },  {

            path:'/contact',
            element:<Contact></Contact>
        },
        {

            path:'/about',
            element:<ProtectedRoute>
                <About></About>
            </ProtectedRoute>
        },
        {

            path:'/register',
            element:<Register></Register>
        },
        {

            path:'/login',
            element:<Login></Login>
        },
        {

            path:'/estatedetails',
            element:<ProtectedRoute>
                 <EstatesDetails></EstatesDetails>
            </ProtectedRoute>
           
        }
    ]
}

]);
export default router;