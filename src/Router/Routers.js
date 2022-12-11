import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CareerEdu from "../Pages/Projects/CareerEdu/CareerEdu";
import Dealogic from "../Pages/Projects/Dealogic/Dealogic";
import LauraJane from "../Pages/Projects/LauraJane/LauraJane";

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
            },
            {
                path: '/project/laurajane',
                element: <LauraJane></LauraJane>
            },
            {
                path: '/project/career',
                element: <CareerEdu></CareerEdu>
            }
        ]
    }
])