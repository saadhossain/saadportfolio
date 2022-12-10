import React from 'react';
import './Projects.css';
import {FaGithub, FaGlobe} from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='w-11/12 mx-auto my-5 lg:my-20'>
            <h1 className='text-5xl text-accent mb-5'>Projects I have Build_</h1>
            {/* Project One - Dealogic*/}
            <div className='lg:flex items-center justify-center mb-20'>
                <div className='project dealogic w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='text-start lg:text-end w-full lg:w-2/4'>
                    <h2 className='text-4xl'>Dealogic</h2>
                    <h4 className='my-5 text-lg font-semibold'>
                        Dealogic is a Computer Accessories Resale Market website.
                    </h4>
                    <div className='p-3 rounded-lg z-10 lg:-ml-20 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl'>Features_</h4>
                        <ul>
                            <li>Seller Can post Products to Sell, Delete Product and Promote Added product</li>
                            <li>Buyer Can Purchase any Product, cancel Order and make payment with Stripe</li>
                            <li>Admin Can manage, Users, Products, Product Status, Add product, publish blog</li>
                        </ul>
                    </div>
                    {/* Technology Used */}
                    <div className='flex justify-end gap-5 items-center mt-5'>
                        <p>
                            TAILWIND CSS | REACT | Firebase | Stripe <br /> MongoDB | Node.js | Express.js | JWT
                        </p>
                        <div className='flex gap-3'>
                            <a href='https://github.com/saadhossain/dealogic'><FaGithub className='w-6 h-6'></FaGithub></a>
                            <a href="https://dealogic-msh.web.app/"><FaGlobe className='w-6 h-6'></FaGlobe></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Two - Laura Jane */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center mb-20'>
                <div className='text-start w-full lg:w-2/4 z-10'>
                    <h2 className='text-4xl'>Laura Jane</h2>
                    <h4 className='my-5 text-lg font-semibold'>
                        Lawyer/Law Service Provider Website
                    </h4>
                    <div className='p-3 rounded-lg lg:-mr-10 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl'>Features_</h4>
                        <ul>
                            <li>Client Can See Services and Filter Services per page</li>
                            <li>The client can see Service details and all of the ratings left by the customer and the client can leave feedback/ratings and can add new services by login to the site</li>
                        </ul>
                    </div>
                    {/* Technology Used */}
                    <div className='flex justify-start gap-5 items-center mt-5'>
                        <p>
                            TAILWIND CSS | REACT | Firebase <br /> MongoDB | Node.js | Express.js | JWT
                        </p>
                        <div className='flex gap-3'>
                            <a href='https://github.com/saadhossain/laura-jane'><FaGithub className='w-6 h-6'></FaGithub></a>
                            <a href="http://laura-jane.web.app/"><FaGlobe className='w-6 h-6'></FaGlobe></a>
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
                    <h2 className='text-4xl'>CareerEdu</h2>
                    <h4 className='my-5 text-lg font-semibold'>
                        Professional/Skills Course Selling Website
                    </h4>
                    <div className='p-3 rounded-lg z-10 lg:-ml-20 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl'>Features_</h4>
                        <ul>
                            <li>Student can see course details(Price, Rating, Benefits)</li>
                            <li>Student Can Download the course preview as a PDF</li>
                            <li>When Click on Premium Access Students can enroll to a Course</li>
                        </ul>
                    </div>
                    {/* Technology Used */}
                    <div className='flex justify-end gap-5 items-center mt-5'>
                        <p>
                            TAILWIND CSS | REACT | Firebase <br /> MongoDB | Node.js | Express.js
                        </p>
                        <div className='flex gap-3'>
                            <a href='https://github.com/saadhossain/career-edu'><FaGithub className='w-6 h-6'></FaGithub></a>
                            <a href="https://careeredu-f5f83.web.app/"><FaGlobe className='w-6 h-6'></FaGlobe></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;