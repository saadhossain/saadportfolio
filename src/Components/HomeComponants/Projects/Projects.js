import React from 'react';
import './Projects.css';
import {FaGithub, FaGlobe} from 'react-icons/fa'

const Projects = () => {
    return (
        <div className='w-11/12 mx-auto my-5 lg:my-20 text-white' id='projects'>
            <h1 className='text-5xl font-semibold text-secondary mb-8 font-bigshoulder'>Projects I have Build<span className='text-primary font-mono'>_</span></h1>
            {/* Project One - Dealogic*/}
            <div className='lg:flex items-center justify-center mb-20'>
                <div className='project dealogic w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='text-start lg:text-end w-full lg:w-2/4'>
                    <h2 className='text-4xl text-secondary font-semibold font-bigshoulder'>Dealogic</h2>
                    <h4 className='my-5 text-lg font-chivo'>
                        Computer Accessories Resale Market website.
                    </h4>
                    <div className='p-3 rounded-lg z-10 lg:-ml-20 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl font-bigshoulder'>Features<span className='text-secondary font-mono'>_</span></h4>
                        <p>
                        Seller Can post Products to Sell, Delete Product and Promote Added product<br/>
                        Buyer Can Purchase any Product, cancel Order and make payment with Stripe<br/>
                        Admin Can manage, Users, Products, Product Status, Add product, publish blog
                        </p>
                    </div>
                    {/* Technology Used */}
                    <div className='flex justify-end gap-5 items-center mt-5 font-chivo'>
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
                    <h2 className='text-4xl font-semibold text-secondary font-bigshoulder'>Laura Jane</h2>
                    <h4 className='my-5 text-lg font-semibold font-chivo'>
                        Lawyer/Law Service Provider Website
                    </h4>
                    <div className='p-3 rounded-lg lg:-mr-10 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl font-bigshoulder'>Features<span className='text-secondary font-mono'>_</span></h4>
                        <p>
                        Client Can See Services and Filter Services per page<br/>
                        The client can see Service details and all of the ratings left by the customer and the client can leave feedback/ratings and can add new services by login to the site
                        </p>
                    </div>
                    {/* Technology Used */}
                    <div className='flex justify-start gap-5 items-center mt-5 font-chivo'>
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
                    <h2 className='text-4xl font-semibold text-secondary font-bigshoulder'>CareerEdu</h2>
                    <h4 className='my-5 text-lg font-semibold font-chivo'>
                        Professional/Skills Course Selling Website
                    </h4>
                    <div className='p-3 rounded-lg z-10 lg:-ml-20 bg-[#081a3b]'>
                        <h4 className='text-primary text-2xl font-bigshoulder'>Features<span className='text-secondary font-mono'>_</span></h4>
                        <p>
                        Student can see course details(Price, Rating, Benefits)<br/>
                        Student Can Download the course preview as a PDF<br/>
                        When Click on Premium Access Students can enroll to a Course
                        </p>
                    </div>
                    {/* Technology Used */}
                    <div className='flex justify-end gap-5 items-center mt-5 font-chivo'>
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