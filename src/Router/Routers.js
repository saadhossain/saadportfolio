import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../Components/Blogs/BlogDetails";
import AllProjects from "../Components/HomeComponants/Projects/AllProjects";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
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
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/blogs/:id',
                loader: ({ params }) => fetch(`https://dealogic.vercel.app/blogs/${params.id}`),
                element: <BlogDetails></BlogDetails>
            },
            {
                path:'/projects',
                element: <AllProjects></AllProjects>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])