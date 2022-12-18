import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const ProjectsLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='w-10/12 lg:w-lg mx-auto my-28'>
                <div className='text-white font-chivo'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-secondary mb-4 lg:mb-8 font-bigshoulder'>All Projects<span className='text-primary font-mono'>_</span></h1>
                    <h4>I have build almost 70+ Functional Website with HTML, CSS, React and WordPress.</h4>
                    <h4>Here are some of them</h4>
                </div>
                <ul className='flex justify-center gap-4 bg-[#081A3B] py-4 font-chivo font-semibold mt-5'>
                    <li><Link>All Projects</Link></li>
                    <li><Link>React</Link></li>
                    <li><Link>HTML/CSS</Link></li>
                    <li><Link>WordPress</Link></li>
                </ul>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectsLayout;