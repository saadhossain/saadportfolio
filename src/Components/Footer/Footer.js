import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='text-white font-chivo text-center'>
            <hr />
            <div className='lg:flex items-center justify-center gap-5'>
            <p className='py-2'>&copy;2023 All Rights Reserved | Saad Hossain</p>
            <div className='flex gap-2 justify-center pb-2'>
                <a href="https://github.com/saadhossain"><AiFillGithub className='w-6 h-6'></AiFillGithub></a>
                <a href="https://www.linkedin.com/in/mshsarkar/"><AiFillLinkedin className='w-6 h-6'></AiFillLinkedin></a>
            </div>
            </div>
        </div>
    );
};

export default Footer;