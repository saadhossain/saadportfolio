import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const CareerEdu = () => {
    return (
        <div className='w-10/12 lg:w-lg mx-auto mt-32'>
            {/* Name and Short Description */}
            <h2 className='text-4xl text-secondary font-semibold font-bigshoulder hover:text-primary'>CareerEdu</h2>
            <h4 className='my-5 text-lg font-chivo'>
                Professional/Skills Course Selling Website
            </h4>
            {/* Project Screenshots */}
            <div className='flex gap-5'>
                <div className='project-detailed career w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='project-detailed career-courses w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='project-detailed career-blogs w-full lg:w-2/4  rounded-lg'>
                </div>
            </div>
            {/* Project Details */}
            <div className='w-full my-10'>
                <div className='p-3 rounded-lg bg-[#081a3b]'>
                    <h4 className='text-primary text-2xl font-bigshoulder'>Features<span className='text-secondary font-chivo'>_</span></h4>
                    <ul className='font-chivo project-feature text-white flex flex-col gap-2'>
                        <li>
                            Student Can View All The Courses and their featues.
                        </li>
                        <li>
                            Student Can View All Courses From Course Menu and they can <span className='text-primary'>filter</span> courses according to their cooice.
                        </li>
                        <li>
                            Student Can Purchase a Specific course by Clicking on the <span className='text-primary'>Enroll</span> button.
                        </li>
                        <li>
                            Student Can Download a Course Preview as PDF by Clicking <span className='text-primary'>Download PDF</span> button.
                        </li>
                        <li>
                            Student Can Get Premium Access of the Course, for this They have to <span className='text-primary'>login/Register</span> to the site.
                        </li>
                        <li>
                            Student Can Register to the Site using Email and Password, also they have option to login using <span className='text-primary'>Google</span> and <span className='text-primary'>GitHub</span>.
                        </li>
                        <li>
                            Student Can Request for <span className='text-primary'>Password Reset</span>,if they Forgot the Password.
                        </li>
                        <li>
                            Student can switch the site to <span className='text-primary'>Dark Mode</span> and Light Mode they Want...
                        </li>
                    </ul>
                </div>
                {/* Technology Used */}
                <h4 className='text-primary text-2xl font-bigshoulder mt-5'>Technology Used<span className='text-secondary font-mono'>_</span></h4>
                <div className='flex gap-5 items-center mt-2 font-chivo'>
                    <p>
                        TAILWIND CSS | REACT | Firebase <br /> MongoDB | Node.js | Express.js
                    </p>
                    <div className='flex gap-3'>
                        <a href='https://github.com/saadhossain/career-edu'><FaGithub className='w-6 h-6 hover:text-primary'></FaGithub></a>
                        <a href="https://careeredu-f5f83.web.app/"><FaGlobe className='w-6 h-6 hover:text-primary'></FaGlobe></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerEdu;