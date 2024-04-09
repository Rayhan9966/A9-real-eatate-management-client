

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Root from "../layouts/Root";

const router = createBrowserRouter([

{

    path:'/',
    element:<Root></Root>,
    children:[
        {

            path:'/',
            element:<Home></Home>
        }
    ]
}

]);
export default router;