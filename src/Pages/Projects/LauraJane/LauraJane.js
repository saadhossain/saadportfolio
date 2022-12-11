import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const LauraJane = () => {
    return (
        <div className='w-10/12 lg:w-lg mx-auto mt-32'>
            {/* Name and Short Description */}
            <h2 className='text-4xl text-secondary font-semibold font-bigshoulder hover:text-primary'>Laura Jane</h2>
            <h4 className='my-5 text-lg font-chivo'>
                Lawyer/Law Service Provider Website
            </h4>
            {/* Project Screenshots */}
            <div className='flex gap-5'>
                <div className='project-detailed laura w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='project-detailed laura-service-details w-full lg:w-2/4  rounded-lg'>
                </div>
                <div className='project-detailed laura-blogs w-full lg:w-2/4  rounded-lg'>
                </div>
            </div>
            {/* Project Details */}
            <div className='w-full my-10'>
                <div className='p-3 rounded-lg bg-[#081a3b]'>
                    <h4 className='text-primary text-2xl font-bigshoulder'>Features<span className='text-secondary font-chivo'>_</span></h4>
                    <ul className='font-chivo project-feature text-white flex flex-col gap-2'>
                        <li>
                            User Can view all Services providing by the lawyer and all Reviews related to a specific service.
                        </li>
                        <li>
                            Customer Can leave <span className='text-primary'>feedback</span> on a service he purchased, for this he have to <span className='text-primary'>login/register</span> to the site.
                        </li>
                        <li>
                            Customer Can See his all Feedback posted by him, on his Dashboard.
                        </li>
                        <li>
                            Customer Can <span className='text-primary'>Delete</span> any Review/Feedback and If he want he can <span className='text-primary'>Edit/Modify</span> any Review from his dashboard.
                        </li>
                        <li>
                            Admin Can Add More Services from his Dashboard
                        </li>
                        <li>
                            Latest Added 3 Services will be shown on the Front Page, all Services can view by clicking <span className='text-primary'>Show All Services</span>
                        </li>
                        <li>
                            Admin Can see all the Services from his Dashboard and He can <span className='text-primary'>Edit</span> and <span className='text-primary'>Delte</span> any Service.
                        </li>
                    </ul>
                </div>
                {/* Technology Used */}
                <h4 className='text-primary text-2xl font-bigshoulder mt-5'>Technology Used<span className='text-secondary font-mono'>_</span></h4>
                <div className='flex gap-5 items-center mt-2 font-chivo'>
                    <p>
                        TAILWIND CSS | REACT | Firebase <br /> MongoDB | Node.js | Express.js | JWT
                    </p>
                    <div className='flex gap-3'>
                        <a href='https://github.com/saadhossain/laura-jane'><FaGithub className='w-6 h-6 hover:text-primary'></FaGithub></a>
                        <a href="https://laura-jane.web.app/"><FaGlobe className='w-6 h-6 hover:text-primary'></FaGlobe></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LauraJane;