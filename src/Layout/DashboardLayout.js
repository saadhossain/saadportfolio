import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import { AuthContext } from '../Context/AuthProvider';

const DashboardLayout = () => {
    const {logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success('You are logged Out...')
        })
    }
    return (
        <div>
            <Header></Header>
            <div className='w-10/12 lg:w-lg mx-auto flex my-28'>
                <ul>
                    <li>Statistics</li>
                    <li>Add Project</li>
                    <li>Add Blog</li>
                    <li ><button onClick={handleLogOut}>Logout</button></li>
                </ul>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;