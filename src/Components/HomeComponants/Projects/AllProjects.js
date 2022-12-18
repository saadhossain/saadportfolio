import React from 'react';
import { Link } from 'react-router-dom';
import dealogic from '../../../assests/projects/dealogic-logo.png';

const AllProjects = () => {
    return (
        <div className='mt-5 grid grid-cols-3'>
            {/* Project 1 */}
            <div className='bg-[#0E1B33] p-5 rounded mr-5'>
                <div className='flex items-center justify-between font-chivo text-white'>
                    <img src={dealogic} alt='' />
                    <Link to='/project'>
                        <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Details</button>
                    </Link>
                </div>
                <div className='project dealogic w-full rounded-lg h-48'>
                </div>
            </div>
            {/* Project 2 */}
            <div className='bg-[#0E1B33] p-5 rounded mx-2'>
                <div className='flex items-center justify-between font-chivo text-white'>
                    <img src={dealogic} alt='' />
                    <Link to='/project'>
                        <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Details</button>
                    </Link>
                </div>
                <div className='project laura w-full rounded-lg h-48'>
                </div>
            </div>
            {/* Project 3 */}
            <div className='bg-[#0E1B33] p-5 rounded ml-5'>
                <div className='flex items-center justify-between font-chivo text-white'>
                    <img src={dealogic} alt='' />
                    <Link to='/project'>
                        <button className='py-1 px-5 rounded border-2 border-primary duration-500 ease-in-out hover:bg-primary'>Details</button>
                    </Link>
                </div>
                <div className='project career w-full rounded-lg h-48'>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;