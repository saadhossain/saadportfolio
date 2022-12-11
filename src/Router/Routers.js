import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dealogic from "../Pages/Projects/Dealogic/Dealogic";

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
            ,{
                path: '/project/dealogic',
                element:<Dealogic></Dealogic>
            }
        ]
    }
])