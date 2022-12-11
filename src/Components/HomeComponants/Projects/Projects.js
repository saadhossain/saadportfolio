import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
    return (
        <div className='w-full lg:w-11/12 mx-auto my-5 lg:my-20 text-white' id='projects'>
            <h1 className='text-3xl lg:text-5xl font-semibold text-secondary mb-4 lg:mb-8 font-bigshoulder'>Projects I have Build<span className='text-primary font-mono'>_</span></h1>
            {/* Project One - Dealogic*/}
            <div className='lg:flex items-center justify-center mb-5 lg:mb-20'>
                <div className='project dealogic w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='text-start lg:text-end w-full lg:w-2/4'>
                    <Link to='/project/dealogic'><h2 className='text-2xl lg:text-4xl text-secondary font-semibold font-bigshoulder hover:text-primary mt-2'>Dealogic</h2></Link>
                    <h4 className='my-2 lg:my-5 text-md lg:text-lg font-chivo'>
                        Computer Accessories Resale Market website.
                    </h4>
                    <div className='p-3 rounded-lg z-10 lg:-ml-20 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl font-bigshoulder'>Technology<span className='text-secondary font-mono'>_</span></h4>
                        <div className='lg:flex justify-end gap-5 items-center font-chivo'>
                            <p>
                                TAILWIND CSS | REACT | Firebase | Stripe <br /> MongoDB | Node.js | Express.js | JWT
                            </p>
                            <Link to='/project/dealogic'>
                                <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Details</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            {/* Project Two - Laura Jane */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center mb-5 lg:mb-20'>
                <div className='text-start w-full lg:w-2/4 z-10'>
                    <Link to='/project/laurajane'>
                        <h2 className='text-2xl lg:text-4xl font-semibold text-secondary font-bigshoulder hover:text-primary mt-2'>Laura Jane</h2>
                    </Link>
                    <h4 className='my-2 lg:my-5 text-md lg:text-lg font-semibold font-chivo'>
                        Lawyer/Law Service Provider Website
                    </h4>
                    {/* Technology Used */}
                    <div className='p-3 rounded-lg lg:-mr-10 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl font-bigshoulder'>Technology<span className='text-secondary font-mono'>_</span></h4>
                        <div className='lg:flex justify-start gap-5 items-center font-chivo'>
                            <p>
                                TAILWIND CSS | REACT | Firebase <br /> MongoDB | Node.js | Express.js | JWT
                            </p>
                            <Link to='/project/laurajane'>
                                <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='project laura w-full lg:w-2/4 rounded-lg'>
                </div>
            </div>
            {/* Project Three - Career Edu*/}
            <div className='lg:flex items-center justify-center'>
                <div className='project career w-full lg:w-2/4 rounded-lg'>
                </div>
                <div className='text-end w-full lg:w-2/4'>
                    <Link to='/project/career'>
                        <h2 className='text-2xl lg:text-4xl font-semibold text-secondary font-bigshoulder mt-2'>CareerEdu</h2>
                    </Link>
                    <h4 className='my-2 lg:my-5 text-md lg:text-lg font-semibold font-chivo'>
                        Professional/Skills Course Selling Website
                    </h4>
                    <div className='p-3 rounded-lg z-10 lg:-ml-20 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl font-bigshoulder'>Technology<span className='text-secondary font-mono'>_</span></h4>
                        <div className='lg:flex justify-end gap-5 items-center font-chivo'>
                            <p>
                                TAILWIND CSS | REACT | Firebase <br /> MongoDB | Node.js | Express.js
                            </p>
                            <Link to='/project/career'>
                                <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;